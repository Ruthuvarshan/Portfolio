import zipfile
import xml.etree.ElementTree as ET
import glob
import os

for path in glob.glob(r"c:\Projects\Portfolio\files\*.docx"):
    text = []
    try:
        with zipfile.ZipFile(path) as docx:
            if 'word/document.xml' in docx.namelist():
                tree = ET.parse(docx.open('word/document.xml'))
                root = tree.getroot()
                ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
                for para in root.iter(f'{{{ns["w"]}}}p'):
                    para_text = "".join([node.text for node in para.iter(f'{{{ns["w"]}}}t') if node.text])
                    if para_text:
                        text.append(para_text)
        print(f"\n--- {os.path.basename(path)} ---")
        print("\n".join(text[:30])) # print first 30 paragraphs
    except Exception as e:
        print(f"Error reading {os.path.basename(path)}: {e}")
