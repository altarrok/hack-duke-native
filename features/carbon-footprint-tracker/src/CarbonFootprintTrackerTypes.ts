export const STORE_ALIAS = "CarbonFootprintTracker";

export interface ICarbonFootprintTrackerUIState {
    merchantCategories: MerchantCategories,
    transactionFootprints: TransactionFootprintMap
}

export interface ICarbonFootprintTrackerStoreState {
    merchantCategories: MerchantCategories,
    transactionFootprints: TransactionFootprintMap,
    transactions: Transaction[]
}

export const defaultState: ICarbonFootprintTrackerStoreState = {
    merchantCategories: [],
    transactionFootprints: {},
    transactions: []
}

export type MerchantCategories = { mcc: number }[]

export interface TransactionFootprint {
    transactionId: string,
    carbonEmissionInGrams: number,
    carbonEmissionInOunces: number,
    carbonSocialCost: {
        value: number,
        currencyCode: string
    }
}

export interface TransactionFootprintMap { [transactionId: string]: TransactionFootprint }

export interface Transaction {
    id: string,
    amount: number,
    itemName: string,
}