import { Divider, Typography } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import PublicIcon from '@mui/icons-material/Public';


export default function Footer() {

    return <>
        <Divider />
        <div style={{display: "flex", justifyContent: "center", gap: "4px"}}>
            <Typography textAlign="center" color="#DAD3BE" fontSize="24 px" sx={{ display: 'flex', alignItems: 'center' }}>
                Because we
            </Typography>
            <FavoriteIcon sx={{ color: "#A87676" }} />
            <Typography textAlign="center" color="#DAD3BE" fontSize="24 px" sx={{ display: 'flex', alignItems: 'center' }}>
                our
            </Typography>
            <PublicIcon sx={{ color: "#9BB0C1" }} />
        </div>
    </>
}