import React, { createContext } from 'react';

interface MapRegion {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

interface UserLocationContextType {
  mapRegion: MapRegion;
  setMapRegion: React.Dispatch<React.SetStateAction<MapRegion>>;
}
export const UserLocationContext = createContext<UserLocationContextType | null>(null);