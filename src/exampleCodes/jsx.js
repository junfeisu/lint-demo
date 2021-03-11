module.exports = `
  import React from 'react';

  export default class App {
    state = {
      name: 'dds'
    }

    render() {
      const { name } = this.state;
      return (
        <div className="container">{name}</div>
      )
    }
  }
`