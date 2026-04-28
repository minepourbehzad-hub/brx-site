export default function VideoPlaceholder() {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
      <div className="relative aspect-video bg-black/40">
        <div className="absolute inset-0 opacity-[0.18] [background:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:28px_28px]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-sm text-white/70">Video placeholder</div>
            <div className="mt-1 text-xs text-white/50">
              Later we’ll embed your hero video here
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between px-5 py-4 text-xs text-white/60">
        <span>Nestora • Hero video</span>
        <span>Coming soon</span>
      </div>
    </div>
  );
}
