
export default function ProjectPreview({ url }: { url: string }) {
  const hasValidUrl = url && url.trim().length > 0;

  if (!hasValidUrl) {
    return (
      <div className="flex aspect-video items-center justify-center rounded-lg border border-dashed border-white/20 bg-white/5 text-xs text-muted-foreground">
        Preview em breve
      </div>
    );
  }

  const screenshotUrl = `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`;

  return (
    <img
      src={screenshotUrl}
      alt="Preview do site"
      className={"flex aspect-video rounded-lg border border-[var(--border)]"}
      loading="lazy"
    />
  );
}