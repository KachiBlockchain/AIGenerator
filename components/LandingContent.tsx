"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const testimonials = [
  {
    avatar: "/reviews/avatar-1.png",
    title: "William James",
    job: "Chef",
    description:
      "Genius, the AI code generator, exemplifies the cutting edge of artificial intelligence innovation by seamlessly producing intricate and sophisticated code structures. Its ability to comprehend complex programming tasks and deliver precise, functional solutions showcases the pinnacle of machine intelligence in software development. ",
  },
  {
    avatar: "/reviews/avatar-2.png",
    title: "Will Josh",
    job: "Interior Designer",
    description:
      "Genius, the AI music generator, showcases an unparalleled ability to compose intricate and emotionally resonant musical pieces. Its innovative algorithms seamlessly blend genres, creating compositions that captivate and transcend traditional boundaries. ",
  },
  {
    avatar: "/reviews/avatar-3.png",
    title: "Brad Boston",
    job: "Game Dev",
    description:
      "Genius, the remarkable AI, exemplifies the pinnacle of innovation in video generation. Its intricate algorithms seamlessly craft visually stunning and engaging content, showcasing the immense potential of artificial intelligence in creative endeavors.",
  },
  {
    avatar: "/reviews/avatar-4.png",
    title: "Sandra Mic",
    job: "Therapist",
    description:
      "Genius, the AI text generator, exemplifies unparalleled creativity and linguistic prowess, seamlessly producing coherent and contextually relevant content. Its ability to comprehend and mimic human-like language showcases a remarkable advancement in artificial intelligence, paving the way for innovative applications across various domains. ",
  },
  
];

const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid  sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="bg-[#192339] border-none text-white "
          >
            <CardHeader >
              <CardTitle className=" flex items-center gap-x-2">
                <div>
                  {/* {" "}
                  <Image
                    src={item.avatar}
                    width={30}
                    height={30}
                    alt="Image"
                  />{" "} */}
                </div>
                <div>
                  <p className="text-lg">{item.title}</p>
                  <p className="text-zinc-400 text-sm">{item.job}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4">{item.description}</CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LandingContent;
