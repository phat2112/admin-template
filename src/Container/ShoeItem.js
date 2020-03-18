import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ShoeActions} from 'Stores/shoe/Actions'
import {ShoeSelectors} from 'Stores/shoe/Selectors'
import SneakerDetail from 'Component/pages/SneakerDetail';

const ShoeItem = ({match, getShoeItem, shoeData}) => {
    let idShoe = parseInt(match.params.id);
    useEffect(() => {
        getShoeItem(idShoe)
    }, [])
    return (
        <div>
            <SneakerDetail shoeData={shoeData}/>
        </div>
    );
};

ShoeItem.propTypes = {
    
};
const mapStateToProps = state => ({
    shoeData : ShoeSelectors.setShoeData(state),
})
const mapsDispatchToProps = dispatch => ({
    getShoeItem: idShoe => dispatch(ShoeActions.getShoesId(idShoe)),
})

export default connect(mapStateToProps, mapsDispatchToProps)(ShoeItem);