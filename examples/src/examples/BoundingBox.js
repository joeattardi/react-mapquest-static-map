import React from "react"
import { Map } from "@joeattardi/react-mapquest-static-map"

import { MAPQUEST_API_KEY } from "../config"

export default function BoundingBox() {
  return (
    <div>
      <Map
        apiKey={MAPQUEST_API_KEY}
        boundingBox={[38.915, -77.072, 38.876, -77.001]}
        width={800}
        height={500}
      />
    </div>
  )
}
