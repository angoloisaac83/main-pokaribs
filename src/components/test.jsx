// import React, { useState } from "react";
// import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
// import { GeoSearchControl, OpenStreetMapProvider } from "react-leaflet-geosearch";
// // import "leaflet/dist/leaflet.css";

// const MyMap = () => {
//   const [position, setPosition] = useState<[number, number] | null>(null); // Position for the marker
//   const [searchInput, setSearchInput] = useState(""); // Input value

//   // Add click event handler to the map
//   const LocationMarker = () => {
//     useMapEvents({
//       click(e) {
//         const { lat, lng } = e.latlng;
//         setPosition([lat, lng]); // Update marker position
//         setSearchInput(`${lat}, ${lng}`); // Update input field with coordinates
//       },
//     });
//     return position === null ? null : (
//       <Marker position={position}>
//         <Popup>Selected Location: {searchInput}</Popup>
//       </Marker>
//     );
//   };

//   return (
//     <div style={{ height: "100vh", width: "100%" }}>
//       <div style={{ marginBottom: "10px", padding: "10px" }}>
//         {/* Input field for location */}
//         <input
//           type="text"
//           value={searchInput}
//           onChange={(e) => setSearchInput(e.target.value)}
//           placeholder="Search for a location..."
//           style={{
//             width: "100%",
//             padding: "10px",
//             fontSize: "16px",
//             border: "1px solid #ccc",
//             borderRadius: "4px",
//           }}
//         />
//       </div>
//       <MapContainer
//         center={[51.505, -0.09]}
//         zoom={13}
//         style={{ height: "calc(100% - 50px)", width: "100%" }}
//       >
//         {/* Tile Layer */}
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         />

//         {/* GeoSearch Control */}
//         <GeoSearchControlComponent
//           provider={new OpenStreetMapProvider()}
//           onLocationSelected={(location) => {
//             setPosition([location.y, location.x]); // Update marker position
//             setSearchInput(location.label); // Update input field
//           }}
//         />

//         {/* Marker with Click Functionality */}
//         <LocationMarker />
//       </MapContainer>
//     </div>
//   );
// };

// // GeoSearch Control as a React component
// const GeoSearchControlComponent = ({ provider, onLocationSelected }) => {
//   useMapEvents(() => {
//     const map = useMapEvents({});
//     const searchControl = GeoSearchControl({
//       provider,
//       style: "button",
//       showMarker: false,
//     });

//     map.addControl(searchControl);

//     map.on("geosearch/showlocation", (result) => {
//       if (result.location) {
//         onLocationSelected(result.location);
//       }
//     });

//     return null;
//   });
// };

// export default MyMap;
