import "./App.css";
import axios from "axios";

import React, { Component } from "react";
import Panel from "./components/panel/Panel";
import Navbar from "./components/navbar/Navbar";
import Name from "./components/name/Name";

class App extends Component {
  state = {
    photosArr: [],
  };
  loading = false;
  pageNo = 1;

  handleScroll = async () => {
    let topY = window.innerHeight + window.scrollY;
    const totalHeight = document.body.scrollHeight;
    let percent = Math.round((topY / totalHeight) * 100);

    if (percent >= 95 && !this.loading) {
      this.loading = true;
      this.pageNo++;
      const url = `${process.env.REACT_APP_BASE_URL}page=${this.pageNo}&${process.env.REACT_APP_ID}`;
      let result = await axios.get(url);

      let info = result.data;
      let addedInfo = this.state.photosArr.concat(info);
      this.setState({ photosArr: addedInfo }, () => {
        this.loading = false;
      });
    }
  };

  componentDidMount = async () => {
    try {
      const url = `${process.env.REACT_APP_BASE_URL}page=${this.pageNo}&${process.env.REACT_APP_ID}`;
      let result = await axios.get(url);
      let info = result.data;
      this.setState({ photosArr: info });
    } catch (error) {
      console.log(error);
    }

    document.addEventListener("scroll", this.handleScroll);
  };
  componentWillUnmount = () => {
    document.removeEventListener("scroll", this.handleScroll);
  };

  render() {
    return (
      <div id="content">
        <Navbar />
        <Name />
        <Panel photosArr={this.state.photosArr} />
      </div>
    );
  }
}

export default App;
