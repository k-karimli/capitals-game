import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signUp() {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) return alert(error.message);
    alert("Check your email to verify your account");
  }

  async function signIn() {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) return alert(error.message);
  }

  return (
    <div className="flex flex-col gap-2 p-4">
      <input
        className="p-2 border"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="p-2 border"
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="p-2 bg-blue-500 text-white" onClick={signIn}>
        Login
      </button>

      <button className="p-2 bg-green-500 text-white" onClick={signUp}>
        Register
      </button>
    </div>
  );
}
