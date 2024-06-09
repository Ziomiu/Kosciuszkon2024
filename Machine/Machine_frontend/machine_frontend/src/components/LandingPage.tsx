import {Button, Paper, Typography } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";

export default function LoginPanel() {
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
                aspectRatio: "1.6"
            }}
        >
            <Header />

            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Typography>
                    <h3 style={{ color: "#DAD3BE" }}>
                        Cześć! Jeśli masz do wyrzucenia jakieś plastikowe butelki, to świetnie trafiłeś - razem mamy wpływ na środowisko, które nas otacza!
                        {/* Hi! We hope you have some plastic bottles, so we can use them again and make a great impact together! */}
                    </h3>
                    <h3 style={{ color: "#DAD3BE" }}>
                        Jeśli nie masz jeszcze konta w naszej aplikacji, pobierz ją i wspólnie uczyńmy świat lepszym miejscem!
                        {/* If you do not have an account yet, feel free to download our app and make world a better place with us! */}
                    </h3>
                    <h3 style={{ color: "#DAD3BE" }}>
                        Przejdź do następnej strony, by zalogować się i oddać swoje butelki, a my z chęcią cię ozłocimy!
                        {/* Move to the next page to log in into your account so we can gild you! */}
                    </h3>
                </Typography>
                <Button
                    sx={{
                        border: "black solid 0.5px",
                        backgroundColor: "#6B8A7A",
                        color: "#DAD3BE",
                        fontSize: "24px"
                    }}
                    href = "http://localhost:5173/login"
                >
                    Kontynuuj
                </Button>
            </div>
            <Footer />
        </Paper>
    </>
}