import React from 'react'

function Location() {

    const Branches = [
        {
            name: "Your Manok Concepcion Dos",
            address: "Rainbow St. Concepcion Dos, Marikina",
            contact: "09171258640"
        },
        {
            name: "Your Manok Parang",
            address: "J.P Rizal cor Parang, Marikina",
            contact: "09171258640"
        },
        {
            name: "Your Manok SJDM",
            address: "San Jose del Monte, Bulacan, Central Luzon",
            contact: "09167162168"
        }
    ]
    return (
        <div className="location_section" id="location">
            <h2>Our Location</h2>
            <div className="location_container">
                {Branches.map((branch, index) => {
                    return (
                        <div key={index} className="branch_container">
                            <h4>{branch.name}</h4>
                            <p>{branch.address}</p>
                            <p>{branch.contact}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Location
