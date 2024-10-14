import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/login" && <Header />}

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
