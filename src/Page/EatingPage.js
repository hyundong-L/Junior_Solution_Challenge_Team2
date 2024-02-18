import PictureUpload from "../Picture/PictureUpload";
import Nav from "../sidebar/Nav";
import LikeButton from "../ui/LikeButton";
import PictureFeed from "../Picture/PictureFeed";

const EatingPage=()=>{
    return(
        <div>
            <h1>Eating habits Page</h1>
            <LikeButton/>
            <PictureUpload/>
            <PictureFeed/>
        </div>
    );
}

export default EatingPage;