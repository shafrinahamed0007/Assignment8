"use client";

import React from "react";
import { Check } from "@gravity-ui/icons";
import { Button, Form, Input } from "@heroui/react";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";

const SignUp = () => {
  const userSignUp = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    console.log("User Registration info: ", name, email, photo, password);
  };
  return (
    <div className="min-h-screen flex items-center justify-center  px-6 py-24 relative overflow-hidden">
      {/* Background Decor - Purpule/Blue Glow */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-600/10 blur-[120px] -z-10 rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/10 blur-[120px] -z-10 rounded-full" />

      {/* Sign Up Card */}
      <div className="w-full max-w-md bg-[#030712] backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
            Create Account
          </h2>
          <p className="text-slate-400 text-sm">
            Join SkillNest and start your journey today.
          </p>
        </div>

        <Form
          onSubmit={userSignUp}
          className="flex flex-col gap-6 "
          validationBehavior="native"
        >
          {/* Email Field */}
          <div className="flex flex-col gap-2">
            <Input
              isRequired
              label="Name"
              labelPlacement="outside"
              name="name"
              placeholder="Enter your Name"
              type="text"
              variant="bordered"
              classNames={{
                input: "text-white",
                inputWrapper:
                  "border-white/10 group-data-[focus=true]:border-purple-500",
                label: "text-slate-200 font-medium",
              }}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Input
              isRequired
              label="Email"
              labelPlacement="outside"
              name="email"
              placeholder="Enter your email"
              type="email"
              variant="bordered"
              classNames={{
                input: "text-white",
                inputWrapper:
                  "border-white/10 group-data-[focus=true]:border-purple-500",
                label: "text-slate-200 font-medium",
              }}
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }
                return null;
              }}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Input
              isRequired
              label="photo"
              labelPlacement="outside"
              name="photo"
              placeholder="Enter your photoURL"
              type="text"
              variant="bordered"
              classNames={{
                input: "text-white",
                inputWrapper:
                  "border-white/10 group-data-[focus=true]:border-purple-500",
                label: "text-slate-200 font-medium",
              }}
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }
                return null;
              }}
            />
          </div>

          {/* Password Field */}
          <div className="flex flex-col gap-2">
            <Input
              isRequired
              label="Password"
              labelPlacement="outside"
              name="password"
              placeholder="Create a strong password"
              type="password"
              variant="bordered"
              description="Min 8 chars, 1 uppercase, 1 number"
              classNames={{
                input: "text-white",
                inputWrapper:
                  "border-white/10 group-data-[focus=true]:border-purple-500",
                label: "text-slate-200 font-medium",
                description: "text-slate-500 text-[11px]",
              }}
              validate={(value) => {
                if (value.length < 8) return "Too short!";
                if (!/[A-Z]/.test(value)) return "Need an uppercase letter";
                if (!/[0-9]/.test(value)) return "Need a number";
                return null;
              }}
            />
          </div>

          {/* Buttons */}
          <div className="flex  gap-3 pt-2">
            <Button
              type="submit"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold h-12 rounded-xl shadow-lg shadow-purple-500/20 hover:scale-[1.02] transition-transform"
            >
              <Check />
              Sign Up Now
            </Button>

            <Button
              type="reset"
              variant="flat"
              className="bg-white/5 text-slate-300 h-12 rounded-xl hover:bg-white/10"
            >
              Reset Form
            </Button>
          </div>
        </Form>
        <h2 className="text-xl font-bold text-white text-center mt-5">Or</h2>
        <br />
        <Button className={"w-full"}><FaGoogle /> Sing Up Google</Button>

        {/* Footer Link */}
        <p className="text-center mt-8 text-slate-500 text-sm">
          Already have an account?{" "}
          <Link
            href="/signin"
            className="text-purple-400 hover:underline font-semibold"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
