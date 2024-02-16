import PictureUpload from "../Picture/PictureUpload";
import Nav from "../sidebar/Nav";
import LikeButton from "../ui/LikeButton";

const EatingPage=()=>{
    return(
        <div>
            <h1>Eating habits Page</h1>
            <LikeButton/>
            <PictureUpload/>
        </div>
    );
}

export default EatingPage;