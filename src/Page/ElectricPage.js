import ElectricPictureUpload from "../Picture/ElectricPictureUpload";
import ElectricPictureFeed from "../Picture/ElectricPictureFeed";

const ElectricPage=()=>{
    return(
        <div>
            <h1>Saving electricity Page</h1>
            <ElectricPictureUpload/>
            <ElectricPictureFeed/>
        </div>
    );
}

export default ElectricPage;