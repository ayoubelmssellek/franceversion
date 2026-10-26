"""Inject French keywords into France-site images and rewrite the assignment log."""
from __future__ import annotations

import json
from pathlib import Path

from PIL import Image, PngImagePlugin

try:
    import piexif
except ImportError:
    piexif = None

ROOT = Path(r"C:\Users\ADMIN\Desktop\MyProjects\stream_website_france")
ASSETS = ROOT / "src" / "assets"
PUBLIC = ROOT / "public"
BRAND = "MeilleurIPTVFrance"
CORE = ["iptv france", "meilleur iptv france", "acheter iptv france", "smart tv iptv"]


def keywords_for(name: str) -> list[str]:
    stem = name.lower()
    extra: list[str] = []
    if "ligue" in stem or "sport" in stem or "football" in stem or "champions" in stem:
        extra.append("ligue 1 iptv")
    if "prix" in stem or "forfait" in stem or "pas-cher" in stem:
        extra.append("iptv france prix")
    if "essai" in stem:
        extra.append("essai iptv france")
    if "smarters" in stem or "tivimate" in stem or "xtream" in stem or "app" in stem:
        extra.append("iptv smarters pro france")
    if "chaine" in stem or "chaines" in stem:
        extra.append("chaînes iptv france")
    if "box" in stem or "fire" in stem or "android" in stem:
        extra.append("box iptv android")
    words = [part.replace("-", " ") for part in Path(name).stem.split("-") if part not in {"jpg", "png", "webp", "jpeg"}]
    phrase = " ".join(words)
    ordered = []
    for item in [*extra, phrase, *CORE, BRAND]:
        if item and item not in ordered:
            ordered.append(item)
    return ordered[:8]


def alt_for(name: str) -> str:
    label = Path(name).stem.replace("-", " ")
    return f"{label} — {BRAND}"


def inject_jpeg(path: Path, keywords: list[str], alt: str) -> str:
    if piexif is None:
        return "skipped-no-piexif"
    image = Image.open(path)
    keywords_text = ", ".join(keywords)
    xp = keywords_text.encode("utf-16le")
    zeroth = {
        piexif.ImageIFD.ImageDescription: alt.encode("utf-8"),
        piexif.ImageIFD.XPKeywords: xp,
        piexif.ImageIFD.XPTitle: alt.encode("utf-16le"),
    }
    exif = piexif.dump({"0th": zeroth})
    image.save(path, exif=exif, quality=90)
    return "injected-fr:jpg"


def inject_png(path: Path, keywords: list[str], alt: str) -> str:
    image = Image.open(path)
    info = PngImagePlugin.PngInfo()
    info.add_text("Title", alt)
    info.add_text("Description", alt)
    info.add_text("Keywords", ", ".join(keywords))
    info.add_text("Author", BRAND)
    image.save(path, pnginfo=info)
    return "injected-fr:png"


def inject_webp(path: Path, keywords: list[str], alt: str) -> str:
    image = Image.open(path)
    exif = image.getexif()
    exif[270] = alt
    image.save(path, exif=exif.tobytes(), quality=90)
    return "injected-fr:webp"


def main() -> None:
    results = []
    files = [path for path in ASSETS.rglob("*") if path.suffix.lower() in {".jpg", ".jpeg", ".png", ".webp"}]
    og = PUBLIC / "meilleuriptvfrance-image-open-graph.jpg"
    if og.exists():
        files.append(og)
    for path in files:
        keywords = keywords_for(path.name)
        alt = alt_for(path.name)
        suffix = path.suffix.lower()
        if suffix in {".jpg", ".jpeg"}:
            status = inject_jpeg(path, keywords, alt)
        elif suffix == ".png":
            status = inject_png(path, keywords, alt)
        else:
            status = inject_webp(path, keywords, alt)
        rel = path.relative_to(ROOT).as_posix()
        results.append({"file": rel, "keywords": keywords, "alt": alt, "status": status})
        print(status, rel)
    out = ROOT / "seo-ops" / "image-keyword-assignments.json"
    out.write_text(json.dumps({"results": results}, ensure_ascii=False, indent=2), encoding="utf-8")
    print("count", len(results))


if __name__ == "__main__":
    main()
