import { IPlugin } from '../../../store/Plugin';
import CarbonFootprintTrackerActions from './CarbonFootprintTrackerActions';
import CarbonFootprintTrackerSelectors from './CarbonFootprintTrackerSelectors';
import { defaultState, STORE_ALIAS as CarbonFootprintTrackerStoreAlias } from './CarbonFootprintTrackerTypes';

export const CarbonFootprintTracker: IPlugin = {
    alias: CarbonFootprintTrackerStoreAlias,
    defaultState,
    actions: CarbonFootprintTrackerActions,
    selectors: CarbonFootprintTrackerSelectors,
    childPlugins: []
}