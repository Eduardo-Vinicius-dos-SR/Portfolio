import { useTranslation } from "react-i18next";

export default function ProjectPreview({ url }: { url: string }) {
  const { t } = useTranslation();
  const hasValidUrl = url && url.trim().length > 0;

  if (!hasValidUrl) {
    return (
      <div className="flex aspect-video items-center justify-center rounded-lg border border-dashed border-white/20 bg-white/5 text-xs text-muted-foreground">
        {t("projects.preview")}
      </div>
    );
  }

  const screenshotUrl = `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`;

  return (
    <img
      src={screenshotUrl}
      alt={t("projects.previewAlt")}
      className={"flex aspect-video rounded-lg border border-[var(--border)] transition-transform duration-300 hover:scale-120"}
      loading="lazy"
    />
  );
}