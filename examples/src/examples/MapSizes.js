import React from 'react';
import { Map } from '@joeattardi/react-mapquest-static-map';

import { MAPQUEST_API_KEY } from '../config';

export default function MapSizes() {
  return (
    <div>
      <Map
        apiKey={MAPQUEST_API_KEY}
        center="Boston, MA"
        width={400}
        height={400}
        retina={true}
      />
      <Map
        apiKey={MAPQUEST_API_KEY}
        center="Boston, MA"
        width={400}
        height={400}
      />
    </div>
  );
}
