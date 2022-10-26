function Buttons({ button, style }){
return(
    <>
      <button className={`px-12 rounded-md shadow-md py-2 bg-darkblue text-white ${style}`}>{button}</button>
    </>
)
}
export default Buttons;