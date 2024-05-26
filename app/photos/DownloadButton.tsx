'use client'

import { useState } from "react";
import { supabase } from "@/utils/supabaseClient";
import toast from "react-hot-toast";

interface DownloadButtonProps {
  image: string;
}

export default function DownloadButton({ image } : DownloadButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);

    const session = await supabase.auth.getSession();
    const token = session.data.session?.access_token;
    const res = await fetch("/api/usage-meter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ image }),
    });

    setLoading(false);

    if (res.ok) {
      const { total_downloads } = await res.json();
      toast.success(`Success! You have downloaded ${total_downloads} images`);
    } else {
      const err = await res.json();
      toast.error(`Error! ${err.message}`);
    }
  };

  return (
    <>
      <button
        onClick={handleDownload}
        className={`px-4 py-2 text-white rounded ${loading ? "bg-gray-500" : "bg-blue-500"}`}
        disabled={loading}
      >
        {loading ? "Submitting..." : "Download"}
      </button>
    </>
  );
}
