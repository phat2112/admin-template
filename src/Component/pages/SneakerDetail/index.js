import './styles.scss'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import * as helper from 'Utils/helper';
import {useHistory} from 'react-router-dom';
import React,{useEffect, useState} from 'react';
import ListSneaker from 'Component/atom/listSneaker';
import { ShoeSelectors } from 'Stores/shoe/Selectors';


const SneakerDetail = ({ shoeData}) => {
    const [shoeDetail, setShoeDetail] = useState([])
    const history = useHistory()
    // useEffect(() => {
    //     let sneakerId = parseInt(match.params.id)
    //     if(listShoeItem){
    //         console.log('listShoeItem', listShoeItem.toJS())
    //         let result = listShoeItem.toJS().filter(item =>{
    //             return item.id === sneakerId
    //         } )
    //         if(result){
    //             setShoeDetail(result)
    //         }
    //     }
    // }, [listShoeItem])
    const handleLinkPayment = (value) => {
        if(value){
            history.push(`/payment/${value}`)
        }
    } 
    useEffect(() => {
        if(shoeDetail.length > 0){
            console.log('shoeDetail',  shoeData)
        }
    }, [shoeData])
    return (
    <>
        <div className='sneaker-detail'>
            <h1>{shoeData ? shoeData.get('name') : "Sneaker's Name"}</h1>
            <div className="sneaker-detail-container">
                <div className="sneaker-detail-image">
                    {shoeData ? <img src={helper.handleUploadImage(shoeData.toJS().image[0].url)} alt=""/> : ( <h1>Coming Soon</h1>)}
                </div>
                <div className="sneaker-detail-content">
                <div className="sneaker-info">
                        <h5>Brand</h5>
                        <p> {shoeData ? shoeData.getIn(['shoeList', 'brand']) : 'coming soon'}</p>
                    </div>
                    <div className="sneaker-info">
                        <h5>Description</h5>
                        <p>coming soon</p>
                    </div>
                    <div className="sneaker-info">
                        <h5>price</h5>
                        <p> {shoeData ? shoeData.get('price') : ('Coming Soon')}</p>
                    </div>
                    <div className="selling-option">
                        {/* <div className="sneaker-quantity-bar">

                        </div> */}
                        <div className="sneaker-selling-button">
                            <button onClick={() => handleLinkPayment(shoeData.get('id'))}>Buy</button>                        
                        </div>    
                    </div>
                </div>
            </div>
        </div>
        <ListSneaker />
        </>
    );
};
SneakerDetail.propTypes = {
    listShoeItem: PropTypes.object,
};

const mapStateToProps = state => ({
    listShoeItem: ShoeSelectors.listShoeItem(state),
})
export default connect(mapStateToProps)(SneakerDetail);