import "./home.scss";
import { Featured } from "../../Components/featured/Featured";
import { List } from "../../Components/list/List";
import { Navbar } from "../../Components/navbar/Navbar";
import { useEffect, useState } from "react";
import api from "../../api/api";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      const user = localStorage.getItem("user");
      if (user) {
        const parsedUser = JSON.parse(user);
        const accessToken = parsedUser.accessToken;
  
        const getRandomLists = async () => {
          try {
            const res = await api.get(
              `api/lists${type ? "?type=" + type : ""}${
                genre ? "&genre=" + genre : ""
              }`,
              {
                headers: {
                  token: "Bearer " + accessToken,
                },
              }
            );
            setLists(res.data);
          } catch (err) {
            console.log(err);
          }
        };
  
        getRandomLists();
      }
    }, 0);
  }, [type, genre]);

  const clearGenre = () => {
    setGenre(null);
  };

  return (
    <div className="home">
      <Navbar clearGenre = {clearGenre}/>
      <Featured type={type} setGenre={setGenre} clearGenre={clearGenre} />
      {lists.map((list, index) => (
        <List key={index} list={list} />
      ))}
      <List/>
    </div>
  );
};

export default Home;
