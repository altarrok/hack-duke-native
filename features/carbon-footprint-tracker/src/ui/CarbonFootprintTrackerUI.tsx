import React from "react";
import withStyles, { WithStylesProps } from "react-jss";
import { getSelectors } from './CarbonFootprintTrackerUISelectors';

import { styles } from './CarbonFootprintTrackerStyles';
import { connect } from "react-redux";
import { ICarbonFootprintTrackerUIState } from "../CarbonFootprintTrackerTypes";
import { calculateFootprintAction, fetchMerchantCategoriesAction } from "../CarbonFootprintTrackerActions";


export interface CarbonFootprintTrackerProps extends WithStylesProps<typeof styles>, ICarbonFootprintTrackerUIState, TActionTypes {
}

class CarbonFootprintTrackerBase extends React.PureComponent<CarbonFootprintTrackerProps> {
    did: boolean = false;

    componentDidMount() {
        this.props.fetchMerchantCategories();
    }
    
    render() {
        return (
            <>
            </>
        );
    }

}


const mapStateToProps = (state: any) => getSelectors(state)
const mapDispatchToProps = {
    fetchMerchantCategories: fetchMerchantCategoriesAction.getReduxAction(),
    calculateFootprint: calculateFootprintAction.getReduxAction(),
}

type TActionTypes = typeof mapDispatchToProps;

export const CarbonFootprintTracker = withStyles(styles)(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(CarbonFootprintTrackerBase)
);