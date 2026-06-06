# Yetişkin Gelişim Psikolojisi - İnteraktif Sınav Sistemi

4 PDF kaynaktan hazırlanmış 10 farklı sınavlık interaktif psikoloji sınav platformu.

## Özellikler

- **10 farklı sınav** - her sınavda 35 soru (10 boşluk doldurma + 25 çoktan seçmeli)
- **350 toplam soru** - 4 PDF'ten karışık konularla
- **2 cevaplama modu**:
  - Anlık geri bildirim: Her soruyu cevapladıktan sonra doğru/yanlış görürsün
  - Sınav modu: Tüm soruları çöz, sonra sonuçları gör
- **Puanlama sistemi** - AA, BA, BB, CB, CC, DD, FF harf notları
- **İlerleme kaydı** - localStorage ile her sınavın en iyi puanı saklanır
- **Detaylı inceleme** - Sınav sonrası tüm sorular ve açıklamalar
- **Karanlık/Aydınlık tema** - sağ üst köşeden değiştirilebilir
- **Tamamen responsive** - mobil, tablet, masaüstü uyumlu
- **Vanilla JS** - hiçbir framework veya bağımlılık yok

## Konular

1. **Genç Yetişkinlik** - Arnett'in 5 özelliği, fiziksel gelişim, bağlanma, aşk türleri, kariyer
2. **Orta Yetişkinlik** - Schaie, Levinson, Erikson, Beş Büyük, menopoz, kariyer geçişi
3. **İleri Yetişkinlik** - Yaşlanma kuramları, Carstensen, demans, Alzheimer, başarılı yaşlanma
4. **Ölüm ve Yas** - Kübler-Ross 5 evre, Kastenbaum, ötenazi, yas süreçleri

## Yerel Çalıştırma

Sadece `index.html` dosyasını tarayıcıda aç, çalışmaya başlar:

```bash
# macOS
open index.html

# Linux
xdg-open index.html

# veya basit bir Python sunucu ile
python3 -m http.server 8000
# tarayıcıda: http://localhost:8000
```

## GitHub'a Push

```bash
cd "/Users/mertkaanirtegun/Desktop/sınav"
git init
git add .
git commit -m "İlk commit: Yetişkin Gelişim Psikolojisi Sınav Sistemi"
git branch -M main
git remote add origin https://github.com/KULLANICI_ADIN/REPO_ADI.git
git push -u origin main
```

## Netlify'a Deploy

### Yöntem 1: Drag & Drop (En Kolay)
1. https://app.netlify.com/drop adresine git
2. `sınav` klasörünü pencereye sürükle
3. Bitti! Link otomatik oluşur.

### Yöntem 2: GitHub Entegrasyonu (Önerilen)
1. https://app.netlify.com → "Add new site" → "Import an existing project"
2. GitHub'ı seç ve repoyu bul
3. Build ayarları:
   - **Build command**: (boş bırak)
   - **Publish directory**: `.`
4. "Deploy site" tıkla
5. Her `git push`'ta otomatik yenilenir

### Yöntem 3: Netlify CLI
```bash
npm install -g netlify-cli
cd "/Users/mertkaanirtegun/Desktop/sınav"
netlify deploy --prod
```

## Dosya Yapısı

```
sınav/
├── index.html       # Ana HTML dosyası
├── styles.css       # Tüm stiller (responsive)
├── app.js           # Uygulama mantığı
├── data/
│   └── exams.js     # 10 sınav verisi (350 soru)
├── netlify.toml     # Netlify yapılandırması
├── .gitignore       # Git ignore
└── README.md        # Bu dosya
```

## Teknolojiler

- HTML5 / CSS3 / Vanilla JavaScript
- LocalStorage (ilerleme kaydı)
- CSS Custom Properties (tema sistemi)
- Inter font (Google Fonts)

Hiçbir build adımı yok, hiçbir bağımlılık yok. Sadece açıp kullan.
# claude-code-sinav
