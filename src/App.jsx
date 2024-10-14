import Header from "./components/header/Header";
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
