import PictureUpload from "../Picture/PictureUpload";
import PictureFeed from "../Picture/PictureFeed";
import "../Picture/PictureFeedPage.css"


const EatingPage=()=>{
    return(
        <div className="E-wrapper">
            <h1>Eating habits Page</h1>
            
            <PictureUpload/>
            <PictureFeed/>
            
        </div>
    );
}

export default EatingPage;