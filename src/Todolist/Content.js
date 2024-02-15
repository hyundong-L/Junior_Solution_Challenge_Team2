import { Component } from "react";
import TodoList from "./TodoList"
import TodoListItem from "./TodoListItem";
import "./design/Content.css";

export default class Content extends Component {
    constructor(props) {
        super(props);

        this.state = {
            itemNum: 0,
            items: [
            ]
        };
    }

    deleteItem(num) {
        const selected = document.querySelector('#todo-item' + num);
        if (selected) {
            selected.remove();
        }
    }

    addItem() {
        const inputText = document.querySelector('#inputText');
        if (inputText.value) {
            const tempArr = [...this.state.items];
            tempArr.push(<TodoListItem
                id={this.state.itemNum++}
                text={inputText.value}
                delete={(num) => { this.deleteItem(num) }} />);
            this.setState({
                items: tempArr
            })
            inputText.value = ""
        }
    }
    render() {
        return (
            <div className="inputContainer">
                <input autoComplete="off" id="inputText" type="text" placeholder="입력"></input>
                <input id="sumitButton" type="button" value="↩"
                    onClick={() => { this.addItem() }}
                />
                <TodoList items={this.state.items} />
            </div>
        );
    }
}