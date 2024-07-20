import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Logout() {
  const supabase = createClient();
  const { error } = await supabase.auth.signOut();
  redirect("/sign-in");
}
