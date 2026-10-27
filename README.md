# 栖野文旅有限公司 · 官网示意站

精品文旅 / 民宿品牌官网。品牌自拟：深林绿 + 暖石 + 奶油 + 铜色点缀；首屏为克制的雾山 WebGL 氛围层。

## 本地预览

```bash
cd /workspace/qiye-wenlv
python3 -m http.server 8792
# 浏览器打开 http://127.0.0.1:8792/
```

## 品牌色板

| Token | Hex | 用途 |
|-------|-----|------|
| Forest Ink | `#14261C` | 主背景 / 导航深色 |
| Forest Deep | `#0B1611` | 更深底 |
| Moss | `#2D4A3A` | Logo 山体 / 次级绿 |
| Sage | `#8FA892` | 辅助绿 |
| Warm Stone | `#C9B8A3` | 中性暖石 |
| Cream | `#F4EFE6` | 浅色区块底 |
| Copper | `#C4844A` | 强调 / CTA |
| Amber | `#D4A574` | 高光文字 |

## Logo 概念

「栖」停下脚步 ×「野」交给自然：圆形印章中远山轮廓 + 铜色屋脊栖居符号，可缩为 favicon。

## 结构

- `index.html` / `css/style.css` / `js/main.js` — 页面与 GSAP 交互
- `src/gl.js` → `js/gl.bundle.js` — Three.js 雾山首屏（已打包）
- `brand/` — Logo、favicon、品牌板
- `img/` — Unsplash 实景图（webp）
- `handoff/` — 验收截图

## 重新打包 WebGL

```bash
./node_modules/.bin/esbuild src/gl.js --bundle --minify --format=iife \
  --alias:three=./vendor/three.module.min.js --outfile=js/gl.bundle.js
```

## 说明

- 联系方式、地址、案例名称均为**示意占位**，对外发布前请替换。
- 支持 `prefers-reduced-motion` 与无 WebGL CSS 回退（实景英雄图）。
- 图片来源与致谢见 `CREDITS.md`。
