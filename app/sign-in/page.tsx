"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { SignInContainer } from "./components/sign-in-container";

export default async function SignInSide() {
  const supabase = createClient();
  const { data } = await supabase.auth.getUser();
  console.log(data.user);
  // nếu đã login, thì redirect về dashboard
  if (data?.user) {
    redirect("/dashboard");
  }

  return <SignInContainer />;
}
