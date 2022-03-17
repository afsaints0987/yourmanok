import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";



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
                            <span className="icon_container"><FontAwesomeIcon icon={faLocationDot} /> <p>{branch.address}</p></span>
                            <span className="icon_container"><FontAwesomeIcon icon={faPhone}/> <p>{branch.contact}</p></span>
                        </div>
                    )
                })}
            </div>
            <div className="social_media">
                <FontAwesomeIcon className="socmed_icon" icon={faFacebookF} />
                <FontAwesomeIcon className="socmed_icon" icon={faInstagram} />
            </div>
        </div>
    )
}

export default Location
