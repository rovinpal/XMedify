import React from "react";
import HospitalIcon from "../../Assets/HospitalIcon.png";
import RatingIcon from "../../Assets/RatingIcon.png";
import DentalImage from "../../Assets/DentalBannerImage.png";

const MedicalCenterCard = ({ data, index }) => {

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                position: "relative",
            }}
        >
        <div
            style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#fff",
            borderRadius: "12px",
            padding: "24px",
            width: "65%",
            height: "250px",
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.08)",
            }}
        >
            <div style={{ width: "25%", marginLeft: "10px" }}>
                <img
                    src={HospitalIcon}
                    alt="Hospital Icon"
                    style={{ width: "180px", height: "180px" }}
                />
            </div>

            <div
                style={{
                    flex: 1,
                    marginLeft: "20px",
                    width: "45%",
                    letterSpacing: "0.5px",
                }}
            >
                <h3 style={{ margin: 0, color: "#14BEF0" }}>{data["Hospital Name"]}</h3>
                <p style={{ marginBottom: "0px", fontWeight: "700", color: "#414146" }}>
                    {data.City}, {data.State}
                </p>
                <p
                    style={{
                    margin: "4px 0",
                    paddingBottom: "8px",
                    color: "#414146",
                    fontSize: "14px",
                    }}
                >
                    {data.Address}
                </p>
                <p style={{ margin: "4px 0" }}>
                    <span style={{ color: "#02A401", fontWeight: "700" }}>Free </span>
                    <span style={{ color: "#414146", textDecoration: "line-through" }}>
                    ₹500
                    </span>
                    <span style={{ color: "#414146", fontWeight: "400" }}>
                    {" "}
                    Consultation fee at clinic
                    </span>
                </p>
                <div
                    style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                    height: "20px",
                    width: "50px",
                    borderRadius: "5px",
                    backgroundColor: "#02A401",
                    padding: "2px",
                    marginTop: "10px",
                    }}
                >
                    <img src={RatingIcon} alt="Rating Icon" />
                    <p style={{ margin: 0, color: "#FFFFFF" }}>
                    {data["Hospital overall rating"] || "N/A"}
                    </p>
                </div>
            </div>

            <div
            style={{
                textAlign: "right",
                width: "30%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
            }}
            >
            <p style={{ margin: "4px 0", color: "#28C76F", fontWeight: 600 }}>
                Available Today
            </p>
            <button
                style={{
                width: "220px",
                padding: "10px 16px",
                backgroundColor: "#2AA7FF",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                fontWeight: "600",
                cursor: "pointer",
                }}
            >
                Book FREE Center Visit
            </button>
            </div>
        </div>

        {index === 0 && (
            <div
                style={{
                    width: "25%",
                    height: "300px",
                    marginLeft: "24px",
                    backgroundColor: "#FFFFFF",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.05)",
                }}
            >
                <img
                    src={DentalImage}
                    alt="Dental"
                    style={{
                    height: "80%",
                    width: "100%",
                    objectFit: "cover",
                    borderRadius: "8px",
                    }}
                />
            </div>
        )}
        </div>
    );
};

export default MedicalCenterCard; 