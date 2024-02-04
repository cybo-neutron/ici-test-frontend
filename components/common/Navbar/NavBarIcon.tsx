import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { CalendarCheck2, LucideIcon } from "lucide-react";
import React, { FC } from "react";

type NavBarIconProps = {
  Icon: LucideIcon;
  title: string;
};

const NavBarIcon: FC<NavBarIconProps> = ({ Icon, title }) => {
  return (
    <Tooltip>
      <TooltipTrigger>
        <Icon
          className={cn(
            " rounded-md cursor-pointer text-zinc-400 h-9 w-9 p-1 ",
            "hover:text-white hover:bg-zinc-700"
          )}
        />
      </TooltipTrigger>
      <TooltipContent
        className={cn(
          "bg-zinc-400 outline-none border-none text-zinc-800 font-semibold"
        )}
        side="right"
      >
        {title}
      </TooltipContent>
    </Tooltip>
  );
};

export default NavBarIcon;
