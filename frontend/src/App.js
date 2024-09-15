import './App.css';
import React from "react";

// Import Route and Routes from react-router-dom
import { Route, Routes } from "react-router-dom";

// Import all the components
import Navbar from "./components/navbar";
import PostList from "./components/postList";
import EditPost from "./components/postEdit";
import CreatePost from "./components/postCreate";
import Register from "./components/register";
import Login from "./components/login";

const App = () => {
  return (
    <>
      {/* Navbar will display on all routes */}
      <Navbar />
      {/* Routes to define different paths */}
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/edit/:id" element={<EditPost />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
