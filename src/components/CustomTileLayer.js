import { memo } from "react";
import { TileLayer } from "react-leaflet";

function CustomTileLayer() {
  const MAPBOX_API_KEY = process.env.NEXT_PUBLIC_MAPBOX_API_KEY;
  const MAPBOX_USERID = process.env.NEXT_PUBLIC_MAPBOX_USERID;
  const MAPBOX_STYLEID = process.env.NEXT_PUBLIC_MAPBOX_STYLEID;

  return MAPBOX_API_KEY ? (
    <TileLayer
      attribution='© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      url={`https://api.mapbox.com/styles/v1/${MAPBOX_USERID}/${MAPBOX_STYLEID}/tiles/256/{z}/{x}/{y}@2x?access_token=${MAPBOX_API_KEY}`}
    />
  ) : (
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  )
}

export default memo(CustomTileLayer);