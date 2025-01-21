import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Blog from "./pages/Blog";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import UserBlog from "./pages/UserBlog";
import CreateBlog from "./pages/CreateBlog";
import BlogDetails from "./pages/BlogDetails";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Toaster />
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/my-blog" element={<UserBlog />} />
          <Route path="/blog-details/:id" element={<BlogDetails />} />
          <Route path="/create-blog" element={<CreateBlog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
