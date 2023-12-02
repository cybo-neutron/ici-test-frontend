import { FC } from "react";
import { X } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ImageViewProps {
  source: string;
}

const ImageView: FC<ImageViewProps> = ({ source }) => {
  return (
    <div className="relative border-[1px] border-zinc-500 w-[150px] h-[150px] flex items-center justify-center">
      <Tooltip>
        <TooltipTrigger className="absolute right-0 top-0 cursor-pointer hover:text-red-600">
          <X />
        </TooltipTrigger>
        <TooltipContent className="">
          <p>Remove image</p>
        </TooltipContent>
      </Tooltip>
      <img src={source} alt="Image" />
    </div>
  );
};

export default ImageView;
