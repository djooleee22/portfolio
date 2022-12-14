import React from "react";
import "./Projects.scss";
import quiz from "../slike/Quiz.png";
import bringMe from "../slike/Bring Me.png";
import bitShow from "../slike/BitShow.png";
import giphy from "../slike/Giphy.png";
import rickAndMorty from "../slike/Rick and Morty.png";
import youtubeClone from "../slike/Youtube clone.png";
import splitter from "../slike/Splitter.png";
import chatRoom from "../slike/Chatroom.png";
import weather from "../slike/Weather.png";

const projectsList = [
  {
    id: "p1",
    name: "Quiz",
    image: quiz,
    num: "01",
    url: "https://quiz-app-lake-xi.vercel.app",
  },
  {
    id: "p9",
    name: "Weather app",
    image: weather,
    num: "02",
    url: "https://weather-app-alpha-two-14.vercel.app",
  },
  {
    id: "p2",
    name: "Bring Me!",
    image: bringMe,
    num: "03",
    url: "https://food-order-app-sooty.vercel.app",
  },
  {
    id: "p3",
    name: "BitShow",
    image: bitShow,
    num: "04",
    url: "https://bit-show-one.vercel.app",
  },
  {
    id: "p4",
    name: "Giphy",
    image: giphy,
    num: "05",
    url: "https://giphy-plum.vercel.app",
  },
  {
    id: "p5",
    name: "Rick and Morty",
    image: rickAndMorty,
    num: "06",
    url: "https://rick-morty-green.vercel.app",
  },
  {
    id: "p6",
    name: "YouTube Clone",
    image: youtubeClone,
    num: "07",
    url: "https://youtube-clone-alpha-woad.vercel.app",
  },
  {
    id: "p7",
    name: "Splitter",
    image: splitter,
    num: "08",
    url: "https://splitter-jet.vercel.app",
  },
  {
    id: "p8",
    name: "Chatroom",
    image: chatRoom,
    num: "09",
    url: "https://chat-room-blond.vercel.app",
  },
];

const Projects: React.FC = () => {
  return (
    <div id="projects">
      {projectsList.map((el) => (
        <div
          onClick={() => window.open(el.url, "_blank")}
          key={el.id}
          className="project"
        >
          <img src={el.image} alt="project" />
          <div className="helper">
            <p>
              <span>{el.num}. </span>
              {el.name}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
