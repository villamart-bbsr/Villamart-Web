




import { useState } from "react"
import { BiArrowBack } from "react-icons/bi"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"

import { getPasswordResetToken } from "../services/operations/authapi"

function ForgotPassword() {
  const [email, setEmail] = useState("")
  const [emailSent, setEmailSent] = useState(false)
  const dispatch = useDispatch()
  const { loading } = useSelector((state) => state.auth)

  const handleOnSubmit = (e) => {
    e.preventDefault()
    dispatch(getPasswordResetToken(email, setEmailSent))
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#0D0F1B] to-[#151B35] text-white">
      {loading ? (
        <div className="loader animate-spin h-16 w-16 border-t-4 border-blue-400 rounded-full"></div>
      ) : (
        <div className="max-w-md w-full p-8 bg-[#1E2335] rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-center text-blue-400">
            {!emailSent ? "Reset your password" : "Check your email"}
          </h1>
          <p className="mt-4 text-center text-gray-400">
            {!emailSent
              ? "Don't worry. We'll email you instructions to reset your password. If you don't have access to your email, we can try account recovery."
              : `We have sent the reset email to ${email}`}
          </p>
          <form onSubmit={handleOnSubmit} className="mt-6 space-y-4">
            {!emailSent && (
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="email">
                  Email Address <sup className="text-pink-400">*</sup>
                </label>
                <input
                  required
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email address"
                  className="w-full px-4 py-2 rounded-lg bg-[#2A2F45] text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            )}
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-500 text-richblack-900 font-semibold hover:opacity-90 transition"
            >
              {!emailSent ? "Submit" : "Resend Email"}
            </button>
          </form>
          <div className="mt-6 text-center">
            <Link to="/login" className="text-blue-400 hover:text-blue-300 flex items-center justify-center gap-x-2">
              <BiArrowBack size={20} /> Back To Login
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default ForgotPassword