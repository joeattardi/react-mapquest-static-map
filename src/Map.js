import React from 'react';

import Banner from './Banner';
import Marker from './Marker';
import Markers from './Markers';

const MAPQUEST_BASE_URL = 'https://www.mapquestapi.com/staticmap/v5/map';

export default function Map({ children, apiKey, center, boundingBox, zoom, width, height, margin, format, type, scalebar, scalebarPosition }) {
  let mapUrl = MAPQUEST_BASE_URL;
  mapUrl += `?key=${apiKey}`;

  if (center) {
    mapUrl += `&center=${encodeURIComponent(center)}`;
  }

  if (boundingBox) {
    mapUrl += `&boundingBox=${boundingBox.join(',')}`;
  }

  if (margin) {
    mapUrl += `&margin=${margin}`;
  }

  if (format) {
    mapUrl += `&format=${format}`;
  }

  if (type) {
    mapUrl += `&type=${type}`;
  }

  if (scalebar) {
    mapUrl += `&scalebar=${scalebar}`;

    if (scalebarPosition) {
      mapUrl += `|${scalebarPosition}`;
    }
  }

  mapUrl += `&zoom=${zoom}`;
  mapUrl += `&size=${width},${height}`;

  let markers = [];

  React.Children.forEach(children, child => {
    if (child.type === Banner) {
      mapUrl += getBanner(child);
    } else if (child.type === Markers) {
      if (child.props.declutter) {
        mapUrl += '&declutter=true';
      }

      if (child.props.defaultMarker) {
        mapUrl += `&defaultMarker=${encodeURIComponent(child.props.defaultMarker)}`;
      }
      React.Children.forEach(child.props.children, marker => {
        if (marker.type === Marker) {
          let markerOption = marker.props.location;
          if (marker.props.icon) {
            markerOption += `|${marker.props.icon}`;
          }
          markers.push(markerOption);
        }
      });
    }
  });

  if (markers.length) {
    mapUrl += `&locations=${markers.join('||')}`;
  }

  return (
    <img src={mapUrl} />
  );
}

function getBanner(child) {
  const bannerOptions = [child.props.size, child.props.position, child.props.bannerColor, child.props.textColor]
  .filter(option => !!option)
  .join('-');

  let bannerArg = child.props.text;
  if (bannerOptions) {
    bannerArg += `|${bannerOptions}`;
  }

  return `&banner=${bannerArg}`;
}

Map.defaultProps = {
  zoom: 15,
  width: 400,
  height: 400
};
