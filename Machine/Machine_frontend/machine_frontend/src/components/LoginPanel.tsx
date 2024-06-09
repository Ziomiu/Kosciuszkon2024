import { useState } from "react";
import Numpad from "./Numpad";
import { Button, Divider, Paper } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";

export default function LoginPanel() {
    const [phoneNumber, setPhoneNumber] = useState<string>("");

    const backspaceHandler = () => {
        if (phoneNumber.length > 0) {
            setPhoneNumber(state => state.slice(0, -1))
        }
    }

    const newDigitHandler = (newDigit: number) => {
        if (phoneNumber.length < 9) {
            setPhoneNumber(state => "".concat(state, newDigit.toString()))
        }
    }

    const loginHandler = () => {
        const condition = true

        if (condition) {
            window.location.href = "http://localhost:5173/bottles-panel"
        }
    }

    return <>
        <Paper
            elevation={16}    
            style={{
                width: "50vw",
                backgroundColor: "#254336",
                padding: "30px 60px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "20px",
                aspectRatio: "1.5"
            }}
        >
            <Header />

            <div style={{
                display: "flex",
                flexDirection: "row",
            }}>
                <div style={{ width: "50%" }}>
                    <Numpad backspaceHandler={backspaceHandler} newDigitHandler={newDigitHandler} />
                </div>
                <div style={{
                    width: "50%",
                    display: "flex",
                    justifyContent: "left",
                    alignItems: "center",
                    flexDirection: "column"
                }}>
                    
                    <h1 style={{ textAlign: "left", padding: "10px", color: "#DAD3BE" }}>Phone number</h1>
                    <h1 style={{ width: "80%", height: "10%", border: "#DAD3BE solid 1px", textAlign: "left", padding: "10px", color: "#DAD3BE"}}>{`+48 ${phoneNumber}`}</h1>
                    <Button
                        onClick={_ => loginHandler()}
                        sx={{
                            width: "80%",
                            aspectRatio: "2",
                            border: "black solid 0.5px",
                            backgroundColor: "#6B8A7A",
                            color: "#DAD3BE",
                            fontSize: "24px"
                        }}
                    >
                        Continue
                    </Button>
                </div>
            </div>
            <Footer />
        </Paper>
    </>
}