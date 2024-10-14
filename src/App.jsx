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

function App() {
  const location = useLocation();
  const token = localStorage.getItem("token");
  return (
    <>
      {location.pathname !== "/login" && <Header />}

      <Routes>
        <Route
          path="/login"
          element={token ? <Navigate to="/" /> : <Login />}
        />
        <Route path="/" element={<PrivateRoute element={<Home />} />} />
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
