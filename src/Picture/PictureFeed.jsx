import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase/firebase";

const FeedContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const ImageItem = styled.div`
  width: 200px;
  height: 200px;
  margin: 10px;
`;

const PictureFeed = () => {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const storageRef = ref(storage, "Eating/");
        const files = await listAll(storageRef);
        const urls = await Promise.all(
          files.items.map(async (item) => {
            const url = await getDownloadURL(item);
            return url;
          })
        );
        setImageUrls(urls);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };
    fetchImages();
  }, []);

  return (
    <FeedContainer>
      {imageUrls.map((url, index) => (
        <ImageItem key={index}>
          <img src={url} alt={`Image ${index}`} />
        </ImageItem>
      ))}
    </FeedContainer>
  );
};

export default PictureFeed;
