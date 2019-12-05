import React from 'react';
import { Banner, Map } from '@joeattardi/react-mapquest-static-map';

import { MAPQUEST_API_KEY } from '../config';

export default function BasicBanner() {
  return (
    <div>
      <Map
        apiKey={MAPQUEST_API_KEY}
        center="Boston, MA"
        width={800}
        height={500}
      >
        <Banner text="Home Sweet Home" />
      </Map>
    </div>
  );
}
