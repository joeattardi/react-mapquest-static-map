import React from "react"
import { Map, Markers, Marker } from "@joeattardi/react-mapquest-static-map"

import { MAPQUEST_API_KEY } from "../config"

export default function CustomMarkers() {
  return (
    <div>
      <Map
        apiKey={MAPQUEST_API_KEY}
        center="Boston, MA"
        width={800}
        height={500}>
        <Markers>
          <Marker
            location="255 Merrimac Street, Boston, MA"
            icon="marker-sm-FB4F14-002244" />
          <Marker 
            location="150 Atlantic Ave, Boston, MA" 
            icon="marker-A" />
        </Markers>
      </Map>
    </div>
  )
}
