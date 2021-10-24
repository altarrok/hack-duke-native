import { call, put, select } from '@redux-saga/core/effects';
import { Action } from '../../../store/ActionTools';
import { IActionList } from '../../../store/Plugin';
import { selectMerchantCategories } from './CarbonFootprintTrackerSelectors';
import { CarbonFootprintTrackerService } from './CarbonFootprintTrackerService';
import { ICarbonFootprintTrackerStoreState, MerchantCategories, STORE_ALIAS as CarbonFootprintTrackerStoreAlias, STORE_ALIAS, Transaction, TransactionFootprint } from './CarbonFootprintTrackerTypes';

export const fetchMerchantCategoriesAction = new Action<ICarbonFootprintTrackerStoreState>(STORE_ALIAS + ".FETCH_CATEGORIES")
    .addSaga(function* (action) {
        const merchantCategories: MerchantCategories = yield call(CarbonFootprintTrackerService.getSupportedMerchantCategories);
        yield put(successfulMerchantCategoriesAction.getReduxAction()({ merchantCategories }));
    });

export const successfulMerchantCategoriesAction = new Action<ICarbonFootprintTrackerStoreState,
    { merchantCategories: MerchantCategories }
>(STORE_ALIAS + ".FETCH_CATEGORIES_SUCCESSFUL")
    .addReducer((state, action) => ({ ...state, merchantCategories: action.payload.merchantCategories }));

export const calculateFootprintAction = new Action<ICarbonFootprintTrackerStoreState,
    {   
        id: string,
        mcc: number,
        amount: number
    }
>(STORE_ALIAS + ".CALC_FP")
    .addSaga(function* (action) {
        const transactionFootprint: TransactionFootprint = yield call(
            CarbonFootprintTrackerService.calculateTransactionFootprint,
            action.payload.id,
            action.payload.mcc,
            action.payload.amount
        );
        yield put(calculateFootprintSuccessfulAction.getReduxAction()({ transactionFootprint }));
    });

export const calculateFootprintSuccessfulAction = new Action<ICarbonFootprintTrackerStoreState,
    { transactionFootprint: TransactionFootprint }
>(STORE_ALIAS + ".CALC_FP_SUCCESSFUL")
    .addReducer((state, action) => ({ 
        ...state, 
        transactionFootprints: { 
            ...state.transactionFootprints, 
            [action.payload.transactionFootprint.transactionId]: action.payload.transactionFootprint
        }
    }));

export const addTransactionAction = new Action<ICarbonFootprintTrackerStoreState,
    { transaction: Transaction }
>(STORE_ALIAS + ".ADD_TRANSACTION")
    .addReducer((state, action) => ({ ...state, transactions: [...state.transactions, action.payload.transaction]}))
    .addSaga(function * (action) {
        const merchantCategories: MerchantCategories = yield select(selectMerchantCategories);
        yield put(calculateFootprintAction.getReduxAction()({ 
            id: action.payload.transaction.id,
            mcc: merchantCategories[Math.floor(Math.random() * (merchantCategories.length - 1))].mcc,
            amount: action.payload.transaction.amount
        }));
    });

const CarbonFootprintTrackerActions: IActionList = {
    fetchMerchantCategoriesAction,
    successfulMerchantCategoriesAction,
    calculateFootprintAction,
    calculateFootprintSuccessfulAction,
    addTransactionAction,
}

export default CarbonFootprintTrackerActions;
