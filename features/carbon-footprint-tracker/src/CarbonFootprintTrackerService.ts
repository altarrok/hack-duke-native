import { MerchantCategories, TransactionFootprint } from "./CarbonFootprintTrackerTypes";

const hostAddress = "http://192.168.0.102:8080/";

export const CarbonFootprintTrackerService = {
    * getSupportedMerchantCategories() {
        let fetchSuccesful = true;
        let merchantCategories: MerchantCategories = [];

        yield fetch(`${hostAddress}supported-mccs`)
            .then(res => {
                if (!res.ok) fetchSuccesful = false;
                return res;
            })
            .then(res => res.json())
            .then(
                (result) => {
                    if (!fetchSuccesful) throw Error(result.message);
                    merchantCategories = result["merchantCategories"] as MerchantCategories;
                },
                (err) => {
                    throw new Error('todo - err' + err);
                }
            );
        return merchantCategories;
    },

    * calculateTransactionFootprint(id: string, mcc: number, amount: number) {
        let fetchSuccesful = true;
        let transactionFootprint!: TransactionFootprint;

        yield fetch(`${hostAddress}transaction-footprints`, {
            method: 'POST',
            body: JSON.stringify(
                {
                    transactions: [
                        {
                            transactionId: id,
                            mcc,
                            amount: {
                                value: amount,
                                currencyCode: "USD"
                            }
                        }
                    ]
                }
            ),
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(res => {
            if (!res.ok) fetchSuccesful = false;
            return res;
        })
            .then(res => res.json())
            .then(
                (result) => {
                    if (!fetchSuccesful) throw Error(result.message);
                    transactionFootprint = result["transactionFootprints"][0] as TransactionFootprint;
                },
                (err) => {
                    throw new Error('todo - err');
                }
            );
        return transactionFootprint;
    }
}