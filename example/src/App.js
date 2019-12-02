import React, { useState } from 'react';
import './App.css';

import {
  Map,
  Banner,
  Marker,
  Markers
} from '@joeattardi/react-mapquest-static-map';

function App() {
  const [formValues, setFormValues] = useState({
    apiKey: 'l9kGCLj0h9bwvhVQLRpsoecAcTSHXVbQ',
    center: '5 Catherine Ave, Billerica, MA, 01821'
  });

  const [apiKey, setApiKey] = useState('');
  const [center, setCenter] = useState('');

  function onFormChange(event) {
    setFormValues({
      ...formValues,
      [event.target.id]: event.target.value
    });
  }

  function createMap(event) {
    event.preventDefault();

    setApiKey(formValues.apiKey);
    setCenter(formValues.center);
  }

  return (
    <div>
      <h1>MapQuest Static Maps</h1>
      <form onSubmit={createMap}>
        <div>
          <label htmlFor="apiKey">MapQuest API Key:</label>
          <input
            id="apiKey"
            type="text"
            size="50"
            value={formValues.apiKey}
            onChange={onFormChange}
          />
        </div>

        <div>
          <label htmlFor="center">Map Center:</label>
          <input
            id="center"
            type="text"
            size="50"
            value={formValues.center}
            onChange={onFormChange}
          />
        </div>

        <div>
          <button>Generate Map</button>
        </div>
      </form>
      <div>
        {apiKey ? (
          <Map mapquestApiKey={apiKey} center={center} format="png">
            <Banner text="Home" />
            <Markers>
              <Marker location="5 Catherine Ave, Billerica MA 01821" />
              <Marker location="5 Maverick Circle, Billerica MA 01821" icon="marker-green" />
            </Markers>
          </Map>
        ) : null}
      </div>
    </div>
  );
}

export default App;
