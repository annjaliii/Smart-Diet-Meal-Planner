import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        form
      );
      setMsg(res.data.message);
    } catch (err) {
      setMsg(
        err.response?.data?.error ||
          "Registration failed"
      );
    }
  };

  return (
    <div className="container my-5" style={{ maxWidth: "400px" }}>
      <h2 className="text-center">Register</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          className="form-control mb-2"
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />
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
        <button className="btn btn-success w-100">
          Register
        </button>
      </form>

      {msg && (
        <p className="mt-2 text-center">
          {msg}
        </p>
      )}
    </div>
  );
}
