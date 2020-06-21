import React from "react"
import { Link } from "gatsby"
import { Map as Leaflet, TileLayer, Marker, Popup } from "react-leaflet"
import { useMediaQuery } from "react-responsive"
import "leaflet/dist/leaflet.css"

import L from "leaflet"

delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
})

const Map = () => {
  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  })
  return (
    <Leaflet center={[57.1433, -2.1342]} zoom={isDesktop ? 13 : 12}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
      />
      <Marker position={[57.1434, -2.1721]}>
        <Popup>
          <Link to="/properties/bruce-house-and-rose-house">Rose House</Link>
        </Popup>
      </Marker>
      <Marker position={[57.1436, -2.1728]}>
        <Popup>
          <Link to="/properties/bruce-house-and-rose-house">Bruce House</Link>
        </Popup>
      </Marker>
      <Marker position={[57.1444, -2.173]}>
        <Popup>
          <Link to="/properties/weighbridge-cottage">Weighbridge Cottage</Link>
        </Popup>
      </Marker>
      <Marker position={[57.1407, -2.1164]}>
        <Popup>
          <Link to="/properties/46-ashvale-place-and-49-ashvale-place">
            46 Ashvale Place
          </Link>
        </Popup>
      </Marker>
      <Marker position={[57.1405, -2.1168]}>
        <Popup>
          <Link to="/properties/46-ashvale-place-and-49-ashvale-place">
            49 Ashvale Place
          </Link>
        </Popup>
      </Marker>
    </Leaflet>
  )
}

export default Map
