"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";

export default function ThreeDMarqueeDemo() {
  // Using local images from public/3dmarquee folder
  const images = [
    "/3dmarquee/webar.png",
    "/3dmarquee/webvr.png",
    "/3dmarquee/kkhs_facility.png",
    "/3dmarquee/kkhs_facility2.png",
    "/3dmarquee/kkhs_bog1.png",
    "/3dmarquee/kkhs_bog2.png",
    "/3dmarquee/kkhs_bog3.png",
    // Duplicate some images to have more items in the marquee
    "/3dmarquee/webar.png",
    "/3dmarquee/webvr.png",
    "/3dmarquee/kkhs_facility.png",
    "/3dmarquee/kkhs_facility2.png",
    "/3dmarquee/kkhs_bog1.png",
    "/3dmarquee/kkhs_bog2.png",
    "/3dmarquee/kkhs_bog3.png",
     // Duplicate some images to have more items in the marquee
     "/3dmarquee/webar.png",
     "/3dmarquee/webvr.png",
     "/3dmarquee/kkhs_facility.png",
     "/3dmarquee/kkhs_facility2.png",
     "/3dmarquee/kkhs_bog1.png",
     "/3dmarquee/kkhs_bog2.png",
     "/3dmarquee/kkhs_bog3.png",
      // Duplicate some images to have more items in the marquee
    "/3dmarquee/webar.png",
    "/3dmarquee/webvr.png",
    "/3dmarquee/kkhs_facility.png",
    "/3dmarquee/kkhs_facility2.png",
    "/3dmarquee/kkhs_bog1.png",
    "/3dmarquee/kkhs_bog2.png",
    "/3dmarquee/kkhs_bog3.png",
     // Duplicate some images to have more items in the marquee
    "/3dmarquee/webar.png",
    "/3dmarquee/webvr.png",
    "/3dmarquee/kkhs_facility.png",
    "/3dmarquee/kkhs_facility2.png",
    "/3dmarquee/kkhs_bog1.png",
    "/3dmarquee/kkhs_bog2.png",
    "/3dmarquee/kkhs_bog3.png",
  ];
  
  return (
    <div className="w-full h-full">
      <ThreeDMarquee images={images} />
    </div>
  );
} 