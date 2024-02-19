import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSidebar from "../components/DashSidebar";
import DashProfile from "../components/DashProfile";
import DashPosts from "../components/DashPosts";
import DashUsers from "../components/DashUsers";
import DashCommnets from "../components/DashCommnets";

export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParamas = new URLSearchParams(location.search);
    const tabFromUrl = urlParamas.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* sidebar */}
      <div className="md:w-56">
        <DashSidebar />
      </div>
      {/* profile */}
      {tab === "profile" && <DashProfile />}
      {/* posts */}
      {tab === 'posts' && <DashPosts/>}
      {/* users */}
      {tab === 'users' && <DashUsers/>}
      {/* comments */}
      {tab === 'comments' && <DashCommnets/>}
    </div>
  );
}
