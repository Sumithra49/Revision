import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import "./Login.css";

const Login = () => {
  const { login, loading, error, isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async () => {
    await login();
    navigate("/dashboard");
  };

  return (
    <div className="page">
      <h2>Login</h2>
      {loading && <p>Loading your data…</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {isAuthenticated ? (
        <p>
          You are already logged in.{" "}
          <button onClick={() => navigate("/dashboard")}>
            Go to Dashboard
          </button>
        </p>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

export default Login;
