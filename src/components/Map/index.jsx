import React from 'react';
import GoogleMapReact from 'google-map-react';
import Icon from '@material-ui/core/Icon';
import Tooltip from '@material-ui/core/Tooltip';
import place from '../../../content/assets/icons/place.svg'
import Map from 'pigeon-maps'
import Marker from 'pigeon-marker'
import Overlay from 'pigeon-overlay'



const isClient = typeof window !== 'undefined';

// function Marker(props) {
// 	return (
// 		<Tooltip title={'Ubicación'} placement="top">
// 			<img src={place} style={{ margin: 0, padding: 0 }}/>
// 		</Tooltip>
// 	);
// }

export const GoogleMap = (props) => {
  const {
    address,
    googleMapsApiKey
  } = props;
  const lat = parseFloat(address.lat);
  const lng = parseFloat(address.lng);
  return (
      <div style={{ height: '100vh', width: '100%' }}>
        { isClient && (
           <Map metaWheelZoom={true} center={[lat, lng]} zoom={12} style={{ width: '100%', height: '100vh' }}>
           <Marker anchor={[lat, lng]} payload={1} onClick={({ event, anchor, payload }) => {}} />
       
           <Overlay anchor={[lat, lng]} offset={[120, 79]}>
      <img src='pigeon.jpg' width={240} height={158} alt='' />
    </Overlay>
         </Map>
        )}
      </div>
  );
}