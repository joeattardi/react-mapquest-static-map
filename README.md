# React MapQuest Static Maps

Add MapQuest static maps to your React app

*Note*: This is an unofficial library and is not affiliated with MapQuest in any way.

## [Documentation](https://joeattardi.github.io/react-mapquest-static-map)
 - [API reference](https://joeattardi.github.io/react-mapquest-static-map/api/Map)
 - [Examples](https://joeattardi.github.io/react-mapquest-static-map/examples/MapWithCenter)

## Getting Started

First, you'll need a MapQuest API key. To sign up for an API key, go to [https://developer.mapquest.com](https://developer.mapquest.com).

### Install the package

    npm install --save @joeattardi/react-mapquest-static-map

### Build a map

```javascript
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
```
