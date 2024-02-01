export interface Account {
	id: number;
	path: string;
	address: string;
}

export interface WalletData {
	type: string | null;
	address: string;
	publicKey: string | null;
	revealed: boolean;
	alias: string | null;
	balance: number;
	delegate: {
		alias?: string | null;
		address?: string | null;
		active?: boolean | null;
	} | null;
	firstActivityTime: string | null;
	lastActivityTime: string | null;
}

export interface TxnData {
	type: string | null;
	level: number;
	hash: string;
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
	};
	hasInternals: boolean;
}

export interface SigningData {
	path: string;
	branch: string;
	operation: {
		transaction: {
			source: string;
			destination: string;
			counter: number;
			amount: number;
			fee: number;
			gas_limit: number;
			storage_limit: number;
		};
	};
	chunkify: boolean;
}
