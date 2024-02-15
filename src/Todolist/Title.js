import { Component } from "react";

export default class TitleBar extends Component {
    render() {
        return (
            <div style={{
                backgroundColor: "#f0f0f0", 
                 color: "#333",
                padding: "15px", 
                 borderRadius: "8px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                fontSize: "20px",
                 fontWeight: "bold",
                 textAlign: "center",
            }}>
                {this.props.text}
            </div>
        );
    }
}