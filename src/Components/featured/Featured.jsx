import "./featured.scss";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import InfoIcon from "@mui/icons-material/Info";
import { useEffect, useState } from "react";
import api from "../../api/api";

export const Featured = ( { type ,setGenre }) => {
  const [content, setContent ] = useState({})

  useEffect(()=>{
    const getRandomContent = async ()=>{
      try {
        const res = await api.get(`api/movies/random?type=${type}`,{
          headers: {
            token:
              "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
          }
        })
        setContent(res.data[0])
      } catch (err) {
        console.log(err)
      }
    }
    getRandomContent()
  },[type])
  return (
    <>
    <div className="featured">
    {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Tv-Shows"}</span>
          <select
            name="genre"
            id="genre"
            onChange={(e) => setGenre(e.target.value)}
          >
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="action">Action</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
          </select>
        </div>
      )}
      <img src={content.img} alt="moviephoto"/>
      <div className="info">
        <h1>{content.title}</h1>
        <span className="desc">
          {content.desc}
        </span>
        <div className="buttons">
          <button className="play">
            <PlayCircleIcon className="icon" />
            <span>Play</span>
          </button>
          <button className="more"> 
            <InfoIcon />
          </button>
        </div>
      </div>
    </div>
    </>
  );
};
