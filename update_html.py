import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Remove the buttons
content = re.sub(
    r'<div class="flex gap-sm mt-md flex-wrap">.*?</div>',
    '',
    content,
    flags=re.DOTALL
)

# 2. Update Parishes
parishes = [
    "BVM Dolours Church - Kulappuram",
    "BVM Lourdes Church - Mullaringad",
    "St. Francis Xavier Church - Pothanikad",
    "Christuraj Church - Vellallu",
    "St. George Church - Kadavoor",
    "St. Antony's Forane Church - Paingottoor",
    "St. Sebastian's Church - Punnamattam"
]

parish_html = ""
for i, p in enumerate(parishes):
    bg_class = "bg-primary-fixed" if i % 2 == 0 else "bg-secondary-fixed"
    text_class = "text-primary" if i % 2 == 0 else "text-secondary"
    parish_html += f'''
<div class="flex-none w-72 bg-surface-container-lowest rounded-xl border border-outline-variant p-lg shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center">
<div class="w-16 h-16 {bg_class} rounded-full flex items-center justify-center mb-md {text_class}">
<span class="material-symbols-outlined text-3xl">church</span>
</div>
<h3 class="font-headline-md text-headline-md text-on-surface mb-sm">{p}</h3>
<button class="mt-auto px-md py-sm bg-surface-container-high text-on-surface rounded-full font-label-sm text-label-sm hover:bg-surface-variant transition-colors w-full">Visit Page</button>
</div>'''

marquee_html = f'''<!-- Set 1 -->{parish_html}
<!-- Set 2 (Duplicate for seamless scroll) -->{parish_html}'''

content = re.sub(
    r'<!-- Set 1 -->.*?<!-- Set 2 \(Duplicate for seamless scroll\) -->.*?</div>',
    marquee_html + '\n</div>',
    content,
    flags=re.DOTALL
)

# 3. Add Asst Director card to Forane Leadership row 1
director_card_end = 'Rev. Fr. Director</p></div>'
asst_director_card = '<div class="w-full md:w-64 bg-surface-container-lowest rounded-xl border border-outline-variant p-lg shadow-sm flex flex-col items-center text-center"><div class="w-24 h-24 bg-surface-container-high rounded-full mb-md flex items-center justify-center overflow-hidden"><span class="material-symbols-outlined text-on-surface-variant text-3xl">person</span></div><h3 class="font-label-md text-label-md font-bold text-on-surface">Asst Director</h3><p class="text-xs text-on-surface-variant">Asst. Director</p></div>'

content = content.replace(director_card_end, director_card_end + asst_director_card)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Done")
