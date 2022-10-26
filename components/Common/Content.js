function Content(props){
return(
    <>
    <div className="space-y-8">
    <h1 className="text-brighter text-base font-semibold">{props.header}</h1>
   <h2 className="font-bold text-4xl font-sans text-primary max-w-lg">{props.title}</h2>
   <p className="font-medium text-base font-sans text-primary max-w-xl">{props.description}</p>
 
    </div>
   
    </>
)
}
export default Content;