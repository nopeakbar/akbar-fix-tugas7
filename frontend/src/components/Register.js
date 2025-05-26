import React, { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  
  const RegisterUser = (e) => {
    e.preventDefault();
    
    if (username && password) {
      console.log("Registration attempted with:", { username, password });

      setMsg("Registration successful!");
    } else {
      setMsg("Please fill in all fields");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
     
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-72 h-72 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-white rounded-full opacity-60 animate-ping delay-500"></div>
        <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-pink-300 rounded-full opacity-70 animate-ping delay-700"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-cyan-300 rounded-full opacity-50 animate-ping delay-1000"></div>
      </div>

      <div className="relative z-10 w-full max-w-md px-6">
        {/* Glowing card container */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-300">
          {/* Header with gradient text */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              Create Account
            </h1>
            <p className="text-white/70 text-sm">Join us and start your journey</p>
          </div>

                      <div onSubmit={RegisterUser} className="space-y-6"
                 onClick={(e) => {
                   if (e.target.type === 'submit') {
                     RegisterUser(e);
                   }
                 }}>
            {msg && (
              <div className="bg-red-500/20 border border-red-500/30 rounded-xl p-3 text-center animate-shake">
                <p className="text-red-300 text-sm font-medium">{msg}</p>
              </div>
            )}

          
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-violet-500 rounded-xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="relative w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-400/50 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
              />
            </div>

           
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="relative w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
              />
            </div>

          
            <button
              type="submit"
              onClick={RegisterUser}
              className="relative w-full py-3 px-6 bg-gradient-to-r from-pink-500 via-purple-500 to-violet-600 hover:from-pink-600 hover:via-purple-600 hover:to-violet-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-200 group overflow-hidden"
            >
              <span className="relative z-10">Create Account</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
                      </div>

          <div className="flex justify-center mt-6 space-x-4">
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-100"></div>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-200"></div>
          </div>
        </div>
            
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-32 h-2 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full blur-xl opacity-60"></div>
      </div>

      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Register;
