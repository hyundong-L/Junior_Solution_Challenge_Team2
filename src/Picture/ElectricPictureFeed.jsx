import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase/firebase";
import LikeButton from "../ui/LikeButton";
import "../Picture/PictureFeedPage.css"

const FeedContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;


const ImageItem = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  margin: 10px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10%;
  flex-direction: column-reverse;
`;

const ElectricPictureFeed = () => {
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const storageRef = ref(storage, "Electric/");
        const files = await listAll(storageRef);
        const urls = await Promise.all(
          files.items.map(async (item) => {
            const url = await getDownloadURL(item);
            return { url, likes: 0 };
          })
        );
        setImageData(urls);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };
    fetchImages();
  }, []);

  const handleLike = (index) => {
    setImageData(prevImageData => {
      const newData = [...prevImageData];
      newData[index].likes += 1;
      return newData;
    });
  };

  return (
    <FeedContainer>
      {imageData.map((data, index) => (
        <ImageItem key={index}>
          <img src={data.url} alt={`Image ${index}`} className="feed-img" />
          {/* LikeButton을 각 이미지 아래에 추가하고 좋아요 수와 클릭 이벤트 전달 */}
          <LikeButton onLike={() => handleLike(index)} likes={data.likes} />
        </ImageItem>
      ))}
    </FeedContainer>
  );
};

export default ElectricPictureFeed;