import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { setToken } = useContext(AuthContext);
  const [form, setForm] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        form
      );
      setToken(res.data.token);
      navigate("/");
    } catch (err) {
      setMsg(
        err.response?.data?.error ||
          "Login failed"
      );
    }
  };

  return (
    <div className="container my-5" style={{ maxWidth: "400px" }}>
      <h2 className="text-center">Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Email"
          className="form-control mb-2"
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />
        <input
          placeholder="Password"
          type="password"
          className="form-control mb-2"
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />
        <button className="btn btn-primary w-100">
          Login
        </button>
      </form>

      {msg && (
        <p className="text-danger mt-2 text-center">
          {msg}
        </p>
      )}
    </div>
  );
}
