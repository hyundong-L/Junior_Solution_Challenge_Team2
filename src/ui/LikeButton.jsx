import React from 'react';
import {EyeInvisibleOutlined, EyeOutlined} from '@ant-design/icons';
import './Button_style.css';

class LikeButton extends React.Component{
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
            notice: '관심 +1',
        });
    }
    render(){
        return(
            <React.Fragment>
                <div className="icons-list">
                    {this.state.isChecked ?  
                    <EyeOutlined className="button on" onClick={this.onClick}/> :
                    <EyeInvisibleOutlined className="button" onClick={this.onClick}/>}
                    <h3>{this.state.notice}</h3>
                </div>
            </React.Fragment> 
        )
    }
}
export default LikeButton;