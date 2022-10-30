import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { frontSliderActions } from "../_actions";
// import { isEmptyObj } from './utilities';

class AllSlider extends Component {
  state = {
    slider_arr: [],
    errorMessages: "",
    successMessages: "",
    formIsHalfFilledOut: false
  };
  changeHandler = (event, fieldName, isCheckbox) => {
    this.setState({
      [fieldName]: isCheckbox ? event.target.checked : event.target.value,
      formIsHalfFilledOut: true
    });
  };

  componentDidMount() {
    // if (isEmptyObj(this.props.frontSlider)) {
    this.props.getFrontSlider();
    //  }
  }

  render() {
    const { frontSlider } = this.props;
    //console.log(slider_arr)
    return (
      <div className="page-content">
        <div className="card card-box sfpage-cover">
          <div className="card-header d-flex">
            <div className="page-title">All Sliders</div>
          </div>
          <div className="card-body sfpage-body">
            <div className="table-scrollable">
              <table className="table table-striped table-bordered table-hover table-sm">
                <thead>
                  <tr>
                    <th />
                    <th> Main Title</th>
                    <th> Sub Title </th>
                  </tr>
                </thead>
                {frontSlider && (
                  <tbody>
                    {frontSlider.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td width="200">
                            <b>{item.title_1a}</b> <br />
                            {item.title_1b}
                          </td>
                          <td>{item.sub_title}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                )}
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { item: frontSlider } = state.frontSlider;
  return { frontSlider };
}

const actionCreators = {
  getFrontSlider: frontSliderActions.getFrontSlider
};

export default connect(
  mapStateToProps,
  actionCreators
)(withRouter(AllSlider));
