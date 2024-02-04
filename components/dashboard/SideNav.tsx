import { cn } from "@/lib/utils";
import {
  CalendarRange,
  CheckSquare2,
  Inbox,
  ListChecks,
  ListTodo,
} from "lucide-react";
import { FC } from "react";
import MenuOption from "./components/MenuOption";
import { Separator } from "../ui/separator";

type SideNavProps = {};

const SideNav: FC<SideNavProps> = ({}) => {
  return (
    <div className="flex flex-col bg-zinc-800 h-screen">
      <div className="mt-10">
        <MenuOption title={"Today"} Icon={CheckSquare2} />
        <MenuOption title={"This week"} Icon={CalendarRange} />
        <MenuOption title={"Inbox"} Icon={Inbox} />

        <hr className="w-full border-zinc-500/40 my-2" />

        {/* <Separator className="my-2 border-red-400" /> */}

        <MenuOption title={"Completed"} Icon={ListChecks} />
        <MenuOption title={"Overdue"} Icon={ListTodo} />
      </div>
    </div>
  );
};

export default SideNav;
