import { useEffect } from "react";

function setMeta(selector: string, attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/**
 * Per-page title/description/canonical plus optional JSON-LD.
 * Injected client-side; the crawlable base tags live in index.html.
 */
export function useSeo({
  title,
  description,
  jsonLd,
  path,
}: {
  title: string;
  description: string;
  jsonLd?: Record<string, unknown>;
  path?: string;
}) {
  useEffect(() => {
    document.title = title;
    setMeta('meta[name="description"]', "name", "description", description);
    setMeta('meta[property="og:title"]', "property", "og:title", title);
    setMeta('meta[property="og:description"]', "property", "og:description", description);

    if (path) {
      const href = `https://latowsplumbingfl.com${path}`;
      let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = href;
      setMeta('meta[property="og:url"]', "property", "og:url", href);
    }

    if (!jsonLd) return;
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.page = "true";
    script.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    return () => {
      script.remove();
    };
  }, [title, description, jsonLd, path]);
}
