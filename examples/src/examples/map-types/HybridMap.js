import React from 'react';
import { Map } from '@joeattardi/react-mapquest-static-map';

import { MAPQUEST_API_KEY } from '../../config';

export default function HybridMap() {
  return (
    <div>
      <Map
        apiKey={MAPQUEST_API_KEY}
        center="Boston, MA"
        width={500}
        height={300}
        type="hyb"
      />
    </div>
  );
}
