/*
  YAN DALLAR VERİSİ
  -----------------
  "Bölümler" ana ekranında gösterilen 8 KBB yan dalı. Her içerik öğesinin
  (özet kart, soru, vaka, acil, anatomi, TUS sorusu) "category" alanı bu
  listedeki "title" değerlerinden biriyle BİREBİR aynı olmalıdır ki
  filtreleme doğru çalışsın.

  Yeni bir yan dal eklemek isterseniz listeye aynı formatta bir blok
  ekleyin ve bir ikon dosya yolu belirtin.

  Alanlar:
    id    -> benzersiz kısa kod (URL/durum takibi için kullanılır)
    title -> tam başlık; içerik dosyalarındaki "category" ile birebir eşleşmeli
    image -> yan dal kartında gösterilecek ikon
*/

const SUBSPECIALTIES = [
  { id: "temel-bilim", title: "Temel Bilim", image: "assets/images/icons/cell.svg" },
  { id: "genel-kbb", title: "Genel Kulak Burun Boğaz", image: "assets/images/icons/face.svg" },
  { id: "yuz-plastik", title: "Yüz Plastik Cerrahisi", image: "assets/images/icons/face-profile.svg" },
  { id: "pediatrik-kbb", title: "Pediatrik Kulak Burun Boğaz", image: "assets/images/icons/child-face.svg" },
  { id: "otoloji-norotoloji", title: "Otoloji ve Nörotoloji", image: "assets/images/icons/ear.svg" },
  { id: "rinoloji", title: "Rinoloji", image: "assets/images/icons/nose.svg" },
  { id: "bas-boyun-onkoloji", title: "Baş ve Boyun Onkolojisi", image: "assets/images/icons/lymph-node.svg" },
  { id: "laringoloji", title: "Laringoloji", image: "assets/images/icons/larynx.svg" }
];
