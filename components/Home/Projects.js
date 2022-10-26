import Content from "../Common/Content";
import Buttons from "../Common/Buttons";

function Projects() {
  return (
    <>
      <div className="flex px-40 py-36 space-x-10">
        <div className="space-y-6">
        <Content
          header={"Available Properties"}
          title={"Featured Listing"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit sem, vestibulum sed leo eu, malesuada pharetra mauris. Integer rhoncus, eros vel euismod tempor, ipsum magna tristique nisi, quis ullamcorper enim magna eu orci. Sed semper ex quis semper aliquet. Cras hendrerit molestie sapien sed fermentum. Mauris dui tortor, viverra vel ultrices in, congue sed ex."
          }
        />
        <Buttons button={"Explore"}/>
        </div>
       
        <div className="flex flex-col space-y-9">
          <div className="space-x-4 flex ">
            <picture>
              <img src="/floor5.png" alt="pic" />
            </picture>
            <picture>
              <img src="/floor4.png" alt="pic" />
            </picture>
          </div>
          <div className=" flex space-x-4">
            <picture>
              <img src="/floor2.png" alt="pic" />
            </picture>
            <picture>
              <img src="/floor3.png" alt="pic" />
            </picture>
          </div>
        </div>
      </div>
    </>
  );
}
export default Projects;
