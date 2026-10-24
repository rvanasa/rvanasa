import { icons } from "./Icons";

type RoleThumbnailProps = {
  title: string;
  image: string | null;
  className?: string;
  imageFit?: "cover" | "contain";
};

// Shows the image when present; otherwise a placeholder to be replaced with a photo.
export default function RoleThumbnail({ title, image, className = "", imageFit = "cover" }: RoleThumbnailProps) {
  const Placeholder = icons.Image;

  return (
    <span className={`relative block overflow-hidden bg-slate-800 ${className}`}>
      <span className="absolute inset-0 grid place-items-center bg-[linear-gradient(135deg,#0f172a,#1e3a5f_55%,#0e7490)] text-white/50">
        <Placeholder className="h-1/3 w-1/3 max-h-12 max-w-12" />
      </span>
      {image && <img src={image} alt={`${title} thumbnail`} loading="lazy" className={`absolute inset-0 h-full w-full ${imageFit === "contain" ? "object-contain" : "object-cover"}`} />}
    </span>
  );
}
