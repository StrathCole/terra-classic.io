import React from 'react';
import { Typography, Button } from '@mui/material';

export default function Hero() {
    return (
        <div className="hero" id="hero">
            <Typography variant="h1" gutterBottom className="text-upper">
                <strong>Welcome</strong> to Terra Classic
            </Typography>
            <Typography variant="subtitle1" sx={{marginBottom: "1em"}}>
                "What is dead may never die."
            </Typography>
            <Button variant="contained" size='small' className='cta-button' onClick={() => {window.location.hash = "about"}}>
                Learn About Terra Classic
            </Button>
        </div>
    );
}
