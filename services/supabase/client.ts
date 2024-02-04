import { createClient } from "@supabase/supabase-js";

console.log(process.env.NEXT_PUBLIC_SUPABASE_URL);
export const supabaseClient = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
  //   "https://ecduijcmpamgjihbamid.supabase.co",
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjZHVpamNtcGFtZ2ppaGJhbWlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUxMzE4NDksImV4cCI6MjAyMDcwNzg0OX0.LE2t3tcmWQUgWfANdYu0amUv6w8tk53Q3hR6CtCGih8"
);
