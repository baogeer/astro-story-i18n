from PIL import Image, ImageDraw, ImageFont
import os
from pathlib import Path


def _load_italic_font(font_size: int, font_path: str = None) -> ImageFont.FreeTypeFont:
    """加载斜体字体，找不到则回退到默认字体。"""
    candidates = []
    if font_path:
        candidates.append(font_path)
    candidates += [
        "ariali.ttf",
        "C:/Windows/Fonts/ariali.ttf",
        "/System/Library/Fonts/Supplemental/Arial Italic.ttf",
        "DejaVuSans-Oblique.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Oblique.ttf",
    ]
    for p in candidates:
        try:
            if p and (os.path.exists(p) or p in ("ariali.ttf", "DejaVuSans-Oblique.ttf")):
                return ImageFont.truetype(p, font_size)
        except OSError:
            continue
    return ImageFont.load_default()


def add_caption_bottom_right(
        input_path: str,
        output_path: str,
        text: str = "AI Generated",
        font_size: int = None,
        font_path: str = None,
        text_color: tuple = (255, 255, 255, 255),  # 纯白不透明
        stroke_color: tuple = (0, 0, 0, 200),  # 黑色描边
        stroke_width: int = 2,
        margin: int = 20,
) -> str:
    """
    在图片右下角用斜体字绘制 caption（如 "AI Generated"），带描边保证清晰。

    :param input_path:   原图路径
    :param output_path:  输出路径
    :param text:         caption 文字
    :param font_size:    字号, None 则按图片宽度自适应
    :param font_path:    斜体字体路径, None 则自动查找常见斜体字体
    :param text_color:   文字颜色 RGBA（默认纯白不透明）
    :param stroke_color: 描边颜色 RGBA（默认半透明黑）
    :param stroke_width: 描边宽度(像素)，0 表示无描边
    :param margin:       文字与图片右下角的边距(像素)
    :return:             输出路径
    """
    img = Image.open(input_path).convert("RGBA")
    W, H = img.size

    if font_size is None:
        font_size = max(14, W // 30)

    font = _load_italic_font(font_size, font_path)

    # 计算文字尺寸（含描边宽度）
    dummy = Image.new("RGBA", (1, 1))
    draw = ImageDraw.Draw(dummy)
    bbox = draw.textbbox((0, 0), text, font=font, stroke_width=stroke_width)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]

    # 右下角坐标（bbox 已经考虑描边外扩，直接用即可）
    x = W - tw - margin
    y = H - th - margin

    # 叠加到水印层再合成
    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
    overlay_draw = ImageDraw.Draw(overlay)
    overlay_draw.text(
        (x, y), text, font=font,
        fill=text_color,
        stroke_width=stroke_width,
        stroke_fill=stroke_color,
    )

    out = Image.alpha_composite(img, overlay).convert("RGB")
    out.save(output_path, quality=95)
    return output_path


IMAGE_EXTS = {".png"}


def list_images(folder: str, recursive: bool = False, sort: bool = True) -> list[Path]:
    """
    列出文件夹下所有图片文件。

    :param folder:    文件夹路径
    :param recursive: 是否递归子目录
    :param sort:      是否按路径排序
    :return:          图片路径列表
    """
    folder_path = Path(folder)
    if not folder_path.is_dir():
        raise NotADirectoryError(f"不是有效文件夹: {folder}")

    pattern = "**/*" if recursive else "*"
    files = [
        p for p in folder_path.glob(pattern)
        if p.is_file() and p.suffix.lower() in IMAGE_EXTS
    ]
    if sort:
        files.sort()
    return files


if __name__ == "__main__":
    FOLDER = "./public"

    # 方式 1：只列路径
    paths = list_images(FOLDER, recursive=False)
    print(f"共找到 {len(paths)} 张图片:")
    for p in paths[380:800]:
        print("  ", p)
        add_caption_bottom_right(
            input_path=p,
            output_path=p,
            text="AI",
            font_path="C:/Windows/Fonts/ariali.ttf",
        )
