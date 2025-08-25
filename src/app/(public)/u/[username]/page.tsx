import type { Metadata } from "next";
import { Profile } from "./Profile";

export const metadata: Metadata = {
  title: "Profile",
};

export async function generateMetadata() {}

export default function ProfilePage() {
  return <Profile />;
}
