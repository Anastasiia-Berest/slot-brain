import { useState } from "react";
import { useRouter } from "next/router";

import Layout from "@/components/Layout";

import styles from "./styles.module.sass";

export default function Registration() {
  const [message, setMessage] = useState(null);
  const router = useRouter();

  const register = async (event) => {
    event.preventDefault();
    setMessage(null);

    const formData = new FormData(event.target);
    const jsonData = Object.fromEntries(formData);

    const reqOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonData),
    };

    const req = await fetch(process.env.NEXT_PUBLIC_URL_REGISTER, reqOptions);
    const res = await req.json();

    if (res.error) {
      setMessage(res.error.message);
      event.target.reset();
      return;
    }

    if (res.jwt && res.user) {
      setMessage("Successfull registration.");
      event.target.reset();
      router.push("/");
    }
  };

  return (
    <Layout>
      <article className="container page page-without-breadcrumbs">
        <form onSubmit={register} className={styles.form}>
          <div className={styles.form_row}>
            <label htmlFor="username" className="block">
              Username
            </label>
            <input type="text" id="username" name="username" className="block" autoComplete="off" />
          </div>

          <div className={styles.form_row}>
            <label htmlFor="email" className="block">
              Email
            </label>
            <input type="email" id="email" name="email" className="block mb-2" />
          </div>

          <div className={styles.form_row}>
            <label htmlFor="password" className="block">
              Password
            </label>
            <input type="password" id="password" name="password" className="block" />
          </div>

          <button type="submit">Submit</button>

          <div>{message}</div>
        </form>
      </article>
    </Layout>
  );
}
