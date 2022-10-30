import React, { Component } from "react";
import { withRouter } from "react-router";
import AddSlider from "./add_slider";
import AllSlider from "./all_slider";
class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h6 className="p-3 bg-light">Welcome in app</h6>
        <div className="row">
          <div className="col-4">
            <AddSlider />
          </div>
          <div className="col-8">
            <AllSlider />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
