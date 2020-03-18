import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { ShoeActions } from 'Stores/shoe/Actions'
import { ShoeSelectors } from 'Stores/shoe/Selectors'
import PaymentPage from 'Component/pages/PaymentPage';

const PaymentPageContainer = ({match, getShoeItem, shoeData}) => {
    useEffect(() => {
        let shoeId = match.params.id
        getShoeItem(shoeId)
    }, [])
    return (
        <div>
            <PaymentPage shoeData={shoeData}/>
        </div>
    );
};

PaymentPageContainer.propTypes = {
    getShoeItem: PropTypes.func,
    shoeData: PropTypes.object,
};
const mapStateToProps = state => ({
    shoeData : ShoeSelectors.setShoeData(state),
})
const mapsDispatchToProps = dispatch => ({
    getShoeItem: idShoe => dispatch(ShoeActions.getShoesId(idShoe)),
})

export default connect(mapStateToProps, mapsDispatchToProps)(PaymentPageContainer);