import "./styles.scss";
import PropTypes from "prop-types";
import { Card, Skeleton } from "antd";
import * as helper from "Utils/helper";
import {useHistory} from 'react-router-dom'
import Sneaker from "Component/atom/Sneaker";
import React, { useEffect, useState } from "react";
import SneakerItem from "Component/atom/SneakerItem";
import ListSneaker from "Component/atom/listSneaker";

const Dashboard = ({ listShoeData, listShoeItem, valueFind }) => {
  const history = useHistory()
  const handleLinkTopDetail = (value) => {
    let valueId = value.id
    history.push(`/sneaker-detail/${valueId}`)
  }
  useEffect(() => {
    if (listShoeData) {
      console.log(listShoeData.getIn(["iamge", "name"]));
    }
  }, [listShoeData]);
  return (
    <div className="dashboard">
      <div className="top-sneaker-title">
        <h1 style={{ textAlign: "center" }}>Top Sneaker</h1>
      </div>
      <div className="top-sneaker">
        {listShoeData ? (
          listShoeData
            .toJS()
            .map((item, index) => (
              <SneakerItem
                key={index}
                title={item.name}
                img={helper.handleUploadImage(item.image[0].url)}
                onClick={() => handleLinkTopDetail(item)}
                idShoe={item.id}
              />
            ))
        ) : (
          <div className="skeleton-container">
            <Skeleton active />
            <Skeleton active />
            <Skeleton active />
            <Skeleton active />
          </div>
        )}
      </div>
      <div className="sneaker-rank">
        <Sneaker />
      </div>
      <div className="sneaker-list">
        <h1 style={{ textAlign: "center" }}>List of Sneaker</h1>
        <ListSneaker listShoeItem={listShoeItem} valueFind={valueFind}/>
      </div>
    </div>
  );
};
Dashboard.propsType = {
  listShoeData: PropTypes.object,
  listShoeItem: PropTypes.object,
  valueFind: PropTypes.string,
};
export default Dashboard;
