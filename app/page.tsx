// import ImageUpload from "@/components/ImageUpload";

import { cn } from "@/lib/utils";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import SideNav from "@/components/dashboard/SideNav";
import MainContent from "@/components/dashboard/MainContent";

export default function Home() {
  return (
    <main className="flex w-screen bg-orange-300">
      {/* <div>Hello there</div> */}
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel minSize={20} defaultSize={25}>
          <SideNav />
        </ResizablePanel>
        <ResizableHandle className="border-red-500" />
        <ResizablePanel minSize={60}>
          <MainContent />
        </ResizablePanel>
      </ResizablePanelGroup>
    </main>
  );
}
