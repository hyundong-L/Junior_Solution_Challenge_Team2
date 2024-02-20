import PictureUpload from "../Picture/PictureUpload";
import PictureFeed from "../Picture/PictureFeed";

const EatingPage=()=>{
    return(
        <div className="E-total">
            {/* <h1>Eating habits Page</h1> */}
            <PictureUpload/>
            <PictureFeed/>
        </div>
    );
}

export default EatingPage;