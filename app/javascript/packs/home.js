import React from 'react'
import ReactDOM from 'react-dom'
import '../src/application.scss';
import PropTypes from 'prop-types'
export class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text"> Hello {this.props.name}, whatssss up!</li>
            <li><a href="#">One</a></li>
            <li><a href="#">Two</a></li>
            <li><a href="#">Three</a></li>
            <li><a href="#">Four</a></li>
          </ul>
        </div>
      </div>
    );
  }
}
