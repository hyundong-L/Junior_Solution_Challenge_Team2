import { Component } from "react";

export default class DonePage extends Component {
    render() {
        const { doneItems } = this.props;
        
        if (!doneItems || doneItems.length === 0) {
            return <div> No items done yet </div>;
        }

        return (
            <div className="title">
                <h2>Done</h2>
                <ul>
                    {doneItems.map((item, index) => (
                        <li key={item.id}>
                            {item.text}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
    handleItemClick(itemId) {

    }
}