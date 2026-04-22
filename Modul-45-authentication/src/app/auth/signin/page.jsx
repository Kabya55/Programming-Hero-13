"use client";

import { authClient } from "@/lib/auth-client";
import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";
import { useState } from "react";

const SignInPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    // sort cart weay
    const userData = Object.fromEntries(formData.entries());

    // loop weay
    // const data = {};
    // // Convert FormData to plain object
    // formData.forEach((value, key) => {
    //   data[key] = value.toString();
    // });
    // console.log(userData);

    const { data, error } = await authClient.signIn.email({
      email: userData.email,
      password: userData.password,
      rememberMe: true,
      callbackURL: "/",
    });
    // console.log("Sign in responce", { data, error });
    if (error) {
      alert(error.message);
    }
    if (data) {
      alert("Sign in successful!");
    }
  };

  return (
    <>
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="backdrop-blur-lg bg-white/10 border border-white/20 p-8 rounded-2xl shadow-2xl">
          <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
            {/* email */}
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
              <Label>Email</Label>
              <Input name="email" placeholder="kabya@example.com" />
              <FieldError />
            </TextField>
            {/* password */}
            <TextField
              isRequired
              minLength={8}
              name="password"
              validate={(value) => {
                if (value.length < 8) {
                  return "Password must be at least 8 characters";
                }
                if (!/[A-Z]/.test(value)) {
                  return "Password must contain at least one uppercase letter";
                }
                if (!/[0-9]/.test(value)) {
                  return "Password must contain at least one number";
                }
                return null;
              }}
            >
              <Label>Password</Label>

              <InputGroup>
                <InputGroup.Input
                  name="password"
                  placeholder="Enter your password"
                  type={isVisible ? "text" : "password"}
                />

                <InputGroup.Suffix>
                  <Button
                    isIconOnly
                    size="sm"
                    variant="ghost"
                    type="button"
                    onPress={() => setIsVisible(!isVisible)}
                  >
                    {isVisible ? <Eye /> : <EyeSlash />}
                  </Button>
                </InputGroup.Suffix>
              </InputGroup>

              <Description>
                Must be at least 8 characters with 1 uppercase and 1 number
              </Description>

              <FieldError />
            </TextField>

            <div className="flex gap-2">
              <Button type="submit">
                <Check />
                Sign In
              </Button>
              <Button type="reset" variant="secondary">
                Reset
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default SignInPage;
