import PictureUpload from "../Picture/PictureUpload";
import Nav from "../sidebar/Nav";
import LikeButton from "../ui/LikeButton";
import PictureFeed from "../Picture/PictureFeed";
import "../Picture/PictureFeedPage.css"


const EatingPage=()=>{
    return(
        <div>
            <h1>Eating habits Page</h1>
            
            <PictureUpload/>
            <PictureFeed/>
            
        </div>
    );
}

export default EatingPage;