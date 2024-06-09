import { IconButton } from "@mui/material";
import Tile from "./Tile"
import BackspaceIcon from '@mui/icons-material/Backspace';
import PublicIcon from '@mui/icons-material/Public';

export default function Numpad(params: {backspaceHandler: () => void, newDigitHandler: (newDigit: number) => void}) {
    const digits = [...Array(10)].map((_, i) => (i + 1) % 10)

    return <>
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                gap: "5px"
            }}
        >
            {digits.map(i => {
                return (
                    <>
                        <Tile number={i} newDigitHandler={params.newDigitHandler} />
                    </>
                )
            })}
            <IconButton
                onClick={params.backspaceHandler}
                sx={{
                    width: "32%",
                    aspectRatio: "1",
                    border: "black solid 0.5px",
                    backgroundColor: "#6B8A7A",
                    color: "#DAD3BE",
                    borderRadius: "0"
                }}
            >
                <BackspaceIcon sx={{fontSize: "48px"}}/>
            </IconButton>
        </div>
    </>
}