import React from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    const username = document.getElementById("newUsername").value;
    const password = document.getElementById("newPassword").value;
    const name =document.getElementById("name").value;

    if (username && password) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      localStorage.setItem("name" , name);
      alert("Account created! Now login.");
      navigate("/login");
    } else {
      alert("Please fill in both fields.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
      <input type="text" id="name" placeholder="Enter name" className="w-full p-2 mb-4 border rounded" />
      <input type="text" id="newUsername" placeholder="Enter Email" className="w-full p-2 mb-4 border rounded" />
      <input type="password" id="newPassword" placeholder="Enter password" className="w-full p-2 mb-4 border rounded" />
      <button onClick={handleRegister} className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded">Create Account</button>
      <p className="mt-4 text-center">
        Already have an account? <a href="/login" className="text-blue-600 underline">Login</a>
      </p>
    </div>
  );
};

export default Register;
