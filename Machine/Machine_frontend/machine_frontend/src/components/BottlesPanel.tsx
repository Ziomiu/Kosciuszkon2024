import { useEffect, useState } from "react";
import Fillment from "./Fillment";
import { Button, IconButton, Paper, Typography } from "@mui/material";
import RecyclingIcon from '@mui/icons-material/Recycling';
import Footer from "./Footer";
import Header from "./Header";

type MachineDetails = {
    id: Number,
    address_data: {
        id: number,
        city: string,
        street: string,
        homeNumber: string,
        latitude: number,
        longitude: number
    },
    bottles_in_automat_data: {
        id: number,
        plasticBottlesNow: number,
        plasticBottlesLimit: number
    },
    addressId: number,
    bottlesInAutomatId: number
}

export default function BottlesPanel() {
    const [machineDetails, setMachineDetails] = useState<MachineDetails | null>(null);
    const [bottlesInserted, setBottlesInserted] = useState<number>(0);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const machineId = 1;
    const userId = 1;

    const handleBottleInsert = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedFile(file);
            setImagePreview(URL.createObjectURL(file));
            if (checkIfBottle()) {
                try {
                    const data = {
                        eventType: "DEPOSIT_BOTTLE",
                        userId: userId,
                        machineId: machineId
                    }

                    setBottlesInserted(state => state + 1);
                    console.log(data)

                    const response = await fetch(`http://127.0.0.1:8000/api/machine-events/`, {
                        method: "POST",
                        body: JSON.stringify(data),
                    })

                    if (response.ok) {
                        setBottlesInserted(state => state + 1);
                        // fetchMachineDetails();
                    }
                } catch (error) {
                    console.error(error)
                }
            }
        }
    }

    const checkIfBottle = () => {
        return true;
    }

    const fetchMachineDetails = async () => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/machines/${machineId}`, {
                method: "GET",
            });
            const data: MachineDetails = await response.json();
            setMachineDetails(data);
        } catch (error) {
            console.error(error);
        }
    }

    const triggerFileInput = () => {
        document.getElementById('file-input')?.click();
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
            {1 && <>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around"
                }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        <h2 style={{ textAlign: "left", padding: "10px", color: "#DAD3BE" }}>
                            {`Bottles inserted today:`}
                        </h2>
                        <h2 style={{ width: "100%", height: "10%", border: "#DAD3BE solid 1px", textAlign: "left", padding: "10px", color: "#DAD3BE" }}>{`${bottlesInserted}`}</h2>
                        <h2 style={{ textAlign: "left", padding: "10px", color: "#DAD3BE" }}>
                            {`Amount of money earned:`}
                        </h2>
                        <Typography style={{ width: "100%", height: "10%", border: "#DAD3BE solid 1px", textAlign: "left", padding: "10px", color: "#DAD3BE", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <h2>{`${(0.50 * bottlesInserted).toFixed(2)}`}</h2>
                        </Typography>
                    </div>
                    <div style={{width: "25%", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
                        <Button
                            onClick={triggerFileInput}
                            sx={{
                                width: "100%",
                                aspectRatio: "2",
                                border: "black solid 0.5px",
                                backgroundColor: "#6B8A7A",
                                color: "#DAD3BE",
                                fontSize: "24px"
                            }}
                            endIcon={<RecyclingIcon sx={{ fontSize: "24px" }} />}
                        >
                            Insert Bottle
                        </Button>
                        <input
                            type="file"
                            id="file-input"
                            accept="image/*"
                            style={{ display: 'none' }}
                            onChange={handleBottleInsert}
                        />
                        {imagePreview && (
                            <img
                                src={imagePreview}
                                alt="Selected Bottle"
                                style={{ marginTop: '10px', maxWidth: '400px', maxHeight: '400px', border: '1px solid #DAD3BE' }}
                            />
                        )}
                    </div>
                </div>
            </>}
            <Fillment percentage={0.87} />
            <Footer />
        </Paper>
    </>
}
