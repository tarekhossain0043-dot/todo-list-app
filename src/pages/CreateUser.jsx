import { useState } from "react";
import { signUp } from "../functions/auth"; // ধরে নিলাম এটি আপনার Firebase ফাংশন

export default function CreateUser() {
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  // userData টি state পরিবর্তনের সাথে সাথে আপডেট হবে
  const userData = {
    fName,
    lName,
    // email এবং password ফায়ারবেস অথেন্টিকেশনের পরে আর দরকার নেই,
    // কারণ এটি শুধুমাত্র Firestore-এ অতিরিক্ত তথ্য যোগ করার জন্য
    // তাই এটিকে সংক্ষিপ্ত রাখতে পারেন:
    fullName: `${fName} ${lName}`, // দুটি নাম একসাথে রাখা ভালো
  };

  // ফাংশনটিকে async করুন
  const handleRegisterForm = async (event) => {
    //  crucial: এটি ব্রাউজারের ডিফল্ট সাবমিশন বন্ধ করবে
    event.preventDefault();
    setMessage(""); // মেসেজ ক্লিয়ার করুন

    // প্রাথমিক ভ্যালিডেশন
    if (password !== confirmPassword) {
      setMessage("Password Not Matched!");
      return;
    }
    if (!email || !password || !fName || !lName) {
      setMessage("All fields marked with * are required!");
      return;
    }

    // Firebase কল
    try {
      // await ব্যবহার করুন
      await signUp(email, password, userData);
      setMessage("User Registered Successfully!");

      // সফল হলে ফর্ম রিসেট করতে পারেন:
      setFname("");
      setLname("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      // Firebase থেকে আসা এরর মেসেজ দেখান (যেমন: 'email-already-in-use')
      let errorMessage = "Registration failed. Please check your details.";

      // Firebase এরর কোড অনুযায়ী কাস্টম মেসেজ দেখান
      if (error && error.code === "auth/email-already-in-use") {
        errorMessage = "This email is already registered.";
      } else if (error && error.code === "auth/weak-password") {
        errorMessage = "Password should be at least 6 characters.";
      } else if (error && error.message) {
        // অন্যান্য এরর (যদি আপনার signUp ফাংশন error অবজেক্ট return করে)
        errorMessage = error.message;
      }

      setMessage(errorMessage);
    }
  };

  return (
    <>
      <div className="container mx-auto p-4">
        {/* মেসেজ দেখানোর জন্য একটি পরিষ্কার বক্স ব্যবহার করুন */}
        {message && (
          <p
            className={`text-center py-2 px-4 rounded-lg font-semibold ${
              message.includes("Success")
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            } mb-4 max-w-[480px] mx-auto`}
          >
            {message}
          </p>
        )}

        {/* onSubmit এ handleRegisterForm ব্যবহার করুন */}
        <form
          onSubmit={handleRegisterForm}
          className="max-w-[480px] shadow-lg rounded-xl m-auto py-8 px-9 bg-white border border-gray-200"
        >
          <h2 className="mb-5 text-center text-4xl uppercase font-extrabold text-gray-800">
            Register
          </h2>
          <p className="mb-6 text-sm text-gray-500 text-center">
            Create your account to get started.
          </p>

          {/* ইনপুট ফিল্ডের স্টাইল কিছুটা উন্নত করা হলো */}
          <div className="space-y-4">
            <div className="input-field">
              <label
                htmlFor="fName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                First Name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 px-3 py-2 transition duration-150"
                name="fName"
                value={fName} // State value set
                onChange={(e) => setFname(e.target.value)}
                placeholder="Enter First Name."
                required
              />
            </div>

            <div className="input-field">
              <label
                htmlFor="lName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Last Name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 px-3 py-2 transition duration-150"
                name="lName"
                value={lName}
                onChange={(e) => setLname(e.target.value)}
                placeholder="Enter Last Name."
                required
              />
            </div>

            <div className="input-field">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 px-3 py-2 transition duration-150"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email."
                required
              />
            </div>

            <div className="input-field">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 px-3 py-2 transition duration-150"
                placeholder="Enter password."
                required
              />
            </div>

            <div className="input-field">
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Confirm Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                className="w-full border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 px-3 py-2 transition duration-150"
                name="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Enter Confirm password."
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out shadow-md hover:shadow-lg"
          >
            Register Account
          </button>
        </form>
      </div>
    </>
  );
}
