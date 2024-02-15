import { Component } from "react";
import Title from '../Todolist/Title';
import Content from "../Todolist/Content";
import DonePage from "../Todolist/DonePage";

export default class RecyclePage extends Component {
    render() {
        return (
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                fontFamily: "Arial, sans-serif",
                padding: "20px"
            }}>
                <div style={{ flex: 1, marginBottom: "20px" }}>
                    <div style={{ marginBottom: "20px" }}>
                        <h1 style={{ color: "#333", textAlign: "center" }}>Recycle Page</h1>
                    </div>
                    <div>
                        <Title text="Todo List" />
                        <Content />
                    </div>
                </div>
                <div style={{ flex: 1, marginLeft: "20px" }}>
                    <div style={{ marginBottom: "20px" }}>
                        <h1 style={{ color: "#333", textAlign: "center", fontSize: "24px", marginTop: 0}}>Done</h1>
                    </div>
                    <Content />
                </div>
            </div>
        );
    }
}