import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
        <div>
            <h1 className="text-3xl font-bold underline">Welcome to Gifter</h1>
        </div>
    );
  }
}
