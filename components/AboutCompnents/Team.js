/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
import { SERVER_PROPS_ID } from "next/dist/shared/lib/constants";
import Profile from "./Profile";
import Buttons from "../Common/Buttons";

const cards = [
  {
    img: "/photo.png",
    name: "Name Surname",
    status: "Worker",
  },
  {
    img: "/photo.png",
    name: "Name Surname",
    status: "Worker",
  },
  {
    img: "/photo.png",
    name: "Name Surname",
    status: "Worker",
  },
  {
    img: "/photo.png",
    name: "Name Surname",
    status: "Worker",
  },
  {
    img: "/photo.png",
    name: "Name Surname",
    status: "Worker",
  },
  {
    img: "/photo.png",
    name: "Name Surname",
    status: "Worker",
  },
  {
    img: "/photo.png",
    name: "Name Surname",
    status: "Worker",
  },
  {
    img: "/photo.png",
    name: "Name Surname",
    status: "Worker",
  },
  {
    img: "/photo.png",
    name: "Name Surname",
    status: "Worker",
  },
];

function Team(props) {
  return (
    <>
      <div className="flex items-center flex-col space-y-4 bg-light py-12">
        <h3 className="font-medium text-base text-brighter font-sans">
          Our Team
        </h3>
        <h2 className="font-bold text-4xl text-primary"> Let's meet</h2>
        <div className="grid grid-cols-3 ">
          {cards.map((value, index) => (
            <Profile img={value.img} name={value.name} status={value.status} />
          ))}
        </div>
        <div>
          <h2>Call us</h2>
          <Buttons button={"call"} />
          <Buttons style={"text-red-200"} button={"Email"} />
        </div>
      </div>
    </>
  );
}
export default Team;
