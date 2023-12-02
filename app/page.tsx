import ImageUpload from "@/components/ImageUpload";

import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className={cn("flex items-center justify-center mt-[5em]")}>
        <ImageUpload />
      </div>
    </main>
  );
}
