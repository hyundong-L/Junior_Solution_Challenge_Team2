import React, { useState } from "react";
import styled from "styled-components";
import PicInPut from "../ui/PicInPut";
import { ref, uploadString, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase/firebase";
import { useAuth } from "../user/authContext/AuthContext";
import { v4 as uuidv4 } from "uuid";

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
    //이름은 파일 이름으로 추가되게 하기
    const fileRef = await uploadString(ref(storage, `Eating/${currentUser.email}` + " - " + uuidv4()), dataUrl, 'data_url');

    // 파일 업로드
    // await uploadBytes(fileRef, dataUrl);

    // 업로드된 파일의 다운로드 URL 가져오기
    const downloadURL = await getDownloadURL(fileRef.ref);

    // setImageData(URL.createObjectURL(file));
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
        <span>Upload Image</span>
      </UploadButton>
    </Container>
  );
};

export default PictureUpload;
