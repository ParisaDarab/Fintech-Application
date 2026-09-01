"use client";
import Image from "next/image";

export default function Home() {
  // main.tsx / index.tsx — before rendering

  const networkSetUP = async () => {
    if (process.env.NODE_ENV === "development") {
      const { worker } = await import("../mock/browser");
      await worker.start();
    }
  };
  return (
    <>
      <strong>Landing Page</strong>
    </>
  );
}
