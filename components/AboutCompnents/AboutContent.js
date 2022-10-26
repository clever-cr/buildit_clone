import Content from "../Common/Content";
function AboutContent() {
  return (
    <>
      <div className="bg-light py-24">
        <div className="flex flex-row-reverse justify-between px-40 ">
          <Content
            header={"About us"}
            title={"Owner and investor with a reputation"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit sem, vestibulum sed leo eu, malesuada pharetra mauris. Integer rhoncus, eros vel euismod tempor, ipsum magna tristique nisi, quis ullamcorper enim magna eu orci. Sed semper ex quis semper aliquet. Cras hendrerit molestie sapien sed fermentum. Mauris dui tortor, viverra vel ultrices in, congue sed ex."
            }
          />
          <picture>
            <img src="/floor2.png" alt="pic" />
          </picture>
        </div>
      </div>
    </>
  );
}
export default AboutContent;
