import React from 'react';
import { Map } from '@joeattardi/react-mapquest-static-map';

import { MAPQUEST_API_KEY } from '../config';

export default function BaseExample() {
  return (
    <div>
      <Map apiKey={MAPQUEST_API_KEY} center="Boston, MA" />
    </div>
  );
}
