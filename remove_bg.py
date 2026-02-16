from PIL import Image
import sys
import os

def remove_green(image_path):
    try:
        if not os.path.exists(image_path):
            print(f"File not found: {image_path}")
            return

        print(f"Processing {image_path}...")
        img = Image.open(image_path).convert("RGBA")
        datas = img.getdata()

        new_data = []
        
        # Simple green screen removal logic
        # If Green is significantly higher than Red and Blue, make it transparent
        for item in datas:
            r, g, b, a = item
            # Thresholds: Green must be dominant and fairly bright
            if g > r + 20 and g > b + 20 and g > 50:
                 # Calculate transparency based on greenness? No, just full transparency for now.
                 new_data.append((255, 255, 255, 0))
            else:
                new_data.append(item)

        img.putdata(new_data)
        img.save(image_path, "PNG")
        print(f"Successfully processed {image_path}")
    except Exception as e:
        print(f"Error processing {image_path}: {e}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python remove_bg.py <image_path1> <image_path2> ...")
    else:
        for path in sys.argv[1:]:
            remove_green(path)
