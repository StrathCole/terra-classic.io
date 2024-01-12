import React from 'react';
import { Typography, Button } from '@mui/material';

export default function Home() {
    return (
        <section id="home" className="section">
            <div className="container">
                <Typography variant="h2" gutterBottom>
                    <strong>Terra Classic</strong> Community
                </Typography>
                <Typography paragraph>
                    <strong>This is a Proof-of-Concept site and not the official Terra Classic website.</strong>
                </Typography>
                <Typography paragraph>
                    Welcome to Terra Classic. Here, a dedicated community is the heart of the network, working together towards a common goal. With no stablecoins currently pegged, the focus is on exploring paths for the future.
                </Typography>
                <Typography paragraph>
                    The Terra Classic platform has become a hub for discussion, development, and the open exchange of ideas. While there are challenges, the collective effort of the community is paving the way for new possibilities.
                </Typography>
                <Button variant="contained" className="cta-button" onClick={() => { window.location.hash = "about"}}>
                    Learn About Our Community
                </Button>
            </div>
        </section>
    );
}
