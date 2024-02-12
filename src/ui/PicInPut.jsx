import React, { useState } from "react";
import styled from "styled-components";

const PicInPut = ({ onImageUpload }) => {
  const [uploadImgUrl, setUploadImgUrl] = useState("");

  const onchangeImageUpload = (e) => {
    const { files } = e.target;
    const uploadFile = files[0];
    const reader = new FileReader();
    reader.readAsDataURL(uploadFile);
    reader.onloadend = () => {
      setUploadImgUrl(reader.result);
      // 부모 컴포넌트로 업로드된 이미지 데이터 전달
      onImageUpload(reader.result);
    };
  };

  return (
    <StyledPicarea>
      <img src={uploadImgUrl} alt="Uploaded" />
      <input type="file" accept="image/*" onChange={onchangeImageUpload} />
    </StyledPicarea>
  );
};

const StyledPicarea = styled.div`
  width: calc(100% - 32px);
  padding: 16px;
  font-size: 16px;
  line-height: 20px;
`;

export default PicInPut;