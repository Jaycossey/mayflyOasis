import { useState, useEffect } from "react";
import {
  //   FaUser,
  FaEnvelope,
  FaLock,
  FaCalendar,
  FaGlobe,
  FaUser
} from "react-icons/fa";
// Formik variables
import { useFormik, Formik, Form } from "formik";
import { signUpSchema } from "./schema";
const initialValues = {
  username: "",
  name: "",
  email: "",
  password: "",
  confirmPassword: ""
};

export default function Register() {
  // Choose from the list of countries
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");

  //  useEffect for fetching country
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  //  Formik validation for registering
  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, actions) => {
      console.log(values);
      actions.resetForm();
    }
  });
  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-cover"
      style={{ backgroundImage: "url(your-background-image-url.jpg)" }}
    >
      <div className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-md p-8 rounded-lg shadow-md">
        <h2 className="text-3xl text-gray-800 font-semibold mb-6">
          Create an Account at Mayfly Oasis
        </h2>
        <Formik
          initialValues={initialValues}
          validationSchema={signUpSchema}
          onSubmit={handleSubmit}>
          {/* restructure error */}
          {({ errors, touched }) =>
            <Form className="flex flex-col items-center">
              {/************..................................Name.................................************/}
              <div className="flex items-center mb-4">
                <FaUser className="mr-2" />
                <input
                  type="text"
                  className="w-64 p-2 border-b border-gray-500 bg-transparent outline-none placeholder-gray-500"
                  placeholder="Name"
                  name="name"
                  value={values.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </div>
              {/*--------------- Name Error Container ---------------  */}
              <div className="errorContainer">
                {errors.name &&
                  touched.name &&
                  <p className="formError">
                    {errors.name}
                  </p>}
              </div>
              {/************.................................Email.................................************/}
              <div className="flex items-center mb-4">
                <FaEnvelope className="mr-2" />
                <input
                  type="email"
                  className="w-64 p-2 border-b border-gray-500 bg-transparent outline-none placeholder-gray-500"
                  placeholder="Your Email"
                  name="email"
                  value={values.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </div>
              {/*--------------- Email Error Container ---------------  */}
              <div className="errorContainer">
                {errors.email &&
                  touched.email &&
                  <p className="formError">
                    {errors.email}
                  </p>}
              </div>
              {/************..................................DOB.................................************/}
              <div className="flex items-center mb-4">
                <FaCalendar className="mr-2" />
                <input
                  type="date"
                  className="w-64 p-2 border-b border-gray-500 bg-transparent outline-none placeholder-gray-500"
                  placeholder="Date of Birth"
                />
              </div>
              {/************..................................Country.................................************/}
              <div className="flex items-center mb-4">
                <FaGlobe className="mr-2" />
                <select
                  value={selectedCountry}
                  onChange={e => setSelectedCountry(e.target.value)}
                  className="w-64 p-2 border-b border-gray-500 bg-transparent outline-none placeholder-gray-500"
                >
                  <option value="" disabled>
                    Select your Country
                  </option>
                  {countries.map(country =>
                    <option
                      key={country.name.common}
                      value={country.name.common}
                    >
                      {country.name.common}
                    </option>
                  )}
                </select>
              </div>
              {/************..................................Password.................................************/}
              <div className="flex items-center mb-6">
                <FaLock className="mr-2" />
                <input
                  type="password"
                  className="w-64 p-2 border-b border-gray-500 bg-transparent outline-none placeholder-gray-500"
                  placeholder="Your Password"
                  name="password"
                  value={values.password}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </div>
              {/*--------------- Password Error Container ---------------  */}
              <div className="errorContainer">
                {errors.password &&
                  touched.password &&
                  <p className="formError">
                    {errors.password}
                  </p>}
              </div>
              {/************..................................Confirm Password...............................************/}
              <div className="flex items-center mb-6">
                <FaLock className="mr-2" />
                <input
                  type="password"
                  className="w-64 p-2 border-b border-gray-500 bg-transparent outline-none placeholder-gray-500"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={values.confirmPassword}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </div>
              {/*--------------- Confirm Password Error Container ---------------  */}
              <div className="errorContainer">
                {errors.confirmPassword &&
                  touched.confirmPassword &&
                  <p className="formError">
                    {errors.confirmPassword}
                  </p>}
              </div>
              {/************.............................Register Button.............................************/}
              <button
                type="submit"
                className="bg-black text-white rounded-md py-2 w-64 hover:bg-black-600"
              >
                Register
              </button>
              <p className="mt-4 text-gray-600">
                Already have an account at Mayfly Oasis?
                <a href="./Login" className="text-black-500">
                  Login here
                </a>
              </p>
            </Form>}
        </Formik>
      </div>
    </div>
  );
}
