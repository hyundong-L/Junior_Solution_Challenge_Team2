import React, { useState } from "react";
import styled from "styled-components";
import PicInPut from "../ui/PicInPut";

const MainPage = () => {
  const [imageData, setImageData] = useState(null);

  const handleImageUpload = (dataUrl) => {
    setImageData(dataUrl);
  };

  return (
    <Container>
      {/* 이미지 업로드 컴포넌트 */}
      <PicInPut onImageUpload={handleImageUpload} />

      {/* 이미지 출력 */}
      {imageData && (
        <ImageWrapper>
          <img src={imageData} alt="Uploaded" />
        </ImageWrapper>
      )}

      {/* 이미지 업로드 버튼 */}
      <UploadButton>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        <span>Upload Image</span>
      </UploadButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const ImageWrapper = styled.div`
  margin-top: 20px;

  img {
    max-width: 100%;
    max-height: 400px;
  }
`;

const UploadButton = styled.label`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  input[type="file"] {
    display: none;
  }
`;

export default MainPage;
