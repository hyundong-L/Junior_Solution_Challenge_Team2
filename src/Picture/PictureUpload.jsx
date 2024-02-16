import React, { useState } from "react";
import styled from "styled-components";
import PicInPut from "../ui/PicInPut";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase/firebase";
import {v4 as uuidv4} from "uuid";
import { useAuth } from "../user/authContext/AuthContext";

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

const PictureUpload = () => {
  const [imageData, setImageData] = useState(null);
  const { currentUser } = useAuth();

  const handleImageUpload = async (dataUrl) => {
    const fileRef = ref(storage, `Eating/${currentUser.email + " - " + uuidv4()}`);

    // 파일 업로드
    await uploadBytes(fileRef, dataUrl);

    // 업로드된 파일의 다운로드 URL 가져오기
    const downloadURL = await getDownloadURL(fileRef);

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
      <UploadButton onChange={handleImageUpload}>
        {/* <input type="submit" accept="image/*" onChange={handleImageUpload} /> */}
        <span>Upload Image</span>
      </UploadButton>
    </Container>
  );
};

export default PictureUpload;
