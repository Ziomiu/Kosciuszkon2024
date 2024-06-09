import { useState } from "react";
import Numpad from "./Numpad";
import { Button, Paper } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";

type User = {
    id: string,
    name: string,
    password: string,
    phone: string,
    surname: string,
    userBalanceId: {
        id: string,
        balance: string
    },
    userBottleDetailsId: {
        id: string,
        depositedBottles: number
    }
}

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

    const loginHandler = async () => {

        const response = await fetch(`http://127.0.0.1:8000/api/users/find-by-telephone?phone=${phoneNumber}`, {
            method: "GET",
        })

        if (response.ok) {
            const data: User = await response.json()

            window.location.href = "http://localhost:5173/bottles-panel"
            localStorage.setItem("userId", data.id)
        } else {
            alert("Nie znaleziono użytkownika zarejestrowanego na dany numer telefonu!")
        }
    }

    return <>
        <Paper
            elevation={16}    
            style={{
                backgroundColor: "#254336",
                padding: "30px 60px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "20px",
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
                    
                    <h1 style={{ textAlign: "left", padding: "10px", color: "#DAD3BE" }}>Numer telefonu</h1>
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
                        Kontynuuj
                    </Button>
                </div>
            </div>
            <Footer />
        </Paper>
    </>
}