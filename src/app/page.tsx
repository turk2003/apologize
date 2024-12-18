'use client'
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const handleNoClick = () => {
    alert("ขี้โม้! เค้าไม่เชื่อ~");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-100 text-center">
      <h1 className="text-3xl font-bold text-pink-600">เตงโกรธเค้าหยอ? 🥺</h1>
      <div className="mt-6">
        <img
          src="/IMG_4.PNG"
          alt="รูปแฟน"
          className="w-40 h-40 rounded-full border-4 border-pink-400"
        />
      </div>
      <div className="mt-8 flex space-x-4">
        {/* ใช้ Link เพื่อนำทางไปหน้าต่อไป */}
        <Link href="/sc">
          <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
            ใช่
          </button>
        </Link>
        <button
          onClick={handleNoClick} // แสดง alert เมื่อกดปุ่ม "ไม่"
          className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          ไม่
        </button>
      </div>
    </div>
  );
}
