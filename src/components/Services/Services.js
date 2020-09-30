import React, { Component } from "react";
import Spinner from "../UI/Spinner/Spinner";
import Aux from "../../hoc/Aux/Aux";

import axios from "../../axios-functions";

class Services extends Component {
  state = {
    services: [],
  };

  componentDidMount() {
    axios
      .get("/services")
      .then((response) => {
        this.setState({
          services: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    let tiles =
      this.state.services.length > 0 ? (
        <div>
          <h1>Placeholder for Services</h1>
        </div>
      ) : (
        <Spinner />
      );

    console.log("Services.js: ", this.state.services);
    return <Aux>{tiles}</Aux>;
  }
}

export default Services;
