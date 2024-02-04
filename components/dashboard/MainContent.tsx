import { FC } from "react";
import { Input } from "../ui/input";
import { Plus } from "lucide-react";
import { Checkbox } from "../ui/checkbox";

type MainContentProps = {};

const MainContent: FC<MainContentProps> = ({}) => {
  return (
    <div className="flex flex-col bg-zinc-800 h-screen">
      <div className="flex text-3xl font-bold text-zinc-200 justify-center mt-10">
        Current Tasks
      </div>
      <div className="p-2 mt-4 flex items-center cursor-pointer gap-2 bg-zinc-700 mx-10 rounded-md shadow-md">
        <input
          className="bg-transparent border-none outline-none text-zinc-200 w-full "
          placeholder="Add a new task"
        />
        <Plus className="h-full w-auto text-zinc-200 bg-zinc-500 rounded-md" />
      </div>

      <div className="flex flex-col  px-10 mt-4">
        <div className="flex gap-2 items-center">
          <Checkbox className="border-white" />
          <div className="text-zinc-300 text-lg">To the new task</div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
