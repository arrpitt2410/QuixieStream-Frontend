import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import { Toaster } from "react-hot-toast"
import { useContext, useEffect } from "react"
import { Context } from "./main"
import axios from "axios"
import Profile from "./components/Profile"
import StreamCreate from "./components/StreamCreate"
import Streaming from "./components/Streaming"

const App = () => {
  const { setUser, setIsAuthenticated} = useContext(Context);

  useEffect(() => {
    axios
      .get("https://quixiestream-backend.onrender.com/users/me", {
        withCredentials: true,
      })
      .then((res) => {
        setUser(res.data.user);
        setIsAuthenticated(true);
      })
      .catch((error) => {
        setUser({});
        setIsAuthenticated(false);
      });
  }, []);

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/newstream" element={<StreamCreate />} />
      <Route path="/stream" element={<Streaming />} />
    </Routes>
    {/* <Toaster /> */}
    </BrowserRouter>
  )
}

export default App
