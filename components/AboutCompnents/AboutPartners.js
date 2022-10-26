import Statistics from "./Statistics";
import Logos from "../Common/Logos";
const statistic = [
    {
        img :'/icon1.png',
        number:'>200',
        description:'number'
    },
    {
        img :'/icon1.png',
        number:'>200',
        description:'number'
    },
    {
        img :'/icon1.png',
        number:'>200',
        description:'number'
    }
]

function AboutPartners (){
return(
    <>
    <div className="py-40 space-y-8">
    <Statistics data={statistic}/>
        <Logos/>
    </div>
       
    </>
)
}
export default AboutPartners;