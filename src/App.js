import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import CatList from "./CatList";
import { connect } from "react-redux";
import getCats from "./actions/catActions";

class App extends Component {
  componentDidMount() {
    this.props.fetchCats()
  }

  render() {
    console.log(this.props.cats)
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <CatList cats={this.props.cats}/>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    cats: state.cats
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchCats: () => dispatch(getCats())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
