import { Component } from "react";

export default class TodoList extends Component {
    render() {
        return (
<<<<<<< HEAD
            <ul style={{
                listStyleType: "none",
                padding: 0,
                margin: 0,
            }}>
                {this.props.items.map((item, index) => (
                    <li key={index} style={{
                        backgroundColor: "#f0f0f0",
                        color: "#333",
                        padding: "0px",
                        borderRadius: "5px",
                        marginBottom: "5px",
                        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
                    }}>
                        {item}
                    </li>
                ))}
            </ul>
=======
            <ul> {this.props.items} </ul>
>>>>>>> 48fc2a5354532e4236ab8a1303b6fdb0baab562d
        );
    }
}