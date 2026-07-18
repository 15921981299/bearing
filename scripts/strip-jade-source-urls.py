from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
files = [
    ROOT / "src" / "data" / "extended-bearing-models.ts",
    ROOT / "src" / "data" / "combined-bearing-models.ts",
]

for path in files:
    text = path.read_text(encoding="utf-8")
    text = re.sub(r",sourceUrl:'https://www\.jadebearings\.com[^']*'", "", text)
    text = re.sub(r",\s*sourceUrl:\s*'https://www\.jadebearings\.com[^']*'", "", text)
    text = re.sub(r"\n\s*sourceUrl:\s*'https://www\.jadebearings\.com[^']*',?", "", text)
    text = text.replace(
        "specs:{label:string;value:string}[]; sourceUrl:string;",
        "specs:{label:string;value:string}[];",
    )
    text = text.replace(
        "  specs: BearingSpec[];\n  sourceUrl: string;\n};",
        "  specs: BearingSpec[];\n};",
    )
    path.write_text(text, encoding="utf-8")
    print(f"cleaned {path.relative_to(ROOT)}")
