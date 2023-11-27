import React from 'react';
import { Typography, Container } from '@mui/material';

export default function Roadmap() {
    return (
        <section id="roadmap" className="section">
            <Container>
                <Typography variant="h2" gutterBottom>
                    The Terra Classic Roadmap
                </Typography>
                <Typography>
                    {/* Roadmap content goes here. */}
                    Up to governance decisions.
                </Typography>
                {/* Add more detailed roadmap information here */}
            </Container>
        </section>
    );
}
