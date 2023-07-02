import "./list.scss";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { ListItems } from "../listItems/ListItems";
import { useRef, useState } from "react";

export const List = ({ list }) => {
  const listRef = useRef();

  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${285 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 5) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-285 + distance}px)`;
    }
  };
  return (
    <div className="list">
      <span className="listTitle">{list && list.title && list.title}</span>
      <div className="wrapper">
        <ArrowBackIosIcon
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        />
        <div className="container" ref={listRef}>
          {list &&
            list.content &&
            Array.isArray(list.content) &&
            list.content.map((item, i) => (
              <ListItems index={i} item={item} key={i} />
            ))}
        </div>
        <ArrowForwardIosIcon
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};
