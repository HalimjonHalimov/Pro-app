import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import { Navbar } from "./Component";
import PrivateRoute from "./Routes/PrivateRoute";
import NotFound from "./Pages/NotFound";
import AdminPanel from "./Pages/Support/AdminPanel";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthProvider";

function App() {
  const { state } = useContext(AuthContext);
  const { user } = state;
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/register"
          element={user ? <Navigate to={"/"} /> : <Register />}
        />
        <Route
          path="/login"
          element={user ? <Navigate to={"/"} /> : <Login />}
        />

        <Route
          path="/admin"
          element={
            <PrivateRoute roles={["admin"]}>
              <AdminPanel />
            </PrivateRoute>
          }
        />
        {/* 404 Pages */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
