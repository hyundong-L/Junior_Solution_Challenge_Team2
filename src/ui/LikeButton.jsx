import React from 'react';
import { EyeFilled , EyeOutlined } from '@ant-design/icons';
import './Button_style.css';

class LikeButton extends React.Component {
    state = {
        isChecked: false,
        notice: ' ',
    };

    onClick = () => {
        this.state.isChecked ?
            this.setState({
                isChecked: false,
                notice: '',
            })
            :
            this.setState({
                isChecked: true,
                notice: 'see',
            });
    }
    render() {
        return (
            <React.Fragment>
                <div className="icons-button-container">
                    {this.state.isChecked ?
                        <EyeFilled className="Like-button" onClick={this.onClick} />
                        :
                        <EyeOutlined className="button-on" onClick={this.onClick} />
                    }
                    <h3 className='Like-h3'>{this.state.notice}</h3>
                </div>
            </React.Fragment>
        )
    }
}

export default LikeButton;