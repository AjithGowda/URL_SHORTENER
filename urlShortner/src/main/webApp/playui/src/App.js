
import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import OperationalUI from './components/OperationalUI'

class App extends React.Component {

  render(){
    return(
      <div className="App">
        <OperationalUI props={this.props}></OperationalUI>
      </div>
    );
  }
}


const managerMapStateToProps = (state) => ({
  shortUrlList: state.shortUrls,
});

const managerMapDispatchToProps = (dispatch) => ({
  generateShortURL: () => dispatch({type: "SHORT_URL_REQUESTED"}),
})

export default connect(managerMapStateToProps,managerMapDispatchToProps)(App);