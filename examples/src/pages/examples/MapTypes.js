import React from 'react';

import Layout from '../../components/Layout';
import SourceFile from '../../components/SourceFile';

import StandardMap from '../../examples/map-types/StandardMap';
import standardMapSrc from '!!raw-loader!../../examples/map-types/StandardMap';

import HybridMap from '../../examples/map-types/HybridMap';
import hybridMapSrc from '!!raw-loader!../../examples/map-types/HybridMap';

import SatelliteMap from '../../examples/map-types/SatelliteMap';
import satelliteMapSrc from '!!raw-loader!../../examples/map-types/SatelliteMap';

import LightMap from '../../examples/map-types/LightMap';
import lightMapSrc from '!!raw-loader!../../examples/map-types/LightMap';

import DarkMap from '../../examples/map-types/DarkMap';
import darkMapSrc from '!!raw-loader!../../examples/map-types/DarkMap';

export default function MapTypes() {
  return (
    <Layout title="Map Types">
      <h2>Map Types</h2>
      <div>
        <h3>Standard Map</h3>
        <SourceFile src={standardMapSrc} />
        <StandardMap />
      </div>

      <div>
        <h3>Hybrid Map</h3>
        <SourceFile src={hybridMapSrc} />
        <HybridMap />
      </div>

      <div>
        <h3>Satellite Map</h3>
        <SourceFile src={satelliteMapSrc} />
        <SatelliteMap />
      </div>

      <div>
        <h3>Light Map</h3>
        <SourceFile src={lightMapSrc} />
        <LightMap />
      </div>

      <div>
        <h3>Dark Map</h3>
        <SourceFile src={darkMapSrc} />
        <DarkMap />
      </div>
    </Layout>
  );
}
