import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
    const storedName = localStorage.getItem("name");

    if (username === storedUsername && password === storedPassword) {
        const userObject = {
            name: storedName,
            email: username,
          };
          localStorage.setItem("loggedInUser", JSON.stringify(userObject));
      
  
          window.dispatchEvent(new Event("loginStatusChanged"));
      
          navigate("/");
        } else {
          alert("Incorrect username or password.");
        }
      };

  return (
    <div className="max-w-md mx-auto mt-20 bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      <input type="text" id="loginUsername" placeholder="Email" className="w-full p-2 mb-4 border rounded" />
      <input type="password" id="loginPassword" placeholder="Password" className="w-full p-2 mb-4 border rounded" />
      <button onClick={handleLogin} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">Login</button>
      <p className="mt-4 text-center">
        Don’t have an account? <a href="/register" className="text-blue-600 underline">Register</a>
      </p>
    </div>
  );
};

export default Login;
