import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words } from "../constants";
import HeroExperience from "../components/models/hero_models/HeroExperience";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section
      id="hero"
      className="relative overflow-hidden w-full h-screen"
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/videos/AdobeStock_1488337460_Video_4K_Preview.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>



      <div className="hero-layout">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                 Bringing
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>to Life with Creative Designs </h1>
              <h1>and Powerful Code</h1>
            </div>

            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
                Hi, I'm Pooja, a passionate web developer focused on modern animations and interactive experiences.
            </p>

            <Button
              text="EXPLORE MY PROJECTS ↓"
              className="md:w-80 md:h-16 w-60 h-12 bg-purple-300 text-black"
              id="counter"
            />

          </div>
        </header>

        {/* RIGHT: 3D Model or Visual */}
<figure className="absolute left-0 top-0 w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
  <div className="hero-3d-layout">
    <HeroExperience />
  </div>
</figure>

      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;
