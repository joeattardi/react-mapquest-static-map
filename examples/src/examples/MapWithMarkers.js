import React from "react"
import { Map, Markers, Marker } from "@joeattardi/react-mapquest-static-map"

import { MAPQUEST_API_KEY } from "../config"

export default function MapWithMarkers() {
  return (
    <div>
      <Map
        apiKey={MAPQUEST_API_KEY}
        center="Boston, MA"
        width={800}
        height={500}
      >
        <Markers>
          <Marker location="255 Merrimac Street, Boston, MA" />
          <Marker location="150 Atlantic Ave, Boston, MA" />
        </Markers>
      </Map>
    </div>
  )
}
