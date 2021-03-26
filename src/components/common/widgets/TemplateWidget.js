import React from "react";
import PropTypes from "prop-types";
import Modal from "../Modal";

import BarChartWidget from "./barChartWidget/BarChartWidget";
import LineChartWidget from "./lineChartWidget/LineChartWidget";
import DoughnutChartWidget from "./doughnutChartWidget/DoughnutChartWidget";
import PieChartWidget from "./pieChartWidget/PieChartWidget";
import TestWidget from "./testWidget/TestWidget";
import DefaultWidget from "./defaultWidget/DefaultWidget";

const ContainerWidget = ({ type, icon, title, content, data }) => {
  function selectWidget(_type) {
    switch (_type) {
      case "BarChart":
        return <BarChartWidget labels={data.labels} data={data.data} />;
      case "LineChart":
        return <LineChartWidget labels={data.labels} data={data.data} />;
      case "DoughnutChart":
        return <DoughnutChartWidget labels={data.labels} data={data.data} />;
      case "PieChart":
        return <PieChartWidget labels={data.labels} data={data.data} />;
      case "Test":
        return <TestWidget labels={data.labels} data={data.data} />;
      default:
        return <DefaultWidget labels={data.labels} data={data.data} />;
    }
  }

  const handleClose = () => {};

  return (
    <>
      <div className="col-md-12 col-lg-4 mb-3">
        <div className="widget-item box-shadow">
          <div className="widget-head">
            <div className="row">
              <div className="col-sm-10">
                <i className={"icon " + icon}></i>
                <span>{title}</span>
              </div>
              <div className="col-sm-2">
                <div className="edit-elipsis rounded-circle">
                  <i className="fas fa-ellipsis-v"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="widget-body">{selectWidget(type)}</div>
          <div className="widget-footer">{content}</div>
        </div>
      </div>

      <Modal title="Edit" handleClose={handleClose}>
        <h5>Some text</h5>
        <p>Some more text</p>
      </Modal>
    </>
  );
};

ContainerWidget.propTypes = {
  type: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  data: PropTypes.object,
};

export default ContainerWidget;
