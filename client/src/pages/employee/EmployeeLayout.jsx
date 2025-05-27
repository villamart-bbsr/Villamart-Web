import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaUser, FaSignOutAlt } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { logout } from "../../store/actions/user";
import { useDispatch } from "react-redux";

const EmployeeLayout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const [isMenuActive, setIsMenuActive] = useState(false);

  useEffect(() => {
    if (!userState.userInfo || !userState.userInfo.isEmployee) {
      navigate("/");
      toast.error("You are not authorized to access this page");
    }
  }, [navigate, userState.userInfo]);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-green-50">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-800">Employee Dashboard</h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <FaUser className="text-green-600" />
              <span className="text-green-800">{userState?.userInfo?.name}</span>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-red-600 hover:text-red-800"
            >
              <FaSignOutAlt />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <Outlet />
      </div>
    </div>
  );
};

export default EmployeeLayout; 