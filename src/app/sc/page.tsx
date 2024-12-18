'use client'
import { useState } from "react";
import Confetti from "react-confetti";

export default function NextStep() {
  const [showCelebration, setShowCelebration] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ top: "50%", left: "50%" });
  const [message1, setMessage1] = useState("เค้าขอโทษน้าาาา");
  const [message2, setMessage2] = useState("คืนดีกัน 💖");

  const handleYesClick = () => {
    setShowCelebration(true); // แสดงเอฟเฟกต์ฉลอง
    setMessage1("เย้ 🎉");
    setMessage2("");
  };

  const handleNoClick = () => {
    // เปลี่ยนตำแหน่งปุ่ม "ไม่" แบบสุ่ม
    const randomTop = `${Math.random() * 80 + 10}%`;
    const randomLeft = `${Math.random() * 80 + 10}%`;
    setButtonPosition({ top: randomTop, left: randomLeft });
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-blue-100 text-center">
      {showCelebration && <Confetti />} {/* เอฟเฟกต์ฉลอง */}
      <h1 className="text-3xl font-bold text-blue-600">{message1}</h1>
       <h1 className="text-3xl font-bold text-blue-600">{message2}</h1>

      
      {showCelebration ? (
        <div className="mt-6">
          <img
            src="/love.jpg"
            alt="เรารักกัน"
            className="w-60 h-60 rounded-lg shadow-lg"
          />
          <p className="mt-4 text-xl text-blue-500 font-semibold">รักเตงงงงงที่สุด! 💕</p>
        </div>
      ) : (
        <>
          <div className="mt-8 flex space-x-4">
            <button
              onClick={handleYesClick}
              className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              ใช่
            </button>
            <button
              onClick={handleNoClick}
              style={{
                position: "absolute",
                top: buttonPosition.top,
                left: buttonPosition.left,
              }}
              className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              ไม่
            </button>
          </div>
        </>
      )}
    </div>
  );
}
