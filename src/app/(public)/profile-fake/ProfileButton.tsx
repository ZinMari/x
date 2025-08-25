"use client";
import { useRouter } from "next/navigation";
import { PAGES } from "@/config/pages.config";

export function ProfileButton() {
  const router = useRouter();
  return <button onClick={() => router.push(PAGES.HOME)}>Go to Home</button>;
}
