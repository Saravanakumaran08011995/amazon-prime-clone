import { Route, Routes } from "react-router-dom";
import "./app.scss";
import Home from "./pages/Home/Home";
import { Register } from "./pages/Register/Register";
import SignIn from "./pages/SignIn/SignIn";
import { SignUp } from "./pages/SignUp/SignUp";
import { Watch } from "./pages/watch/Watch";
import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Register />} />
        <Route path="/signup" element={!user ? <SignUp /> : <Home />} />
        <Route path="/signin" element={!user ? <SignIn /> : <Home />} />
        {user && (
          <>
            <Route path="/all" element={<Home />} />
            <Route path="/movies" element={<Home type="movie"/>} />
            <Route path="/series" element={<Home type="series"/>} />
            <Route path="/watch" element={<Watch />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
