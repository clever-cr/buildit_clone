import InnovativeCards from "./InnovativeCards";
const data = [
    {
      img: "/icon1.png",
      title: "Featured List",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      img: "/icon1.png",
      title: "Featured List",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      img: "/icon1.png",
      title: "Featured List",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

function Services(){
return (
    <>
   <div className="flex flex-col items-center py-48 space-y-24 bg-bright">
<h2 className="font-bold text-4xl text-primary font-sans">
  Innovative Execution
</h2>
<div className="flex space-x-8 ">
  <InnovativeCards cards={data} />
</div>
</div> 
    </>
)
}
export default Services;