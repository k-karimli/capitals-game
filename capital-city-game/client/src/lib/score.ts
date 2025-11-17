import { supabase } from "./supabase";

export async function loadHighScore() {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return 0;

  const { data } = await supabase
    .from("users_scores")
    .select("high_score")
    .eq("user_id", user.id)
    .single();

  return data?.high_score || 0;
}

export async function saveHighScore(score: number) {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return;

  const { data: existing } = await supabase
    .from("users_scores")
    .select("high_score")
    .eq("user_id", user.id)
    .single();

  const current = existing?.high_score || 0;

  if (score > current) {
    await supabase.from("users_scores").upsert({
      user_id: user.id,
      high_score: score,
    });
  }
}
