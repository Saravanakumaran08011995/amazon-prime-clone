import React, { useEffect, useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import "./listItems.scss";
import api from "../../api/api";
import { Link } from "react-router-dom";

export const ListItems = ({ index, item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});
  const trailer ="https://v4.cdnpk.net/videvo_files/video/free/2019-01/large_watermarked/190111_04_TaksinBridge_Drone_02_FPpreview.mp4";

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await api.get("api/movies/find/" + item, {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setMovie(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMovie();
  }, [item]);

  return (
    <Link to={{ pathname: "/watch", movie: movie }}>
      <div
        key={item.id}
        className="listItems"
        style={{ left: isHovered && index * 290 - 40 + index * 2 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered ? (
          <>
            <video src={trailer} autoPlay={true} className="video" />
            <div className="itemInfo">
              <div className="icons">
                <PlayArrowIcon className="icon" />
                <AddIcon className="icon" />
              </div>
              <div className="itemInfoTop">
                <span className="title">{movie.title}</span>
                <span className="limit">+{movie.limit}</span>
                <span>{movie.year}</span>
                <span className="genre">{movie.genre}</span>
              </div>
              <div className="desc">{movie.desc}</div>
            </div>
          </>
        ) : (
          <img src={movie.imgSm} alt="" />
        )}
      </div>
    </Link>
  );
};
