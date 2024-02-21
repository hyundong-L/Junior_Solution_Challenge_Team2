import PictureUpload from "../Picture/PictureUpload";
import PictureFeed from "../Picture/PictureFeed";
import "../Picture/PictureFeedPage.css"
import "../Picture/PictureFeedPage.css"


const EatingPage=()=>{
    return(
    <div className= "E-wrapper">
            <h1>Eating habits Page</h1>
            
            <PictureUpload/>
            <PictureFeed/>
            <div className="picture-container" />
            <div className="picture-feed-container" />
            <div className="picture-feed-item" />
            <div className="like-button-container" />
            <div className="like-button" />
            <div className="like-button-container .likes-count" />
        </div>
    );
}

export default EatingPage;