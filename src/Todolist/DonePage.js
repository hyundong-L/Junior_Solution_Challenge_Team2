import { Component } from "react";

export default class DonePage extends Component {
    render() {
        return (
            <div classname="title">
                <h2>Done</h2>
                <ul>
                    {this.props.doneItems.map((item, index) => (
                        <li key={index} onClick={() => this.props.checkItem(item.id)}>
                            {item.text}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}