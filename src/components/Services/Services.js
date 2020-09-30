import React, { Component } from "react";
import axios from "../../axios-functions";

import Service from "./Service/Service";
import Spinner from "../UI/Spinner/Spinner";

import classes from "./Services.module.css";

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
        console.log("[Services.js]: ", this.state.services);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    let tiles = null;
    if (this.state.services.length > 0) {
      tiles = this.state.services.map((service) => {
        return (
          <Service
            key={service.title}
            icon={service.iconDescription}
            title={service.title}
            description={service.text}
            url={service.url}
          />
        );
      });
    }
    const content = this.state.services.length > 0 ? tiles : <Spinner />;

    return <div className={classes.Services}>{content}</div>;
  }
}

export default Services;
