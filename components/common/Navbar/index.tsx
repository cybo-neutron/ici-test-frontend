"use client";

import { FC, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, CalendarCheck2 } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import NavBarIcon from "./NavBarIcon";

type NavbarProps = {};

const styles = {
  linkStyle:
    // "text-xl font-semibold  border-b-4 border-transparent hover:border-b-4 hover:border-zinc-800",
    "text-lg font-semibold  p-2 hover:bg-zinc-300/20 rounded-md",
  activeLink: "border-blue-300",

  sideNavIcon: cn(
    " rounded-md cursor-pointer text-zinc-300",
    "hover:text-white "
  ),
};

const Navbar: FC<NavbarProps> = ({}) => {
  const [menuVisible, setMenuVisible] = useState<boolean>(true);

  const showMenu = () => {
    setMenuVisible((menuVisible) => !menuVisible);
  };

  const loginRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className=" flex flex-col bg-zinc-900 w-fit h-screen p-2">
      {/* Logo */}
      <Link
        href={"/"}
        className="font-bold text-3xl uppercase bg-clip-text bg-red-500 bg-gradient-to-tr from-purple-500  text-transparent"
      >
        ICI
      </Link>

      {/* Menu Options */}
      <div className={cn("flex flex-col items-center mt-5 gap-3")}>
        <NavBarIcon Icon={CalendarCheck2} title={"Tasks"} />
      </div>

      {/* Menu options  */}
      {/* <div
        className={cn(
          menuVisible
            ? "flex flex-col sm:flex-row gap-2 justify-center items-center"
            : "hidden"
        )}
      >
        <div className="flex gap-3 flex-col sm:flex-row justify-center items-center">
          <Link href={"/"} className={cn(styles.linkStyle)}>
            Home
          </Link>
          <Link href={"/video"} className={cn(styles.linkStyle)}>
            Video
          </Link>
          <Link href={"/contact"} className={cn(styles.linkStyle)}>
            Contact us
          </Link>

          <Link href={"/images"} className={cn(styles.linkStyle)}>
            Upload Image
          </Link>
        </div>

        <div ref={loginRef}>
          <Link href={"/login"}>
            <Button
              className="uppercase text-xl font-semibold text-white"
              variant={"gradient"}
              onClick={showModal}
            >
              Login
            </Button>
          </Link>
        </div>
      </div> */}

      {/* Hamburger Icon  */}
      <div className="sm:hidden cursor-pointer" onClick={showMenu}>
        <Menu />
      </div>
    </div>
  );
};

export default Navbar;
