import { selectMerchantCategories, selectTransactionFootprints } from '../CarbonFootprintTrackerSelectors';

export const getSelectors = (state: any) => {
    return {
        merchantCategories: selectMerchantCategories(state),
        transactionFootprints: selectTransactionFootprints(state),
    }
}