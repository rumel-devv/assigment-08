"use client";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";

const RegisterPage = () => {
   const router = useRouter();
  const handleGoogleLogin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      image: image,
    });

    if (error) {
    toast.error(error.message);
  } else {
    toast.success("Signup Successful ");
    router.push("/");
  }

   
  };

  return (
    <div className="h-[80vh] md:min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 via-white to-blue-100 px-4">
      <div className="w-full max-w-md bg-white/70 backdrop-blur-xl border border-gray-200 shadow-2xl rounded-3xl p-4 md:p-8">
        <h1 className="text-3xl font-semibold text-gray-900 text-center mb-2">
          Create your Account
        </h1>

        <p className="text-sm text-gray-500 text-center mb-6">
          Join and start your journey
        </p>

        <Form onSubmit={handleRegister} className="flex flex-col gap-5">
          <TextField isRequired name="name">
            <Label className="text-gray-700">Full Name</Label>
            <Input placeholder="Enter your name" className="rounded-xl" />
            <FieldError className="text-red-500 text-xs" />
          </TextField>

          <TextField name="image" isRequired>
            <Label className="text-gray-700">Profile Image URL</Label>
            <Input placeholder="Enter image url" className="rounded-xl" />
            <FieldError className="text-red-500 text-xs" />
          </TextField>
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
            <Input placeholder="Enter password" className="rounded-xl" />
            <FieldError className="text-red-500 text-xs" />
          </TextField>

          {/* Button */}
          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md transition"
          >
            Create Account
          </Button>
          <div>
            <Button
             onClick={handleGoogleLogin}
              type="submit"
              className="w-full bg-black hover:bg-gray-700 text-white rounded-xl shadow-md transition"
            >
              <span>
                <FaGoogle />
              </span>
              Login with google
            </Button>
          </div>

          <div className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default RegisterPage;
