import React, { useState } from "react";
import ReactMapGL,{Marker} from 'react-map-gl';
import styled from 'styled-components';
import '../styles/health.css'
import node from '../assets/marker.svg'
import Healthcard from './Healthcard'
import * as parkDate from '../data/skateboard-parks.json'
const Health = () => {

    const [viewport, setViewport] = useState({
        latitude: 45.4211,
        longitude: -75.6903,
        width: "95vw",
        height: "60vh",
        zoom: 10,
        // width: '1440px',
        // height: '350px',
        display: 'block',
      //  border-radius: 25px;
        margin: '1rem'
      });

    return (
        <>
            <div class="map" style={{}}>
             <ReactMapGL  id="map" {...viewport} mapboxApiAccessToken="pk.eyJ1IjoidWdoZGl0eWEiLCJhIjoiY2tueDRpYm9rMTM5cDJwb2FiZzRleG1zNCJ9.ftruv_2iBsYp-docwA3TdA"
             mapStyle="mapbox://styles/ughditya/cknx0faor0enr17pnwa67hjgw"
      onViewportChange={(viewport) => {setViewport(viewport)}}
      >
        {parkDate.features.map((park) => (

            <Marker key = {park.properties.PARK_ID} 
            latitude={park.geometry.coordinates[1]}
            longitude={park.geometry.coordinates[0]}
            >
            <a style={{border:'none'}}>
               
         
          
                <img src ={node} alt="skate park icon" style={{border:"none"}}/>
            </a>
            </Marker>

        ))}
      </ReactMapGL>
      </div>
      <Healthcard class="Healthcard"/>
    
  
 
        </>
    )
}








export default Health
