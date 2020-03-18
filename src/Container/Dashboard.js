import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { ShoeActions } from 'Stores/shoe/Actions'
import { ShoeSelectors } from 'Stores/shoe/Selectors'
import Dashboard from 'Component/pages/Dashboard'
import { connect } from 'react-redux'
import {AdminContext} from 'Component/template/AdminTemplate'

const DashboardContainer = ({getListShoe, listShoeData, getListShoeItems, listShoeItem}) => {
    useEffect(() => {
        getListShoe()
        getListShoeItems()
    }, [])
    return (
        <div>
            <AdminContext.Consumer>
                {
                    valueFind => {
                      return <Dashboard listShoeData={listShoeData} listShoeItem={listShoeItem} valueFind={valueFind}/>
                    }
                }
            </AdminContext.Consumer>
            
        </div>
    )

}
DashboardContainer.propTypes = {
    getListShoe: PropTypes.func,
    listShoeData: PropTypes.object,
    getListShoeItems: PropTypes.func,
    listShoeItem: PropTypes.object,
};
const mapStateToProps = state => ({
    listShoeData: ShoeSelectors.listShoesData(state),
    listShoeItem: ShoeSelectors.listShoeItem(state),
})
const mapDispatchToProps = dispatch => ({
    getListShoe: () => dispatch(ShoeActions.getshoeList()),
    getListShoeItems: () => dispatch(ShoeActions.getShoeItem())
})
export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)
