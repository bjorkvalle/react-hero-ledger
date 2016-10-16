import React, { Component } from 'react';
import './list-item.css';

class ListItem extends Component {
   render() {
      return (
         <div className="container">
            <img src={this.props.img_url} alt="avatar" />
            <h3>{this.props.name}</h3>
            <p>{this.props.class}</p>
            <p>{this.props.age} years old</p>
         </div>
      );
   }
}

export default ListItem;