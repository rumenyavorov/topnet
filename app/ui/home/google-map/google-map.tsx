import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import React, { useRef, useState } from 'react';

interface MyGoogleMapProps {
    onMarkerPlaced: (latLng: google.maps.LatLngLiteral) => void;
}

interface MarkerPosition {
    lat: number;
    lng: number;
}

const center = {
    lat: 42.67784923055712,
    lng: 23.239872655096868
};

const MyGoogleMap: React.FC<MyGoogleMapProps> = ({ onMarkerPlaced }) => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyDpPAGSzwb799qDmHjr_f5Evf3Bv1LQveQ', // Replace with your API key
    });


    const [markerPosition, setMarkerPosition] = useState<MarkerPosition | null>(null);
    const mapRef = useRef<google.maps.Map | null>(null);

    const mapClickHandler = (event: google.maps.MapMouseEvent) => {
        if (event.latLng) {
            const latLng = {
                lat: event.latLng.lat(),
                lng: event.latLng.lng(),
            };
            setMarkerPosition(latLng);
            onMarkerPlaced(latLng);
        }
    };

    const onMapLoad = (map: google.maps.Map) => {
        mapRef.current = map;
    };

    if (!isLoaded) return <div>Loading...</div>;

    return (
        <GoogleMap
            mapContainerStyle={{ width: '100%', height: '400px' }}
            zoom={15}
            center={markerPosition || center}
            onClick={mapClickHandler}
            onLoad={onMapLoad}
        >
            {markerPosition && <Marker position={markerPosition} />}
        </GoogleMap>
    );
};
export default MyGoogleMap;

//AIzaSyDpPAGSzwb799qDmHjr_f5Evf3Bv1LQveQ