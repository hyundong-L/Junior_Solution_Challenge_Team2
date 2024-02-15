import React from "react";
import styled from "styled-components";

const CommentTextarea = styled.textarea`
    width: calc(100% - 32px);
    height: 100px;
    padding: 16px;
    font-size: 16px;
    line-height: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    resize: none;
`;

function CommentInPut(props) {
    const { value, onChange } = props;

    return (
        <CommentTextarea 
            value={value} 
            onChange={onChange} 
            placeholder="댓글 추가하기" 
        />
    );
}

export default CommentTextarea;
