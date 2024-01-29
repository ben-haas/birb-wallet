import { currentQuote } from '$lib/stores';

export interface WalletData {
	type: string;
	address: string;
	publicKey: string;
	revealed: boolean;
	alias: string | null;
	balance: number;
	delegate: {
		alias: string | null;
		address: string | null;
		active: boolean | null;
	};
	firstActivityTime: string | null;
	lastActivityTime: string | null;
}

export interface TxnData {
	type: string | null;
	level: number;
	timestamp: string;
	sender: {
		alias: string | null;
		address: string;
	};
	target: {
		alias: string | null;
		address: string;
	};
	amount: number;
	status: string;
	parameter: {
		entrypoint: string | null;
	} | null;
	hasInternals: boolean;
}

export interface Txns extends Array<TxnData> {}

export const getWalletData = async (address: string): Promise<WalletData> => {
	const url = 'https://api.tzkt.io/v1/accounts?';

	try {
		const res = await fetch(
			url +
				new URLSearchParams({
					address: address,
					select:
						'type,address,publicKey,revealed,alias,balance,delegate,firstActivityTime,lastActivityTime'
				})
		);

		if (!res.ok) {
			throw new Error('The TZKT API call returned an error response');
		}

		const data = await res.json();
		return data[0];
	} catch (error) {
		console.error('There was a problem fetching the wallet data:', error);
		throw error;
	}
};

export const getCounter = async (address: string): Promise<number> => {
	const url = `https://api.tzkt.io/v1/accounts/${address}/counter`;

	try {
		const res = await fetch(url);

		if (!res.ok) {
			throw new Error('The TZKT API call returned an error response');
		}

		const counter = await res.json();
		return counter;
	} catch (error) {
		console.error('There was a problem fetching the counter:', error);
		throw error;
	}
};

export const getTransactions = async (address: string): Promise<Txns> => {
	const url = 'https://api.tzkt.io/v1/operations/transactions?';

	try {
		const res = await fetch(
			url +
				new URLSearchParams({
					'anyof.sender.target': address,
					'sort.desc': 'id',
					limit: '10',
					'select.fields': 'type,level,timestamp,sender,target,amount,status,parameter,hasInternals'
				})
		);

		if (!res.ok) {
			throw new Error('The TZKT API call returned an error response');
		}

		const data = await res.json();
		return data;
	} catch (error) {
		console.error('There was a problem fetching the wallet transactions:', error);
		throw error;
	}
};

export const getQuote = async (): Promise<number> => {
	const url = 'https://api.tzkt.io/v1/statistics/current?';

	try {
		const res = await fetch(
			url +
				new URLSearchParams({
					quote: 'Usd',
					'select.fields': 'quote'
				})
		);

		if (!res.ok) {
			throw new Error('Error getting quote');
		}

		const data = await res.json();
		const q = data.usd.toFixed(2);
		currentQuote.set(q);
		return q;
	} catch (error) {
		console.error('There was an issue fetching Tezos quote: ', error);
		throw error;
	}
};
