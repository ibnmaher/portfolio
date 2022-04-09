import React, { useState } from "react";
import "./App.css";
import Particles from "react-particles-js";
import { FiLinkedin } from "react-icons/fi";
import { FaGithub, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";
function App() {
  const [hover, setHover] = useState(false);
  const [isShown, setIsShown] = useState(0);
  let dis;
  hover ? (dis = { display: "block" }) : (dis = { visibility: "hidden" });
  return (
    <>
      <div className="Background bg-left lg:bg-cover text-right font-hairline bg-fixed z-2">
        <h1 className=" text-4xl lg:text-6xl text-gray-500 pt-24 pr-6 lg:pt-32 lg:pr-48 font-hairline">
          Everything <span className="text-gray-100 font-semibold">begins</span>
          <br></br> with an{" "}
          <span className="text-orange-500 font-semibold">idea</span>
        </h1>
        <h3 className="text-gray-500 pr-6 lg:pr-64 text-3xl">
          {" "}
          <span className="text-gray-200 font-semibold">got</span> something in{" "}
          <span className="text-gray-200 font-semibold">mind</span>?
        </h3>
      </div>
      <div className="bg-orange-500 h-6"></div>
      <div className="intro bg-fixed overflow-hidden relative h-60 md:h-100">
        <Particles
          className="particles"
          params={{
            particles: {
              number: {
                value: 6,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              color: {
                value: "#ed8936",
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "#000000",
                },
                polygon: {
                  nb_sides: 3,
                },
                image: {
                  src: "img/github.svg",
                  width: 100,
                  height: 100,
                },
              },
              opacity: {
                value: 0.5,
                random: false,
                anim: {
                  enable: false,
                  speed: 0.1,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 10,
                random: true,
                anim: {
                  enable: false,
                  speed: 80,
                  size_min: 0.1,
                  sync: false,
                },
              },
              line_linked: {
                enable: true,
                distance: 300,
                color: "#ffffff",
                opacity: 0.4,
                width: 2,
              },
              move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: false,
                  mode: "repulse",
                },
                onclick: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 800,
                  line_linked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 800,
                  size: 80,
                  duration: 2,
                  opacity: 0.8,
                  speed: 3,
                },
                repulse: {
                  distance: 400,
                  duration: 0.4,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            retina_detect: true,
          }}
        />

        <h1 className="text-gray-200 text-3xl ml-2 mt-6 m-auto md:text-3xl font-thin info md:mt-64 md:ml-40">
          Hey, I'm{" "}
          <span className="font-bold text-orange-500">Abdulrahman</span>.
          <br></br>I'm a{" "}
          <span className="font-bold text-white">Full-Stack developer</span> from  <span className="font-bold text-white">Mosul</span> that
          enjoys turning <span className="font-bold text-white">numbers</span>{" "}
          and <span className="font-bold text-white">letters</span> into live
          websites, If i'm not <span className="font-bold text-white">coding</span> i'm either <span className="font-bold text-white">drawing</span>, <span className="font-bold text-white">soldering</span> or at the <span className="font-bold text-white">gym</span>. {" "}
        </h1>
        <h3 className="info text-gray-200 ml-2 text-3xl md:text-xl md:ml-40 md:pb-2">
          lets turn your ideas into{" "}
          <span className="font-bold text-orange-500">reality</span>
        </h3>
      </div>
      <div className="bg-purple-500 h-6"></div>
      <div className="mywork bg-cover bg-fixed flex justify-evenly align-middles flex-col items-center h-auto md:h-120">
        <div className="text-6xl text-white info font-bold">My work</div>
        <div className="flex flex-col items-center space-y-8 md:flex-row md:space-y-0 justify-evenly w-full">
        <a href="https://ibnmaher.github.io/Vanilla/" target="_blank"  rel="noopener noreferrer">
          <h1 className="text-4xl text-gray-300 font-extrabold text-center info">Vanilla</h1>
        <div
          className="resturante h-48 w-56 bg-orange-100 stick1 flex items-center "
          onMouseEnter={() => setIsShown(1)}
          onMouseLeave={() => setIsShown(0)}
        >
          {" "}
          {isShown === 1 && (
            <motion.div
              className="text-white text-lg flex w-full bg-black bg-opacity-50"
              initial={{
                opacity: 0,
                x: -160,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 1,
              }}
            >
              <h1 className="p-3 info">Vanilla: <span className="text-sm">is a vanilla HTML CSS JS and Bootstrap project it's a restaurant website template where you can see the restaurant menu, reviews and location and also for booking a table</span></h1>
            </motion.div>
          )}
        </div>
        </a>
        <a href="https://ibnmaher.github.io/Movies-hub/" target="_blank"  rel="noopener noreferrer">
        <h1 className="text-4xl text-gray-300 font-extrabold text-center info">Movies hub</h1>
        <div
          className="resturante h-48 w-56 bg-orange-100 stick2 flex items-center "
          onMouseEnter={() => setIsShown(2)}
          onMouseLeave={() => setIsShown(0)}
        >
          {isShown === 2 && (
            <motion.div
              className="text-white text-lg flex w-full bg-black bg-opacity-50"
              initial={{
                opacity: 0,
                x: -160,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 1,
              }}
            >
              <h1 className="p-3 info">Movies hub: <span className="text-sm">is a REACT, bootstrap project, it's a website where you can see the latest popular movies releases or use the search feature you can also view the rating release date and trailer</span></h1>
            </motion.div>
          )}
        </div>
        </a>
        <a href="http://159.223.28.33/" target="_blank"  rel="noopener noreferrer">
          <h1 className="text-4xl text-gray-300 font-extrabold text-center info">The movie bubble</h1>
        <div
          className="restaurant h-48 w-56 bg-orange-100 stick3 flex items-center"
          onMouseEnter={() => setIsShown(3)}
          onMouseLeave={() => setIsShown(0)}
        >
          {isShown === 3 && (
            <motion.div
              className="text-white text-lg flex w-full bg-black bg-opacity-50"
              initial={{
                opacity: 0,
                x: -160,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 1,
              }}
            >
              <h1 className="p-3 info">Artisan: <span className="text-sm">is a PERN-stack, (socket.io,tailwind,framer-motion) project where you can either sign up as a user or artisan to look for or offer a service</span></h1>
            </motion.div>
          )}
        </div>
        </a>
        </div>
      </div>
      <footer className="h-32 bg-gray-900 flex flex-col">
        <div className="flex justify-evenly w-full pt-12">
          <a
            href="https://www.linkedin.com/in/abdulrahman-maher-7597a01b6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiLinkedin className="text-white text-2xl" />
          </a>
          <FaPhone
            className="text-white text-2xl"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          />
          <a
            href="https://github.com/ibnmaher"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-white text-2xl" />
          </a>
        </div>
        <div
          className="speech-bubble h-8 m-auto -mt-16 w-40 text-center"
          style={dis}
        >
          9647510061066
        </div>
        <div className="text-gray-700 mt-12 m-auto">Abdulrahman&#169;2020</div>
      </footer>
    </>
  );
}

export default App;
