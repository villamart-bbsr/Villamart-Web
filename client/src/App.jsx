import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import "./App.css";
import ArticleDetailPage from "./pages/articleDetail/ArticleDetailPage";
import HomePage from "./pages/home/HomePage";
import RegisterPage from "./pages/register/RegisterPage";
import LoginPage from "./pages/login/LoginPage";
import ProfilePage from "./pages/profile/ProfilePage";
import AdminLayout from "./pages/admin/AdminLayout";
import Admin from "./pages/admin/screens/Admin";
import Comments from "./pages/admin/screens/comments/Comments";
import ManagePosts from "./pages/admin/screens/posts/ManagePosts";
import EditPost from "./pages/admin/screens/posts/EditPost";
import Categories from "./pages/admin/screens/categories/Categories";
import EditCategories from "./pages/admin/screens/categories/EditCategories";
import Users from "./pages/admin/screens/users/Users";
import BlogPage from "./pages/blog/BlogPage";
import Navbar from "./components/common/Navbar.jsx"
import Footer from "./components/HomePage/Footer.jsx";
import Home from "./pages/Home.jsx"
import MoreInfo from "./pages/MoreInfo.jsx";
import Journey from "./pages/Journey.jsx";
import FranchisePage from "./pages/FranchiseModel.jsx";
import ContactUs from "./pages/ContactUs.jsx";

import MediaPage from "./pages/mediaPage.jsx";
import GalleryPage from "./pages/GalleryPage.jsx";

function App() {
  return (
    <div className="App font-opensans bg-amber-50 ">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/moreInfo" element={<MoreInfo/>}/>
        <Route path="/journey" element={<Journey/>}/>
        <Route path='/franchise' element={<FranchisePage/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path='/media' element={<MediaPage/>}/>
        <Route path='/gallery' element={<GalleryPage/>}/>
        <Route index path="/blogPage" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<ArticleDetailPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Admin />} />
          <Route path="comments" element={<Comments />} />
          <Route path="posts/manage" element={<ManagePosts />} />
          <Route path="posts/manage/edit/:slug" element={<EditPost />} />
          <Route path="categories/manage" element={<Categories />} />
          <Route
            path="categories/manage/edit/:slug"
            element={<EditCategories />}
          />
          <Route path="users/manage" element={<Users />} />
        </Route>
      </Routes>
      <Footer/>
      
      <Toaster />
    </div>
  );
}

export default App;
