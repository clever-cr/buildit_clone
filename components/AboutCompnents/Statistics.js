function Statistics(props) {
  return (
    <>
      <div className=" flex flex-col items-center space-y-8 ">
        <div>
          <h3 className="font-medium text-base font-sans text-brighter">
            Statistics
          </h3>
          <h2 className="font-bold text-4xl text-primary ">
            Development in numbers
          </h2>
        </div>

        <div className="flex px-40 bg-light shadow-2xl space-x-12 py-4">
          {props.data.map((value) => (
            <>
              <div className="flex">
                <picture>
                  <img src={`${value.img}`} alt="{value.description}" />
                </picture>
                <div>
                  <p className="font-bold font-sans text-4xl text-primary">
                    {value.number}
                  </p>
                  <p className="font-bold text-base font-sans text-primary">
                    {value.description}
                  </p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
export default Statistics;
