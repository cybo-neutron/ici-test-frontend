import { Ubuntu } from "next/font/google";

export const ubuntu = Ubuntu({
  weight: ["400", "700", "300"],
  subsets: ["latin"],
  fallback: ["system-ui", "arial"],
});
