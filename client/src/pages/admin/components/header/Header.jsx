import { Link, useNavigate } from "react-router-dom";
import { useWindowSize } from "@uidotdev/usehooks";

import { images } from "../../../../constants";
import { useEffect, useState } from "react";
import { AiFillDashboard, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaComments, FaUser } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import NavItem from "./NavItem";
import NavItemCollapse from "./NavItemCollapse";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { createPost } from "../../../../services/index/posts";

const Header = () => {
  const navigate = useNavigate();
  const userState = useSelector((state) => state.user);
  const queryClient = useQueryClient();
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [activeNavName, setActiveNavName] = useState("dashboard");
  const windowSize = useWindowSize();

  const { mutate: mutateCreatePost, isLoading: isLoadingCreatePost } =
    useMutation({
      mutationFn: ({ slug, token }) => {
        return createPost({
          token,
        });
      },
      onSuccess: (data) => {
        queryClient.invalidateQueries(["posts"]);
        toast.success("Post is created, edit that now!");
        navigate(`/admin/posts/manage/edit/${data.slug}`);
      },
      onError: (error) => {
        toast.error(error.message);
        console.log(error);
      },
    });

  const toggleMenuHandler = () => {
    setIsMenuActive((prevState) => !prevState);
  };

  useEffect(() => {
    if (windowSize.width < 1024) {
      setIsMenuActive(false);
    } else {
      setIsMenuActive(true);
    }
  }, [windowSize.width]);

  const handleCreateNewPost = ({ token }) => {
    mutateCreatePost({ token });
  };

  return (
    <header className="flex h-fit w-full items-center justify-between p-4 lg:h-full lg:max-w-[300px] lg:flex-col lg:items-start lg:justify-start lg:p-0 bg-green-800 text-white">
      {/* logo */}
      {/* <Link to="/" className="px-6 py-4 w-full">
        <div className="flex items-center gap-3">
          <img src={images.Logo} alt="logo" className="w-10 lg:w-12" />
          <span className="font-bold text-xl hidden lg:block text-orange-400">Farm Blog</span>
        </div>
      </Link> */}
      
      {/* menu burger icon */}
      <div className="cursor-pointer lg:hidden mr-2">
        {isMenuActive ? (
          <AiOutlineClose className="w-6 h-6 text-orange-400" onClick={toggleMenuHandler} />
        ) : (
          <AiOutlineMenu className="w-6 h-6 text-orange-400" onClick={toggleMenuHandler} />
        )}
      </div>
      
      {/* sidebar container */}
      {isMenuActive && (
        <div className="fixed inset-0 lg:static lg:h-full lg:w-full">
          {/* underlay */}
          <div
            className="fixed inset-0 bg-black opacity-50 lg:hidden"
            onClick={toggleMenuHandler}
          />
          
          {/* sidebar */}
          <div className="fixed top-0 bottom-0 left-0 z-50 w-3/4 overflow-y-auto bg-green-800 p-4 lg:static lg:h-full lg:w-full lg:p-6">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src={images.Logo} alt="logo" className="w-10 lg:w-12" />
              <span className="font-bold text-xl text-orange-400">Farm Blog</span>
            </Link>
            
            <h4 className="mt-10 font-bold text-orange-300 text-sm tracking-wider">MAIN MENU</h4>
            
            {/* menu items */}
            <div className="mt-6 flex flex-col gap-y-[0.563rem]">
              <NavItem
                title="Dashboard"
                link="/admin"
                icon={<AiFillDashboard className="text-xl" />}
                name="dashboard"
                activeNavName={activeNavName}
                setActiveNavName={setActiveNavName}
              />
              <NavItem
                title="Comments"
                link="/admin/comments"
                icon={<FaComments className="text-xl" />}
                name="comments"
                activeNavName={activeNavName}
                setActiveNavName={setActiveNavName}
              />

              <NavItemCollapse
                title="Posts"
                icon={<MdDashboard className="text-xl" />}
                name="posts"
                activeNavName={activeNavName}
                setActiveNavName={setActiveNavName}
              >
                <Link to="/admin/posts/manage" className="pl-8 py-2 block text-gray-200 hover:text-orange-300 transition duration-150">
                  Manage all posts
                </Link>
                <button
                  disabled={isLoadingCreatePost}
                  className="text-start pl-8 py-2 w-full text-gray-200 hover:text-orange-300 transition duration-150 disabled:opacity-60 disabled:cursor-not-allowed"
                  onClick={() =>
                    handleCreateNewPost({ token: userState.userInfo.token })
                  }
                >
                  Add New Post
                </button>
                <Link to="/admin/categories/manage" className="pl-8 py-2 block text-gray-200 hover:text-orange-300 transition duration-150">
                  Categories
                </Link>
              </NavItemCollapse>

              <NavItem
                title="Users"
                link="/admin/users/manage"
                icon={<FaUser className="text-xl" />}
                name="users"
                activeNavName={activeNavName}
                setActiveNavName={setActiveNavName}
              />
            </div>
            
            <div className="mt-auto pt-10 lg:pt-20">
              <div className="bg-green-700 p-4 rounded-lg shadow-inner">
                <p className="text-sm text-green-100">Logged in as:</p>
                <p className="font-medium text-orange-300">{userState?.userInfo?.name || "Admin User"}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;