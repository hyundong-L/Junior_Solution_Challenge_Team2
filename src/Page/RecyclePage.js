//  const RecyclePage=()=>{
    

   
//      return(
//          <div>
//              <h1>Recycle Page</h1>
//          </div>
//      );
//      }



import { Component } from "react";
import Title from '../Todolist/Title';
import Content from "../Todolist/Content";

export default class RecyclePage extends Component {
  render() {
          return (
                 <div>
                      <Title text="Todo List" />
                      <Content />
                 </div>
          );
    }
}
