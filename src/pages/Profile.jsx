import { useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { userAPI } from "../services/api";

export default function Profile() {
  const { user, logout } = useAuth();
  const { email } = useParams();
  const [profileData, setProfileData] = useState(user);
  const [isEditing, setIsEditing] = useState(false);
  const [about, setAbout] = useState(user?.about || "");

  useEffect(() => {
    if (user) {
      setProfileData(user);
      setAbout(user.about || "");
    }
  }, [user]);

  if (!user || user.email !== email) {
    return (
      <section className="pt-24 flex justify-center items-center min-h-screen text-white">
        <p>Access denied. Please log in.</p>
      </section>
    );
  }

  const upcomingEvents = [
    { title: "Tech Talk: React Advanced", date: "Nov 5, 2025" },
    { title: "ISTE State Convention", date: "Dec 12, 2025" },
    { title: "Photography Workshop", date: "Jan 10, 2026" },
  ];

  const handleSaveProfile = async () => {
    try {
      const response = await userAPI.updateProfile({ about });
      setProfileData(response.data);
      setIsEditing(false);
      alert("Profile updated successfully!");
    } catch (error) {
      alert("Failed to update profile: " + error.message);
    }
  };

  return (
    <section className="pt-24 px-6 min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto flex flex-col md:flex-row gap-6"
      >
        {/* User Card */}
        <div className="bg-white/20 backdrop-blur-md p-6 rounded-2xl flex flex-col items-center w-full md:w-1/3 shadow-lg">
          <img
            src="/images/profile-placeholder.jpg"
            alt={user.name}
            className="w-32 h-32 rounded-full mb-4 border-4 border-white/30"
          />
          <h2 className="text-2xl font-bold text-white mb-2">{user.name}</h2>
          <p className="text-white/90 mb-4">{user.role}</p>
          <button
            onClick={logout}
            className="p-2 rounded-xl bg-white/30 text-white font-semibold hover:bg-white/50 transition"
          >
            Logout
          </button>
        </div>

        {/* Info & Events */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/20 backdrop-blur-md p-4 rounded-xl text-center">
              <p className="text-white font-bold text-2xl">12</p>
              <p className="text-white/90 text-sm">Events Joined</p>
            </div>
            <div className="bg-white/20 backdrop-blur-md p-4 rounded-xl text-center">
              <p className="text-white font-bold text-2xl">8</p>
              <p className="text-white/90 text-sm">Upcoming Events</p>
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="bg-white/20 backdrop-blur-md p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold text-white mb-4">Upcoming Events</h3>
            <ul className="flex flex-col gap-3">
              {upcomingEvents.map((event, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex justify-between bg-white/10 p-3 rounded-lg hover:bg-white/20 transition"
                >
                  <span className="text-white">{event.title}</span>
                  <span className="text-white/80">{event.date}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Editable Section */}
          <div className="bg-white/20 backdrop-blur-md p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold text-white mb-4">About Me</h3>
            {isEditing ? (
              <>
                <textarea
                  className="w-full p-3 rounded-lg bg-white/20 text-white outline-none border border-white/30 resize-none"
                  rows={4}
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                  placeholder="Write something about yourself..."
                />
                <div className="mt-3 flex gap-2">
                  <button
                    onClick={handleSaveProfile}
                    className="p-2 rounded-xl bg-green-500 text-white font-semibold hover:bg-green-600 transition"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setIsEditing(false)}
                    className="p-2 rounded-xl bg-gray-500 text-white font-semibold hover:bg-gray-600 transition"
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <p className="text-white/90 mb-4">{profileData?.about || "No description added yet."}</p>
                <button
                  onClick={() => setIsEditing(true)}
                  className="p-2 rounded-xl bg-white/30 text-white font-semibold hover:bg-white/50 transition"
                >
                  Edit Profile
                </button>
              </>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
