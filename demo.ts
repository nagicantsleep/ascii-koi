import { OceanEngine, type KoiKind, type KoiSpec } from "./src";

// ?koi=kohaku,showa,ogon,asagi — first is biggest, the rest step down. No param: four kohaku.
const kinds = new URLSearchParams(location.search).get("koi")?.split(",").filter(Boolean) as KoiKind[] | undefined;
const kois: KoiSpec[] | undefined = kinds?.map((kind, i) => ({ kind, size: 1 - i * 0.1 }));

new OceanEngine(document.querySelector("canvas")!, kois);
