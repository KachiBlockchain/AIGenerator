"use client";

import { useAuth } from "@clerk/nextjs";
import Link from "next/link";

import TypewriterComponent from "typewriter-effect";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="text-white font-bold py-36 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>The Best AI Tool for </h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          <TypewriterComponent
            options={{
              strings: [
                "Chatbot.",
                "Photo Generation",
                "Music Generation",
                "Code Generation",
                "Video Generation",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="text-sm md:text-xl font-ligh text-zinc-400">
        Create content using AI 10x faster.
      </div>
      <div>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button
            variant="premium"
            className="md:text-lg p-4 md:p-6 rounded-full font-semibold"
          >
            Start Generating for Free
          </Button>
        </Link>
      </div>
      <div className="text-zinc-400 text-xs md:text-sm font-normal">
        No Credit card required.
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="mt-6 animate-pulse" size="lg">
            Watch a video to see how this app works.
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[525px] flex items-center flex-col">
          <DialogHeader className="flex flex-col items-center justify-center">
            <DialogTitle>Video Description</DialogTitle>
            <DialogDescription>
              Maximize the video to see the application features in it&apos;s
              full glory.
            </DialogDescription>
          </DialogHeader>
          <div className="gap-4 py-4">
            <div className=" m-4 lg:m-0">
              <iframe
                src="https://www.loom.com/embed/391eb1a49a2e4476b5042dec2691179f?sid=04dbdae5-9125-47b4-97f4-97b635b0d97e"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      
    </div>
  );
};

export default LandingHero;
