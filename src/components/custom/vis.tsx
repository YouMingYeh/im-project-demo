"use client"

import React, { useEffect, useRef } from 'react';

interface VisProps {
    // Define the expected props here
    filename: string;
}

function Vis(props: VisProps) {
    const [height, setHeight] = React.useState("0px");
    const ref = useRef<HTMLIFrameElement>(null);
    const onLoad = () => {
        if (ref.current && ref.current.contentWindow) {
            setHeight(ref.current.contentWindow.document.body.scrollHeight + 'px');
        }
    };
    useEffect(() => {
        onLoad();
    }, []);

    return (
        <iframe ref={ref}
            onLoad={onLoad}
            src={props.filename}
            width="100%"
            height={height}
            style={{
                maxWidth: 1280,
                width: "100%",
                overflow: "auto",
            }} />
    );
}

export default Vis;