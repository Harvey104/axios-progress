import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import { loadProgressBar } from 'axios-progress-bar';
import { confirmAlert } from 'react-confirm-alert';
import { connect } from 'react-redux';
import { frontSliderActions } from '../_actions';

class AddSlider extends Component {
  state = {
    title_1a: "",
    title_1b: "",
    sub_title: "",
    errorMessages: '',
    successMessages: '',
    formIsHalfFilledOut: false,
  }
  changeHandler = (event, fieldName, isCheckbox) => {
    this.setState({
      [fieldName]: isCheckbox ? event.target.checked : event.target.value,
      formIsHalfFilledOut: true
    })
  };
  confirmBoxSubmit = (event) => {
    event.preventDefault();
    confirmAlert({
      title: 'stay one moment!',
      message: 'Are you sure do you want to Add this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            this.submitHandler();
          }
        },
        {
          label: 'No',
        }
      ]
    });
  };
  submitHandler() {
    loadProgressBar();
    //e.preventDefault();
    const obj = {
      title_1a: this.state.title_1a,
      title_1b: this.state.title_1b,
      sub_title: this.state.sub_title
    }
    console.log(JSON.stringify(obj));
    this.props.createFrontSlider(obj);
  }
  render() {
    const { title_1a, title_1b, sub_title } = this.state;
    console.log(this.state)
    return (
      <div className="page-content">
        <form className="card card-box sfpage-cover" onSubmit={event => this.confirmBoxSubmit(event)}>
          <div className="card-header d-flex">
            <div className="page-title">Add Slider</div>
          </div>
          <div className="card-body sfpage-body">
            <div className="table-scrollable">
              <div className="col-sm-12">
                <div className="form-horizontal">
                  <div className="form-body">
                    <div className="form-group row">
                      <label className="control-label col-md-12">First Line of Title
                        <span className="required"> * </span>
                      </label>
                      <div className="col-md-12">
                        <input type="text" name="title_1a"
                          placeholder="First Line of Title"
                          className="form-control form-control-sm"
                          value={title_1a}
                          onChange={event => this.changeHandler(event, 'title_1a')} />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="control-label col-md-12">Second Line of Title
                        <span className="required"> * </span>
                      </label>
                      <div className="col-md-12">
                        <input type="text" name="title_1b"
                          placeholder="Second Line of Title"
                          className="form-control form-control-sm"
                          value={title_1b}
                          onChange={event => this.changeHandler(event, 'title_1b')} />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="control-label col-md-12">Sub Title
                        <span className="required"> * </span>
                      </label>
                      <div className="col-md-12">
                        <textarea name="sub_title" placeholder="Sub Title"
                          className="form-control-textarea form-control" rows={5}
                          value={sub_title}
                          onChange={event => this.changeHandler(event, 'sub_title')} />
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer  text-right">
            <button type="submit" className="btn btn-primary mr-2">Submit</button>
            <NavLink to="/all_slider.jsp" className="btn btn-danger">Cancel</NavLink>
          </div>
        </form>
      </div >
    )
  }
}

function mapStateToProps(state) {
  const { item: frontSlider } = state.frontSlider;
  return { frontSlider };
}

const actionCreators = {
  createFrontSlider: frontSliderActions.createFrontSlider,
}

export default connect(mapStateToProps, actionCreators)(withRouter(AddSlider));