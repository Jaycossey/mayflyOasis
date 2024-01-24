import { useState, useEffect } from "react";
import {
  //   FaUser,
  FaEnvelope,
  FaLock,
  FaCalendar,
  FaGlobe
} from "react-icons/fa";

export default function Register() {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-cover"
      style={{ backgroundImage: "url(your-background-image-url.jpg)" }}
    >
      <div className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-md 
p-8 rounded-lg shadow-md">
        <h2 className="text-3xl text-gray-800 font-semibold mb-6">
          Create an Account at Mayfly Oasis
        </h2>
        <form className="flex flex-col items-center">
          {/* -------- FullName --------*/}
          <div>FullName</div>
          {/* -------- Email --------*/}
          <div>Email</div>
          {/* -------- DOB -------- */}
          <div>DOB</div>
          {/* -------- Country --------*/}
          <div>Country</div>
          {/* -------- Password -------- */}
          <div>Password</div>
          {/* -------- ConfirmPassword -------- */}
          <div>confirmPassword</div>

        </form>
      </div>
    </div>
  );
}
