import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Suspense, lazy } from "react";

import "./App.css";
import Navbar from "./components/common/Navbar.jsx";
import Footer from "./components/HomePage/Footer.jsx";
import LoadingSpinner from "./components/common/LoadingSpinner.jsx";

// Lazy load all components
const ArticleDetailPage = lazy(() => import("./pages/articleDetail/ArticleDetailPage"));
const HomePage = lazy(() => import("./pages/home/HomePage"));
const RegisterPage = lazy(() => import("./pages/register/RegisterPage"));
const LoginPage = lazy(() => import("./pages/login/LoginPage"));
const ProfilePage = lazy(() => import("./pages/profile/ProfilePage"));
const AdminLayout = lazy(() => import("./pages/admin/AdminLayout"));
const Admin = lazy(() => import("./pages/admin/screens/Admin"));
const Comments = lazy(() => import("./pages/admin/screens/comments/Comments"));
const ManagePosts = lazy(() => import("./pages/admin/screens/posts/ManagePosts"));
const EditPost = lazy(() => import("./pages/admin/screens/posts/EditPost"));
const Categories = lazy(() => import("./pages/admin/screens/categories/Categories"));
const EditCategories = lazy(() => import("./pages/admin/screens/categories/EditCategories"));
const Users = lazy(() => import("./pages/admin/screens/users/Users"));
const BlogPage = lazy(() => import("./pages/blog/BlogPage"));
const Home = lazy(() => import("./pages/Home.jsx"));
const MoreInfo = lazy(() => import("./pages/MoreInfo.jsx"));
const Journey = lazy(() => import("./pages/Journey.jsx"));
const FranchisePage = lazy(() => import("./pages/FranchiseModel.jsx"));
const ContactUs = lazy(() => import("./pages/ContactUs.jsx"));
const MediaPage = lazy(() => import("./pages/mediaPage.jsx"));
const GalleryPage = lazy(() => import("./pages/GalleryPage.jsx"));
const EmployeeLayout = lazy(() => import("./pages/employee/EmployeeLayout"));
const EmployeePosts = lazy(() => import("./pages/employee/screens/posts/EmployeePosts"));
const EditEmployeePost = lazy(() => import("./pages/employee/screens/posts/EditEmployeePost"));
const CreateEmployeePost = lazy(() => import("./pages/employee/screens/posts/CreateEmployeePost"));

function App() {
  return (
    <div className="App font-opensans bg-amber-50">
      <Navbar />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/moreInfo" element={<MoreInfo />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/franchise" element={<FranchisePage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
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

          <Route path="/employee" element={<EmployeeLayout />}>
            <Route index element={<EmployeePosts />} />
            <Route path="posts/manage" element={<EmployeePosts />} />
            <Route path="posts/manage/edit/:slug" element={<EditEmployeePost />} />
            <Route path="posts/manage/create" element={<CreateEmployeePost />} />
          </Route>
        </Routes>
      </Suspense>
      <Footer />

      <Toaster />
    </div>
  );
}

export default App;