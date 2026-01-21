import * as Location from "expo-location";

export const getCityFromCoord = async (
  latitude: number,
  longitude: number
): Promise<{ name: string; level: string }> => {
  try {
    const res = await Location.reverseGeocodeAsync({ latitude, longitude });

    if (!res.length) {
      return { name: "Unknown City", level: "unknown" };
    }

    const p = res[0];

    if (p.city) return { name: p.city, level: "city" };
    if (p.subregion) return { name: p.subregion, level: "subregion" };
    if (p.district) return { name: p.district, level: "district" };
    if (p.region) return { name: p.region, level: "region" };

    return { name: "Unknown City", level: "unknown" };
  } catch {
    return { name: "Unknown City", level: "error" };
  }
};
