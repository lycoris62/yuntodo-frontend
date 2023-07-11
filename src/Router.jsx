import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import TodolistPage from "./pages/TodolistPage.jsx";

const Router = () => {
  return (
    <BrowserRouter basename="/yuntodo-frontend">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/todolist/:date" element={<TodolistPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
