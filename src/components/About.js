import React from 'react';
import { Typography } from '@mui/material';

export default function About() {
    return (
        <section id="about" className="section">
            <div className="container">
                <Typography variant="h2" gutterBottom>
                    The Terra Classic Story
                </Typography>
                <Typography paragraph>
                    Terra Classic began as an ambitious blockchain project with a simple premise: to enable easy and accessible financial transactions. Over time, it has evolved, shaped by the experiences of its users and the broader community.
                </Typography>
                {/* Repeat the pattern below for each subsection */}
                <Typography variant="h3">
                    Community-Driven Progress
                </Typography>
                <Typography paragraph>
                    The strength of Terra Classic lies in its community. From developers to daily users, a diverse group of people come together to contribute their skills and ideas. This collaboration is the cornerstone of the network’s ongoing development and the driving force behind its adaptability and resilience.
                </Typography>
                <Typography variant="h3">
                    Adaptation and Innovation
                </Typography>
                <Typography paragraph>
                    Change is constant in the world of blockchain, and Terra Classic is no exception. The community is currently focused on finding new ways to leverage the network’s capabilities. While the original vision has shifted, the commitment to innovation and utility remains strong.
                </Typography>
                <Typography variant="h3">
                    Collaborative Efforts
                </Typography>
                <Typography paragraph>
                    Reviving Terra Classic is a collective endeavor. It's about more than just technology; it’s about a shared mission to build something that lasts. The community's dedication to problem-solving and collaboration is leading to new ideas and projects that could redefine the network’s future.
                </Typography>
                <Typography variant="h3">
                    A Future Forged Together
                </Typography>
                <Typography paragraph>
                    Looking ahead, the path for Terra Classic is one of collective effort and shared vision. The community is engaging in thoughtful planning and execution to ensure the network not only recovers but thrives. It’s a commitment to a future forged by unity and powered by the belief in the potential of blockchain technology.
                </Typography>
            </div>
        </section>
    );
}
