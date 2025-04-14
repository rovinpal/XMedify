import React from "react";

const Announcement = () => {

    return (
        <div
            style={{
                position: "sticky",
                top: 0,
                left: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#2AA7FF",
                color: "#FFFFFF",
                textAlign: "center",
                height: "40px",
                zIndex: 1000,
            }}
        >
            <p
                style={{
                    fontSize: "14px",
                    fontWeight: "400"
                }}
            > 
                The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.
            </p>
        </div>
    )
};

export default Announcement;