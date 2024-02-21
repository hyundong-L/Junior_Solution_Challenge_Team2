import React, { useState } from "react";
import styled from "styled-components";
import PicInPut from "../ui/PicInPut";
import { ref, uploadString, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase/firebase";
import {v4 as uuidv4} from "uuid";
import { useAuth } from "../user/authContext/AuthContext";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 30vh;
`;

const ImageWrapper = styled.div`
  margin-top: 20px;

  img {
    max-width: 100%;
    max-height: 400px;
  }
`;

const EatingPictureUpload = () => {
  const [imageData, setImageData] = useState(null);
  const { currentUser } = useAuth();

  const handleImageUpload = async (dataUrl) => {
    const fileRef = await uploadString(ref(storage, `Eating/${currentUser.email}` + " - " + uuidv4()), dataUrl, 'data_url');

    // 업로드된 파일의 다운로드 URL 가져오기
    const downloadURL = await getDownloadURL(fileRef.ref);

    setImageData(dataUrl);

    window.location.reload();
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
    </Container>
  );
};

export default EatingPictureUpload;