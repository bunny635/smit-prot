"use client";
import dynamic from "next/dynamic";
const Atmosphere = dynamic(() => import("./GalleryAtmosphere").then((mod) => mod.GalleryAtmosphere), { ssr: false });
export function GalleryAtmosphereWrapper() {
  return <Atmosphere />;
}
