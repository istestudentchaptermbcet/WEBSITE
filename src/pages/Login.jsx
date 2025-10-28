import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login, loginWithGoogle } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(email, password);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      await loginWithGoogle();
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="pt-24 flex justify-center items-center min-h-screen bg-gradient-to-br from-[#1e3c72] via-[#2a5298] to-[#1e3c72] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1),transparent_50%)] pointer-events-none"></div>

      <div className="relative z-10 bg-white/10 backdrop-blur-xl p-10 rounded-3xl w-full max-w-md flex flex-col shadow-2xl border border-white/20">
        <h2 className="text-3xl font-bold text-white mb-8 text-center" style={{ fontFamily: 'Audiowide, Orbitron, sans-serif' }}>
          Welcome Back
        </h2>

        {/* Google Login Button */}
        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="mb-6 p-4 rounded-xl bg-white/20 text-white font-semibold hover:bg-white/30 transition-all duration-300 flex items-center justify-center gap-3 border border-white/30 hover:shadow-lg disabled:opacity-50"
          style={{ fontFamily: 'Exo 2, sans-serif' }}
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          {loading ? "Signing in..." : "Continue with Google"}
        </button>

        {/* Divider */}
        <div className="flex items-center mb-6">
          <div className="flex-1 h-px bg-white/30"></div>
          <span className="px-3 text-white/60 text-sm" style={{ fontFamily: 'Exo 2, sans-serif' }}>or</span>
          <div className="flex-1 h-px bg-white/30"></div>
        </div>

        {/* Email/Password Form */}
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="mb-4 p-4 rounded-xl outline-none border border-white/30 bg-white/10 text-white placeholder-white/60 focus:bg-white/20 transition-all"
            style={{ fontFamily: 'Exo 2, sans-serif' }}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="mb-6 p-4 rounded-xl outline-none border border-white/30 bg-white/10 text-white placeholder-white/60 focus:bg-white/20 transition-all"
            style={{ fontFamily: 'Exo 2, sans-serif' }}
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="p-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300 disabled:opacity-50"
            style={{ fontFamily: 'Exo 2, sans-serif' }}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </section>
  );
}
