import React, { useRef } from "react";
import PropTypes from "prop-types";
import { Bar, Line, Pie } from "react-chartjs-2";
import './styles.scss'

const Sneaker = props => {
  const data = {
    labels: ["Addidas", "Nike", "Puma", "Reebook", "Rick Owen", "Balenciaga"],
    datasets: [
      {
        label: "Top Ranking",
        fill: false,
        lineTension: 0.1,
        backgroundColor: [
            'rgba(201, 83, 89, 1)',
            'rgba(97, 222, 235, 1)',
            'rgba(255, 198, 89, 1)',
            'rgba(255, 255, 77, 1)',
            'rgba(0, 0, 0, 0.06)',
            'rgba(0, 127, 131, 1)',
        ],
        data: [300000, 500000, 200000 , 100000, 400000, 200000, 450000]
      }
    ]
  };
  return (
    <div className="sneaker-container">
      <div className="sneaker-chart">
        <Bar
          data={data}
          options={{
              title:{
                  display: true,
                  text: 'Sneaker Rank on the world',
                  fontSize: 25,
              },
              legend:{
                  display:true,
                  position:'bottom',
              }
          }}
        />
      </div>
      <div className="sneaker-detail"></div>
    </div>
  );
};

Sneaker.propTypes = {};

export default Sneaker;
