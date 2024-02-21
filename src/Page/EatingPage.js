import "../Picture/PictureFeedPage.css"
import EatingPictureUpload from "../Picture/EatingPictureUpload";
import EatingPictureFeed from "../Picture/EatingPictureFeed";

const EatingPage = () => {
    return (
        <div className="E-wrapper">
            <h1>Eating habits Page</h1>

            <EatingPictureUpload />
            <EatingPictureFeed/>
        </div>
    );
}

export default EatingPage;