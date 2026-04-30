"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";

const LoginPage = () => {


      const handleLogin= async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
    
        const { data, error } = await authClient.signIn.email({
          email: email,
          password: password,
          callbackURL:"/"
        });

        if(!error){
            alert('Login Successfull')
        }
        if(error){
            alert(error.message)
        }
    
      };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 via-white to-blue-100 px-4">
      <div className="w-full max-w-md bg-white/70 backdrop-blur-xl border border-gray-200 shadow-2xl rounded-3xl p-8">
        <h1 className="text-3xl font-semibold text-gray-900 text-center mb-6">
          Login your account
        </h1>

        <p className="text-sm text-gray-500 text-center mb-8">
          Login to continue your journey
        </p>

        <Form onSubmit={handleLogin} className="flex flex-col gap-5">
          {/* Email */}
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label className="text-gray-700">Email</Label>
            <Input placeholder="Enter your email" className="rounded-xl" />
            <FieldError className="text-red-500 text-xs" />
          </TextField>

          {/* Password */}
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Must contain uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Must contain number";
              }
              return null;
            }}
          >
            <Label className="text-gray-700">Password</Label>
            <Input placeholder="Enter your password" className="rounded-xl" />
            <FieldError className="text-red-500 text-xs" />
          </TextField>

          {/* Buttons */}
          <div className="flex gap-3 mt-2">
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md transition"
            >
              Login
            </Button>

            <Button
              type="reset"
              variant="secondary"
              className="w-full rounded-xl"
            >
              Reset
            </Button>
          </div>

          <div>
            <h1>
              Do not have a account ?{" "}
              <span className="text-blue-500" ><Link href="/register"> Register </Link>{" "}</span>
            </h1>
          </div>

        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
