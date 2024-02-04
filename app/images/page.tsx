import { FC } from "react";
import ImageUpload from "@/components/ImageUpload";
import { cn } from "@/lib/utils";

type uploadImageProps = {};

const uploadImage: FC<uploadImageProps> = ({}) => {
  return (
    <div>
      <div className={cn("flex items-center justify-center mt-[5em]")}>
        <ImageUpload />
      </div>
    </div>
  );
};

export default uploadImage;
