# CHEMLE - Element Tahmin Oyunu

Wordle benzeri bir kimyasal element tahmin oyunu. Kullanıcı periyodik tablodan element seçerek 6 tahmin hakkı içinde günün gizli elementini bulmaya çalışır.

## Özellikler

- 🧪 Periyodik tablodan 118 element
- 🎯 6 tahmin hakkı
- 📅 Günlük gizli element (tarih bazlı)
- 💡 Üç kategoride ipucu:
  - **Grup (sütun)**: Aynı grup → ✓, değilse ← veya →
  - **Periyot (satır)**: Aynı periyot → ✓, değilse ↑ veya ↓
  - **Tür**: Metal / Ametal / Yarı Metal / Soygaz karşılaştırması

## Kurulum

```bash
cd chemle_client
npm install
```

## Çalıştırma

```bash
npm run dev
```

Tarayıcıda `http://localhost:5173` adresine gidin.

## Oynanış

1. "İlk Tahmini Yap" butonuna tıklayın
2. Açılan modal'dan bir element seçin
3. İpuçlarına göre bir sonraki tahmininizi yapın:
   - **Yeşil (✓)**: Doğru!
   - **Turuncu (←/↑)**: Sola/yukarı git
   - **Mavi (→/↓)**: Sağa/aşağı git
   - **Kırmızı (✗)**: Yanlış tür

## Teknolojiler

- React 18
- Vite
- CSS3 (Modern gradient tasarım)