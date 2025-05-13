// import { useState } from "react"
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
// import { BiArrowBack } from "react-icons/bi"
// import { useDispatch, useSelector } from "react-redux"
// import { Link, useLocation, useNavigate } from "react-router-dom"

// import { resetPassword } from "../services/operations/authapi"

// function UpdatePassword() {
//   const navigate = useNavigate()
//   const dispatch = useDispatch()
//   const location = useLocation()
//   const { loading } = useSelector((state) => state.auth)
//   const [formData, setFormData] = useState({
//     password: "",
//     confirmPassword: "",
//   })

//   const [showPassword, setShowPassword] = useState(false)
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false)

//   const { password, confirmPassword } = formData

//   const handleOnChange = (e) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       [e.target.name]: e.target.value,
//     }))
//   }

//   const handleOnSubmit = (e) => {
//     e.preventDefault()
//     const token = location.pathname.split("/").at(-1)
//     dispatch(resetPassword(password, confirmPassword, token, navigate))
//   }

//   return (
//     <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center bg-gradient-to-b from-[#0D0F1B] to-[#151B35] selection:bg-[#357FF4] selection:text-white">
//       {loading ? (
//         <div className="spinner"></div>
//       ) : (
//         <div className="max-w-[500px] p-4 lg:p-8">
//           <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-richblack-5 dark:text-black">
//             Choose new password
//           </h1>
//           <p className="my-4 text-[1.125rem] leading-[1.625rem] text-richblack-100 dark:text-cyan-300">
//             Almost done. Enter your new password and youre all set.
//           </p>
//           <form onSubmit={handleOnSubmit}>
//             <label className="relative">
//               <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5 dark:text-black">
//                 New Password <sup className="text-pink-200">*</sup>
//               </p>
//               <input
//                 required
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 value={password}
//                 onChange={handleOnChange}
//                 placeholder="Enter Password"
//                 className="form-style w-full !pr-10"
//               />
//               <span
//                 onClick={() => setShowPassword((prev) => !prev)}
//                 className="absolute right-3 top-[38px] z-[10] cursor-pointer"
//               >
//                 {showPassword ? (
//                   <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
//                 ) : (
//                   <AiOutlineEye fontSize={24} fill="#AFB2BF" />
//                 )}
//               </span>
//             </label>
//             <label className="relative mt-3 block">
//               <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
//                 Confirm New Password <sup className="text-pink-200">*</sup>
//               </p>
//               <input
//                 required
//                 type={showConfirmPassword ? "text" : "password"}
//                 name="confirmPassword"
//                 value={confirmPassword}
//                 onChange={handleOnChange}
//                 placeholder="Confirm Password"
//                 className="form-style w-full !pr-10"
//               />
//               <span
//                 onClick={() => setShowConfirmPassword((prev) => !prev)}
//                 className="absolute right-3 top-[38px] z-[10] cursor-pointer"
//               >
//                 {showConfirmPassword ? (
//                   <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
//                 ) : (
//                   <AiOutlineEye fontSize={24} fill="#AFB2BF" />
//                 )}
//               </span>
//             </label>

//             <button
//               type="submit"
//               className="mt-6 w-full rounded-[8px] bg-yellow-50 py-[12px] px-[12px] font-medium text-richblack-900"
//             >
//               Reset Password
//             </button>
//           </form>
//           <div className="mt-6 flex items-center justify-between">
//             <Link to="/login">
//               <p className="flex items-center gap-x-2 text-richblack-5">
//                 <BiArrowBack /> Back To Login
//               </p>
//             </Link>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default UpdatePassword



import { useState } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { BiArrowBack } from "react-icons/bi"
import { useDispatch, useSelector } from "react-redux"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { resetPassword } from "../services/operations/authapi"

function UpdatePassword() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()
  const { loading } = useSelector((state) => state.auth)
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const { password, confirmPassword } = formData

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    const token = location.pathname.split("/").at(-1)
    dispatch(resetPassword(password, confirmPassword, token, navigate))
  }

  return (
    <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center bg-gradient-to-b from-[#0D0F1B] to-[#151B35] selection:bg-[#357FF4] selection:text-white">
      {loading ? (
        <div className="flex items-center justify-center">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-t-transparent border-white"></div>
        </div>
      ) : (
        <div className="w-full max-w-[500px] rounded-2xl backdrop-blur-lg bg-white/5 p-6 shadow-xl lg:p-8">
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Choose new password
          </h1>
          <p className="my-4 text-lg text-cyan-300">
            Almost done. Enter your new password and you're all set.
          </p>
          <form onSubmit={handleOnSubmit} className="space-y-6">
            <label className="relative block">
              <p className="mb-2 text-sm font-medium text-white">
                New Password <sup className="text-pink-400">*</sup>
              </p>
              <div className="relative">
                <input
                  required
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={password}
                  onChange={handleOnChange}
                  placeholder="Enter Password"
                  className="w-full rounded-lg border border-gray-600 bg-gray-800/50 px-4 py-3 text-white placeholder-gray-400 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition-colors hover:text-white"
                >
                  {showPassword ? (
                    <AiOutlineEyeInvisible size={24} />
                  ) : (
                    <AiOutlineEye size={24} />
                  )}
                </button>
              </div>
            </label>

            <label className="relative block">
              <p className="mb-2 text-sm font-medium text-white">
                Confirm New Password <sup className="text-pink-400">*</sup>
              </p>
              <div className="relative">
                <input
                  required
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleOnChange}
                  placeholder="Confirm Password"
                  className="w-full rounded-lg border border-gray-600 bg-gray-800/50 px-4 py-3 text-white placeholder-gray-400 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition-colors hover:text-white"
                >
                  {showConfirmPassword ? (
                    <AiOutlineEyeInvisible size={24} />
                  ) : (
                    <AiOutlineEye size={24} />
                  )}
                </button>
              </div>
            </label>

            <button
              type="submit"
              className="w-full transform rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-500 px-4 py-3 font-semibold text-gray-900 transition-all duration-200 hover:scale-[1.01] hover:shadow-lg focus:ring-2 focus:ring-yellow-400/50 active:scale-[0.99]"
            >
              Reset Password
            </button>
          </form>
          
          <div className="mt-6">
            <Link
              to="/login"
              className="inline-flex items-center gap-2 text-gray-300 transition-colors hover:text-white"
            >
              <BiArrowBack className="text-lg" />
              <span>Back To Login</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default UpdatePassword