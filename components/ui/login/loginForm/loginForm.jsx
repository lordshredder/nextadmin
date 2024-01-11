"use client";

import { authenticate } from "@/lib/actions";
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";
import { toast } from 'sonner';
import { useEffect } from "react";

const LoginForm = () => {


  const [state, formAction] = useFormState(authenticate, {
    message: "",
    errors: undefined,
  });

useEffect(() => {
  if(state.message === "success"){
    toast.success('Logged in successfully.')
  } else if(state.message === "error") {
    toast.error(state.errors)
  }
});

  return (
    <>
    <form action={formAction} className={styles.form}>
      <h1>Login</h1>
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />
      <button>Login</button>
    </form>
    </>
  );
};

export default LoginForm;