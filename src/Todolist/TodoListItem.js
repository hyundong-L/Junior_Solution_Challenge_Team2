import { Component } from "react";
import "./design/TodoListItem.css";

export default class TodoListItem extends Component {

    moveToDonePage() {
        this.props.moveToDonePage(this.props.id);
    }

    checkItem() {
        const checkComponent = document.querySelector("#todo-item" + this.props.id);
        if (checkComponent.style.cssText) {
                checkComponent.style.cssText = 0;
        } else {
            checkComponent.style.cssText = "text-decoration: line-through";
        }
        
    }
     render() {
        return (
            <ul> 
                <li class="todo-item" id={"todo-item"+this.props.id} onClick={this.props.moveToDonePage}>
                    <input type="button" value="✅" onClick={()=>{this.checkItem()}}/>
                    {this.props.text}
                        <input type="button" value="❌" onClick={()=>{this.props.delete(this.props.id)}}/>
                </li>
            </ul>
        )
    }
}
