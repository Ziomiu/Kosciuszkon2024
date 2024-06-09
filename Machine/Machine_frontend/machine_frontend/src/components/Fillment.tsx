import { FaBottleWater } from "react-icons/fa6";

const iconColor = (id: number) => {
    if (id < 4) {
        return "green"
    } else if (id < 8) {
        return "orange"
    } else {
        return "red"
    }
}

const bottlesBar = (percentage: number) => {
    return <>
        <div>
            {
                [...Array(Math.ceil(percentage * 10))].map((_, i)=>
                    <FaBottleWater color={iconColor(i)} fontSize="50px" />
                )
            }
            {
                [...Array(10 - Math.ceil(percentage * 10))].map(_ =>
                    <FaBottleWater color="transparent" stroke="grey" strokeWidth="20px" fontSize="50px" />
                )
            }
        </div>
    </>
}

export default function Fillment(params: { percentage: number }) {
    return <>
        
        
        <div style={{display: "flex", justifyContent: "center"}}>
            {bottlesBar(params.percentage)}
        </div>
    </>
}