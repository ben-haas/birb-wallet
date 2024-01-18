export interface WalletData {
	type: string;
	address: string;
	publicKey: string;
	revealed: boolean;
	alias: string;
	balance: number;
	delegate: {
		alias: string;
		address: string;
		active: boolean;
	};
	firstActivityTime: string;
	lastActivityTime: string;
}

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

export const getTransactions = async (address: string, offset: number): Promise<object> => {
	const url = 'https://api.tzkt.io/v1/operations/transactions?';

	try {
		const res = await fetch(
			url +
				new URLSearchParams({
					'anyof.sender.target': address,
					'sort.desc': 'id',
					offset: offset.toString()
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
