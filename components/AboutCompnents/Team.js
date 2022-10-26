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
    img: "/card1.png",
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
      <h3>Our Team</h3>
      <h2> Let meet</h2>
      <div className="grid grid-cols-3">
      {cards.map((value, index) => (
        <>        
          <Profile img={value.img} name={value.name} status={value.status} />
        </>
      ))}
    </div>
    <div>
        <h2>Call us</h2>
        <Buttons button={"call"}/>
        <Buttons style={"text-red-200"} button={"Email"}/>
        
    </div>
    </>
  );
}
export default Team;
