import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Suspense, lazy } from "react";
import { AnimatePresence } from "framer-motion";

import "./App.css";
import Navbar from "./components/common/Navbar.jsx";
import Footer from "./components/HomePage/Footer.jsx";
import LoadingSpinner from "./components/common/LoadingSpinner.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import PageTransition from "./components/PageTransition.jsx";
import {HelmetProvider} from "react-helmet-async";

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
const OTPVerificationPage = lazy(() => import("./pages/register/OTPVerificationPage"));
const ForgotPasswordPage = lazy(() => import("./pages/forgotPassword/ForgotPasswordPage"));
const ResetPasswordPage = lazy(() => import("./pages/forgotPassword/ResetPasswordPage"));

function App() {
  return (
    <div className="App font-opensans bg-amber-50">
      <HelmetProvider>

      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<LoadingSpinner />}>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/about" element={<PageTransition><MoreInfo /></PageTransition>} />
            <Route path="/journey" element={<PageTransition><Journey /></PageTransition>} />
            <Route path="/franchise" element={<PageTransition><FranchisePage /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><ContactUs /></PageTransition>} />
            <Route path="/media" element={<PageTransition><MediaPage /></PageTransition>} />
            <Route path="/gallery" element={<PageTransition><GalleryPage /></PageTransition>} />
            
            {/* <Route index path="/blogPage" element={<PageTransition><HomePage /></PageTransition>} />
            <Route path="/blog" element={<PageTransition><BlogPage /></PageTransition>} />
            <Route path="/blog/:slug" element={<PageTransition><ArticleDetailPage /></PageTransition>} /> */}
            <Route path="/register" element={<PageTransition><RegisterPage /></PageTransition>} />
            <Route path="/verify-otp" element={<PageTransition><OTPVerificationPage /></PageTransition>} />
            <Route path="/login" element={<PageTransition><LoginPage /></PageTransition>} />
            <Route path="/profile" element={<PageTransition><ProfilePage /></PageTransition>} />
            <Route path="/forgot-password" element={<PageTransition><ForgotPasswordPage /></PageTransition>} />
            <Route path="/reset-password/:token" element={<PageTransition><ResetPasswordPage /></PageTransition>} />

            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<PageTransition><Admin /></PageTransition>} />
              <Route path="comments" element={<PageTransition><Comments /></PageTransition>} />
              <Route path="posts/manage" element={<PageTransition><ManagePosts /></PageTransition>} />
              <Route path="posts/manage/edit/:slug" element={<PageTransition><EditPost /></PageTransition>} />
              <Route path="categories/manage" element={<PageTransition><Categories /></PageTransition>} />
              <Route path="categories/manage/edit/:slug" element={<PageTransition><EditCategories /></PageTransition>} />
              <Route path="users/manage" element={<PageTransition><Users /></PageTransition>} />
            </Route>

            <Route path="/employee" element={<EmployeeLayout />}>
              <Route index element={<PageTransition><EmployeePosts /></PageTransition>} />
              <Route path="posts/manage" element={<PageTransition><EmployeePosts /></PageTransition>} />
              <Route path="posts/manage/edit/:slug" element={<PageTransition><EditEmployeePost /></PageTransition>} />
              <Route path="posts/manage/create" element={<PageTransition><CreateEmployeePost /></PageTransition>} />
            </Route>
          </Routes>
        </AnimatePresence>
      </Suspense>
      <Footer />

      <Toaster />
      </HelmetProvider>
    </div>
  );
}

export default App;