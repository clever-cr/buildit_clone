import Logos from "../Common/Logos";
import Content from "../Common/Content";
import Buttons from "../Common/Buttons";
function Partners(){
return(
    <>
     <div className="bg-light">
        <Logos />,
        <div className="flex flex-row-reverse items-center px-40 space-x-8 py-24">
          <div className="space-y-4">
          <Content
            header={"About us"}
            title={"Owner and investor with a reputation"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit sem, vestibulum sed leo eu, malesuada pharetra mauris. Integer rhoncus, eros vel euismod tempor, ipsum magna tristique nisi, quis ullamcorper enim magna eu orci. Sed semper ex quis semper aliquet. Cras hendrerit molestie sapien sed fermentum. Mauris dui tortor, viverra vel ultrices in, congue sed ex."
            }
          
          />
          <Buttons button={"Explore"}/>
          </div>
          
          <picture>
          <img src="/floor1.png" alt="aboutimage" />
          </picture>
          
        </div>
      </div>
    </>
)


}
export default Partners;