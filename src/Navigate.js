import React, { Component } from 'react'

class Navigate extends Component {
  render() {
    return (
      <div>
       <h3>{this.props.bilgi.baslik}</h3>
       <h6>{this.props.bilgi.ilaveBilgi}</h6>
      </div>
    );
  }
}

export default Navigate;