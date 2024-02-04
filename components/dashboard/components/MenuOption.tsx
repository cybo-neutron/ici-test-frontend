import { cn } from "@/lib/utils";
import { FC } from "react";
import { CheckSquare2, LucideIcon } from "lucide-react";

type MenuOptionProps = {
  title: string;
  Icon: LucideIcon;
};

const MenuOption: FC<MenuOptionProps> = ({ title, Icon }) => {
  return (
    <>
      <div
        className={cn(
          "p-2 m-1 font-bold text-lg text-zinc-300 flex cursor-pointer gap-2 rounded-md",
          "hover:text-zinc-200 hover:bg-zinc-500/30 hover:shadow-md"
        )}
      >
        <Icon />
        <div>{title}</div>
      </div>
    </>
  );
};

export default MenuOption;
