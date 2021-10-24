import { ISelector } from "../../../store/Plugin";
import { STORE_ALIAS as CarbonFootprintTrackerStoreAlias, ICarbonFootprintTrackerStoreState, defaultState, } from './CarbonFootprintTrackerTypes';

const getPluginState = (state: any) => ((state[CarbonFootprintTrackerStoreAlias] || defaultState) as ICarbonFootprintTrackerStoreState);

export const selectMerchantCategories = (state: any) => getPluginState(state).merchantCategories;
export const selectTransactionFootprints = (state: any) => getPluginState(state).transactionFootprints;
export const selectTransactionFootprintById = (state: any, id: string) => Object.values(selectTransactionFootprints(state)).filter(transactionFootprint => transactionFootprint.transactionId === id);
export const selectTransactions = (state: any) => getPluginState(state).transactions;

const CarbonFootprintTrackerSelectors: ISelector[] = [
    selectMerchantCategories,
    selectTransactionFootprints,
    selectTransactionFootprintById
];

export default CarbonFootprintTrackerSelectors;