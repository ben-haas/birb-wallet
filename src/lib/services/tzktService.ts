import { currentQuote } from '$lib/stores';
import { type WalletData, type TxnData } from '../../types/walletTypes';

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

		const data = await res.json();

		if (!res.ok || !data[0]) {
			throw new Error('The TZKT API call returned an error response');
		}

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
					'select.fields':
						'type,level,hash,timestamp,sender,target,amount,status,parameter,hasInternals'
				})
		);

		if (!res.ok) {
			throw new Error('The TZKT API call returned an error response');
		}

		const data = await res.json();
		const txns: Txns = [];

		data.forEach((txn: TxnData) => {
			const entrypoint = txn.parameter === null ? null : txn.parameter.entrypoint;
			const type = txn.sender.address === address ? 'send' : 'receive';

			const t = {
				type: type,
				level: txn.level,
				hash: txn.hash,
				timestamp: txn.timestamp,
				sender: {
					alias: (txn.sender.alias ??= null),
					address: txn.sender.address
				},
				target: {
					alias: (txn.target.alias ??= null),
					address: txn.target.address
				},
				amount: txn.amount,
				status: txn.status,
				parameter: {
					entrypoint: entrypoint
				},
				hasInternals: txn.hasInternals
			};

			txns.push(t);
		});

		return txns;
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
