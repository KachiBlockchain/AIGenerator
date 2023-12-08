import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className=" w-full py-4">
      <div className=" flex items-center w-full justify-between">
        <Image width={30} height={30} src="/logo.png" alt="logo" />
        <div className=" flex gap-1 items-center justify-evenly">
          <span className="text-white"> Built with </span>
          <Heart className="text-red-500 gap-x-3 h-5 w-5" /> <span className="text-white"> by </span>
          <Link href="https://codecrafthub.tech" className="text-white"> CodeCraftHub </Link>
        </div>
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full ">
          <Button size="sm" variant="ghost"className="text-white">
            Privacy Policy
          </Button>
          <Button size="sm" variant="ghost" className="text-white">
            Terms of Service
          </Button>
        </div>
      </div>
    </div>
  );
};
