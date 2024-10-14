import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import MyProfile from "./components/profile/MyProfile";

function App() {
  const location = useLocation();
  const token = localStorage.getItem("token");
  const hideHeaderPaths = ["/login"];
  return (
    <>
      {/* {location.pathname !== "/login" && <Header />} */}

      {!hideHeaderPaths.includes(location.pathname) && <Header />}
      <Routes>
        <Route
          path="/login"
          element={token ? <Navigate to="/" /> : <Login />}
        />
        <Route path="/" element={<PrivateRoute component={Home} />} />
        <Route
          path="/myprofile"
          element={<PrivateRoute component={MyProfile} />}
        />
      </Routes>
      <Toaster />
    </>
  );
}

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
