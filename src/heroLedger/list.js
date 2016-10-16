import React, { Component } from 'react';
import ListItem from './list-item';

class List extends Component {
   constructor() {
      super();

      this.state = {
         ledger: []
      }
   }

   componentDidMount() {
      fetch("https://api.myjson.com/bins/1dwck")
         .then(response => {
            return response.json()
         })
         .then(data => {
            this.setState({
               ledger: data
            })
            console.log(data);
         })
         .catch(error => {
            console.log(error)
         })
   }

   render() {
      if (this.state.ledger.length <= 0) {
         return (
            <div>loading..</div>
         )
      } else {
         return (
            <div>
               {this.state.ledger.heroes.map((item, i) => {
                  return (
                     <ListItem
                        name={item.name}
                        age={item.age}
                        class={item.class}
                        img_url={item.avatar_url}
                        key={i}>
                     </ListItem>
                  )
               })}
            </div>
         );
      }
   }
}

export default List;