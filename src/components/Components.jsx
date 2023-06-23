import React from "react";

export default function Components(props) {
    return (
        <section className="card">
            <div className="left-side">
                <img className="card-img" src={props.imageUrl} alt="" />   
            </div>
            <div className="right-side">
                <div className="right-info">
                    <img className="placeholder-img" src="./src/assets/placeholder.png" alt="placeholder image" />
                    <p className="location-name">{props.location}</p>
                    <a className="location-link" href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h2 className="card-title">{props.title}</h2>
                <p className="card-date">{props.startDate} - {props.endDate}</p>
                <p className="card-description">{props.description}</p>
            </div>
        </section>
        
    )
    
}