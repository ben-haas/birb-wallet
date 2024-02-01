import { TezosToolkit } from '@taquito/taquito';
const tz = new TezosToolkit('https://mainnet.ecadinfra.com/');
import { type Signer } from '@taquito/taquito';

export class ReadOnlySigner implements Signer {
	constructor(
		private pkh: string,
		private pk: string
	) {}

	async publicKeyHash() {
		return this.pkh;
	}

	async publicKey() {
		return this.pk;
	}

	async secretKey(): Promise<string> {
		throw new Error('Secret key cannot be exposed');
	}

	async sign(): Promise<{
		bytes: string;
		sig: string;
		prefixSig: string;
		sbytes: string;
	}> {
		throw new Error('Cannot sign');
	}
}

export const estimateTransaction = (address: string, amount: number) => {
	tz.estimate
		.transfer({ to: address, amount: amount })
		.then((est) => {
			console.log(`burnFeeMutez : ${est.burnFeeMutez}, 
    gasLimit : ${est.gasLimit}, 
    minimalFeeMutez : ${est.minimalFeeMutez}, 
    storageLimit : ${est.storageLimit}, 
    suggestedFeeMutez : ${est.suggestedFeeMutez}, 
    totalCost : ${est.totalCost}, 
    usingBaseFeeMutez : ${est.usingBaseFeeMutez}`);
		})
		.catch((error) => console.table(`Error: ${JSON.stringify(error, null, 2)}`));
};
