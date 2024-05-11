import Login from "./components/Auth/Login";
import Main from "./components/Dashboard/Main";
import PrivateRoute from "./components/Dashboard/protectedRoute";
import { Navigate } from 'react-router-dom';
import "./index.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const RedirectToLogin = () => {
  return <Navigate to="/login" />;
};

function App() {

  //if token not present redirect user back to login
  const token = sessionStorage.getItem('token');

  return (
    <>
      <Toaster />
      <Router>
        <Routes>
          <Route path="/" element={<RedirectToLogin />} />
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute token={token} />}>
            <Route
              path="/dashboard"
              exact
              element={<Main />}
            />
          </Route>

        </Routes>
      </Router>
    </>
  );
}

export default App;
