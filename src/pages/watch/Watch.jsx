import { Link} from "react-router-dom";
import "./watch.scss";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

export const Watch = () => {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlinedIcon />
        <Link to="/" className="link">
          Home
        </Link>
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls
        src="https://v4.cdnpk.net/videvo_files/video/free/2019-01/large_watermarked/190111_04_TaksinBridge_Drone_02_FPpreview.mp4"
      />
    </div>
  );
};
