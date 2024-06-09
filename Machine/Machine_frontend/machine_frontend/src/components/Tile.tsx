import { Button } from "@mui/material";
import './../App.css'

export default function Tile(params: {number: number, newDigitHandler: (newDigit: number) => void}) {

    return <>
        <Button
            sx={{
                width: "32%",
                aspectRatio: "1",
                border: "black solid 0.5px",
                backgroundColor: "#6B8A7A"
            }}
            onClick={_ => params.newDigitHandler(params.number)}
        >
            <h1 style={{ color: "#DAD3BE"}}>
                {params.number}
            </h1>
        </Button>
    </>
}