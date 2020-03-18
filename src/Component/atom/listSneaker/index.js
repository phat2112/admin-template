import "./styles.scss";
import { skeleton } from 'antd'
import Slider from "react-slick";
import PropTypes from "prop-types";
import * as helper from "Utils/helper";
import React, { useEffect, useState } from "react";
import {useHistory} from 'react-router-dom'
import jordan from "Assets/images/jordan-1-chicago.jpeg";
import jordanOffwhite from "Assets/images/jordan-1-off-white.jpeg";


const ListSneaker = ({ listShoeItem, valueFind }) => {
  const history = useHistory()
  const [newListShoe, setNewList] = useState([])
  const handleLinkDetail = (value) => {
    let valueId = value.id
    history.push(`/sneaker-detail/${valueId}`)
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true
  };
  useEffect(() => {
    if (listShoeItem) {
      if(!valueFind){
        setNewList(listShoeItem.toJS())
      }else{
        let result = listShoeItem.toJS().filter(item => {
          // return item.shoeList.brand === valueFind
          return item.shoeList.brand === valueFind || item.name === valueFind 
        })
        if(result){
          setNewList(result)
        }
      }
    }
  }, [listShoeItem, valueFind]);
  return (
    <div className={listShoeItem ? 'grid-container' : 'slide-container'}>
        {newListShoe.length > 0
          ? newListShoe.map((item, index) => (
              <div className="slide-container-img" key ={index}>
                <img src={helper.handleUploadImage(item.image[0].url)} alt="" />
                <div className="fade-background"></div>
                <button className='button-detail' onClick={() => handleLinkDetail(item)}>See More</button>
              </div>
            ))
          : (
          <Slider {...settings}>
            <div className="slide-container-img">
              <h1>Coming Soon</h1>
            </div>
            <div className="slide-container-img">
              <h1>Coming Soon</h1>
            </div>
            <div className="slide-container-img">
              <h1>Coming Soon</h1>
            </div>
            <div className="slide-container-img">
              <h1>Coming Soon</h1>
            </div>
            <div className="slide-container-img">
              <h1>Coming Soon</h1>
            </div>
            <div className="slide-container-img">
              <h1>Coming Soon</h1>
            </div>
            <div className="slide-container-img">
              <h1>Coming Soon</h1>
            </div>
            <div className="slide-container-img">
              <h1>Coming Soon</h1>
            </div>
        </Slider>
        )}
    </div>
  );
};

ListSneaker.propTypes = {
  listShoeItem: PropTypes.object,
  valueFind: PropTypes.string,
};

export default ListSneaker;
