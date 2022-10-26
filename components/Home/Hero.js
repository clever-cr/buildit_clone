function Hero() {
  return (
    <>
      <div className="bg-light flex  justify-between py-10 px-40">
        <div className="space-y-8 py-24">
          <h2 className="font-bold text-6xl font-sans text-primary max-w-md">
            Development company
          </h2>
          <p className="text-primary font-sans max-w-sm text-base">
            Forward-thinking real estate developer, owner and investor with a
            reputation
          </p>
          <div className="space-x-2 ">
            <button className="bg-darkblue text-white px-4 py-2 rounded-md shadow-md">
              Services
            </button>
            <button className="bg-lightblue text-primary p-2 shadow-md">
              About the company
            </button>
          </div>
        </div>
        <div className="flex flex-col space-y-6">
          <div className="flex items-end space-x-5">
            <picture>
              <img className="w-min" src="/h5.png" alt="contentimg" />
            </picture>

            <picture>
              <img className="w-min" src="/h3.png" alt="contentimg" />
            </picture>

            <picture>
              <img className="w-min" src="/h4.png" alt="contentimg" />
            </picture>
          </div>
          <div className="flex space-x-5">
            <picture>
              <img className="w-min" src="/h1.png" alt="contentimg" />
            </picture>

            <picture>
              <img className="w-min" src="/h2.png" alt="contentimg" />
            </picture>
          </div>
        </div>
      </div>
    </>
  );
}
export default Hero;
