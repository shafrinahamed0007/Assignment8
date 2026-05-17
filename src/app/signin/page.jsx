"use client";
import { Button, Form, Input } from "@heroui/react";
import { Check } from "@gravity-ui/icons";
import React from "react";
import { FaGoogle } from "react-icons/fa6";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

const SignIn = () => {
  const userSignIn = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log("User Login information: ", email, password);
    const { data, error } = await authClient.signIn.email({
      email,
      password,

      callbackURL: "/",
    });

    console.log(data, error);

    if (!error) {
      toast.success("User Login Successfully!", {durartion: 4000});
    } else {
      toast.error(error.message || "User Login Failed", {durartion: 4000});
    }
  };
  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-24 relative overflow-hidden ">
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-600/10 blur-[120px] -z-10 rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/10 blur-[120px] -z-10 rounded-full" />
      <div className="w-full max-w-md bg-[#030712] backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
            Login Your Account
          </h2>
          <p className="text-slate-400 text-sm">
            Join SkillNest and start your journey today.
          </p>
        </div>
        <Form
          onSubmit={userSignIn}
          className="flex flex-col gap-5"
          validationBehavior="native"
        >
          <Input
            isRequired
            label="Email"
            labelPlacement="outside"
            name="email"
            placeholder="Enter your email"
            type="email"
            variant="bordered"
            className={{
              input: "text-white",
              inputWrapper:
                "border-white/10 group-data-[focus=true]:border-purple-500",
              label: "text-slate-200 font-medium",
            }}
            validate={(value) =>
              /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                ? null
                : "Invalid email"
            }
          />

          <Input
            required
            label="Password"
            labelPlacement="outside"
            name="password"
            placeholder="Create a strong password"
            type="password"
            variant="bordered"
            description="Min 8 chars, 1 uppercase, 1 number"
            className={{
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

          <div className="flex  gap-3 pt-2">
            <Button
              type="submit"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold h-12 rounded-xl shadow-lg shadow-purple-500/20 hover:scale-[1.02] transition-transform"
            >
              <Check /> Sign In Now
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

        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-white/10"></div>
          <span className="mx-4 text-slate-500 text-sm">OR</span>
          <div className="flex-grow border-t border-white/10"></div>
        </div>

        <Button
          onClick={handleGoogleSignIn}
          className="w-full bg-white text-black font-semibold h-12 rounded-xl hover:bg-slate-200 transition-colors"
        >
          <FaGoogle /> Sign Up with Google
        </Button>
        <p className="text-center mt-8 text-slate-500 text-sm">
          Do you have not account?{" "}
          <Link
            href="/signup"
            className="text-purple-400 hover:underline font-semibold"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
