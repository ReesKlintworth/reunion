import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">
        <header>
          <Link to="/">
            <p>Header</p>
          </Link>
        </header>
        <div className="app-content">{this.props.children}</div>
        <footer>
          <p>Footer</p>
        </footer>
      </div>
    );
  }
}