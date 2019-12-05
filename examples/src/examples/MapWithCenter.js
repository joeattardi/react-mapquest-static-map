import React from 'react';
import { Map } from '@joeattardi/react-mapquest-static-map';

import { MAPQUEST_API_KEY } from '../config';

export default function MapWithCenter() {
  return (
    <div>
      <Map
        apiKey={MAPQUEST_API_KEY}
        center="Boston, MA"
        width={800}
        height={500}
      />
    </div>
  );
}
