function Socials() {
  return (
    <>
      <div className="space-y-4 bg-light py-16">
        <h3 className="text-base text-brighter font-semibold text-center">
          Socials
        </h3>
        <h2 className="font-bold text-4xl text-center text-primary">
          On Instagram
        </h2>
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-4">
            <picture>
              <img src="card1.png" alt="" />
            </picture>
            <picture>
              <img src="card2.png" alt="" />
            </picture>
            <picture>
              <img src="card3.png" alt="" />
            </picture>
          </div>
          <div className="flex space-x-4">
            <picture>
              <img src="card4.png" alt="" />
            </picture>
            <picture>
              <img src="card5.png" alt="" />
            </picture>
            <picture>
              <img src="card6.png" alt="" />
            </picture>
          </div>
        </div>
      </div>
    </>
  );
}
export default Socials;
