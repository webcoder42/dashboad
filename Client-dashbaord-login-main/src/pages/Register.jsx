import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import novaLogo from '../assets/Nova Logo VP.png';

const Register = () => {
  const [form, setForm] = useState({
    userName: "",
    email: "",
    password: "",
    role: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      const res = await axios.post("http://localhost:8080/api/v1/users/register", form);
      if (res.data.success) {
        setSuccess("Registration successful! Please login.");
        setTimeout(() => navigate("/login"), 1500);
      } else {
        setError(res.data.message || "Registration failed");
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "Registration failed. Try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row" style={{ backgroundColor: '#1a2a33', fontFamily: 'Inter, sans-serif' }}>
      {/* Mobile: Full background image, card overlay */}
      <div className="md:hidden fixed inset-0 z-0" style={{
        backgroundImage: `linear-gradient(rgba(26, 42, 51, 0.85), rgba(26, 42, 51, 0.85)), url('/372748-PC42NW-151.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100vw',
        height: '100vh',
      }} />
      <div className="w-full md:w-1/2 flex items-center justify-center md:static fixed inset-0 z-10" style={{ backgroundColor: '#1a2a33' }}>
        <form onSubmit={handleSubmit} className="backdrop-blur-xl bg-white/70 md:bg-white/80 p-8 md:p-12 rounded-2xl shadow-2xl w-full max-w-md flex flex-col items-center m-4 md:m-8 border border-gray-200">
          <div className="flex flex-col items-center mb-8">
            <div className="mb-3">
              <img src={novaLogo} alt="Nova Logo" className="w-28 h-16 object-contain" />
            </div>
            <h2 className="text-2xl font-extrabold text-[#1a2a33] mb-1 text-center w-full">Create Account</h2>
            <div className="text-[13px] mt-1 mb-1" style={{ color: '#D6A647', fontFamily: 'Rajdhani, Orbitron, Titillium Web, Exo 2, Inter, sans-serif', textAlign: 'center', width: '100%', fontStyle: 'italic' }}>
              Excelência técnica e compromisso: construindo resultados sólidos para quem entende de posto.
            </div>
          </div>
          {error && <div className="mb-4 text-red-400 text-sm w-full text-center">{error}</div>}
          {success && <div className="mb-4 text-green-600 text-sm w-full text-center">{success}</div>}
          <div className="mb-4 w-full">
            <label className="block mb-1 font-semibold text-[#1a2a33]" htmlFor="userName">User Name</label>
            <input
              type="text"
              id="userName"
              name="userName"
              className="w-full px-4 py-2 border border-gray-300 bg-[#f7f9fa] text-[#1a2a33] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a2a33] transition placeholder-gray-400"
              value={form.userName}
              onChange={handleChange}
              required
              autoComplete="username"
              placeholder="Enter your user name"
            />
          </div>
          <div className="mb-4 w-full">
            <label className="block mb-1 font-semibold text-[#1a2a33]" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 bg-[#f7f9fa] text-[#1a2a33] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a2a33] transition placeholder-gray-400"
              value={form.email}
              onChange={handleChange}
              required
              autoComplete="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4 w-full">
            <label className="block mb-1 font-semibold text-[#1a2a33]" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border border-gray-300 bg-[#f7f9fa] text-[#1a2a33] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a2a33] transition placeholder-gray-400"
              value={form.password}
              onChange={handleChange}
              required
              autoComplete="new-password"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-6 w-full">
            <label className="block mb-1 font-semibold text-[#1a2a33]" htmlFor="role">Type</label>
            <select
              id="role"
              name="role"
              className="w-full px-4 py-2 border border-gray-300 bg-[#f7f9fa] text-[#1a2a33] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a2a33] transition"
              value={form.role}
              onChange={handleChange}
              required
            >
              <option value="">Select Type</option>
              <option value="admin">Admin</option>
              <option value="Gerente">Gerente</option>
              <option value="Finanaceiro">Finanaceiro</option>
              <option value="Engenharia">Engenharia</option>
              <option value="RH">RH</option>
              <option value="Comercial">Comercial</option>
              <option value="Compras">Compras</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-[#1a2a33] text-white py-2.5 rounded-lg font-semibold shadow-md transition-all text-lg mb-2 transform hover:scale-105 hover:shadow-xl active:scale-95 focus:outline-none"
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </button>
          <div style={{ marginTop: 10, textAlign: 'center', width: '100%' }}>
            Already have an account? <a href="/login" className="text-blue-600 hover:underline">Login</a>
          </div>
        </form>
      </div>
      {/* Border Line and Right Background for Desktop */}
      <div className="hidden md:block w-px bg-gray-300 h-screen" />
      <div className="hidden md:block w-full md:w-1/2 h-64 md:h-auto relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(26, 42, 51, 0.85), rgba(26, 42, 51, 0.85)), url('/372748-PC42NW-151.jpg')`,
            backgroundSize: '110%',
            backgroundPosition: 'center',
            width: '100%',
            height: '100%',
          }}
        />
      </div>
    </div>
  );
};

export default Register; 