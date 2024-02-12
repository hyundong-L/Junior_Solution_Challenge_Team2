


import { Component } from "react";
import Title from '../Todolist/Title';
import Content from "../Todolist/Content";

export default class RecyclePage extends Component {
  render() {
        return (
            <div>
                <div>
                    <h1>Recycle Page</h1>
                </div>

                <div>
                    <Title text="Todo List" />
                    <Content />
                </div>
            </div>
        );
    }
}