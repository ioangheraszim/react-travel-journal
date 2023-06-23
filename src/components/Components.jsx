import React from "react";

export default function Components(props) {
    return (
        <section className="card">
            <div className="left-side">
                <img className="card-img" src="https://images.unsplash.com/photo-1570459027562-4a916cc6113f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1888&q=80" alt="" />   
            </div>
            <div className="right-side">
                <div className="right-info">
                    <img className="placeholder-img" src="./src/assets/placeholder.png" alt="placeholder image" />
                    <p className="location-name">Japan</p>
                    <a className="location-link" href="#">View on Google Maps</a>
                </div>
                <h2 className="card-title">Mount Fuji</h2>
                <p className="card-date">12 Jan, 2021 - 24 Jan, 2021</p>
                <p className="card-description">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
        </section>
        
    )
    
}