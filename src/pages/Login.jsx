import React, { useState } from "react";

const Login = ({ onSubmit }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password, role, isLogin });
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="w-full  max-w-md mx-auto p-8 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] auth-animate">
        <h2 className="text-3xl font-bold text-center mb-2">
          {isLogin ? "Welcome Back" : "Join Us"}
        </h2>
        <p className="text-center text-gray-500 mb-8">
          {isLogin
            ? "Continue your learning journey"
            : "Start your learning journey"}
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="w-full pl-4 pr-4 py-3.5 border border-gray-200 rounded-xl bg-gray-50 focus:ring-2 focus:ring-black"
                required
              />
            </div>

            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full pl-4 pr-4 py-3.5 border border-gray-200 rounded-xl bg-gray-50 focus:ring-2 focus:ring-black"
                required
              />
            </div>

            {!isLogin && (
              <div className="relative">
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full pl-4 pr-4 py-3.5 border border-gray-200 rounded-xl bg-gray-50 focus:ring-2 focus:ring-black"
                  required
                >
                  <option value="student">Student</option>
                  <option value="teacher">Teacher</option>
                </select>
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-black text-white rounded-xl hover:bg-black/90 transform transition-all duration-300 ease-in-out hover:scale-[1.02] active:scale-[0.98] font-medium"
          >
            {isLogin ? "Sign In" : "Create Account"}
          </button>

          <div className="relative flex items-center">
            <div className="w-full border-t border-gray-200"></div>
            <span className="px-2 bg-white text-gray-500 text-sm">or</span>
            <div className="w-full border-t border-gray-200"></div>
          </div>

          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="w-full py-3.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all duration-300 text-sm font-medium"
          >
            {isLogin
              ? "Don't have an account? Sign up"
              : "Already have an account? Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
