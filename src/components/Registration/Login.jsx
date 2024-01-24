import { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useFormik } from 'formik';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // SignIn Validation Variables
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => { 
      console.log(values);
    }
  })

// 
  // const handleSubmit = (e) => {
    // e.preventDefault();
    // 
    // 
    // console.log("Email:", email);
    // console.log("Password:", password);
  // };
  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-cover"
      style={{ backgroundImage: "url(your-background-image-url.jpg)" }}
    >
      <div className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-md p-8 rounded-lg shadow-md">
        <h2 className="text-3xl text-gray-800 font-semibold mb-6">
          Welcome back to Mayfly Oasis
        </h2>
        <form className="flex flex-col items-center" onSubmit={formik}>
          <div className="flex items-center mb-4">
            <FaEnvelope className="mr-2" />
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-64 p-2 border-b border-gray-500 bg-transparent outline-none placeholder-gray-500"
              placeholder="Your Email"
            />
          </div>
          <div className="flex items-center mb-6">
            <FaLock className="mr-2" />
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-64 p-2 border-b border-gray-500 bg-transparent outline-none placeholder-gray-500"
              placeholder="Your Password"
            />
          </div>
          <button
            type="submit"
            className="bg-black text-white rounded-md py-2 w-64 hover:bg-black-600"
          >
            Login
          </button>
          <p className="mt-4 text-gray-600">
            Don`t have an account?{" "}
            <a href="./Register" className="text-blue-500">
              Register here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
