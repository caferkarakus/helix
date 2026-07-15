/*
  TUS VERİSİ
  ----------
  ÖNEMLİ: Aşağıdaki sorular ÖRNEK amaçlıdır, gerçek çıkmış TUS soruları
  DEĞİLDİR. Bölümün altyapısını göstermek için TUS tarzında (vaka tabanlı,
  5 şıklı) yazılmıştır. Gerçek çıkmış soruları eklemek için bu listedeki
  bloğu kopyalayıp kendi sorunuzla değiştirin.

  Alanlar:
    id          -> benzersiz kısa kod
    question    -> vaka/soru metni
    category    -> assets/js/data/subspecialties.js içindeki "title" değerlerinden biriyle birebir aynı olmalı
    image       -> (opsiyonel) görsel dosya yolu
    options     -> şıklar (TUS'ta genelde 5 şık olur, A-E)
    answerIndex -> doğru şıkkın "options" dizisindeki sırası (0'dan başlar)
    explanation -> cevap seçildikten sonra gösterilecek açıklama
*/

const TUS_QUESTIONS = [
  {
    id: "tus-1",
    question:
      "35 yaşında erkek hasta, 2 gündür süren sağ kulakta ani işitme kaybı şikayetiyle başvuruyor. Otoskopik muayenesi doğal, odyometride sağ kulakta 45 dB'lik sensörinöral tipte işitme kaybı saptanıyor. Bu hasta için en uygun ilk tedavi yaklaşımı aşağıdakilerden hangisidir?",
    category: "Otoloji ve Nörotoloji",
    image: "assets/images/icons/hearing-loss.svg",
    options: [
      "3 gün gözlem sonrası tekrar değerlendirme",
      "Sistemik kortikosteroid tedavisi başlanması",
      "Topikal antibiyotik damla başlanması",
      "Acil miringotomi",
      "Mastoidektomi"
    ],
    answerIndex: 1,
    explanation:
      "Ani sensörinöral işitme kaybı bir otolojik acildir; ilk basamak tedavi olarak vakit kaybetmeden sistemik (veya intratimpanik) kortikosteroid başlanması önerilir. Tedavideki gecikme işitme kaybının kalıcı olma riskini artırır."
  },
  {
    id: "tus-2",
    question:
      "16 yaşında erkek hasta, aylardır süren tek taraflı burun tıkanıklığı ve tekrarlayan epistaksis şikayetiyle başvuruyor. Muayenede nazofarinkste kolayca kanayan, vasküler görünümde bir kitle izleniyor. Bu hastada en olası tanı aşağıdakilerden hangisidir?",
    category: "Rinoloji",
    image: "assets/images/icons/epistaxis.svg",
    options: [
      "Nazal polip",
      "Antrokoanal polip",
      "Jüvenil nazofarengeal anjiofibrom",
      "Nazofarenks karsinomu",
      "Alerjik rinit"
    ],
    answerIndex: 2,
    explanation:
      "Genç erkek hastada tek taraflı nazal obstrüksiyon ve tekrarlayan epistaksis ile birlikte vasküler, kolay kanayan nazofarengeal kitle klasik olarak jüvenil nazofarengeal anjiofibromu (JNA) düşündürür. Biyopsiden kaçınılır çünkü kitle aşırı kanayabilir; tanı genellikle görüntüleme ile desteklenir."
  },
  {
    id: "tus-3",
    question:
      "55 yaşında, 30 paket-yıl sigara öyküsü olan erkek hasta, 3 haftadır düzelmeyen ses kısıklığı şikayetiyle başvuruyor. Bu hastada ilk yapılması gereken değerlendirme aşağıdakilerden hangisidir?",
    category: "Laringoloji",
    image: "assets/images/icons/throat.svg",
    options: [
      "Ampirik antibiyotik tedavisi başlanması",
      "Proton pompa inhibitörü başlanması ve 1 ay sonra kontrol",
      "Laringoskopi ile vokal kordların değerlendirilmesi",
      "Boyun MR görüntülemesi",
      "Ses terapisi için sevk"
    ],
    answerIndex: 2,
    explanation:
      "İleri yaş, ağır sigara öyküsü ve 3 haftadan uzun süren ses kısıklığı larinks kanseri açısından alarm bulgusudur. Bu hastalarda ampirik tedaviyle vakit kaybetmeden laringoskopi ile vokal kordların doğrudan görüntülenmesi gerekir."
  },
  {
    id: "tus-4",
    question:
      "4 yaşında çocuk hasta, son 6 ayda 4 kez akut otitis media atağı geçirmiş ve muayenede bilateral orta kulak effüzyonu ile birlikte iletim tipi işitme kaybı saptanmıştır. Bu hasta için en uygun tedavi yaklaşımı aşağıdakilerden hangisidir?",
    category: "Pediatrik Kulak Burun Boğaz",
    image: "assets/images/icons/ear.svg",
    options: [
      "Uzun süreli profilaktik antibiyotik tedavisi",
      "Timpanostomi tüpü yerleştirilmesi",
      "Adenoidektomi olmadan gözlem",
      "Sistemik kortikosteroid tedavisi",
      "Kokleer implantasyon"
    ],
    answerIndex: 1,
    explanation:
      "Tekrarlayan akut otitis media atakları ile birlikte kalıcı effüzyon ve işitme kaybı olan çocuklarda timpanostomi tüpü yerleştirilmesi, hem enfeksiyon sıklığını azaltır hem de işitmeyi ve buna bağlı konuşma gelişimini korur."
  }
];
