"use client";

// app/not-found.js

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const [counter, setCounter] = useState(5);
  const router = useRouter();

  useEffect(() => {
    const countdown = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
    }, 1000);

    // Redirect after 5 seconds
    const timeout = setTimeout(() => {
      router.push("/");
    }, 5000);

    return () => {
      clearInterval(countdown);
      clearTimeout(timeout);
    };
  }, [router]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404 - Page Not Found</h1>
      <p>You will be redirected to the home page in {counter} seconds.</p>
    </div>
  );
}
