"use client"

import React, { useState, useEffect } from 'react';

interface VisComponentProps {
    // Define the expected props here
    filename: string;
}

function VisComponent(props: VisComponentProps) {
    const [htmlContent, setHtmlContent] = useState('');

    useEffect(() => {
        async function fetchHtml() {
            try {
                const response = await fetch(props.filename);
                const html = await response.text();
                setHtmlContent(html);
            } catch (error) {
                console.error('Error fetching HTML file:', error);
            }
        }

        fetchHtml();
    }, []);

    return (
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    );
}

export default VisComponent;