import RecyclingIcon from '@mui/icons-material/Recycling';
import { IconButton } from '@mui/material';

export default function Header() {
    
    return <>
        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
        }}>
            <h1
                style={{ textAlign: "left", padding: "10px", color: "#DAD3BE" }}
            >
                EcoDrop!
            </h1>
            <IconButton
                href = "http://localhost:5173/"
                sx={{
                    color: "#DAD3BE",
                    "&:hover": {
                        backgroundColor: "transparent",
                        color: "#6B8A7A"
                    },
                }}
            >
                <RecyclingIcon sx={{ fontSize: "128px" }} />
            </IconButton>
        </div>
    </>
}