"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  const networkSetUP = async () => {
    if (process.env.NODE_ENV === "development") {
      const { worker } = await import("../mock/browser");
      await worker.start();
    }
  };

  useEffect(() => {
    const id = setTimeout(() => {
      router.push("/login");
    }, 2000);

    return () => {
      clearTimeout(id);
    };
  }, []);

  return (
    <>
      <strong>Landing Page</strong>
    </>
  );
}
