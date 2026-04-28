export default function BannerDivider({ src }: { src: string }) {
  return (
    <div className="w-full overflow-hidden">
      <img
        src={src}
        alt=""
        aria-hidden
        className="w-full object-contain block"
      />
    </div>
  );
}
