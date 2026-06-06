// Yetişkin Gelişim Psikolojisi - 10 Sınav, Toplam 350 Soru
// Kaynaklar: Genç Yetişkinlik, Orta Yetişkinlik, İleri Yetişkinlik, Ölüm ve Yas PDF'leri

const EXAMS = [
  // ============== SINAV 1 ==============
  {
    id: 1,
    title: "Sınav 1",
    description: "Yetişkinlik dönemlerinin temel kavramları ve gelişim kuramları",
    fillInBlanks: [
      {
        question: "Jeffrey Arnett'a göre 18-25 yaşları arası ergenlikten yetişkinliğe geçişi ifade eden kavrama _______ denir.",
        answer: "yetişkinliğe geçiş",
        acceptableAnswers: ["yetişkinliğe geçiş", "emerging adulthood", "yetişkinlige geçiş"],
        explanation: "Arnett (2006), 18-25 yaşları arasını 'emerging adulthood' (yetişkinliğe geçiş) olarak tanımlar."
      },
      {
        question: "Erikson'a göre genç yetişkinlik döneminin temel psikososyal krizi yakınlığa karşı _______ dönemidir.",
        answer: "yalıtılmışlık",
        acceptableAnswers: ["yalıtılmışlık", "yalitilmislik", "izolasyon"],
        explanation: "Erikson genç yetişkinliği 'yakınlığa karşı yalıtılmışlık' dönemi olarak tanımlar."
      },
      {
        question: "Leonard Hayflick'in bir insan hücresinin yaklaşık 75-80 kez bölünebileceğini savunan kuramına _______ kuramı denir.",
        answer: "hücresel saat",
        acceptableAnswers: ["hücresel saat", "hucresel saat", "hücresel saat kuramı"],
        explanation: "Hayflick'in hücresel saat kuramına göre hücrelerin bölünme kapasitesi sınırlıdır."
      },
      {
        question: "Kübler-Ross'un ölüm evreleri modelinde ilk evre _______ ve yalıtılmışlıktır.",
        answer: "inkâr",
        acceptableAnswers: ["inkâr", "inkar", "inkar ve yalıtılmışlık"],
        explanation: "Kübler-Ross'un 5 evresi: İnkâr, Öfke, Uzlaşma, Depresyon, Kabullenme."
      },
      {
        question: "Doğurganlığın azaldığı orta yaşa geçişi tanımlamak için kullanılan terim _______'tir.",
        answer: "klimakterik",
        acceptableAnswers: ["klimakterik"],
        explanation: "Klimakterik, doğurganlığın azaldığı orta yaşa geçişi tanımlar."
      },
      {
        question: "Bireyin birikmiş bilgisi ve sözel becerisi olarak tanımlanan ve orta yetişkinlikte artmaya devam eden zeka türüne _______ zeka denir.",
        answer: "kristalize",
        acceptableAnswers: ["kristalize", "kristalize zeka", "kristalize zekâ"],
        explanation: "John Horn'a göre kristalize zeka orta yetişkinlikte artmaya devam eder."
      },
      {
        question: "Robert Kastenbaum'a göre herhangi bir kültürde ölüm sistemini oluşturan bileşenlerden biri olarak insanlar, mekânlar, zamanlar, nesneler ve _______ sayılabilir.",
        answer: "semboller",
        acceptableAnswers: ["semboller"],
        explanation: "Kastenbaum (2009) ölüm sistemini insanlar, mekânlar, zamanlar, nesneler ve semboller olarak tanımlar."
      },
      {
        question: "Yaşla ilişkili kas kütlesi ve güç kaybına _______ adı verilir.",
        answer: "sarcopenia",
        acceptableAnswers: ["sarcopenia", "sarkopeni"],
        explanation: "Sarcopenia, orta yaşta başlayan kas kütlesi kaybıdır; yılda %1-2 oranında olur."
      },
      {
        question: "Erikson'un orta yetişkinlik için tanımladığı psikososyal kriz, üretkenliğe karşı _______ dönemidir.",
        answer: "verimsizlik",
        acceptableAnswers: ["verimsizlik", "durağanlık", "kendi kendini soğurma"],
        explanation: "Erikson orta yetişkinliği 'üretkenliğe karşı verimsizlik' olarak tanımlar."
      },
      {
        question: "Sternberg'in aşk üçgenine göre aşkın üç boyutu: tutku, samimiyet ve _______ dır.",
        answer: "bağlanma",
        acceptableAnswers: ["bağlanma", "baglanma"],
        explanation: "Sternberg'in aşk üçgeni: tutku, samimiyet ve bağlanma boyutlarından oluşur."
      }
    ],
    multipleChoice: [
      {
        question: "Aşağıdakilerden hangisi Arnett'in genç yetişkinlik için belirlediği beş temel özellikten biri DEĞİLDİR?",
        options: ["Özellikle aşk ve iş konularında kimlik arayışı", "Kararsızlık", "Tam ekonomik bağımsızlık", "Öze-dönüklük"],
        correctIndex: 2,
        explanation: "Arnett'in 5 özelliği: kimlik arayışı, kararsızlık, öze-dönüklük, kararsız duygular, olasılıklar dönemi. Tam ekonomik bağımsızlık bir özellik değil, yetişkinliğin belirleyicilerinden biridir."
      },
      {
        question: "Fiziksel performansın doruk noktasına genellikle hangi yaş aralığında ulaşılır?",
        options: ["15-18 yaş", "19-26 yaş", "27-35 yaş", "36-45 yaş"],
        correctIndex: 1,
        explanation: "Fiziksel performansın doruk noktasına 19-26 yaşları arasında ulaşılır."
      },
      {
        question: "Aşağıdakilerden hangisi yaşlanmanın biyolojik kuramlarından biri DEĞİLDİR?",
        options: ["Serbest radikal kuramı", "Mitokondrial kuram", "Hücresel saat kuramı", "Bilişsel kayıp kuramı"],
        correctIndex: 3,
        explanation: "Beş biyolojik kuram: evrimsel, hücresel saat, serbest radikal, mitokondrial, hormonal stres."
      },
      {
        question: "Seattle Boylamsal Çalışmasını başlatan araştırmacı kimdir?",
        options: ["John Horn", "K. Warner Schaie", "Daniel Levinson", "Erik Erikson"],
        correctIndex: 1,
        explanation: "Seattle Boylamsal Çalışması 1956'da K. Warner Schaie tarafından başlatılmıştır."
      },
      {
        question: "Bartholomew'un dörtlü bağlanma modelinde, olumlu benlik ve olumsuz başkaları modeline sahip bireyler hangi bağlanma stiline sahiptir?",
        options: ["Güvenli", "Saplantılı", "Kayıtsız", "Korkulu"],
        correctIndex: 2,
        explanation: "Kayıtsız bağlanma: olumlu benlik + olumsuz başkaları = yakınlığa kayıtsız, bağımlılık karşıtı."
      },
      {
        question: "Kübler-Ross'un ölüm evrelerinin doğru sıralaması hangisidir?",
        options: ["İnkâr - Depresyon - Öfke - Uzlaşma - Kabullenme", "İnkâr - Öfke - Uzlaşma - Depresyon - Kabullenme", "Öfke - İnkâr - Uzlaşma - Kabullenme - Depresyon", "Uzlaşma - İnkâr - Öfke - Depresyon - Kabullenme"],
        correctIndex: 1,
        explanation: "Kübler-Ross evreleri: İnkâr ve Yalıtılmışlık → Öfke → Uzlaşma → Depresyon → Kabullenme."
      },
      {
        question: "Menopozun ortalama görülme yaşı kaçtır?",
        options: ["41", "45", "51", "59"],
        correctIndex: 2,
        explanation: "Kadınlar son menstrual dönemini ortalama 51 yaşında yaşar (Wise, 2006)."
      },
      {
        question: "Carstensen'in Sosyoduygusal Seçicilik Kuramı'na göre yaşlı yetişkinler:",
        options: ["Yeni tanıştıkları kişilerle daha fazla zaman geçirirler", "Sosyal ağlarını sürekli genişletirler", "Tanıdıkları ve ödüllendirici ilişkiler içinde oldukları kişilerle daha fazla zaman geçirirler", "Yalnız kalmayı tercih ederler"],
        correctIndex: 2,
        explanation: "Carstensen'e göre yaşlılar duygusal değer veren tanıdıkları, ödüllendirici ilişkileri içinde olan kişilerle daha fazla zaman geçirir."
      },
      {
        question: "Aşağıdakilerden hangisi ileri yetişkinlikte yaygın görülen üç göz hastalığından biri DEĞİLDİR?",
        options: ["Katarakt", "Glokom", "Maküler dejenerasyon", "Astigmatizm"],
        correctIndex: 3,
        explanation: "Yaşlı yetişkinlerde görmeyi zayıflatabilecek üç hastalık: katarakt, glokom ve maküler dejenerasyondur."
      },
      {
        question: "Levinson'un Bir Erkeğin Yaşam Dönemleri çalışmasında orta yaş geçişinde başa çıkılması gereken çatışmalardan biri DEĞİLDİR?",
        options: ["Gençliğe karşı yaşlılık", "Yıkıcılığa karşı yapıcılık", "Erkekselliğe karşı kadınsılık", "Bireyselliğe karşı toplumculuk"],
        correctIndex: 3,
        explanation: "Levinson'un 4 büyük çatışması: gençlik-yaşlılık, yıkıcılık-yapıcılık, erkekselik-kadınsılık, başkalarıyla birlikte-onlardan ayrı."
      },
      {
        question: "Postformal düşünme kavramını ortaya koyan ve genç yetişkinlerin sorulara doğru cevapların yansıtıcı düşünme gerektirdiğini savunan görüş kime aittir?",
        options: ["Piaget", "Erikson", "Kitcher, King ve Deluca", "Sternberg"],
        correctIndex: 2,
        explanation: "Kitcher, King ve Deluca (2006) postformal düşünmeyi tanımlayan kuramcılardır."
      },
      {
        question: "Mahrum kalınmış yas nedir?",
        options: ["Çok kısa süren yas", "Sosyal olarak belirsiz bir kayıp için yaşanan, açıkça yaslı tutulamayacak yas", "Yas sürecinin tamamen geçirilmesi", "Sadece anne baba kaybında görülen yas"],
        correctIndex: 1,
        explanation: "Mahrum kalınmış yas; eski eşle ilişki, kürtaj veya AIDS gibi etiketlenmiş kayıplarda sosyal açıdan kabul görmediği için açıkça yas tutulamayan kayıp türüdür."
      },
      {
        question: "Costa ve McCrae'nin Baltimore Çalışmasında odaklanılan kişilik modeli hangisidir?",
        options: ["Üç Büyük", "Beş Büyük (Big Five)", "Yedi Büyük", "Dokuz Büyük"],
        correctIndex: 1,
        explanation: "Costa ve McCrae beş büyük faktör (yaşantıya açıklık, sorumluluk, dışa dönüklük, yumuşak başlılık, nevrotizm) üzerine çalışmıştır."
      },
      {
        question: "Aşağıdakilerden hangisi ödünleme yoluyla seçici optimizasyon kuramının üç bileşeninden biri DEĞİLDİR?",
        options: ["Seçme", "Optimizasyon", "Ödünleme", "Birleştirme"],
        correctIndex: 3,
        explanation: "SOC kuramının üç bileşeni: Seçme, Optimizasyon ve Ödünleme'dir. Arthur Rubinstein klasik bir örnek olarak verilir."
      },
      {
        question: "Hospice (imarethane/bakımevi) bakımının temel amacı nedir?",
        options: ["Hastalığı iyileştirmek", "Ömrü uzatmak", "Acıyı azaltıp onurlu bir ölüm sağlamak", "Sadece yaşlıları barındırmak"],
        correctIndex: 2,
        explanation: "İmarethaneler hastalığı iyileştirmek yerine acıyı azaltma ve onurlu ölüme yardımcı olmayı amaçlar."
      },
      {
        question: "Sosyoduygusal seçicilik kuramının kuramcısı kimdir?",
        options: ["Laura Carstensen", "Erik Erikson", "Daniel Levinson", "Robert Butler"],
        correctIndex: 0,
        explanation: "Sosyoduygusal Seçicilik Kuramı Laura Carstensen tarafından geliştirilmiştir (1998, 2006, 2008)."
      },
      {
        question: "Türkiye'de 2018 EGM araştırmasına göre genel nüfusta tütün kullanım oranı yaklaşık yüzde kaçtır?",
        options: ["%22", "%33", "%47", "%56"],
        correctIndex: 2,
        explanation: "Türkiye'de tütün kullanım oranı %47, alkol %22.1, yatıştırıcı %5.8, uyuşturucu %3.1 olarak belirtilmiştir."
      },
      {
        question: "İkili-süreç modelinde yaşla başa çıkmanın iki boyutu nedir?",
        options: ["Aile odaklı ve birey odaklı", "Kayıp odaklı ve iyileşme odaklı stres kaynakları", "Duygusal ve bilişsel", "İçsel ve dışsal"],
        correctIndex: 1,
        explanation: "İkili-süreç modeli kayıp odaklı stres kaynakları ile arasındaki gidip-gelmelerle iyileşme odaklı stres kaynaklarını vurgular."
      },
      {
        question: "Yaşam beklentisinin tıp ve beslenme alanındaki gelişmelerle 1900'den beri yaklaşık kaç yıl arttığı belirtilmektedir?",
        options: ["10 yıl", "20 yıl", "30 yıl", "50 yıl"],
        correctIndex: 2,
        explanation: "1900'den bu yana yaşam beklentisi yaklaşık 30 yıl artmıştır."
      },
      {
        question: "Aşağıdakilerden hangisi ileri yetişkinlerde yaygın olarak görülen demans türlerinden biridir?",
        options: ["Şizofreni", "Alzheimer hastalığı", "Bipolar bozukluk", "Panik bozukluk"],
        correctIndex: 1,
        explanation: "Alzheimer hastalığı demansın en yaygın türlerinden biridir; bellek, muhakeme, dil ve fiziksel işlevlerde geri dönüşü olmayan bozulma yaratır."
      },
      {
        question: "Yaratıcılık üzerine yapılan çalışmalara göre en yaratıcı ürünler genellikle hangi yaşlarda üretilir?",
        options: ["20'li yaşların başı", "30'lu yaşlar", "50'li yaşlar", "60'lı yaşlar"],
        correctIndex: 1,
        explanation: "Lehman'a göre en yaratıcı ürünler 30'lu yaşlarda üretilir; %80'i 50'li yaşlarda tamamlanır."
      },
      {
        question: "Aşağıdakilerden hangisi Hetherington'un boşanma sonrası çıkış noktası kategorilerinden biri DEĞİLDİR?",
        options: ["Güçlenenler", "Yeterince İyiler", "Arayış İçindekiler", "Bütünleyiciler"],
        correctIndex: 3,
        explanation: "Hetherington'un 6 kategorisi: Güçlenenler, Yeterince İyiler, Arayış İçindekiler, Özgürlükçüler, Başarılı Yalnızlar, Mağluplar."
      },
      {
        question: "İleri yetişkinlikte yaşlı yetişkinlerin yaklaşık yüzde kaçı toplum içinde yaşamaktadır?",
        options: ["%50", "%75", "%85", "%95"],
        correctIndex: 3,
        explanation: "Yaşlı yetişkinlerin yaklaşık %95'i toplum içinde yaşamaktadır."
      },
      {
        question: "Anlamsal bellek (semantic memory) nedir?",
        options: ["Yaşam olaylarının nerede ve ne zaman olduğuyla ilgili bilgi", "İnsanın dünya hakkındaki genel bilgileri", "Kısa vadeli geçici hafıza", "Duygusal anılar"],
        correctIndex: 1,
        explanation: "Anlamsal bellek dünya hakkındaki genel bilgileri içerir (geometri, satranç bilgisi gibi)."
      },
      {
        question: "Aktif ötenazi ne anlama gelir?",
        options: ["Tedaviyi durdurarak ölüme izin verme", "Ölümcül dozda ilaç gibi kasıtlı yollarla hastanın yaşamını sonlandırma", "Hospis bakımı sunma", "Yaşam vasiyeti hazırlama"],
        correctIndex: 1,
        explanation: "Aktif ötenazi ölümcül dozda ilaç verme gibi kasıtlı yollarla hastanın yaşamını sonlandırmayı içerir."
      }
    ]
  },

  // ============== SINAV 2 ==============
  {
    id: 2,
    title: "Sınav 2",
    description: "Fiziksel ve bilişsel gelişim, evlilik ve aile yapıları",
    fillInBlanks: [
      {
        question: "Genç yetişkinlik dönemindeki ölüm oranı ergenlik dönemine göre yaklaşık _______ katıdır.",
        answer: "iki",
        acceptableAnswers: ["iki", "2", "2 kat"],
        explanation: "Genç yetişkinlik dönemindeki ölüm oranı ergenlik döneminin iki katıdır; bu artış erkek ölümlerinden kaynaklanır."
      },
      {
        question: "Kromozomları örten DNA dizileri olan ve her hücre bölünmesinde giderek kısalan yapılara _______ denir.",
        answer: "telomerler",
        acceptableAnswers: ["telomerler", "telomer"],
        explanation: "Telomerler hücresel saat kuramında önemli bir rol oynar."
      },
      {
        question: "Yaşlı yetişkinlerde, bilgiyi konuşulurken kullanmak üzere kelimelerin geri çağrılmasında yaşanan zorluğa _______ fenomeni denir.",
        answer: "dilin ucunda",
        acceptableAnswers: ["dilin ucunda", "dilin ucunda fenomeni", "DUF"],
        explanation: "Dilin Ucunda Fenomeni (DUF), yaşlıların ortak bellek problemidir."
      },
      {
        question: "Aşkın türleri arasında, tutkulu aşk olarak da bilinen ve genellikle ilişkilerin ilk dönemlerinde baskın olan türe _______ aşk denir.",
        answer: "romantik",
        acceptableAnswers: ["romantik", "romantik aşk", "tutkulu"],
        explanation: "Romantik aşk = tutkulu aşk, ilişkilerin ilk dönemlerinde baskın olur."
      },
      {
        question: "Türkiye'de TÜİK verilerine göre ortalama ilk evlilik yaşı 2013 yılı sonrasında kadınlarda yaklaşık _______ yaştır.",
        answer: "24",
        acceptableAnswers: ["24", "24.6", "24,6"],
        explanation: "TÜİK 2013 verilerine göre Türkiye genelinde kadınlarda ortalama ilk evlilik yaşı 24.1 → 24.6'ya yükselmiştir."
      },
      {
        question: "Yetişkinlerin kendilerinden bahsederken yaş kimliklerinin kronolojik yaşlarından daha _______ olduğunu belirten bulgular tutarlıdır.",
        answer: "genç",
        acceptableAnswers: ["genç", "genc"],
        explanation: "Yaş kimlikleri kronolojik yaştan daha genç olarak algılanır."
      },
      {
        question: "Pek çok kültürde özellikle sanayileşmemiş kültürlerde orta yaş kavramı net değildir veya bazı durumlarda _______ tir.",
        answer: "eksik",
        acceptableAnswers: ["eksik"],
        explanation: "Birçok sanayileşmemiş kültürde orta yaş kavramı net değildir veya eksiktir."
      },
      {
        question: "Bilgelik kavramını yaşamın uygulamaya dair boyutlarında uzmanlık düzeyindeki bilgi olarak tanımlayan araştırmacılar _______ ve Gluck'tur.",
        answer: "Staudinger",
        acceptableAnswers: ["Staudinger", "staudinger"],
        explanation: "Staudinger & Gluck (2011) bilgeliği yaşamın pragmatik boyutlarındaki uzmanlık bilgisi olarak tanımlar."
      },
      {
        question: "Beyin ölümü ölümün _______ açıklamasıdır.",
        answer: "nörolojik",
        acceptableAnswers: ["nörolojik", "norolojik", "nörolojik açıklama"],
        explanation: "Beyin ölümü ölümün nörolojik açıklamasıdır; düz EEG kaydı beyin ölümü için bir ölçüttür."
      },
      {
        question: "Yas çalışmalarında, sevilen kişinin kaybından sonra ortaya çıkan duygusal uyuşukluk ve inanmama gibi negatif duyguların yaklaşık _______ ay içinde azalması beklenir.",
        answer: "6",
        acceptableAnswers: ["6", "altı"],
        explanation: "Maciejevvski (2007) - olumsuz duygular yaklaşık 6 ay içinde azalır ve kabullenme gerçekleşir."
      }
    ],
    multipleChoice: [
      {
        question: "Aşağıdakilerden hangisi serbest radikal kuramının temel iddialarındandır?",
        options: ["Telomerler her bölünmede uzar", "Kararsız oksijen molekülleri hücrelerdeki DNA'ya zarar verir", "Hormonal sistem strese karşı dirençlidir", "Mitokondri büyür"],
        correctIndex: 1,
        explanation: "Serbest radikal kuramı, kararsız oksijen moleküllerinin DNA ve hücresel yapılara zarar vermesini açıklar."
      },
      {
        question: "Yetişkinlik döneminde işletilebilen ve orta yetişkinlikte düşmeye başlayan, soyut muhakeme becerisi olarak tanımlanan zeka türü hangisidir?",
        options: ["Kristalize zeka", "Akıcı zeka", "Pratik zeka", "Sosyal zeka"],
        correctIndex: 1,
        explanation: "Akıcı zeka soyut muhakeme becerisidir ve orta yetişkinlikte düşmeye başlar (John Horn)."
      },
      {
        question: "Aşağıdakilerden hangisi Levinson'un orta yaş geçişine ilişkin görüşlerinden biridir?",
        options: ["Orta yaş bir kriz dönemidir", "Orta yaşta herkes kolay bir geçiş yaşar", "Orta yaşta kişilik tamamen değişmez", "Orta yaş gelişimde önemsizdir"],
        correctIndex: 0,
        explanation: "Levinson orta yaş dönemini bir kriz olarak görür; geçişen erkeklerin %70-80'i sancılı bulmuştur."
      },
      {
        question: "Hangisi yaşlı yetişkinlerin hücresel/biyolojik özelliklerinden DEĞİLDİR?",
        options: ["Beyin ağırlığında %5-10 azalma", "Akciğer kapasitesinde %40 azalma (20-80 arası)", "Hücre bölünme kapasitesinin sınırsız artışı", "Asetilkolin üretiminde azalma"],
        correctIndex: 2,
        explanation: "Aksine, hücrelerin bölünme kapasitesi yaşlandıkça azalır (Hayflick limiti)."
      },
      {
        question: "Tannen'in kadın ve erkek iletişim biçimlerine ilişkin önerdiği iki tür iletişim hangisidir?",
        options: ["Sözel - Sözel olmayan", "Bilişsel - Duygusal", "Uyuma dayalı konuşma (rapport talk) - Resmi konuşma (report talk)", "Kapalı - Açık"],
        correctIndex: 2,
        explanation: "Tannen iki iletişim biçimi: rapport talk (uyuma dayalı, bağ kurma), report talk (resmi, bilgi verme)."
      },
      {
        question: "Çoklu damar tıkanmasına bağlı demans için aşağıdakilerden hangisi doğrudur?",
        options: ["Sadece kadınlarda görülür", "Erkeklerde daha yaygındır ve iyileşme görülebilir", "Geri dönüşü kesinlikle yoktur", "Alzheimer ile aynı klinik görünümdedir"],
        correctIndex: 1,
        explanation: "Çoklu damar tıkanmasına bağlı demans erkeklerde daha yaygındır ve Alzheimer'ın aksine iyileşebilir."
      },
      {
        question: "Hangisi yas sürecinin ikili-süreç modelinde yer alan iki temel bileşenden biridir?",
        options: ["İlişki odaklı stres", "Beklenti odaklı stres", "Kayıp odaklı stres ve iyileşme odaklı stres", "Geçmiş ve gelecek odaklı stres"],
        correctIndex: 2,
        explanation: "İkili-süreç modeli kayıp odaklı stres kaynakları ile iyileşme odaklı stres kaynakları arasındaki gidip-gelmeyi vurgular."
      },
      {
        question: "Pablo Casals'ın 95 yaşında günde 6 saat alıştırma yapması neyi örneklemektedir?",
        options: ["Hücresel saat kuramını", "Sosyoduygusal seçicilik kuramını", "Üretkenliği ve yaşamda gelişme gösterdiğini hissetmeyi", "Kristalize zekanın düşüşünü"],
        correctIndex: 2,
        explanation: "Casals 'çünkü gelişme gösterdiğimi hissediyorum' demiştir - üretkenlik ve bilişsel-fiziksel etkinliğin önemini örneklemektedir."
      },
      {
        question: "Hangi araştırmacılar hayatın anlamını sorgulamayı dört temel ihtiyaca dayandırmıştır?",
        options: ["Erikson ve Levinson", "Costa ve McCrae", "Baumeister ve Vohs", "Schaie ve Willis"],
        correctIndex: 2,
        explanation: "Baumeister ve Vohs (2002) hayatın anlamının dört temel ihtiyacını (amaç, değer, yeterlilik, benlik değeri) tanımlamıştır."
      },
      {
        question: "Aşağıdakilerden hangisi Gottman'ın başarılı evlilik için belirlediği 7 ilkeden biri DEĞİLDİR?",
        options: ["Aşk haritası oluşturmak", "Düşkünlük ve hayranlığı beslemek", "Eşi tamamen değiştirmek", "Ortak anlam yaratmak"],
        correctIndex: 2,
        explanation: "Gottman, eşi değiştirmeye çalışmak yerine onların etkilemesine izin vermek, çözülebilir çatışmaları çözmek gibi ilkeler öne sürer."
      },
      {
        question: "Aşağıdakilerden hangisi cinsel yolla bulaşan virüs kaynaklı hastalıklardan biridir?",
        options: ["Bel soğukluğu", "Frengi", "Parariketsiyoz", "Genital uçuk"],
        correctIndex: 3,
        explanation: "Bakteri kaynaklı: bel soğukluğu, frengi, parariketsiyoz. Virüs kaynaklı: genital uçuk, genital tümörler, HIV."
      },
      {
        question: "Erikson'un ileri yetişkinlik için tanımladığı psikososyal kriz hangisidir?",
        options: ["Yakınlığa karşı yalıtılmışlık", "Üretkenliğe karşı verimsizlik", "Benlik bütünlüğüne karşı umutsuzluk", "Kimlik kazanımına karşı kimlik karmaşası"],
        correctIndex: 2,
        explanation: "Erikson ileri yetişkinliği 'benlik bütünlüğüne karşı umutsuzluk' olarak tanımlar."
      },
      {
        question: "Hangisi çekiciliğin denklik hipotezini doğru tanımlar?",
        options: ["Çok daha çekici insanları tercih ederiz", "Çekicilik gerçek yaşamda önemsizdir", "Soyut olarak kendimizden daha çekici kişileri tercih etsek de gerçek yaşamda kendi çekicilik düzeyimize yakın birini seçeriz", "Karşıt kutuplar birbirini çeker"],
        correctIndex: 2,
        explanation: "Denklik hipotezi: gerçek yaşamda kendi çekicilik düzeyimize yakın birini seçeriz."
      },
      {
        question: "Robert Butler'a göre ileri yetişkinlik döneminde önemli bir bileşen olarak ortaya çıkan ve geçmişin değerlendirilmesini içeren süreç nedir?",
        options: ["Sosyal saat", "Yaşamı gözden geçirme", "Olası benlikler", "Uyumsal kontrol"],
        correctIndex: 1,
        explanation: "Yaşamı Gözden Geçirme - Robert Butler tarafından geliştirilen, Erikson'un benlik bütünlüğüne karşı umutsuzluk dönemiyle ilişkili bir süreçtir."
      },
      {
        question: "Aşağıdakilerden hangisi yaşlı yetişkinlerin sıklıkla maruz kaldığı şiddet türlerinden biri DEĞİLDİR?",
        options: ["Dolandırıcılık", "Vandalizm", "Kapkaç", "Siber zorbalık"],
        correctIndex: 3,
        explanation: "Yaşlılar genellikle dolandırıcılık, vandalizm, kapkaç, taciz gibi şiddet içermeyen suçlara maruz kalır."
      },
      {
        question: "Boş yuva sendromu nedir?",
        options: ["Çocukların evden ayrılmasıyla evlilik doyumunun azalması", "Yaşlıların yalnız yaşaması", "Boşanma sonrası yaşanan kayıp", "Emekli olunca yaşanan boşluk"],
        correctIndex: 0,
        explanation: "Boş yuva sendromu: çocuklar evden ayrıldığında evlilik doyumunun azalmasıdır."
      },
      {
        question: "Bilişsel mekanikler ve pragmatikler ayrımı kim tarafından önerilmiştir?",
        options: ["Schaie ve Willis", "Lovden ve Lindenberg", "Horn ve Donaldson", "Carstensen ve Lang"],
        correctIndex: 1,
        explanation: "Lovden ve Lindenberg (2007) bilişsel mekanikler (akıcı) ve kristalize pragmatikler terimlerini kullanır."
      },
      {
        question: "Aşağıdakilerden hangisi yaşlanmanın hormonal stres kuramını en iyi açıklar?",
        options: ["Hücreler sınırlı sayıda bölünür", "Hormonal sistemin strese karşı direnci azalır ve hastalık olasılığı artar", "Mitokondri bozulması ortaya çıkar", "Telomerler kısalır"],
        correctIndex: 1,
        explanation: "Hormonal stres kuramı hormonal sistemin strese karşı direncinin azalmasını açıklar."
      },
      {
        question: "Aşağıdakilerden hangisi yaşam vasiyeti (living will) ile ilgili doğru bir bilgidir?",
        options: ["Sadece hastane onayı ile geçerlidir", "'Ölüm Tercihi' örgütünün ortaya attığı bir belgedir", "Yalnızca yaşlılar tarafından kullanılır", "Aktif ötenazi anlamına gelir"],
        correctIndex: 1,
        explanation: "Yaşam vasiyeti, 'Ölüm Tercihi' (Choice in Dying) örgütünün Doğal Ölüm Yasası kapsamında ortaya koyduğu bir belgedir."
      },
      {
        question: "Aşağıdakilerden hangisi orta yetişkinlik için ortalama yaş aralığıdır?",
        options: ["25-35", "30-40", "40-65", "55-75"],
        correctIndex: 2,
        explanation: "Orta yetişkinlik ortalama 40-45 yaşlarında başlar ve 60-65 yaşlarına kadar uzar."
      },
      {
        question: "Sherry Willis ve meslektaşlarının (2006) çalışmasında yaşlılara verilen eğitim türlerinden biri DEĞİLDİR?",
        options: ["Muhakeme eğitimi", "Bellek eğitimi", "İşleme hızı eğitimi", "Sosyal iletişim eğitimi"],
        correctIndex: 3,
        explanation: "Willis çalışmasında 4 grup: muhakeme, bellek, işleme hızı eğitimi alan gruplar ve eğitim almayan kontrol grubu."
      },
      {
        question: "Hücresel saat kuramına göre bir insan hücresi yaklaşık kaç kez bölünebilir?",
        options: ["25-30 kez", "50-60 kez", "75-80 kez", "100-120 kez"],
        correctIndex: 2,
        explanation: "Leonard Hayflick'in hücresel saat kuramına göre insan hücresi yaklaşık 75-80 kez bölünebilir."
      },
      {
        question: "Çoğu psikolog ölmekte olan kişiyle iletişim hakkında ne önerir?",
        options: ["İletişimi tamamen kapatma", "Açık iletişim, ruhsal patoloji üzerine olmamalı, dayanıklılığı vurgulama", "Sadece doktorla konuşma", "Ölümden hiç bahsetmeme"],
        correctIndex: 1,
        explanation: "Çoğu psikolog açık iletişim biçimi önerir; iletişim ruhsal patoloji veya ölüme hazırlık üzerine olmamalı, dayanıklılığı vurgulamalıdır."
      },
      {
        question: "Aşağıdakilerden hangisi orta yetişkinlikte fiziksel değişikliklerden biri DEĞİLDİR?",
        options: ["Yaklaşık 5 cm boy kısalması", "Yaşlılık lekeleri (kahverengi noktalar)", "Görme keskinliğinin tamamen kaybedilmesi", "Saçların incelmesi ve grileşmesi"],
        correctIndex: 2,
        explanation: "Orta yaşta görme zorlanır (özellikle yakın görme) ancak tamamen kaybedilmez."
      },
      {
        question: "Yaşlı yetişkinlerde, başkalarına yardım eden, gönüllülük yapan ve toplumdan uzak yaşamayanların yaşamlarından daha fazla doyum aldığı tezi hangi kuramla en iyi açıklanabilir?",
        options: ["Erikson'un kuramı", "Hücresel saat kuramı", "Hareketlilik kuramı", "Hormonal stres kuramı"],
        correctIndex: 2,
        explanation: "Hareketlilik kuramı yaşlıların ne kadar aktif olurlarsa o kadar yüksek doyum sağlayacaklarını öne sürer."
      }
    ]
  }
];

// ============== SINAV 3 ==============
EXAMS.push({
  id: 3,
  title: "Sınav 3",
  description: "Bağlanma, mizaç, bilişsel yaşlanma ve aile dinamikleri",
  fillInBlanks: [
    {
      question: "İnsanda kalıtsal olarak var olan, göreli bir tutarlılık taşıyan temel eğilimlere _______ denir.",
      answer: "mizaç",
      acceptableAnswers: ["mizaç", "mizac"],
      explanation: "Mizaç, insanda kalıtsal olarak var olan göreli tutarlılık taşıyan temel eğilimlerdir."
    },
    {
      question: "Çalışma belleği, bireylerin karar verirken, problem çözerken bilgiyi değişimlemesine ve kurgulamasına izin veren zihinsel bir _______ benzetilir.",
      answer: "iş tezgahı",
      acceptableAnswers: ["iş tezgahı", "iş tezgahına", "work bench", "iş tezgâhı"],
      explanation: "Çalışma belleği zihinsel bir 'iş tezgâhına' (work bench) benzetilir."
    },
    {
      question: "Yaşamın uygulamaya dair boyutlarında uzmanlık düzeyindeki bilgi olarak tanımlanan kavram _______ tir.",
      answer: "bilgelik",
      acceptableAnswers: ["bilgelik"],
      explanation: "Bilgelik, yaşamın pragmatik boyutlarındaki uzmanlık bilgisidir."
    },
    {
      question: "Yaşam-olayları yaklaşımında yaşlanmaya yönelik aşamaların yetişkin kişilik gelişimini incelemede önemli bir _______ olduğu vurgulanır.",
      answer: "yöntem",
      acceptableAnswers: ["yöntem", "yontem"],
      explanation: "Yaşa bağlantılı aşamalar yetişkin kişilik gelişimini incelemede önemli bir yöntemdir."
    },
    {
      question: "Beyin ölümü için bir ölçüt olarak kullanılan kayıt _______ kaydıdır.",
      answer: "EEG",
      acceptableAnswers: ["EEG", "düz EEG"],
      explanation: "Belirli bir süre kaydedilen düz EEG kaydı beyin ölümü için bir ölçüttür."
    },
    {
      question: "Yaşlı yetişkinlerin yeni şeyler öğrenme veya toplumsal katkı sunma becerisinden yoksun olarak algılanması anlamına gelen kavrama _______ ayrımcılığı denir.",
      answer: "yaş",
      acceptableAnswers: ["yaş", "yas"],
      explanation: "Yaş ayrımcılığı (ageism), yaşlılara karşı önyargılı tutumdur."
    },
    {
      question: "Vaillant'ın çalışmasında 50 yaşında alkol kullanma ve sigara içme, bireylerin 75-80 yaşlarında ölüp ölmeyeceklerinin en iyi _______ olarak görülmüştür.",
      answer: "göstergesi",
      acceptableAnswers: ["göstergesi", "gostergesi"],
      explanation: "Vaillant'ın çalışmasında 50 yaşta alkol ve sigara, 75-80'de ölümün en iyi göstergesi olarak bulunmuştur."
    },
    {
      question: "Yaşlanmanın ve yaşam uzamasının etkili bir şekilde sağlanması için yıllarca tek gerekenin _______ olduğu savunulmuştur.",
      answer: "dengeli beslenme",
      acceptableAnswers: ["dengeli beslenme", "beslenme"],
      explanation: "Yaşlanma uzmanları yıllarca dengeli beslenmenin yeterli olduğunu savunmuştur."
    },
    {
      question: "Üretkenliğin bir yönü olarak yetişkinlerin gelecek nesillere _______ bırakma isteklerini kapsar.",
      answer: "miras",
      acceptableAnswers: ["miras"],
      explanation: "Erikson'a göre üretkenlik, yetişkinlerin gelecek nesillere miras bırakma isteklerini kapsar."
    },
    {
      question: "Naaş yakımı (kremasyon) Asya'da en fazla _______ ülkesinde uygulanmaktadır.",
      answer: "Japonya",
      acceptableAnswers: ["Japonya", "japonya"],
      explanation: "Naaş yakımı en fazla Japonya'da ve pek çok Asya ülkesinde uygulanmaktadır."
    }
  ],
  multipleChoice: [
    {
      question: "Hazan ve Shaver'ın yetişkin bağlanma kategorileri arasında aşağıdakilerden hangisi YOKTUR?",
      options: ["Güvenli", "Kaygılı/kararsız", "Çekingen", "Saplantılı"],
      correctIndex: 3,
      explanation: "Hazan ve Shaver 3 kategori önermiştir: güvenli, kaygılı/kararsız, çekingen. Saplantılı kategori Bartholomew'un dörtlü modelinde yer alır."
    },
    {
      question: "Aşağıdaki çalışmalardan hangisi 132 kadın üzerinde California'da Mills Üniversitesi'nde gerçekleştirilmiştir?",
      options: ["Berkeley Boylamsal Çalışması", "Hellons'un Mills Üniversitesi Çalışması", "Grant Study", "Seattle Boylamsal Çalışması"],
      correctIndex: 1,
      explanation: "Hellons'un Mills Üniversitesi Çalışması 1950'lerin sonlarında 132 kadın üzerinde yapılmıştır."
    },
    {
      question: "Aşağıdakilerden hangisi orta yetişkinlikte ortaya çıkan ve uzun zaman alan bilişsel bir özelliktir?",
      options: ["Algısal hız", "Çalışma belleği", "Uzmanlık", "Tepki süresi"],
      correctIndex: 2,
      explanation: "Kim ve Hasher (2009) - uzmanlık ulaşması uzun zaman aldığı için erken yetişkinlik yıllarından çok orta yetişkinlik yıllarında ortaya çıkar."
    },
    {
      question: "Hangi araştırmacı genç yetişkinlerin %25'inin ne yapmak istediğini bildiğini, %60'ının makul planlama yaptığını, %20'sinin ise beklentisi olmadığını tespit etmiştir?",
      options: ["Jeffrey Arnett", "William Damon", "Daniel Levinson", "John Gottman"],
      correctIndex: 1,
      explanation: "William Damon, genç yetişkinlerde hedef ve plan konusunda bu oranları tespit etmiştir."
    },
    {
      question: "Yaşlı yetişkinlerin çocuklarıyla ilişkilerinde, ebeveynlerine günlük faaliyetlerinde yardımcı olma olasılıkları en yüksek olan grup hangisidir?",
      options: ["Yetişkin erkek çocuklar", "Yetişkin kız çocuklar", "Eşit oranda hem kız hem erkek", "Sadece torunlar"],
      correctIndex: 1,
      explanation: "Yetişkin kız çocuklar, ebeveynlerine günlük yardımda yetişkin erkek çocuklara göre üç kat daha fazladır (Dwyer & Coward, 1991)."
    },
    {
      question: "Yaşlanan beyinde aşağıdaki nörotransmitterlerden hangisinin azalmasının ağır bellek kaybıyla ilişkili olduğu öne sürülmektedir?",
      options: ["Asetilkolin", "Dopamin", "Serotonin", "Norepinefrin"],
      correctIndex: 0,
      explanation: "Asetilkolin azalmasının Alzheimer hastalığıyla ilişkili ağır bellek kaybıyla bağlantılı olduğu savunulmaktadır."
    },
    {
      question: "Yas üzerine kültürel çeşitlilikte aşağıdakilerden hangi kültür ölen kişiyle bağların kısa sürede kopmasını ve hayatın normal akışına devam etmesini tercih eder?",
      options: ["Japonya", "Arizona'daki Hopi kabilesi", "Amerika geneli", "Avrupa"],
      correctIndex: 1,
      explanation: "Arizona'daki Hopi kabilesinde ölen kişi olabildiğince kısa zamanda unutulur ve hayat normal akışında devam eder."
    },
    {
      question: "Aşağıdakilerden hangisi yaşlanmanın evrimsel kuramının temel argümanıdır?",
      options: ["Hücreler sınırlı sayıda bölünür", "Doğal seçilim üreme gücüyle bağlantılı olduğundan, yaş ilerledikçe seçilim faydası azalır", "Mitokondri bozulur", "Hormonal stres artar"],
      correctIndex: 1,
      explanation: "Yaşlanmanın evrimsel kuramı doğal seçilimin üreme gücüyle bağlantılı olduğunu, bu nedenle yaş ilerledikçe seçilimin sunduğu faydaların azaldığını savunur."
    },
    {
      question: "Costa ve McCrae'ye göre Beş Büyük kişilik faktörünün hangisi 'yumuşak başlılık' (agreeableness) olarak adlandırılır?",
      options: ["Openness", "Conscientiousness", "Extraversion", "Agreeableness"],
      correctIndex: 3,
      explanation: "Beş Büyük: yaşantıya açıklık (openness), sorumluluk (conscientiousness), dışa dönüklük (extraversion), yumuşak başlılık (agreeableness), nevrotizm."
    },
    {
      question: "Genç yetişkinlerin düşünme tarzının ergenlere göre farklılaşmasını 'yansıtıcı ve göreceli' olarak tanımlayan kuramcı kimdir?",
      options: ["Piaget", "William Perry", "Kitcher", "Labouvie-Vief"],
      correctIndex: 1,
      explanation: "William Perry (1999) genç yetişkinlerin kutuplaştırıcı düşünce yapısından uzaklaşıp yansıtıcı ve göreceli düşünmeye geçtiğini ileri sürmüştür."
    },
    {
      question: "Aşağıdakilerden hangisi imarethane (hospice) bakımının özelliklerindendir?",
      options: ["Hastalığı iyileştirmek", "Yaşam destek üniteleriyle ömrü uzatmak", "Acıyı azaltma ve onurlu ölümü destekleme", "Sadece yoğun bakımda bulunmak"],
      correctIndex: 2,
      explanation: "İmarethane/hospis: acıyı azaltma ve onurlu ölümü desteklemeye odaklanır; hastalığı iyileştirmek amacı değildir."
    },
    {
      question: "Sosyal saat kavramını öne süren araştırmacı kimdir?",
      options: ["Daniel Levinson", "Erik Erikson", "Bernice Neugarten", "George Vaillant"],
      correctIndex: 2,
      explanation: "Sosyal saat kavramı Bernice Neugarten (1986) tarafından önerilmiştir; evlenme, çocuk yapma gibi yaşam görevlerinin beklenen zaman dilimini ifade eder."
    },
    {
      question: "Yaşlı yetişkinlerin yaklaşık yüzde kaçı emeklilik öncesi orta yaş yetişkinlere göre evlilikte daha az düşman algılar?",
      options: ["%25", "%50", "%66", "%85"],
      correctIndex: 2,
      explanation: "Yaşlı yetişkinler, orta yaşlı yetişkinlere göre eşlerini daha az düşmanca algılar (Henry vd., 2007). Tipik istatistik %66 civarındadır."
    },
    {
      question: "Erkek testosteron üretimi orta yetişkinlikte yıllık yaklaşık ne kadar oranda düşmeye başlar?",
      options: ["%1", "%5", "%10", "%20"],
      correctIndex: 0,
      explanation: "Erkek testosteron üretimi orta yetişkinlik boyunca yılda yaklaşık %1 oranında düşer."
    },
    {
      question: "Çoğu kültürde ölümün geri dönüşü olmayan bir son olduğu ve tüm canlıların bir gün öleceği anlayışına çocuk yaklaşık kaç yaşında ulaşır?",
      options: ["3 yaş", "6 yaş", "9 yaş", "12 yaş"],
      correctIndex: 2,
      explanation: "9 yaşına kadar çocuklar ölümü evrensel ve geri dönüşü olmayan bir durum olarak algılayamaz (Wenessam & Wass, 1987)."
    },
    {
      question: "Yaşlı yetişkinlerin ölüm nedenleri arasında en yüksek paya sahip olanlar hangileridir?",
      options: ["Kazalar ve enfeksiyonlar", "Kanser ve kalp damar hastalıkları", "Düşmeler ve travmalar", "Nörolojik sorunlar"],
      correctIndex: 1,
      explanation: "65-74 yaşları arasındaki yetişkinlerin yaklaşık %60'ı kanser ya da kalp damar hastalıklarından ölmektedir (Kane, 2007)."
    },
    {
      question: "Çocukluk dönemindeki kolay mizaç örüntüleri genç yetişkinlikte hangi sonuçla ilişkilendirilmiştir?",
      options: ["Daha az başarılı uyum süreci", "Daha başarılı uyum süreci", "Yetişkinlikte sosyal kaçıngan", "İçedönüklük"],
      correctIndex: 1,
      explanation: "Chess ve Thomas (1987) - 3-5 yaşları arasında kolay mizaç örüntüleri sergileyen çocukların genç yetişkinlikte daha başarılı uyum süreci sergilediği bulunmuştur."
    },
    {
      question: "Aşağıdakilerden hangisi seçici dikkati en iyi tanımlar?",
      options: ["Aynı anda birden fazla faaliyete konsantre olmak", "Bir nesne ya da göreve uzun süre devam ettirmek", "Yaşantının belirli bir yönüne odaklanırken diğer ilgisiz kısımlarını görmezden gelmek", "Çevreye genel bakış"],
      correctIndex: 2,
      explanation: "Seçici dikkat: yaşantının belirli bir yönüne odaklanırken diğer ilgisiz kısımlarını görmezden gelmek."
    },
    {
      question: "Genç yetişkinlikte cinsel etkinlikle ilgili Amerikalılar üç kategoride toplanmaktadır. Aşağıdakilerden hangisi bu kategorilerden biri DEĞİLDİR?",
      options: ["Haftada iki veya daha fazla", "Ayda birkaç kez", "Yılda bir veya daha az", "Sadece evlilikte"],
      correctIndex: 3,
      explanation: "Amerikalılar üç kategoride toplanır: haftada 2+, ayda birkaç, yılda 1 ya da daha az."
    },
    {
      question: "Eşcinsel evliliklerin yasal ve sosyal engelleri olmasına rağmen, eşcinsel evliliklerde söz konusu olmayan davranış nedir?",
      options: ["Yakın ilişkiler kurma", "Ortak yaşam sürme", "Resmi evlilik bağı (bazı bölgelerde)", "Aşk yaşama"],
      correctIndex: 2,
      explanation: "Resmi evliliğe yasal/sosyal engeller bazı bölgelerde söz konusu olabilir, ancak eşcinsel evlilik bazı yargı bölgelerinde mümkündür ve eşitlik öncelik kazanır."
    },
    {
      question: "Bell soğukluğu, frengi ve parariketsiyoz hangi sınıfa giren cinsel yolla bulaşan hastalıklardır?",
      options: ["Virüsler", "Bakteriler", "Mantarlar", "Parazitler"],
      correctIndex: 1,
      explanation: "Bel soğukluğu, frengi ve parariketsiyoz bakteri kaynaklı CYBH'lerdir."
    },
    {
      question: "Schaie'nin Seattle Boylamsal Çalışmasında test edilen temel zihinsel yetenekler arasında aşağıdakilerden hangisi YOKTUR?",
      options: ["Kelime bilgisi", "Sözel bellek", "Mekânsal oryantasyon", "Sosyal beceriler"],
      correctIndex: 3,
      explanation: "Schaie 6 yetenek test etti: Kelime Bilgisi, Sözel Bellek, Sayı, Mekansal Oryantasyon, Tümevarımsal Muhakeme, Algısal Hız."
    },
    {
      question: "Bilişsel nörobilim alanında beyin ve bilişsel işlevler arasındaki ilişkileri inceleyen tekniklerden biri DEĞİLDİR?",
      options: ["fMRI", "PET", "DTI", "EKG"],
      correctIndex: 3,
      explanation: "Bilişsel nörobilim teknikleri: fMRI, PET ve DTI. EKG kalp aktivitesini ölçer, beyin görüntüleme aracı değildir."
    },
    {
      question: "Aşağıdakilerden hangisi yaşlı yetişkinlerde duygusal yalnızlığı tanımlar?",
      options: ["Başkalarıyla bağlantılı olma hissi verebilen sosyal çevrelerle bütünleşme eksikliği", "Duygusal anlamda soyutlanmış hissetme hali", "Aile bireyleriyle iletişim kuramama", "Maddi kayıp"],
      correctIndex: 1,
      explanation: "Duygusal yalnızlık: duygusal anlamda soyutlanmış hissetme hali. Sosyal yalnızlık: başkalarıyla bağlantılı olma hissi verebilen sosyal çevrelerle bütünleşme eksikliği."
    },
    {
      question: "Aşağıdakilerden hangisi 'Doğal Ölüm Yasası' kapsamında ortaya çıkan ve insanların kendi tıbbi kararlarını önceden belirleyebilmesini sağlayan belgedir?",
      options: ["Vasiyetname", "Yaşam vasiyeti (living will)", "Sigorta poliçesi", "Sağlık raporu"],
      correctIndex: 1,
      explanation: "Yaşam vasiyeti, 'Ölüm Tercihi (Choice in Dying)' örgütünün Doğal Ölüm Yasası kapsamında ortaya koyduğu, kişinin kendi tıbbi kararlarını önceden belirleyebildiği belgedir."
    }
  ]
});

// ============== SINAV 4 ==============
EXAMS.push({
  id: 4,
  title: "Sınav 4",
  description: "Cinsellik, sağlık, kişilik gelişimi ve sosyoduygusal süreçler",
  fillInBlanks: [
    {
      question: "Üniversitelerde tam-zamanlı çalışan öğrencilerin oranı 1970'te %34 iken, 2006 yılında %_______ ya yükselmiştir.",
      answer: "46",
      acceptableAnswers: ["46", "%46"],
      explanation: "ABD'de tam-zamanlı çalışan öğrenci oranı 1970'te %34 → 2006'da %46'ya yükseldi."
    },
    {
      question: "Geç yetişkinlikte beyinde bilişsel işlevleri etkileyebilen büzüşmenin en çok görüldüğü bölge _______ korteksidir.",
      answer: "prefrontal",
      acceptableAnswers: ["prefrontal"],
      explanation: "Prefrontal korteksin yaşlanması çalışma belleğinde düşüşe yol açabilir."
    },
    {
      question: "Yaşlı yetişkinlikte fiziksel görünümde en belirgin değişiklikler kırışıklar ve yaş _______ dir.",
      answer: "lekeleri",
      acceptableAnswers: ["lekeleri", "lekesi"],
      explanation: "İleri yetişkinlikte kırışıklar ve yaş lekeleri en belirgin değişikliklerdir."
    },
    {
      question: "Kaybedilen kişiyi geri getirmeye yönelik aralıklarla tekrar eden bir ihtiyacı ya da isteği ifade eden duyguya _______ denir.",
      answer: "özlem",
      acceptableAnswers: ["özlem", "ozlem", "hasret"],
      explanation: "Özlem ya da hasret, kaybedilen kişiyi geri getirme isteğidir."
    },
    {
      question: "Hayatın sınırlılıklarıyla yüzleşme sonucu idealizm görüşlerinde azalmaların başladığı ve daha _______ ve pragmatik düşünme dönemi genç yetişkinlikte ortaya çıkar.",
      answer: "gerçekçi",
      acceptableAnswers: ["gerçekçi", "gercekci"],
      explanation: "Genç yetişkinlik döneminde gerçekçi ve pragmatik düşünme dönemi başlar (Labouvie-Vief)."
    },
    {
      question: "Orta yaşa kadar farkındalığın artması ve hayattaki önceliklerin değerlendirilmesi için yaşanan ciddi bir kaza, kayıp ya da hastalık 'uyanma _______' olarak adlandırılır.",
      answer: "zili",
      acceptableAnswers: ["zili", "zil"],
      explanation: "Lachman (2004) - ciddi kaza, kayıp ya da hastalık 'uyanma zili' olabilir."
    },
    {
      question: "Yaşlı yetişkinlerin yaklaşık %95'inin _______ içinde yaşadığı belirtilmektedir.",
      answer: "toplum",
      acceptableAnswers: ["toplum", "toplum içinde"],
      explanation: "Yaşlı yetişkinlerin yaklaşık %95'i toplum içinde yaşamaktadır."
    },
    {
      question: "Yas süresinde çoğu kişi, kayıp ile yaşamayı öğrenir; ancak kalıcı çaresizlik içeren ve uzun zaman geçmesine rağmen çözülemeyen yas türüne _______ yas denir.",
      answer: "uzamış",
      acceptableAnswers: ["uzamış", "uzamis"],
      explanation: "Uzamış yas, kalıcı çaresizlik içerir ve depresyon/intihar riskini artırabilir."
    },
    {
      question: "Sosyal _______ bireyin sosyal destek verdiği ve aldığı bireylerden oluşan kişisel bir çevre içinde sürdürülür.",
      answer: "destek",
      acceptableAnswers: ["destek"],
      explanation: "Sosyal destek, yoldaşlık modeline göre kişisel bir çevre içinde sürdürülür."
    },
    {
      question: "Türkiye'de 2018 araştırmasına göre uyuşturucu madde kullananların oranı %_______ olarak bulunmuştur.",
      answer: "3.1",
      acceptableAnswers: ["3.1", "3,1", "%3.1", "%3,1"],
      explanation: "EGM araştırmasına göre Türkiye'de uyuşturucu madde kullanım oranı %3.1'dir."
    }
  ],
  multipleChoice: [
    {
      question: "Genç yetişkinlik döneminde 12-18 yaş grubundakilerin %5'i haftada hiç egzersiz yapmazken, 19-26 yaş grubundakilerin yüzde kaçı hiç egzersiz yapmamaktadır?",
      options: ["%24", "%36", "%56", "%76"],
      correctIndex: 2,
      explanation: "12-18 yaş grubunun %5'i egzersiz yapmazken, 19-26 yaş grubunda bu oran %56'ya çıkmaktadır."
    },
    {
      question: "Aşağıdakilerden hangisi obezite sorunundaki olası sebeplerden biri DEĞİLDİR?",
      options: ["Genetik", "Leptin hormonu", "Metabolizma hızı", "Sosyal medya"],
      correctIndex: 3,
      explanation: "Obezite sebepleri: genetik, leptin hormonu, metabolizma hızı ve çevresel faktörler."
    },
    {
      question: "Aşağıdakilerden hangisi Berscheid'in (2010) aşk türlerinden biri DEĞİLDİR?",
      options: ["Arkadaşlık", "Romantik aşk", "Samimi aşk", "Toplumsal aşk"],
      correctIndex: 3,
      explanation: "Berscheid'in aşk türleri: arkadaşlık, romantik aşk, samimi aşk, anlaşmalı aşk."
    },
    {
      question: "Orta yaşa girerken yetişkinler, gençlere göre günlük stres kaynaklarını ne sıklıkta yaşamaktadır?",
      options: ["Daha sık", "Daha seyrek", "Eşit", "Hiç yaşamazlar"],
      correctIndex: 1,
      explanation: "Genç yetişkinler, orta yaşlı yetişkinlerden daha sık günlük stres kaynağı yaşar; orta yaşlılar ise bir kerede çok fazla işle uğraşma gibi aşırı stres kaynaklarına maruz kalır."
    },
    {
      question: "Aşağıdaki kuramlardan hangisi ileri yetişkinlikte yaşlanmaya bağlı kayıplar ve kazanımlar arasında dengeyi nasıl sağladıkları konusunda en uygun açıklamayı sunar?",
      options: ["Hareketlilik kuramı", "Sosyoduygusal seçicilik kuramı", "Ödünleme yoluyla seçici optimizasyon kuramı", "Erikson'un kuramı"],
      correctIndex: 2,
      explanation: "SOC (Selective Optimization with Compensation) kuramı yaşlılıkta yeni kaynakları nasıl ürettiklerini ve görevleri etkin paylaştırmayı açıklar."
    },
    {
      question: "Aşağıdakilerden hangisi yaşlı yetişkinlere yönelik kötü muamelenin en yaygın kaynağıdır?",
      options: ["Yabancılar", "Arkadaşlar", "Aile bireyleri", "Sokak suçluları"],
      correctIndex: 2,
      explanation: "Yaşlılara yönelik kötü muamele öncelikle aile bireyleri tarafından gerçekleştirilmektedir."
    },
    {
      question: "Aşağıdakilerden hangisi orta yetişkinlerin ortaya koyduğu özellikle 50'li yaşlarda 'birinci kalite' olarak nitelendirdikleri durumlardan DEĞİLDİR?",
      options: ["Boş yuvalar", "Daha iyi sağlık", "Daha yüksek gelir", "Genç bağımlılıklara dönüş"],
      correctIndex: 3,
      explanation: "Mills çalışmasında 50'li yaşlarda kadınlar: boş yuvalar, daha iyi sağlık, daha yüksek gelir ve ebeveynlere daha fazla ilgi olarak nitelendirmiştir."
    },
    {
      question: "Yaşlı yetişkinler tarafından sıklıkla şikayet edilen 'dilin ucunda fenomeni' aşağıdakilerden hangisini etkiler?",
      options: ["Mekansal hafıza", "Yeni motor beceriler", "Anlamsal bellekte kelime geri çağırma", "Episodik bellek"],
      correctIndex: 2,
      explanation: "Dilin ucunda fenomeni (DUF) anlamsal bellekte kelime geri çağırma sürecini etkiler."
    },
    {
      question: "Yaşamın son evresinde yaşanan ölmekte olan kişinin huzur duygusu geliştirdiği, kaderini kabullendiği ve çoğu durumda yalnız kalmayı arzuladığı evre Kübler-Ross'a göre hangisidir?",
      options: ["İnkar", "Öfke", "Depresyon", "Kabullenme"],
      correctIndex: 3,
      explanation: "Kabullenme - kişinin huzur, kaderini kabullenme ve yalnız kalmayı arzulama evresidir."
    },
    {
      question: "Yaşlanmanın hücresel saat kuramına göre, biz yaşlandıkça hücrelerimizin bölünme kabiliyeti:",
      options: ["Artar", "Sabit kalır", "Azalır", "Tamamen durur"],
      correctIndex: 2,
      explanation: "Yaşlandıkça hücrelerin bölünme kabiliyeti azalır ve telomerler kısalır."
    },
    {
      question: "Aşağıdakilerden hangisi yaşlanma için 'kullan ya da kaybet' kavramının doğru bir örneğidir?",
      options: ["Bedensel hareketsizlik", "Kitap okumak, bulmaca çözmek, derse/konsere gitmek", "Aşırı yeme", "Sosyal izolasyon"],
      correctIndex: 1,
      explanation: "'Kullan ya da kaybet' - bilişsel becerilere katkı sağlayan kitap okumak, bulmaca çözmek, derse/konsere gitmek gibi etkinliklerdir."
    },
    {
      question: "Bartholomew'un Dörtlü Bağlanma Modeli'nde olumsuz benlik + olumsuz başkaları modeline sahip bireyler hangi stildedir?",
      options: ["Güvenli", "Saplantılı", "Kayıtsız", "Korkulu"],
      correctIndex: 3,
      explanation: "Korkulu bağlanma: olumsuz benlik + olumsuz başkaları = yakınlıktan korkan ve sosyal açıdan kaçıngan."
    },
    {
      question: "Hangisi 'şu an ve geçmiş' isimli, orta yaşa gelmiş bireylerin profilini yansıtan ünlü çalışmadır?",
      options: ["Berkeley Boylamsal Çalışması", "Grant Study", "Mills Üniversitesi Çalışması", "Baltimore Çalışması"],
      correctIndex: 0,
      explanation: "Berkeley Boylamsal Çalışması, 'Orta Yaş Döneminde Şu An ve Geçmiş' (Eichorn vd., 1981) kitabıyla bilinir."
    },
    {
      question: "Aşağıdakilerden hangisi Levinson'un orta yaş geçişine ilişkin %70-80 oranında bulduğu sonuçtur?",
      options: ["Geçiş kolay ve sancısızdır", "Geçiş yaşamlarının birçok yönünün gündeme gelmesinden dolayı sarsıntılı ve sancılıdır", "Çoğu erkek orta yaşı sevinçle karşılar", "Orta yaş geçişi yaşanmaz"],
      correctIndex: 1,
      explanation: "Levinson'un görüştüğü erkeklerin %70-80'i orta yaş geçişini sarsıntılı ve psikolojik olarak sancılı bulmuştur."
    },
    {
      question: "Aşağıdakilerden hangisi genç yetişkinlikte cinsiyetin Tannen'in iletişim biçimleri ile ilişkisini doğru ifade eder?",
      options: ["Kadınlar 'report talk', erkekler 'rapport talk' kullanır", "Kadınlar 'rapport talk' kullanma eğilimindeyken erkekler 'report talk' kullanır", "Kadın ve erkekler aynı iletişim biçimini kullanır", "Cinsiyetin iletişim üzerinde etkisi yoktur"],
      correctIndex: 1,
      explanation: "Tannen'in modelinde kadınlar uyuma dayalı konuşma (rapport talk), erkekler ise bilgi vermeye yönelik resmi konuşma (report talk) kullanma eğilimindedir."
    },
    {
      question: "Aşağıdakilerden hangisi orta yaş erkeklerde gözlenen değişikliklerden biri DEĞİLDİR?",
      options: ["Testosteron üretiminin yıllık %1 düşmesi", "Erektil fonksiyon bozukluğu olasılığı", "Sperm sayısında yavaş düşüş", "Üreme yeteneğinin tamamen kaybı"],
      correctIndex: 3,
      explanation: "Erkekler orta yaşta üremeyi tam kaybetmez; testosteron ve sperm sayısı zaman içinde yavaş yavaş düşer."
    },
    {
      question: "İleri yetişkinlikte aktif yaşlanma için en uygun ifade hangisidir?",
      options: ["Sosyal etkinliklerden uzak durmak", "Düzenli egzersiz, sosyalleşme, dini etkinliklere katılım, seyahat", "Sürekli evde kalmak", "Sadece geçmişi hatırlamak"],
      correctIndex: 1,
      explanation: "Aktif olmak başarılı yaşlanmanın anahtarıdır: düzenli egzersiz, dışarı çıkma, toplantılara katılma, dini etkinlikler ve seyahat."
    },
    {
      question: "Aşağıdakilerden hangisi Genç Yetişkin döneminin Çift-çalışan (Dual-Earner) sorunlarındandır?",
      options: ["Sadece kadın eşin çalışması", "İş-yaşam dengesinin oluşturulması", "Çocuk yapma kararsızlığı", "Ekonomik bağımsızlık eksikliği"],
      correctIndex: 1,
      explanation: "Dual-Earner Couples sorunları: iş-yaşam dengesi, ev işleri, çocuk bakımı, çamaşır vb. konularda çelişkiler."
    },
    {
      question: "Hangi araştırmacı yetişkin gelişimini ve yaşlanmayı üç adet boylamsal çalışma ile incelemiş ve 75-85 yaş arasındaki bireyleri 'mutlu-iyi', 'üzgün-hasta' ve 'ölü' olarak kategorize etmiştir?",
      options: ["Bernice Neugarten", "George Vaillant", "Daniel Levinson", "K. Warner Schaie"],
      correctIndex: 1,
      explanation: "George Vaillant 3 adet boylamsal çalışma yürütmüş ve 75-85 yaş arası bireyleri 'mutlu-iyi', 'üzgün-hasta' ve 'ölü' kategorilerine ayırmıştır."
    },
    {
      question: "Aşağıdakilerden hangisi yaşam vasiyeti veya 'Doğal Ölüm Yasası' kapsamında bireyin verebileceği bir karardır?",
      options: ["Vergi indirimi", "Bitkisel hayatta yaşamak yerine ölmeyi tercih etme", "Sigorta poliçesi", "Yatırım planı"],
      correctIndex: 1,
      explanation: "Yaşam vasiyeti, ölümcül derecede hasta olan kişilerin acı içinde ya da bitkisel hayatta yaşamak yerine ölmeyi tercih edebileceği ihtimaline dayanır."
    },
    {
      question: "Hangi araştırmacı yaşlanma uzmanlarına göre, sağlığa yaşlılığa uyum sağlamada en yararlı olduğu bilinen unsurun aktif olmak olduğunu belirtir?",
      options: ["Erickson ve Krarner", "Charles ve Carstensen", "Depp ve Jeste", "Stirling"],
      correctIndex: 0,
      explanation: "Erickson & Krarner (2009) aktif olmanın başarılı yaşlanmanın anahtarı olduğunu vurgulamıştır."
    },
    {
      question: "Hangisi orta yaş kadınlarda menopozun olası bir belirtisi DEĞİLDİR?",
      options: ["Sıcak basması", "Mide bulantısı", "Yorgunluk", "Sürekli kilo artışı"],
      correctIndex: 3,
      explanation: "Menopozda östrojen aniden azalır ve sıcak basması, mide bulantısı, yorgunluk, hızlı kalp atışı gibi belirtiler ortaya çıkar."
    },
    {
      question: "Yaşlanmanın hücresel kuramında, kromozomların uçlarını ve DNA dizilerini ifade eden kavram hangisidir?",
      options: ["Mitokondri", "Telomer", "Nükleus", "Sinaps"],
      correctIndex: 1,
      explanation: "Telomerler, kromozomların uçlarını ve DNA dizilerini örten yapılardır; her hücre bölünmesinde kısalır."
    },
    {
      question: "Hangisi cinsiyet, ilişkiler ve benlik gelişimi konusunda Miller'ın görüşüdür?",
      options: ["Kadınlar bağımsızlığı tercih eder", "Kadınlar ilişkilerinde çok boyutlu (duygusal, bilişsel, sosyal) gelişimi destekleyen etkileşimlerde bulunur", "Kadınlar başarıdan kaçınır", "Kadın gelişimi tamamen biyolojiktir"],
      correctIndex: 1,
      explanation: "Miller'a göre kadınlar başkalarıyla ilişkilerinde bireyin birçok boyutta (duygusal, bilişsel, sosyal) gelişimini destekleyecek biçimde etkileşimlerde bulunmaktadır."
    },
    {
      question: "Aşağıdakilerden hangisi 'çoklu damar tıkanmasına bağlı demans'ın belirtilerinden DEĞİLDİR?",
      options: ["Zihin karışıklığı", "Kelimeleri iyi telaffuz edememe", "Bir tarafın uyuşması", "Sürekli artan obezite"],
      correctIndex: 3,
      explanation: "Çoklu damar tıkanmasına bağlı demans belirtileri: zihin karışıklığı, kelimeleri iyi telaffuz edememe, yazma bozuklukları, yüzün/bacağın/kolun bir tarafının uyuşması."
    }
  ]
});

// ============== SINAV 5 ==============
EXAMS.push({
  id: 5,
  title: "Sınav 5",
  description: "Bilişsel kuramlar, evlilik, yas süreçleri ve sosyal ilişkiler",
  fillInBlanks: [
    {
      question: "Yetişkinliğe geçişte 17-27 yaş grubunda 10 yıllık bir aralık ile elde edilen, _______ bağımsızlık konusunda inişlerin ve çıkışların yaşandığı belirtilmiştir.",
      answer: "ekonomik",
      acceptableAnswers: ["ekonomik"],
      explanation: "Yetişkinliğe geçişte 17-27 yaş aralığında ekonomik bağımsızlık konusunda inişler ve çıkışlar yaşanmaktadır."
    },
    {
      question: "Romantik aşk, aynı zamanda _______ aşk olarak da adlandırılır.",
      answer: "tutkulu",
      acceptableAnswers: ["tutkulu"],
      explanation: "Romantik aşk = tutkulu aşk. Genellikle ilişkilerin ilk dönemlerinde baskındır."
    },
    {
      question: "Orta yaşa ilişkin pek çok kültürde, kavramın net olmadığı veya bazı durumlarda eksik olduğu özellikle _______ kültürlerde geçerlidir.",
      answer: "sanayileşmemiş",
      acceptableAnswers: ["sanayileşmemiş", "sanayilesmemis"],
      explanation: "Birçok kültürde, özellikle sanayileşmemiş kültürlerde orta yaş kavramı net değildir veya eksiktir."
    },
    {
      question: "İleri yetişkinlikteki bilişsel düşüş ile başa çıkmak için bazı uzmanlar kullanılan _______ ve kristalize pragmatikler terimlerini önermiştir.",
      answer: "akıcı mekanikler",
      acceptableAnswers: ["akıcı mekanikler", "akici mekanikler", "akıcı"],
      explanation: "Lovden ve Lindenberg (2007) - bilişsel yaşlanma örüntülerini tarif ederken akıcı mekanikler ve kristalize pragmatikler terimlerini kullanır."
    },
    {
      question: "Vaillant'ın 1920'lerde doğan Harvard mezunlarını içeren çalışmasına _______ Study (Grant Çalışması) denir.",
      answer: "Grant",
      acceptableAnswers: ["Grant", "grant"],
      explanation: "Vaillant'ın 1920'lerde doğan Harvard mezunlarını kapsayan çalışması 'Grant Study' olarak bilinir."
    },
    {
      question: "Yaşlı yetişkinlerin çoğunluğunun ölüm nedeni kalp/damar hastalıkları ve _______ dir.",
      answer: "kanser",
      acceptableAnswers: ["kanser"],
      explanation: "65-74 yaşları arasındaki yetişkinlerin yaklaşık %60'ı kanser ya da kalp damar hastalıklarından ölmektedir."
    },
    {
      question: "Kübler-Ross'a göre kişinin ölümünün bir şekilde ertelenebileceği ya da geciktirilebileceği umudunu geliştirdiği aşamaya _______ denir.",
      answer: "uzlaşma",
      acceptableAnswers: ["uzlaşma", "uzlasma"],
      explanation: "Uzlaşma evresinde kişi ölümünün ertelenebileceği umudunu geliştirir."
    },
    {
      question: "Erikson'a göre orta yetişkinlik dönemindeki üretkenliğin karşıtı _______ (veya verimsizlik) olarak adlandırılır.",
      answer: "durağanlık",
      acceptableAnswers: ["durağanlık", "duraganlik", "verimsizlik"],
      explanation: "Erikson'un üretkenliğe karşı verimsizlik (stagnation) dönemi: yetişkinler ya gelecek nesillere miras bırakır ya da durağanlık/kendini soğurma yaşar."
    },
    {
      question: "İleri yetişkinlikte arkadaşlık üzerine çalışmalar yapan ve insanların yaşlandıkça yeni arkadaşlar yerine eski arkadaşları tercih ettiğini savunan araştırmacı Laura _______ tir.",
      answer: "Carstensen",
      acceptableAnswers: ["Carstensen", "carstensen"],
      explanation: "Carstensen (1998), yaşlıların yeni arkadaş yerine eskileri tercih ettiğini ortaya koymuştur."
    },
    {
      question: "Yas üzerine yapılan bir çalışmada ölen kişiyle hissedilen duygusal uyuşukluk, inanmama, ayrılık kaygısı, çaresizlik, üzüntü ve _______ yas boyutları olarak tanımlanmıştır.",
      answer: "yalnızlık",
      acceptableAnswers: ["yalnızlık", "yalnizlik"],
      explanation: "Yas boyutları: duygusal uyuşukluk, inanmama, ayrılık kaygısı, çaresizlik, üzüntü ve yalnızlık."
    }
  ],
  multipleChoice: [
    {
      question: "Aşağıdakilerden hangisi yetişkinliğin belirleyicilerinden biri DEĞİLDİR?",
      options: ["Okul sonrası sürekli, tam zamanlı bir işe başlama", "Ekonomik bağımsızlık", "Sorumluluk alabilme", "Evlilik"],
      correctIndex: 3,
      explanation: "Yetişkinliğin belirleyicileri: okul sonrası iş, ekonomik bağımsızlık, sorumluluk alma. Evlilik bir belirleyici olarak sayılmaz."
    },
    {
      question: "Levinson'un Bir Erkeğin Yaşam Dönemleri çalışmasında, orta yetişkinliğe geçişin kaç yıl sürdüğü belirtilir?",
      options: ["1 yıl", "3 yıl", "Yaklaşık 5 yıl", "10 yıl"],
      correctIndex: 2,
      explanation: "Levinson'a göre orta yaş yetişkinliğine geçiş yaklaşık 5 yıl sürer (40-45 yaş)."
    },
    {
      question: "Aşağıdakilerden hangisi Costa ve McCrae'nin Baltimore Çalışması'nın temel sonucudur?",
      options: ["Kişilikte büyük değişiklikler vardır", "Kişilik 30'lu yaşlarda tam olarak değişir", "Beş büyük kişilik yapısında büyük oranda istikrar (stabilite) vardır", "Kadınlar daha sık değişir"],
      correctIndex: 2,
      explanation: "Costa ve McCrae, beş büyük kişilik yapısında büyük oranda istikrarın olduğu sonucuna varmışlardır."
    },
    {
      question: "Hangi araştırmacılar genç yetişkinlerin niceliksel olarak daha ileri düşünme süreçlerine sahip olduklarını ancak niteliksel olarak ergenlerle benzer düşünce yapılarına sahip olduklarını savunur?",
      options: ["Sternberg", "Erikson", "Piaget", "Schaie"],
      correctIndex: 2,
      explanation: "Piaget, genç yetişkinlerin niceliksel olarak daha ileri olduğunu ancak niteliksel olarak benzer düşünce yapılarına sahip olduğunu savunur."
    },
    {
      question: "Yaşlı yetişkinlerin yaklaşık üçte ikisi ile kimlerle yaşarlar?",
      options: ["Yalnız", "Aile üyeleriyle", "Bakımevinde", "Arkadaşlarıyla"],
      correctIndex: 1,
      explanation: "Yaşlı yetişkinlerin yaklaşık üçte ikisi aile üyeleriyle (eş, çocuk, kardeş) ve yaklaşık üçte biri yalnız yaşamaktadır."
    },
    {
      question: "Çocuk ölümü, anne babalar için özellikle yıkıcı ve başa çıkması son derece zor olabilen ölüm türü hangisinde sınıflandırılır?",
      options: ["Normal ölüm", "Travmatik ölüm", "Hospis bakımı", "Beyin ölümü"],
      correctIndex: 1,
      explanation: "Ani, zamansız, şiddet içeren ya da travmatik ölümler geride kalan kişiler için yoğun ve uzun süreli etki bırakır. Çocuk ölümü anne babalar için özellikle yıkıcıdır."
    },
    {
      question: "Aşağıdakilerden hangisi ileri yetişkinlikte sıklıkla görülen ve özellikle kadınlarda yatkınlık olan bir rahatsızlıktır?",
      options: ["Skolyoz", "Osteoporoz", "Astım", "İritis"],
      correctIndex: 1,
      explanation: "Osteoporoz, yoğun bir kemik dokusu kaybı ile gelişen kronik bir rahatsızlık olup özellikle kadınlarda yatkınlık vardır."
    },
    {
      question: "Genç yetişkinlerin yaratıcılığı üzerine yapılan araştırmalarda en yaratıcı katkıların yüzde 80'i hangi yaşlarda tamamlanır?",
      options: ["30'lu yaşlar", "40'lı yaşlar", "50'li yaşlar", "60'lı yaşlar"],
      correctIndex: 2,
      explanation: "Lehman (1960) - en önemli yaratıcı katkıların %80'i 50'li yaşlarda tamamlanır."
    },
    {
      question: "Aşağıdakilerden hangisi yaşlı yetişkinlerin emeklilikle ilgili çalışmalarda öne çıkan bulgusudur?",
      options: ["Emeklilik bir olaydır", "Emeklilik bir süreçtir", "Emeklilik hep negatif yaşanır", "Emeklilik sadece ekonomik bir olgudur"],
      correctIndex: 1,
      explanation: "Moen (2007), emekliliğin bir olay değil bir süreç olduğunu öne sürmüştür."
    },
    {
      question: "Aşağıdakilerden hangisi 'ödünleme yoluyla seçici optimizasyon' kuramında 'optimizasyon' boyutunu en iyi tanımlar?",
      options: ["Eksilen kapasite ve fonksiyon kaybı", "Sürekli alıştırma ve yeni teknolojileri kullanarak performansı sürdürmek", "Performans potansiyelinin azaltılması", "Görev seçimi yapma"],
      correctIndex: 1,
      explanation: "Optimizasyon, sürekli alıştırma ve yeni teknolojileri kullanarak performansın sürdürülebileceğini önermektedir."
    },
    {
      question: "Genç yetişkinlik dönemindeki ölüm oranı ergenlik dönemine göre ne kadar yüksektir ve hangi cinsiyetten kaynaklanmaktadır?",
      options: ["Yarısı, kadınlardan", "Eşit, erkeklerden", "İki katı, erkeklerden", "Üç katı, kadınlardan"],
      correctIndex: 2,
      explanation: "Genç yetişkinlik dönemindeki ölüm oranı ergenlik döneminin iki katıdır ve bu artış erkek ölümlerinden kaynaklanmaktadır."
    },
    {
      question: "Hangi araştırmacı 75-85 yaş arası bireyleri 'mutlu-iyi', 'üzgün-hasta' ve 'ölü' kategorilerine ayırmıştır?",
      options: ["Daniel Levinson", "Erik Erikson", "George Vaillant", "Costa ve McCrae"],
      correctIndex: 2,
      explanation: "Vaillant 75-85 yaş arası bireyleri bu kategorilere ayırmıştır."
    },
    {
      question: "Aşağıdakilerden hangisi 'episodik bellek' türünü en iyi tanımlar?",
      options: ["Dünya hakkındaki genel bilgiler", "Yaşam olaylarının nerede ve ne zaman olduğuyla ilgili bilgi", "Motor beceriler", "Otomatik tepkiler"],
      correctIndex: 1,
      explanation: "Episodik bellek: yaşam olaylarının nerede ve ne zaman olduğuyla ilgili bilginin korunmasıdır (küçük kardeşin doğumu, ilk doğum günü)."
    },
    {
      question: "Genç yetişkinlerin Erikson'un 'yakınlığa karşı yalıtılmışlık' döneminde, yakın ilişkiler geliştirememesi durumunda hangi duygu ortaya çıkar?",
      options: ["Yalıtılmışlık", "Şiddet", "Saplantı", "Saldırganlık"],
      correctIndex: 0,
      explanation: "Erikson'a göre genç yetişkinlikte yakın ilişkiler geliştirilemezse yalıtılmışlık duygusu yaşanır."
    },
    {
      question: "Hangi araştırmacı bilgi işleme hızını ölçmek için bireylerin ışığı görür görmez butona bastıkları reaksiyon zamanını kullanmıştır?",
      options: ["John Horn", "K. Warner Schaie", "Erik Erikson", "Daniel Levinson"],
      correctIndex: 1,
      explanation: "Schaie'nin Seattle Boylamsal Çalışması'nda bilgi hızını ölçmek için ışığı görür görmez butona basma reaksiyon zamanı kullanılmıştır."
    },
    {
      question: "Genç yetişkinlikte cinsel etkinliğe ilişkin olarak Türkiye'de 2013 yılı verilerine göre erkeklerin ortalama ilk evlilik yaşı kaçtır?",
      options: ["24.1", "25.3", "27.3", "28.6"],
      correctIndex: 2,
      explanation: "Türkiye'de 2013 yılında erkeklerin ortalama ilk evlilik yaşı 27.3 olarak tespit edilmiştir."
    },
    {
      question: "Aşağıdakilerden hangisi yas süresinde bireyleri depresyona ve intihara yatkınlaştırabilen yas türüdür?",
      options: ["Kısa yas", "Uzamış yas", "Toplumsal yas", "Geleneksel yas"],
      correctIndex: 1,
      explanation: "Uzamış yas, kalıcı çaresizlik içerir ve uzun zaman geçmesine rağmen çözülmeyen yas türüdür; bireyleri depresyona ve intihara yatkınlaştırabilir."
    },
    {
      question: "Aşağıdakilerden hangisi yaşlanmanın mitokondrial kuramını destekleyen rahatsızlıklardan biri DEĞİLDİR?",
      options: ["Kalp damar hastalığı", "Parkinson", "Alzheimer", "Diş eti rahatsızlığı"],
      correctIndex: 3,
      explanation: "Mitokondrial bozukluk; kalp damar hastalığı, bunama, Parkinson, Alzheimer gibi nörodejeneratif hastalıklar ve karaciğer fonksiyon bozukluklarına neden olur."
    },
    {
      question: "Aşağıdakilerden hangisi orta yetişkinlikte yetişkin kişilik gelişiminde gözlenen istikrar ve değişim ile ilgili dört çalışmadan biri DEĞİLDİR?",
      options: ["Baltimore Çalışması", "Berkeley Boylamsal Çalışması", "Mills Üniversitesi Çalışması", "Cambridge Çalışması"],
      correctIndex: 3,
      explanation: "Dört önemli çalışma: Baltimore (Costa ve McCrae), Berkeley Boylamsal, Mills Üniversitesi (Helson), Vaillant'ın çalışmaları. Cambridge bu listede yer almaz."
    },
    {
      question: "Aşağıdakilerden hangisi yaşlı yetişkinlerde cinsel performans ile ilgili doğru bir bilgidir?",
      options: ["Yaşlanmayla birlikte cinsellik tamamen kaybolur", "Sadece kadınlarda değişiklikler görülür", "Yaşlanma kadınlara göre daha çok erkeklerde performans değişikliklerini tetikleyebilir", "Cinsellik 70 yaşından sonra mümkün değildir"],
      correctIndex: 2,
      explanation: "Yaşlanma, kadınlara göre daha çok erkeklerde cinsel performansta değişiklikleri tetikleyebilmektedir."
    },
    {
      question: "Genç yetişkinlerin %52'sinin işyerindeki stres nedeniyle hangi davranışları sergiledikleri tespit edilmiştir?",
      options: ["Tatil yapma", "Yeni iş arama, terfi teklifini reddetme veya işi bırakma", "Doktora gitme", "Aile kurma"],
      correctIndex: 1,
      explanation: "Amerikan Psikologlar Birliği (2007) - %52'si işyerindeki stres nedeniyle yeni iş arama, terfi teklifini reddetme veya işi bırakma gibi davranışlar sergilemektedir."
    },
    {
      question: "Aşağıdakilerden hangisi orta yetişkinlikte fiziksel görünümde gözlenen değişikliklerden DEĞİLDİR?",
      options: ["Kırışıklar", "Yaş lekeleri", "Saçların incelmesi", "Hızlı kilo verme"],
      correctIndex: 3,
      explanation: "Orta yetişkinlikte tipik olarak yaklaşık 5 cm boy kısalır ve çoğu birey kilo alır - hızlı kilo verme değil."
    },
    {
      question: "Aşağıdakilerden hangisi mahrum kalınmış yas örneklerinden biridir?",
      options: ["Yakın bir akrabanın ölümü", "Bir arkadaşın evden taşınması", "AIDS nedeniyle ölüm gibi etiketlenmiş ölüm biçimi", "Aile fertlerinin tatile gitmesi"],
      correctIndex: 2,
      explanation: "Mahrum kalınmış yas örnekleri: eski eşle ilişki, kürtaj, AIDS nedeniyle ölüm gibi etiketlenmiş ölüm biçimleridir."
    },
    {
      question: "Aşağıdakilerden hangisi yetişkin gelişimini Eichorn ve diğerleri (1981) tarafından yazılan kitabıyla ünlü kılan boylamsal çalışmadır?",
      options: ["Berkeley Boylamsal Çalışması", "Seattle Boylamsal Çalışması", "Grant Study", "Mills Çalışması"],
      correctIndex: 0,
      explanation: "Berkeley Boylamsal Çalışması, 'Orta Yaş Döneminde Şu An ve Geçmiş' (Eichorn vd., 1981) kitabıyla bilinir."
    },
    {
      question: "Vaillant 50 yaşındaki bireyler için bir yaşam göstergesi olarak hangi alışkanlığı önemli görmüştür?",
      options: ["Egzersiz", "Beslenme", "Alkol kullanımı ve sigara içme", "Uyku düzeni"],
      correctIndex: 2,
      explanation: "Vaillant'a göre 50 yaşta alkol kullanma ve sigara içme, 75-80'de ölüp ölmeyeceğin en iyi göstergeleridir."
    }
  ]
});

// ============== SINAV 6 ==============
EXAMS.push({
  id: 6,
  title: "Sınav 6",
  description: "Erikson dönemleri, demans türleri, aşk ve yaratıcılık",
  fillInBlanks: [
    {
      question: "Genç yetişkinlikte birçok birey yaratıcılığını sergiler. Yaratıcılığa ilişkin çalışmalarda en yaratıcı ürünlerin otuzlu yaşlarda üretildiği ve en önemli yaratıcı katkıların %_______ ünün 50'li yaşlarda tamamlandığı tespit edilmiştir.",
      answer: "80",
      acceptableAnswers: ["80", "%80"],
      explanation: "Lehman (1960) - en önemli yaratıcı katkıların %80'i 50'li yaşlarda tamamlanır."
    },
    {
      question: "Bartholomew'un Dörtlü Bağlanma Modelinde, kendilik ve _______ modelleri birleştirilerek 4 kategorili yetişkin bağlanma modeli ortaya konmuştur.",
      answer: "öteki",
      acceptableAnswers: ["öteki", "oteki", "başkaları"],
      explanation: "Bartholomew kendilik ve öteki modellerini birleştirerek 4 kategorili yetişkin bağlanma modelini oluşturmuştur."
    },
    {
      question: "Orta yetişkinlikte ölüm tek bir sebepten kaynaklanırken, yaşlılıkta ölüm birçok _______ durumun ortak etkisinden kaynaklanabilir.",
      answer: "kronik",
      acceptableAnswers: ["kronik"],
      explanation: "Orta yaşta ölüm tek sebepliyken, yaşlılıkta birçok kronik durumun ortak etkisinden kaynaklanabilir."
    },
    {
      question: "Demansın bir türü olan _______ hastalığı bellekte, muhakeme yeteneğinde, dilde ve sonunda fiziksel işlevlerde derece derece bir bozulmayla kendini gösterir.",
      answer: "Alzheimer",
      acceptableAnswers: ["Alzheimer", "alzheimer"],
      explanation: "Alzheimer hastalığı, geri dönüşü olmayan ilerleyici bir beyin rahatsızlığıdır."
    },
    {
      question: "Pasif ötenazi, tedaviye, yaşam destek üniteleri gibi son vererek kişinin ölmesine izin _______ dir.",
      answer: "verme",
      acceptableAnswers: ["verme", "vermesidir", "vermektir"],
      explanation: "Pasif ötenazi: tedaviyi, yaşam destek üniteleri gibi son vererek kişinin ölmesine izin verme."
    },
    {
      question: "Bilgi işleme hızı, _______ Boylamsal Çalışmasında görüldüğü gibi ilk yetişkinlikte düşmeye başlar ve orta yetişkinlikte düşmeye devam eder.",
      answer: "Seattle",
      acceptableAnswers: ["Seattle", "seattle"],
      explanation: "Schaie'nin (1994, 1996) Seattle Boylamsal Çalışmasında algısal hızın ilk yetişkinlikte düşmeye başladığı görülmüştür."
    },
    {
      question: "Vaillant'ın 1910'larda doğan 90 kadının yer aldığı çalışmasında bu kadınlar entelektüel _______ olarak nitelendirilmiştir.",
      answer: "kabiliyetli",
      acceptableAnswers: ["kabiliyetli"],
      explanation: "Vaillant'ın üç boylamsal çalışmasından biri 1910'larda doğmuş entelektüel kabiliyeti olan 90 kadını içerir."
    },
    {
      question: "Yetişkin olarak sadece işimizde nasıl iyi çalışacağımızı değil, nasıl rahatlayacağımızı ve boş zamanımızda nasıl _______ ihtiyacımız vardır.",
      answer: "eğleneceğimizi",
      acceptableAnswers: ["eğleneceğimizi", "eğlenmek"],
      explanation: "Gibson (2009) - yetişkinler boş zamanlarında nasıl eğleneceklerini de öğrenmek zorundadır."
    },
    {
      question: "Carstensen yaşlı yetişkinlerin yaşamlarına stres yüklemek anlamına geleceği için tanımadıkları kişilerle sosyal ilişki kurmaktan kasıtlı olarak _______ savunmuştur.",
      answer: "kaçındıklarını",
      acceptableAnswers: ["kaçındıklarını", "kacindiklarini"],
      explanation: "Carstensen, yaşlı yetişkinlerin yaşamlarına stres yüklemek anlamına geleceği için tanımadıkları kişilerle sosyal ilişki kurmaktan kasıtlı olarak kaçındıklarını savunur."
    },
    {
      question: "Yaslı kişilere fiziksel rahatlık, sevilen kişilerin desteği, kabullenme ve uygun tıbbi bakım sağlanması _______ bir ölüm deneyimi olarak kabul edilir.",
      answer: "iyi",
      acceptableAnswers: ["iyi"],
      explanation: "İyi bir ölüm deneyimi: fiziksel rahatlık, sevilen kişilerin desteği, kabullenme ve uygun tıbbi bakımı içerir (Bradley & Brasel, 2009)."
    }
  ],
  multipleChoice: [
    {
      question: "Hazan ve Shaver (1987), yetişkin bağlanmasını üç kategoride ele almıştır. Aşağıdakilerden hangisi bu kategorilerden biri DEĞİLDİR?",
      options: ["Güvenli", "Kaygılı/Kararsız", "Çekingen", "Saplantılı"],
      correctIndex: 3,
      explanation: "Hazan ve Shaver 3 kategori önermiştir: güvenli, kaygılı/kararsız, çekingen."
    },
    {
      question: "Aşağıdakilerden hangisi cinsel yolla bulaşan hastalıklardan virüs kaynaklı olanlardan biridir?",
      options: ["Bel soğukluğu", "Frengi", "Parariketsiyoz", "HIV"],
      correctIndex: 3,
      explanation: "HIV virüsü AIDS'in sebebi olarak virüs kaynaklı bir CYBH'dir."
    },
    {
      question: "Aşağıdakilerden hangisi William Perry'nin genç yetişkinlikte sergilenen düşünme yapısını tanımlar?",
      options: ["Kesin ve ikili düşünme", "Yansıtıcı ve göreceli düşünme", "Soyut işlemsel düşünme", "Otomatik düşünme"],
      correctIndex: 1,
      explanation: "Perry'ye göre ergenin kesin ve ikili düşünme yapısı, yerini yetişkinin yansıtıcı ve göreceli düşünme yapısına bırakmaktadır."
    },
    {
      question: "Orta yaş krizinin yaygınlığı hakkında Vaillant'ın görüşü nedir?",
      options: ["Tüm yetişkinler orta yaş krizi yaşar", "Yetişkinlerin sadece küçük bir azınlığı orta yaş krizini yaşar", "Hiç kimse orta yaş krizi yaşamaz", "Sadece kadınlar orta yaş krizi yaşar"],
      correctIndex: 1,
      explanation: "Vaillant (1977), yetişkinlerin sadece küçük bir azınlığının orta yaş krizini yaşadığını savunur."
    },
    {
      question: "Aşağıdakilerden hangisi 'yaşlanan beyinde' meydana gelen değişikliklerden DEĞİLDİR?",
      options: ["Dendritlerde azalma", "Aksonları kaplayan miyelin kılıfın zarar görmesi", "Prefrontal korteksin büzüşmesi", "Hipokampüsün büyümesi"],
      correctIndex: 3,
      explanation: "Aksine aerobik egzersizle hipokampüs hacminin büyüyebileceği gösterilmiştir; ancak yaşlanan beyinde genel olarak hipokampüs büyümez."
    },
    {
      question: "Aşağıdakilerden hangisi Erikson'un orta yetişkinlik için 'üretkenlik' kavramının doğru tanımıdır?",
      options: ["Çok fazla çocuk yapma", "Yetişkinlerin gelecek nesillere mirasları bırakma istekleri", "Kariyerde yükselme", "Sosyal statü kazanma"],
      correctIndex: 1,
      explanation: "Erikson'a göre üretkenlik, yetişkinlerin gelecek nesillere mirasları bırakma isteklerini kapsar."
    },
    {
      question: "Yaşlı yetişkinlikte arkadaşlık konusunda Carstensen ne savunmaktadır?",
      options: ["Yaşlandıkça yeni arkadaşlar tercih edilir", "Yaşlandıkça eski arkadaşlar tercih edilir", "Arkadaşlık her yaşta aynıdır", "Yaşlılar yalnızlığı tercih eder"],
      correctIndex: 1,
      explanation: "Carstensen, insanların yaşlandıkça yeni arkadaşlar yerine eski arkadaşları tercih ettiklerini savunur."
    },
    {
      question: "Aşağıdakilerden hangisi yaşlı yetişkinlerin %95'inin yaşadığı ortamdır?",
      options: ["Huzurevi", "Hastane", "Toplum içinde", "Bakım merkezi"],
      correctIndex: 2,
      explanation: "Yaşlı yetişkinlerin yaklaşık %95'i toplum içinde yaşamaktadır."
    },
    {
      question: "Bartholomew'un dörtlü bağlanma modelinde 'olumsuz benlik + olumlu başkaları' modeline sahip bireyler hangi stildedir?",
      options: ["Güvenli", "Saplantılı", "Kayıtsız", "Korkulu"],
      correctIndex: 1,
      explanation: "Saplantılı bağlanma: olumsuz benlik + olumlu başkaları = ilişkilere takıntılı."
    },
    {
      question: "Genç yetişkinlikte boşanmaya yol açan faktörlerden biri olarak aşağıdakilerden hangisi gösterilmez?",
      options: ["Düşük eğitim düzeyi", "Düşük gelir", "Yüksek gelir", "Boşanmış ebeveyne sahip olmak"],
      correctIndex: 2,
      explanation: "Boşanmaya yol açan faktörler: genç yaşta evlilik, düşük eğitim düzeyi, düşük gelir, dini inanca sahip olmamak, boşanmış ebeveyn, evlilik öncesi bebek sahibi olmak."
    },
    {
      question: "Hangi aşk türü 'yoldaş, arkadaş aşkı' olarak da ifade edilir?",
      options: ["Romantik aşk", "Samimi aşk", "Tutkulu aşk", "Görsel aşk"],
      correctIndex: 1,
      explanation: "Samimi aşk yoldaş, arkadaş aşkı olarak da ifade edilir; bireyler birbirlerinin yanında olmak ister."
    },
    {
      question: "Orta yetişkinlikte bilişsel yaşlanmaya ilişkin bilgi işleme hızı düşüşü nasıldır?",
      options: ["Aniden ve büyük", "Yavaş ve genellikle bir saniyenin altında", "Hiç düşüş yoktur", "Sürekli artış vardır"],
      correctIndex: 1,
      explanation: "Bilgi işleme hızında düşüş aniden değildir; çoğu araştırmada bir saniyenin altındadır."
    },
    {
      question: "Aşağıdakilerden hangisi yaşam beklentisi konusunda doğru bir bilgidir?",
      options: ["Erkekler kadınlardan uzun yaşar", "Kadınlar erkeklerden uzun yaşar", "Cinsiyetin yaşam beklentisi üzerinde etkisi yoktur", "Sadece beslenme önemlidir"],
      correctIndex: 1,
      explanation: "Yaşam beklentisi kadınlarda erkeklere göre daha yüksektir."
    },
    {
      question: "Aşağıdakilerden hangisi 'episodik bellek' örneğidir?",
      options: ["Matematik bilgisi", "Küçük kardeşin doğduğunda neye benziyordu", "Geometri kuralları", "Kelime tanıma"],
      correctIndex: 1,
      explanation: "Episodik bellek - yaşam olaylarının nerede ve ne zaman olduğuyla ilgilidir (kardeşin doğumu, ilk doğum günü)."
    },
    {
      question: "Aşağıdakilerden hangisi yas sürecinin 'sağlıklı yas' boyutlarından biri DEĞİLDİR?",
      options: ["Duygusal uyuşukluk", "İnanmama", "Ayrılık kaygısı", "Mizah duygusunun kalıcı kaybı"],
      correctIndex: 3,
      explanation: "Sağlıklı yas boyutları: duygusal uyuşukluk, inanmama, ayrılık kaygısı, çaresizlik, üzüntü ve yalnızlık."
    },
    {
      question: "Aşağıdakilerden hangisi yaşlı yetişkinlerin başarılı yaşlanmasında önemli bir faktör DEĞİLDİR?",
      options: ["Uygun beslenme", "Aktif yaşam tarzı", "Sosyal izolasyon", "İyi sosyal ilişkiler"],
      correctIndex: 2,
      explanation: "Başarılı yaşlanmanın faktörleri: uygun beslenme, aktif yaşam tarzı, zihinsel uyarı ve esneklik, iyi sosyal ilişkiler. Sosyal izolasyon başarılı yaşlanmanın bir parçası değildir."
    },
    {
      question: "Aşağıdakilerden hangisi yaşlanmanın bağışıklık sistemi üzerindeki etkisini doğru tanımlar?",
      options: ["Bağışıklık tamamen kaybolur", "Yaşlanmanın bağışıklık üzerindeki etkilerini hızlandırabilir", "Bağışıklık artar", "Hiç etkisi yoktur"],
      correctIndex: 1,
      explanation: "Hormonal stres kuramında belirtildiği gibi, yaşlı yetişkinlerde stres süresinin uzaması ve azalan yenileyici süreçler yaşlanmanın bağışıklık üzerindeki etkilerini hızlandırabilmektedir."
    },
    {
      question: "Hangisi orta yetişkinlikte fiziksel değişimleri yansıtır?",
      options: ["Tüm değişimler aniden gerçekleşir", "Yaşlılıktaki ani bozulmanın aksine, orta yaşta fiziksel değişimler genellikle daha yavaştır", "Hiç fiziksel değişim olmaz", "Sadece kadınlarda görülür"],
      correctIndex: 1,
      explanation: "Ergenlikteki ani fiziksel değişiklikler ve yaşlılıktaki ani bozulmanın aksine, orta yaşta fiziksel değişimler genellikle daha yavaştır."
    },
    {
      question: "Yaşlanan bireylerin ölümle ilgili yaklaşımı aşağıdakilerden hangisidir?",
      options: ["En çok orta yaş yetişkinleri ölümden korkar", "Sadece yaşlılar ölümden korkar", "Yaşlılar ölümden hiç korkmaz", "Çocuklar ölümden en çok korkar"],
      correctIndex: 0,
      explanation: "Araştırmacılar, orta yaş yetişkinlerin aslında gençlere ve yaşlılara kıyasla ölümden daha fazla korktuklarını ortaya koymuştur (Kalish & Reynolds, 1976)."
    },
    {
      question: "Aşağıdakilerden hangisi orta yetişkinlik dönemindeki ölüm oranı ile ilgili doğru bilgidir?",
      options: ["Enfeksiyon hastalıkları temel ölüm nedenidir", "Kronik bozukluklar, orta yetişkinlikteki insanlar için en temel ölüm nedenidir", "Çocuk hastalıkları en yaygın ölüm nedenidir", "Kazalar en yaygın ölüm nedenidir"],
      correctIndex: 1,
      explanation: "Kronik bozukluklar, orta yetişkinlikteki insanlar için en temel ölüm nedenidir (Kelley-Moore, 2009)."
    },
    {
      question: "Yaşlı yetişkin ebeveynler ve yetişkin çocukları konusunda hangisi doğrudur?",
      options: ["Yaşlı yetişkinlerin yaklaşık %20'sinin çocuğu hayattadır", "Yaşlı yetişkinlerin yaklaşık %80'inin, çoğu orta yetişkin olmak üzere çocukları hayattadır", "Yetişkin erkek çocuklar ebeveyne daha fazla yardım eder", "Ebeveyn-çocuk ilişkisi sona erer"],
      correctIndex: 1,
      explanation: "Yaşlı yetişkinlerin yaklaşık %80'inin, çoğu orta yetişkin olmak üzere çocukları hayattadır."
    },
    {
      question: "İletişim biçimleri konusunda Tannen'in 'uyuma dayalı konuşma' (rapport talk) nedir?",
      options: ["Sadece bilgi vermeye yönelik", "Bağların oluşturulması ve müzakere ilişkileri esastır", "Sadece resmi durumlarda kullanılır", "Erkekler tarafından kullanılır"],
      correctIndex: 1,
      explanation: "Uyuma dayalı konuşmada (rapport talk) bağların oluşturulması ve müzakere ilişkileri esastır; resmi konuşmada (report talk) bilgi verme esastır."
    },
    {
      question: "Aşağıdakilerden hangisi Charles ve Carstensen (2010) ile Stirling (2011) gibi araştırmacıların 'başarılı yaşlanma' konusundaki görüşüdür?",
      options: ["Bu konunun olumsuz boyutları uzun süre göz ardı edilmiştir", "Bu konunun olumlu boyutları uzun süre göz ardı edilmiştir", "Konunun değerlendirilmesi yapılmamıştır", "Sadece kadınlar başarılı yaşlanabilir"],
      correctIndex: 1,
      explanation: "Charles & Carstensen 2010, Depp & Jeste 2010, Stirling 2011: ileri yetişkinliğin olumlu boyutları uzun süre göz ardı edilmiştir."
    },
    {
      question: "Kürtaj gibi gizli bir kaybı ya da AIDS gibi etiketlenmiş bir ölümü ifade eden yas türü hangisidir?",
      options: ["Beklenen yas", "Uzamış yas", "Mahrum kalınmış yas", "Sağlıklı yas"],
      correctIndex: 2,
      explanation: "Mahrum kalınmış yas: sosyal olarak belirsiz bir kayıp - eski eşle ilişki, kürtaj, AIDS gibi etiketlenmiş kayıplardır."
    },
    {
      question: "Aşağıdakilerden hangisi 'kullan ya da kaybet' kavramına en uygun örnek değildir?",
      options: ["Kitap okumak", "Bulmaca çözmek", "Hareketsiz oturmak", "Konsere gitmek"],
      correctIndex: 2,
      explanation: "Kullan ya da kaybet kavramı; kitap okuma, bulmaca çözme, derse/konsere gitme gibi zihinsel faaliyetleri içerir. Hareketsiz oturmak zıt yöndedir."
    }
  ]
});

// ============== SINAV 7 ==============
EXAMS.push({
  id: 7,
  title: "Sınav 7",
  description: "Sağlık, hastalıklar, sosyal destek ve emeklilik",
  fillInBlanks: [
    {
      question: "Genç yetişkinlik döneminde günde otuz dakika veya daha fazla _______ yapılması uzmanlar tarafından önerilmektedir.",
      answer: "egzersiz",
      acceptableAnswers: ["egzersiz"],
      explanation: "Uzmanlar genç yetişkinlerin günde otuz dakika veya daha fazla egzersiz yapmalarını önermektedir."
    },
    {
      question: "Genç yetişkinlikte bireyin kişiliğindeki hasarlara yol açabilen ve Erikson'a göre yakın ilişkiler geliştirilemediğinde ortaya çıkan duygu _______ duygusudur.",
      answer: "yalıtılmışlık",
      acceptableAnswers: ["yalıtılmışlık", "yalitilmislik"],
      explanation: "Erikson: yakınlığa karşı yalıtılmışlık - yakın ilişkiler geliştirilemediğinde yalıtılmışlık duygusu yaşanır."
    },
    {
      question: "Orta yetişkinlikte _______ %1 ile %2 oranında olmak üzere yıllık kas kütlesi kaybı görülür.",
      answer: "yıllık",
      acceptableAnswers: ["yıllık", "yillik"],
      explanation: "Sarcopenia kapsamında orta yaşta yıllık %1-2 oranında kas kütlesi kaybı görülür."
    },
    {
      question: "Yaşlı yetişkinlerde özellikle alkol kullanımı _______ veya yatıştırıcılarla birleştiğinde solunumu bozabilmekte ve öldürücü olabilmektedir.",
      answer: "sakinleştirici",
      acceptableAnswers: ["sakinleştirici", "sakinlestirici", "sakinleştiriciler"],
      explanation: "Alkol kullanımı sakinleştirici ya da yatıştırıcılarla birleştiğinde solunumu bozabilmekte ve öldürücü olabilmektedir."
    },
    {
      question: "Beyin ölümü kapsamında, hem yukarı kortikal işlevlerin hem de aşağı beyin _______ işlevlerinin durması gerektiği belirtilmiştir.",
      answer: "kökü",
      acceptableAnswers: ["kökü", "koku"],
      explanation: "Truog (2008) - yukarı kortikal işlevlerin hem de aşağı beyin kökü işlevlerinin durması şeklindedir."
    },
    {
      question: "Yaşamın anlamı konusunda Avusturyalı psikiyatrist Viktor Frankl üç önemli insan özelliğinin _______ ve sorumluluk olduğunu belirtmiştir.",
      answer: "özgürlük",
      acceptableAnswers: ["özgürlük", "ozgurluk"],
      explanation: "Frankl üç önemli insan özelliğinin dinsellik, özgürlük ve sorumluluk olduğunu belirtmiştir."
    },
    {
      question: "65 yaş üzeri çalışanların sayısı _______ tadır.",
      answer: "azalmakta",
      acceptableAnswers: ["azalmakta", "azalmaktadır"],
      explanation: "65 yaş üstü çalışanların sayısı azalmaktadır. Ancak yasalar çalışmalarına izin vermektedir."
    },
    {
      question: "Bunama, Alzheimer ve diğer hastalıklar arasında, zihinsel bozukluklar arasında yaşlı yetişkinlere en fazla zarar veren rahatsızlık _______ dır.",
      answer: "demanslar",
      acceptableAnswers: ["demanslar", "demans"],
      explanation: "Zihinsel bozukluklar arasında yaşlı yetişkinlere en fazla zarar veren rahatsızlık demanslardır."
    },
    {
      question: "Yaşlı yetişkinlerin sosyal _______ duygu kontrolünde yaşları ile uyum sağlayıcı bir biçimde yaşadıkları savunulmaktadır.",
      answer: "ilişki",
      acceptableAnswers: ["ilişki", "iliski"],
      explanation: "Sosyoduygusal Seçicilik Kuramı, yaşlı yetişkinlerin sosyal ilişki ağları konusunda daha seçici hale geldiklerini savunur."
    },
    {
      question: "Hopi kabilesi gibi bazı kültürlerde, ölen kişiyle ruhları arasındaki bağı kopararak cenaze _______ sona erer.",
      answer: "törenleri",
      acceptableAnswers: ["törenleri", "torenleri"],
      explanation: "Hopilerde cenaze törenleri, ölüler ile ruhları arasındaki bağın kopması ile sona erer."
    }
  ],
  multipleChoice: [
    {
      question: "Genç yetişkinlik döneminde aşağıdakilerden hangisi en yaygın görülen sağlık sorunudur?",
      options: ["Kalp damar hastalıkları", "Obezite", "Demans", "Osteoporoz"],
      correctIndex: 1,
      explanation: "Genç yetişkinlerde obezite oldukça yaygın bir sağlık sorunudur (Howel, 2010; Kruseman vd., 2010)."
    },
    {
      question: "Aşağıdakilerden hangisi alkolizmin tanımıdır?",
      options: ["Bir defaya mahsus alkol kullanımı", "Uzun süreli, tekrarlanan, kontrol dışı, takıntılı ve aşırı miktarda alkollü içecek tüketimini içeren bir bozukluk", "Sosyal alkol tüketimi", "Düşük miktarda alkol tüketimi"],
      correctIndex: 1,
      explanation: "Alkolizm: sağlığa ve sosyal ilişkilere ciddi biçimde zarar veren; uzun süreli, tekrarlanan, kontrol dışı, takıntılı ve aşırı miktarda alkollü içecek tüketimini içeren bir bozukluktur."
    },
    {
      question: "Aşağıdakilerden hangisi yaşlanmanın 'serbest radikal kuramı'na göre serbest radikallerin neden olduğu hastalıklardan biri DEĞİLDİR?",
      options: ["Kanser", "Artrit", "Diyabet", "Eklem iltihabı"],
      correctIndex: 2,
      explanation: "Serbest radikallerin neden olduğu hastalıklar: kanser, artrit (eklem iltihabı) gibi bir dizi bozukluk - diyabet doğrudan bu kuramda belirtilmemiştir."
    },
    {
      question: "Hangi araştırmacılar genç yetişkinlikte sergilenen değişimleri bir araya getirerek yeni bir bilişsel gelişim dönemi öne sürmüş ve buna 'formel işlemler sonrası düşünme' (postformal) adı vermiştir?",
      options: ["Erikson ve Levinson", "Kitcher, King ve Deluca", "Costa ve McCrae", "Piaget ve Schaie"],
      correctIndex: 1,
      explanation: "Kitcher, King ve Deluca (2006) postformal düşünme kavramını öne sürmüşlerdir."
    },
    {
      question: "Orta yetişkinlikte 'sosyal saat' kavramı ne ifade eder?",
      options: ["Saat tutkunu olmak", "Bireylerden evlenmek, çocuk yapmak veya bir kariyer kurmak gibi yaşam görevlerini yerlerine getirmeleri beklenen zaman dilimi", "Sosyal medya kullanımı", "Sosyal etkinliklerin programı"],
      correctIndex: 1,
      explanation: "Bernice Neugarten (1986) sosyal saati, yaşam görevlerinin yerine getirilmesi beklenen zaman dilimi olarak tanımlar."
    },
    {
      question: "Berkeley Boylamsal Çalışmasında 'en stabil özellikler' hangileri olarak belirlenmiştir?",
      options: ["Fiziksel görünüm", "Bireylerin entelektüel yönelimli, özgüven ve yeni deneyimlere açık olma dereceleri", "Sosyo-ekonomik durum", "Boy ve kilo"],
      correctIndex: 1,
      explanation: "Berkeley Boylamsal Çalışmasında en stabil özellikler entelektüel yönelimli olma, özgüven ve yeni deneyimlere açık olma dereceleridir."
    },
    {
      question: "Aşağıdakilerden hangisi 'çağdaş yaşam-olayları yaklaşımı'nın temel görüşüdür?",
      options: ["Sadece olayın kendisi önemlidir", "Olayın yanı sıra dolaylı değişkenler, bireyin uyumu, yaşam dönemi ve sosyo-tarihsel bağlam önemlidir", "Yaşam olaylarının etkisi yoktur", "Sadece olumlu olaylar gelişimi etkiler"],
      correctIndex: 1,
      explanation: "Çağdaş yaşam-olayları yaklaşımında olayın kendisinin yanı sıra dolaylı değişkenler, uyum, yaşam dönemi ve sosyo-tarihsel bağlam da etkilidir."
    },
    {
      question: "Hangisi yaşlı yetişkinler için doğru bir 'aile yaşam tarzı çeşitliliği' bilgisidir?",
      options: ["Yaşlı yetişkinler hiç boşanmaz", "Boşanma yaşlı yetişkinlerde genç yetişkinlere göre daha az görülür", "Boşanma yaşlı yetişkinlerde çok yaygındır", "Yaşlı yetişkinler yeniden evlenmez"],
      correctIndex: 1,
      explanation: "Boşanma yaşlı yetişkinlerde genç yetişkinlere göre daha az görülür."
    },
    {
      question: "Aşağıdakilerden hangisi yaşlı yetişkinler için 'aktif yaşlanma'nın faydalarından biri DEĞİLDİR?",
      options: ["Yaşamdan daha fazla doyum sağlama", "Daha iyi sağlık", "Sosyal izolasyon", "Daha iyi sosyal ilişkiler"],
      correctIndex: 2,
      explanation: "Aktif yaşlanma yaşamdan doyum, sağlık ve sosyal ilişkilerle ilişkilidir; sosyal izolasyon aktif yaşlanmanın bir parçası değildir."
    },
    {
      question: "Aşağıdakilerden hangisi yas süresinde başa çıkma için 'ikili-süreç modelinin' temel özelliğidir?",
      options: ["Kayıp ve iyileşme süreçleri ardarda gelir", "Kayıp ve iyileşme süreçleri eş zamanlı gider", "Sadece kayıp odaklı kaynaklar vardır", "Sadece iyileşme odaklı kaynaklar vardır"],
      correctIndex: 1,
      explanation: "İkili-süreç modelinde, kayıpla başa çıkma ve iyileşme çabası eş zamanlı gider."
    },
    {
      question: "Aşağıdakilerden hangisi Sternberg'in aşk üçgeninin bir boyutu DEĞİLDİR?",
      options: ["Tutku", "Samimiyet", "Bağlanma", "Sadakat"],
      correctIndex: 3,
      explanation: "Sternberg aşkta üç boyut öne sürer: tutku, samimiyet ve bağlanma."
    },
    {
      question: "Aşağıdakilerden hangisi orta yetişkinlikte stresle ilişkili olarak doğrudur?",
      options: ["Genç yetişkinler orta yaşlılardan daha sık günlük stres yaşar", "Orta yaşlılar günlük stres yaşamaz", "Orta yaşlılar ve gençler eşit stres yaşar", "Stres yaşa bağlı değildir"],
      correctIndex: 0,
      explanation: "Genç yetişkinler orta yaştaki yetişkinlerden daha sık oranda günlük stres kaynağı yaşarken, orta yaş yetişkinleri aşırı stres kaynaklarına maruz kalmıştır."
    },
    {
      question: "Genç yetişkinlik döneminde, ABD'de erkekler ve kadınlar için ortalama evlenme yaşı kaçtır?",
      options: ["20 ve 18", "23 ve 21", "27 ve 26", "30 ve 28"],
      correctIndex: 2,
      explanation: "ABD'de erkekler için evlenme yaşı ortalama 27, kadınlar için 26 olarak tespit edilmiştir (Popenoe & Whitehead, 2006)."
    },
    {
      question: "Aşağıdakilerden hangisi orta yetişkinlikte kariyer sorunları arasında yer ALMAZ?",
      options: ["Çalışmanın evrenselliği", "Bilgi teknolojilerindeki hızlı gelişim", "Organizasyonların küçülmesi", "Çocuk sahibi olmak"],
      correctIndex: 3,
      explanation: "Blossfeld (2009) - Kariyer sorunları: çalışmanın evrenselliği, bilgi teknolojilerindeki gelişim, organizasyonların küçülmesi, erken emeklilik ve emeklilik maaşı kaygıları."
    },
    {
      question: "Aşağıdakilerden hangisi ileri yetişkinlerin emeklilik sonrasındaki esnekliğinin önemini vurgular?",
      options: ["Sadece ekonomik faktörler", "Esneklik, kişinin emekliliğe uyum sağlayıp sağlayamamasında önemli", "Sadece yaş", "Eğitim seviyesi"],
      correctIndex: 1,
      explanation: "Esneklik, kişinin emekliliğe uyum sağlayıp sağlayamamasında önemlidir. Ayrıca planlama yapmak ve başarılı bir şekilde uygulamak da önemli bir unsurdur."
    },
    {
      question: "Yaşlı yetişkinlerin Beş Büyük kişilik faktörlerinden hangileri ölüm oranı ile ilişkili bulunmuştur?",
      options: ["Sorumluluk ve nevrotiklik", "Açıklık ve dışadönüklük", "Yumuşak başlılık ve dışadönüklük", "Sadece nevrotiklik"],
      correctIndex: 0,
      explanation: "Beş Büyük faktörden ikisinin (sorumluluk ve nevrotiklik) yaşlı yetişkinlerin ölüm oranı ile ilişkili olduğu ve sorumluluk anlayışı düşük ve nevrotikliği yüksek olan durumların erken ölüm riskini arttırdığı bulunmuştur."
    },
    {
      question: "Aşağıdakilerden hangisi 'çoklu damar tıkanmasına bağlı demans' (vasküler demans) konusunda doğrudur?",
      options: ["Alzheimer ile aynıdır", "Kadınlarda daha yaygındır", "Erkeklerde daha yaygındır ve klinik görünümü Alzheimer'dan farklıdır", "Kesinlikle iyileşmez"],
      correctIndex: 2,
      explanation: "Çoklu damar tıkanmasına bağlı demans erkeklerde daha yaygındır ve klinik görünümü Alzheimer hastalığından farklıdır; bu hastalar iyileşebilmektedir."
    },
    {
      question: "Yaşlı yetişkinlerin Erikson'un 'benlik bütünlüğüne karşı umutsuzluk' döneminde olumlu bir gözden geçirme yaşamasının sonucu nedir?",
      options: ["Geçmişteki yaşamın iyi harcandığı sonucuna varma", "Umutsuzluk duygusu", "Öfke", "Endişe"],
      correctIndex: 0,
      explanation: "Benlik bütünlüğü, geçmişe yönelik değerlendirmede olumlu bir gözden geçirme ya da geçmişteki yaşamın iyi harcandığı sonucuna varılmasını içerir."
    },
    {
      question: "Hangi araştırmacı yaşlanma uzmanı olarak yaşlanmayı 'aktif olmak' özelliği ile ilişkilendirmiştir?",
      options: ["Erickson ve Krarner", "Schaie", "Levinson", "Sternberg"],
      correctIndex: 0,
      explanation: "Erickson ve Krarner (2009): aktif olmak başarılı yaşlanma açısından önemlidir."
    },
    {
      question: "Aşağıdakilerden hangisi yaşlı yetişkinlerin yaklaşık %33 oranında yaşadığı durumdur?",
      options: ["Bakımevinde", "Yalnız", "Aile üyeleriyle", "Arkadaşlarıyla"],
      correctIndex: 1,
      explanation: "Yaşlı yetişkinlerin yaklaşık üçte ikisi aile üyeleriyle yaşarken, yaklaşık üçte biri yalnız yaşamaktadır."
    },
    {
      question: "Aşağıdakilerden hangisi yas süresince 'sosyal yalnızlık' tanımıdır?",
      options: ["Duygusal anlamda soyutlanmış hissetme", "Başkalarıyla bağlantılı olma hissi verebilen sosyal çevrelerle bütünleşme eksikliği", "Tek başına yaşama", "Kendine zaman ayırma"],
      correctIndex: 1,
      explanation: "Sosyal yalnızlık: başkalarıyla bağlantılı olma hissi verebilen sosyal çevrelerle bütünleşme eksikliğidir."
    },
    {
      question: "Hangisi Levinson'a göre orta yaş yetişkinin yaşam çatışmalarından biri DEĞİLDİR?",
      options: ["Gençliğe karşı yaşlılık", "Yıkıcılığa karşı yapıcılık", "Bireyciliğe karşı toplulukçuluk", "Erkekselliğe karşı kadınsılık"],
      correctIndex: 2,
      explanation: "Levinson'un 4 çatışması: gençlik-yaşlılık, yıkıcılık-yapıcılık, erkekselik-kadınsılık, başkalarıyla birlikte-onlardan ayrı olma."
    },
    {
      question: "Aşağıdakilerden hangisi 'düşkünlük ve hayranlığı beslemek' kavramı Gottman'ın hangi konuyla ilişkilidir?",
      options: ["Başarılı evlilik için 7 ilke", "Boşanma sebepleri", "İletişim biçimleri", "Cinsel sorunlar"],
      correctIndex: 0,
      explanation: "John Gottman'ın evliliklerin yürüyüp yürümeyeceğine yönelik 7 temel ilkesinden biri 'düşkünlük ve hayranlığınızı besleyin'dir."
    },
    {
      question: "Aşağıdakilerden hangisi 'klimakterik' kavramının tanımıdır?",
      options: ["Cinsel olgunluk dönemi", "Doğurganlığın azaldığı orta yaşa geçişi tanımlamak için kullanılan terim", "Yaşlanma süreci", "Genç yetişkinlik dönemi"],
      correctIndex: 1,
      explanation: "Klimakterik, doğurganlığın azaldığı orta yaşa geçişi tanımlamak için kullanılan terimdir."
    },
    {
      question: "Sosyoduygusal seçicilik kuramına göre, yaşlı yetişkinlerin yaşamlarına stres yüklemek anlamına geleceği için neyden kaçındığı ileri sürülür?",
      options: ["Tüm sosyal ilişkilerden", "Tanımadıkları kişilerle sosyal ilişki kurmaktan kasıtlı bir şekilde", "Aile ile zaman geçirmekten", "Egzersizden"],
      correctIndex: 1,
      explanation: "Sosyoduygusal seçicilik kuramı, yaşlı yetişkinlerin yaşamlarına stres yüklemek anlamına geleceği için tanımadıkları kişilerle sosyal ilişki kurmaktan kasıtlı bir şekilde kaçındıklarını savunur."
    }
  ]
});

// ============== SINAV 8 ==============
EXAMS.push({
  id: 8,
  title: "Sınav 8",
  description: "Gelişimsel dönemler, fiziksel değişimler ve kuramsal yaklaşımlar",
  fillInBlanks: [
    {
      question: "Yetişkinliğe geçişin temel özelliklerinden biri olarak Arnett, _______ ve keşfin bu sürecin temel özellikleri olduğunu belirtmektedir.",
      answer: "deneme",
      acceptableAnswers: ["deneme"],
      explanation: "Arnett'e göre deneme ve keşif yetişkinliğe geçiş sürecinin temel özellikleridir."
    },
    {
      question: "Hayflick'in hücresel saat kuramına göre kromozomların uçlarını örten DNA dizileri olan ve her hücre bölünmesinde giderek kısalan yapı _______ dir.",
      answer: "telomer",
      acceptableAnswers: ["telomer", "telomerler"],
      explanation: "Telomerler, kromozomların uçlarındaki DNA dizileridir; her hücre bölünmesinde kısalır."
    },
    {
      question: "Yaşlı yetişkinler için kullanılan üç temel kategori şunlardır: genç-yaşlı (65-74), yaşlı-yaşlı (75-84) ve _______ yaşlı (85 ve üzeri).",
      answer: "en",
      acceptableAnswers: ["en", "en yaşlı"],
      explanation: "Yaşlı yetişkinler 3 kategoriye ayrılır: genç-yaşlı, yaşlı-yaşlı ve en yaşlı-yaşlı (85+)."
    },
    {
      question: "Kübler-Ross modelinde ölmekte olan kişinin inkarının yerini öfke, _______, hiddet ve kıskançlığa bıraktığı evre ikinci evredir.",
      answer: "küskünlük",
      acceptableAnswers: ["küskünlük", "kuskunluk"],
      explanation: "Öfke evresi: kişinin inkarı yerini öfke, küskünlük, hiddet ve kıskançlığa bırakır."
    },
    {
      question: "İmarethanelerde uygulanan, ağrıyı azaltma ve insanların onurlarıyla ölmelerine yardımcı olmayı içeren bakım türü _______ bakımdır.",
      answer: "yatıştırıcı",
      acceptableAnswers: ["yatıştırıcı", "yatistirici", "palliative", "palyatif"],
      explanation: "Yatıştırıcı (Palliative) bakım, imarethanelerde uygulanan, ağrıyı azaltma ve onurlu ölümü destekleyen bakım türüdür."
    },
    {
      question: "Üretkenliğin karşıtı olarak Erikson tarafından tanımlanan ve gelecek nesiller için hiçbir şey yapmadıkları duygusu geliştiren bireylerin yaşadığı durum _______ tir.",
      answer: "verimsizlik",
      acceptableAnswers: ["verimsizlik", "kendi kendini soğurma"],
      explanation: "Verimsizlik (bazen kendi kendini soğurma): bireylerin gelecek nesiller için hiçbir şey yapmadıkları duygusudur."
    },
    {
      question: "Yaşlı yetişkinlerde sosyal _______ rolü yaşamlarında önemlidir çünkü insanların sosyal ilişkileri yoldaşlık modeline göre sosyal destek alıp vererek sürdürülür.",
      answer: "bütünleşmenin",
      acceptableAnswers: ["bütünleşmenin", "butunlesmenin", "bütünleşme"],
      explanation: "Yaşlı yetişkinlerde sosyal bütünleşmenin rolü önemlidir (Rohr & Lang, 2009; von Tilburg, 2009)."
    },
    {
      question: "Bilişsel pragmatikler zihnin _______ dayalı 'yazılım programları'dır; okuma yazma becerilerini, dilin kavranmasını ve eğitimsel becerileri içerir.",
      answer: "kültüre",
      acceptableAnswers: ["kültüre", "kulture"],
      explanation: "Bilişsel pragmatikler zihnin kültüre dayalı 'yazılım programları'dır."
    },
    {
      question: "Vaillant 50 yaşında alkol kullanma ve sigara içmenin _______ yaşları arasında ölüp ölmeyeceğin en iyi göstergeleri olduğunu bulmuştur.",
      answer: "75-80",
      acceptableAnswers: ["75-80", "75 80"],
      explanation: "50 yaşında alkol/sigara içmek, 75-80 yaşları arasında ölüp ölmeyeceğin en iyi göstergesi olarak bulunmuştur."
    },
    {
      question: "Yaşlı yetişkinler için sosyal destek fiziksel ve _______ sağlıkla ilişkilidir.",
      answer: "zihinsel",
      acceptableAnswers: ["zihinsel"],
      explanation: "Yaşlı yetişkinler için sosyal destek fiziksel ve zihinsel sağlıkla ilişkilidir (Cheng, Lee & Chow, 2010)."
    }
  ],
  multipleChoice: [
    {
      question: "Genç yetişkinlik döneminde, ergenlikte yaşanan kötü sağlık alışkanlıklarının çoğu nasıl bir seyir izler?",
      options: ["Tamamen sona erer", "Genç yetişkinlikte artışa geçer", "Aynı kalır", "Bilinmiyor"],
      correctIndex: 1,
      explanation: "Ergenlik döneminde ortaya çıkan kötü sağlık alışkanlıklarının çoğunun genç yetişkinlikte artışa geçtiği belirlenmiştir (Harris vd., 2006)."
    },
    {
      question: "Aşağıdakilerden hangisi orta yaş geçişinde Levinson'un belirlediği 4 büyük çatışmadan DEĞİLDİR?",
      options: ["Gençliğe karşı yaşlılık", "Yıkıcılığa karşı yapıcılık", "İçedönüklüğe karşı dışadönüklük", "Erkekselliğe karşı kadınsılık"],
      correctIndex: 2,
      explanation: "Levinson'un 4 çatışması: gençlik-yaşlılık, yıkıcılık-yapıcılık, erkekselik-kadınsılık, başkalarıyla birlikte-onlardan ayrı olma."
    },
    {
      question: "Aşağıdakilerden hangisi yaşlanmanın yavaşlatılmasında etkili olduğu öne sürülen vitamin gruplarından biri DEĞİLDİR?",
      options: ["C vitamini", "E vitamini", "Beta karoten", "K vitamini"],
      correctIndex: 3,
      explanation: "C vitamini, E vitamini ve beta karoten dahil olmak üzere 'antioksidanlar' grubu vitaminlerin yaşlanmayı yavaşlatabileceği öne sürülmüştür."
    },
    {
      question: "Bir ailenin bir çocuğunu yetişkinlik yaşamına başlatması, çocuğun evden ayrılması ile ebeveynlerin yeni düzenlemelerle yüzleşmesi olgusuna ne ad verilir?",
      options: ["Aile krizi", "Boş yuva", "Aile dönüşümü", "Ailesel kayıp"],
      correctIndex: 1,
      explanation: "Boş yuva, ailede önemli bir durum olarak çocukların evden ayrılması ile ebeveynlerin yeni düzenlemelerle yüzleşmesidir."
    },
    {
      question: "Lehman'ın yaratıcılık üzerine çalışmasına göre en yaratıcı ürünler hangi yaşlarda üretilir?",
      options: ["20'li yaşların başı", "30'lu yaşlar", "40'lı yaşlar", "60'lı yaşlar"],
      correctIndex: 1,
      explanation: "Lehman (1960) - en yaratıcı ürünler otuzlu yaşlarda üretilmektedir."
    },
    {
      question: "Aşağıdakilerden hangisi ileri yetişkinlikte 'olası benlikler' (possible selves) kavramını ortaya koyan yaklaşımdır?",
      options: ["Hoppmann & Smith; Markus & Nurius", "Erikson", "Levinson", "Schaie"],
      correctIndex: 0,
      explanation: "Olası benlikler kavramı Hoppmann & Smith (2007), Markus & Nurius (1987) tarafından geliştirilmiştir."
    },
    {
      question: "Aşağıdakilerden hangisi yas süreciyle ilgili 'Hayat Arkadaşının Kaybı' konusunda doğru bir bilgidir?",
      options: ["Erkek ve kadınlar eşit derecede etkilenir", "Geride kalan eşlerin başa çıkma biçimleri oldukça farklılık gösterir", "Sadece kadınlar etkilenir", "Hayat arkadaşının kaybı kısa sürede atlatılır"],
      correctIndex: 1,
      explanation: "Geride kalan eşlerin başa çıkma biçimleri oldukça farklılık gösterir (Ott vd., 2007)."
    },
    {
      question: "Aşağıdakilerden hangisi orta yetişkinlikte boşanmanın olası bir avantajıdır?",
      options: ["Daha çok ekonomik kazanç", "Genç yetişkinlere göre daha az olabilir; çünkü daha fazla kaynak vardır ve çocuklar artık yetişkindir", "Sosyal statü kazanma", "Yeniden evlenme olasılığının yüksekliği"],
      correctIndex: 1,
      explanation: "Orta yetişkinlik döneminde, boşanma riskleri genç bireylere nazaran daha az olabilir; daha fazla kaynak vardır ve çocuklar artık yetişkindir."
    },
    {
      question: "Aşağıdakilerden hangisi Genç-yaşlı, yaşlı-yaşlı ve en yaşlı-yaşlı kategorileri açısından doğru bir bilgidir?",
      options: ["85 yaş bireyi her zaman 65 yaş bireyden daha sağlıksızdır", "85 yaşında bir kişinin işlevsel yaş açısından 65 yaşında bir kişiye göre biyolojik ve psikolojik açıdan çok daha sağlıklı olması pekala mümkündür", "Tüm yaşlı kategorileri biyolojik olarak aynıdır", "Sadece kronolojik yaş önemlidir"],
      correctIndex: 1,
      explanation: "Yaşlanma uzmanları bu kategorileri yaştan çok işlevsellik açısından ele almayı tercih etmektedir. 85 yaşında bir kişinin işlevsel yaş açısından 65 yaşındaki bir kişiye göre çok daha sağlıklı olması mümkündür."
    },
    {
      question: "Aşağıdakilerden hangisi ileri yetişkinlerin temel bilişsel kayıplarından biri DEĞİLDİR?",
      options: ["İşleme hızında düşüş", "Akıcı zekada düşüş", "Kelime bilgisinde düşüş", "Algısal hızda düşüş"],
      correctIndex: 2,
      explanation: "Kelime bilgisi ve kelime anlamı kelime bilgisi ileri yetişkinlikte değişmeden devam etmekte ve hatta ilerlemektedir."
    },
    {
      question: "Aşağıdakilerden hangisi yaşlı yetişkinlerin sıklıkla maruz kaldığı, vandalizm, kapkaç gibi şiddet içermeyen suç türlerine örnektir?",
      options: ["Cinayet", "Dolandırıcılık", "Saldırı", "Tecavüz"],
      correctIndex: 1,
      explanation: "Yaşlı yetişkinler dolandırıcılık, vandalizm, kapkaç, taciz gibi şiddet içermeyen suçlara maruz kalmaktadır (Fulmer, Guadagno & Bolton, 2004)."
    },
    {
      question: "Genç yetişkinlikte cinsel etkinlik ile ilgili erkeklerin yüzde kaçı her gün ya da günde birkaç kez cinselliği akıllarına getirdiklerini belirtmiştir?",
      options: ["%34", "%44", "%54", "%64"],
      correctIndex: 2,
      explanation: "Erkek katılımcıların %54'ü her gün ya da günde birkaç kez cinselliği akıllarına getirdiklerini belirtmişlerdir."
    },
    {
      question: "Aşağıdakilerden hangisi Berscheid'in tanımladığı aşk türlerinden biri DEĞİLDİR?",
      options: ["Arkadaşlık", "Romantik aşk", "Sosyal aşk", "Anlaşmalı aşk"],
      correctIndex: 2,
      explanation: "Berscheid (2010): arkadaşlık, romantik aşk, samimi aşk, anlaşmalı aşk."
    },
    {
      question: "Aşağıdakilerden hangisi Genç yetişkinlikte 'tecavüz' kavramının tanımıdır?",
      options: ["Sözel taciz", "Karşı tarafın rızası olmadığı halde güç kullanılarak gerçekleştirilen ilişkiler", "Aldatma", "Cinsel ilişki olmayan flört"],
      correctIndex: 1,
      explanation: "Tecavüz, karşı tarafın rızası olmadığı halde güç kullanılarak gerçekleştirilen ilişkilerdir."
    },
    {
      question: "Aşağıdakilerden hangisi orta yetişkinlikte zekanın boyutlarına ilişkin John Horn'un görüşüdür?",
      options: ["Tüm zeka boyutları düşer", "Kristalize zeka artarken akıcı zeka düşmeye başlar", "Akıcı zeka artar, kristalize zeka düşer", "Hiç değişiklik olmaz"],
      correctIndex: 1,
      explanation: "John Horn'a göre kristalize zeka orta yetişkinlikte artmaya devam ederken, akıcı zeka düşmeye başlar."
    },
    {
      question: "Aşağıdakilerden hangisi yaşlanmanın 'kullan ya da kaybet' kavramının doğru bir tanımıdır?",
      options: ["Egzersizin gerekliliği", "Bilişsel becerilerin kullanılmamasından kaynaklanan atrofi oluşması", "Doğru beslenme", "Sosyal aktivite"],
      correctIndex: 1,
      explanation: "Kullan ya da kaybet: bilişsel becerilerin kullanılmamasından ve bunun sonucunda da atrofi oluşmasını ifade eder (Hughes, 2010)."
    },
    {
      question: "Aşağıdakilerden hangisi Sherry Willis ve meslektaşlarının (2006) bilişsel eğitim çalışmasında kullanılan eğitim türlerinden DEĞİLDİR?",
      options: ["Muhakeme eğitimi", "Bellek eğitimi", "İşleme hızı eğitimi", "Görme eğitimi"],
      correctIndex: 3,
      explanation: "Willis çalışmasında yaşlı yetişkinler 4 gruptan birine yerleştirildi: (1) Muhakeme, (2) Bellek, (3) İşleme hızı eğitimi alan gruplar ya da (4) Eğitim almayan kontrol grubu."
    },
    {
      question: "Aşağıdakilerden hangisi 'aşkın son bulması' konusunda doğru bir bilgidir?",
      options: ["Yakın ilişkilerin son bulması her zaman olumsuzdur", "Uzun vadede aşkı yenmek ve ilişkiyi bitirmek bazen olumlu duyguların yaşanmasına yol açabilir", "Yakın ilişkilerin son bulması sadece depresyona neden olur", "Aşkın son bulması iletişimde sorunlara neden olmaz"],
      correctIndex: 1,
      explanation: "Uzun vadede düşünüldüğünde aşkı yenmek ve ilişkiyi bitirmek bazen olumlu duyguların yaşanmasına yol açmakta ve kişisel gelişimimize yarar sağlayabilmektedir."
    },
    {
      question: "Aşağıdakilerden hangisi yaşlı yetişkinlerde 'kişisel kontrol' duygusu için doğru bir ifadedir?",
      options: ["Kişisel kontrol duygusu bireyler yaşlanınca artar", "Kişisel kontrol duygusunun bireyler yaşlanınca azaldığı sonucuna varılmıştır", "Yaşlılarda kişisel kontrol yoktur", "Kontrol yaşlılarda sabit kalır"],
      correctIndex: 1,
      explanation: "Lachman (2006) - kişisel kontrol duygusunun bireyler yaşlanınca azaldığı sonucuna varılmıştır."
    },
    {
      question: "Hangi araştırmacılar yaşlı yetişkinlerin sahip oldukları benlik kontrolü duygusunu etkili bir şekilde korumayı sürdürdüklerini belirlemiştir?",
      options: ["Lewis, Todd & Xu", "Carstensen", "Levinson", "Erikson"],
      correctIndex: 0,
      explanation: "Lewis, Todd & Xu (2011) - yaşlı yetişkinlerin yaşla ilgili kayıpların farkında olmalarına karşın bu kişilerin çoğu benlik kontrolü duygusunu etkili bir şekilde korumayı sürdürürler."
    },
    {
      question: "Hangisi 'yaşlı yetişkinlerin yaklaşık yüzde 80'inin' belirten bir bilgidir?",
      options: ["Çoğu orta yetişkin olmak üzere çocukları hayattadır", "Bakımevinde yaşar", "Yalnız yaşar", "Yeniden evlenir"],
      correctIndex: 0,
      explanation: "Yaşlı yetişkinlerin yaklaşık yüzde 80'inin, çoğu orta yetişkin olmak üzere çocukları hayattadır."
    },
    {
      question: "Aşağıdakilerden hangisi 'yaşlı yetişkin ebeveynler ve yetişkin çocukları' konusunda doğrudur?",
      options: ["Yetişkin erkek çocukların ebeveynlerine yardım olasılığı kız çocuklarınkinden yüksektir", "Yetişkin kız çocukların ebeveynlerine günlük faaliyetlerinde yardımcı olma olasılıkları yetişkin erkek çocuklara göre üç kat daha fazladır", "Çocuklar ebeveynlerine hiç yardım etmez", "Yetişkin çocuklar sadece maddi yardım eder"],
      correctIndex: 1,
      explanation: "Yetişkin kız çocukların ebeveynlerine günlük faaliyetlerinde yardımcı olma olasılıkları yetişkin erkek çocuklara göre üç kat daha fazladır (Dwyer & Coward, 1991)."
    },
    {
      question: "Hangi araştırmacı 'Yaşamı Gözden Geçirme' kavramını ortaya atmıştır?",
      options: ["Robert Butler", "Erik Erikson", "Daniel Levinson", "John Bowlby"],
      correctIndex: 0,
      explanation: "Robert Butler 'Yaşamı Gözden Geçirme' kavramını Erikson'un benlik bütünlüğüne karşı umutsuzluk döneminde önemli olarak öne sürmüştür."
    },
    {
      question: "Yas süresinin sağlıklı yas sürecinde kültürel çeşitlilik açısından Japonya'da hangi durum vurgulanır?",
      options: ["Ölen kişiyle bağlar tamamen kesilir", "Ölen kişiyle bağların sürdürülmesi, kabul gören ve dini törenlerle devam ettirilen bir şeydir", "Ölen kişi unutulur", "Ölen kişi bir kez anılır"],
      correctIndex: 1,
      explanation: "Japonya'da ölen kişiyle bağların sürdürülmesi, kabul gören ve dini törenlerle devam ettirilen bir şeydir."
    },
    {
      question: "Bilgelik konusunda Staudinger ve Gluck (2011) bilgeliği nasıl tanımlar?",
      options: ["Zeka", "Yaşamın uygulamaya dair boyutlarında uzmanlık düzeyindeki bilgi", "Sadece deneyim", "Sosyal beceri"],
      correctIndex: 1,
      explanation: "Bilgelik: önemli konularda doğru yargılamalar yapmamızı sağlayan yaşamın uygulamaya dair boyutlarında uzmanlık düzeyindeki bilgidir (Staudinger & Gluck, 2011)."
    }
  ]
});

// ============== SINAV 9 ==============
EXAMS.push({
  id: 9,
  title: "Sınav 9",
  description: "Cinsiyet rolleri, kuşaklar arası ilişkiler ve ölüm kavramları",
  fillInBlanks: [
    {
      question: "Genç yetişkinlikte yakın ilişkilerin sonucu bir _______ duygusudur ki kişinin kendi sınırlarını ortaya koymadan başka birine adanmasıdır.",
      answer: "samimiyet",
      acceptableAnswers: ["samimiyet", "yakınlık"],
      explanation: "Yakınlık/samimiyet: kendini açma ve özel düşüncelerin paylaşımıdır."
    },
    {
      question: "Çoğu boylamsal çalışma erkeklere odaklanmasından dolayı _______ emeklilik planlamaları için erkeklerden daha az zaman harcadıkları bulunmuştur.",
      answer: "kadınların",
      acceptableAnswers: ["kadınların", "kadinlarin", "kadınlar"],
      explanation: "Kadınların emeklilik planları için erkeklerden daha az zaman harcadıkları bulunmuştur."
    },
    {
      question: "Yaşlı yetişkinler için _______ önemli bir sosyal destek kaynağıdır ve dini kuruluşların sundukları hizmetlere yönelik olarak %50'si gönüllülük çalışmalarına katılmaktadır.",
      answer: "din",
      acceptableAnswers: ["din", "dindarlık"],
      explanation: "Yaşlı yetişkinlerin gönüllülük çalışmalarının neredeyse yüzde 50'si dini kuruluşların sundukları hizmetlere yöneliktir."
    },
    {
      question: "Yas sürecinde iyileşme odaklı stres kaynakları, kimlik değişimi (eş kimliğinden _______ kimliğine geçiş) ve yönetici becerileri gibi durumları içerebilir.",
      answer: "dul",
      acceptableAnswers: ["dul"],
      explanation: "İyileşme odaklı stres kaynakları kimlik değişimini (eş kimliğinden dul kimliğine geçiş) içerebilir."
    },
    {
      question: "Genç yetişkinlerin _______ aktif olmasına rağmen, evlilik yaşının yükselmesi ile cinsel açıdan aktif olunan dönem daha uzar.",
      answer: "cinsel",
      acceptableAnswers: ["cinsel"],
      explanation: "Genç yetişkinlik döneminde birçok birey evlenmekte ve cinsel olarak aktif olmaktadır."
    },
    {
      question: "Yaşlı yetişkinlerin Beş Büyük faktörlerinden ikisinin yaşlı yetişkinlerin _______ oranı ile ilişkili olduğu bulunmuştur.",
      answer: "ölüm",
      acceptableAnswers: ["ölüm", "olum"],
      explanation: "Beş Büyük faktörden ikisinin (sorumluluk ve nevrotiklik) yaşlı yetişkinlerin ölüm oranı ile ilişkili olduğu bulunmuştur."
    },
    {
      question: "Yaşlı yetişkinlerin yaşam tarzı çeşitliliği açısından evli olanlar, _______ olanlara göre genellikle daha mutludurlar ve daha uzun yaşarlar.",
      answer: "bekar",
      acceptableAnswers: ["bekar", "bekâr"],
      explanation: "İleri yetişkinlik döneminde evli ya da eşi olan kişiler, bekâr olanlara göre genellikle daha mutludurlar ve daha uzun yaşarlar (Manzoli vd., 2007)."
    },
    {
      question: "Demansın temel belirtisi, zihinsel işlevlerin bozulması olan nörolojik bozukluklara verilen genel _______ dır.",
      answer: "ad",
      acceptableAnswers: ["ad", "addır"],
      explanation: "Demans: temel belirtisi zihinsel işlevlerin bozulması olan nörolojik bozukluklara verilen genel addır."
    },
    {
      question: "Naaş yakımı (kremasyon), Amerika'nın _______ bölgesinde, güney bölgesine göre daha yaygındır.",
      answer: "Pasifik",
      acceptableAnswers: ["Pasifik", "pasifik"],
      explanation: "Naaş yakımı, Amerika'nın Pasifik bölgesinde, güney bölgesine göre daha yaygındır."
    },
    {
      question: "Orta yetişkinlikteki yetişkinler daha genç _______ deneyimlerini paylaşır ve onlara değerlerini aktarırlar.",
      answer: "kuşakla",
      acceptableAnswers: ["kuşakla", "kusakla", "kuşağa"],
      explanation: "Orta yaştaki yetişkinler daha genç kuşakla deneyimlerini paylaşır ve onlara değerlerini aktarırlar."
    }
  ],
  multipleChoice: [
    {
      question: "Aşağıdakilerden hangisi Bartholomew'un dörtlü bağlanma modelinde 'olumlu benlik ve olumlu başkaları' modeline sahip bireyin stilidir?",
      options: ["Güvenli", "Saplantılı", "Kayıtsız", "Korkulu"],
      correctIndex: 0,
      explanation: "Güvenli bağlanma: olumlu benlik + olumlu başkaları = yakın ilişki kurma konusunda rahat ve özerk."
    },
    {
      question: "Aşağıdakilerden hangisi orta yetişkinlikte kişilik gelişimine ilişkin Roberts ve diğerlerinin (2009) görüşüdür?",
      options: ["Kişilikteki stabilite 60'lı yaşlarda kurulur", "Kişilikteki stabilitenin 30'lu yaşlarda kurulmaya başladığı görüşüyle çelişen sonuçlar", "Kişilik hiç değişmez", "Kişilik tamamen değişir"],
      correctIndex: 1,
      explanation: "Son araştırmalar kişilikteki stabilitenin 30'lu yaşlarda kurulmaya başladığı görüşüyle çelişir (McAdams & Olson, 2010; Roberts vd., 2009)."
    },
    {
      question: "Aşağıdakilerden hangisi yaşlı yetişkinlerin sıklıkla karşılaştığı kalıp yargılardan biridir?",
      options: ["Sürekli iyimserlik", "Mantıklı düşünme, yeni şeyler öğrenme, topluma katkıda bulunma ve sorumluluk içeren işleri yürütme becerisinden yoksun olarak algılanma", "Aşırı sosyal", "Sadece sağlıklı"],
      correctIndex: 1,
      explanation: "Yaşlı yetişkinler çoğunlukla mantıklı düşünme, yeni şeyler öğrenme, topluma katkıda bulunma ve sorumluluk içeren işleri yürütme becerisinden yoksun olarak algılanmaktadır."
    },
    {
      question: "Aşağıdakilerden hangisi yas çalışmasında 'dünyayı anlamlandırmak' boyutudur?",
      options: ["Hayatın anlamını sorgulamamak", "Bireylerin dünyalarını anlamlandırma çabalarını harekete geçirmek", "Yas tutmadan dönüş", "Hızlı iyileşme"],
      correctIndex: 1,
      explanation: "Yasın bir yararı bireylerin dünyalarını anlamlandırma çabalarını harekete geçirmesidir; ölümden sonraki günler ve haftalarda en yakın aile üyeleri deneyimlerini birbirleriyle paylaşır."
    },
    {
      question: "Aşağıdakilerden hangisi 'orta yetişkinlik dönemi' için en geçerli ifadedir?",
      options: ["Sadece kayıpların görüldüğü dönem", "Genel olarak orta yaşın başlarında kayıplar ve kazançlar birbirini dengelerken, orta yaşın sonlarında kayıplar birçok birey için kazançları geçmeye başlar", "Sadece kazançların görüldüğü dönem", "Hiçbir değişikliğin olmadığı dönem"],
      correctIndex: 1,
      explanation: "Genel olarak, orta yaşın başlarında kayıplar ve kazançlar birbirini dengelerken, orta yaşın sonlarında kayıplar birçok birey için kazançları geçmeye başlar (Baltes, Lindenberger, Staudinger, 2006)."
    },
    {
      question: "İmarethane hizmetlerinin yüzde kaçı hastaların evinde verilmektedir?",
      options: ["%50", "%70", "%90", "%30"],
      correctIndex: 2,
      explanation: "Günümüzde, imarethane hizmetlerinin yaklaşık yüzde 90'ı hastaların evinde verilmektedir (Hayslip & Hansson, 2007)."
    },
    {
      question: "Aşağıdakilerden hangisi yaşlı yetişkinlerde demansın çeşitlerinden biri DEĞİLDİR?",
      options: ["Alzheimer hastalığı", "Çoklu damar tıkanmasına bağlı demans", "Parkinson hastalığı", "Asperger sendromu"],
      correctIndex: 3,
      explanation: "Demans çeşitleri: Alzheimer, çoklu damar tıkanmasına bağlı demans, Parkinson. Asperger sendromu bir gelişimsel bozukluktur, demans türü değildir."
    },
    {
      question: "Aşağıdakilerden hangisi yaşlı yetişkinlerin Erikson'un 'benlik bütünlüğüne karşı umutsuzluk' döneminde olumsuz değerlendirmesinin sonucudur?",
      options: ["Benlik bütünlüğü", "Umutsuzluk duygusu", "Mutluluk", "Yüksek özgüven"],
      correctIndex: 1,
      explanation: "Erikson'un benlik bütünlüğüne karşı umutsuzluk dönemi: olumlu değerlendirme benlik bütünlüğüne, olumsuz değerlendirme umutsuzluğa yol açar."
    },
    {
      question: "Yaşlı yetişkinlerin yaklaşık yüzde kaçı toplum içinde yaşamaktadır?",
      options: ["%75", "%85", "%95", "%65"],
      correctIndex: 2,
      explanation: "Yaşlı yetişkinlerin yaklaşık %95'i toplum içinde yaşamaktadır."
    },
    {
      question: "Aşağıdakilerden hangisi 'sosyoduygusal seçicilik kuramı'nın temel argümanlarındandır?",
      options: ["Yaşlılar tüm sosyal ilişkilerden kaçınır", "Yaşlılar tanıdıkları ve ödüllendirici ilişkiler içinde oldukları kişilerle daha fazla zaman geçirir", "Yaşlılar yeni arkadaşlar tercih eder", "Yaşlılar daha fazla insanla görüşür"],
      correctIndex: 1,
      explanation: "Carstensen'a göre yaşlı yetişkinler duygusal olarak daha fazla değer vermeleri nedeniyle tanıdıkları ve ödüllendirici ilişkiler içinde oldukları kişilerle daha fazla zaman geçirirler."
    },
    {
      question: "Aşağıdakilerden hangisi 'ödünleme yoluyla seçici optimizasyon' (SOC) kuramının 'ödünleme' bileşeninin tanımıdır?",
      options: ["Eksilen kapasite ve fonksiyon kaybı", "Performansın azaltılması", "Yaşam görevleri, yaşlı yetişkinin performans potansiyelinin ötesinde bir kapasite gerektirdiği zaman ortaya çıkar", "Sürekli alıştırma"],
      correctIndex: 2,
      explanation: "Ödünleme: yaşam görevleri, yaşlı yetişkinin o anki performans potansiyelinin ötesinde bir kapasite gerektirdiği zaman ortaya çıkar."
    },
    {
      question: "Sosyoduygusal seçicilik kuramının kuramcısı kimdir?",
      options: ["Erik Erikson", "Laura Carstensen", "Daniel Levinson", "Robert Butler"],
      correctIndex: 1,
      explanation: "Sosyoduygusal seçicilik kuramı Laura Carstensen tarafından geliştirilmiştir."
    },
    {
      question: "Aşağıdakilerden hangisi genç yetişkinlikte 'çift-çalışan' ailelerin sorunlarından DEĞİLDİR?",
      options: ["Evi kimin temizleyeceği", "Tamirciyi kimin çağıracağı", "Çocuğa kimin bakacağı", "İş yerinde kimin sosyal patron olacağı"],
      correctIndex: 3,
      explanation: "Çiftlerin her ikisinin de çalıştığı durumda evi kimin temizleyeceği, tamirciyi kimin çağıracağı, çocuğa kimin bakacağı vb. konularda kimin ilgileneceği büyük sorunlara yol açmaktadır."
    },
    {
      question: "Sternberg'in aşk üçgeninde 'tutku, samimiyet ve bağlanma' boyutlarının farklı kombinasyonları neyi ortaya çıkarır?",
      options: ["Aynı aşk türlerini", "Farklı aşk türlerini", "Sadece sevgiyi", "Sadece bağlanmayı"],
      correctIndex: 1,
      explanation: "Sternberg'in aşk üçgeni: tutku, samimiyet ve bağlanma. Bu boyutların farklı kombinasyonları farklı aşk türlerini ortaya çıkarmaktadır."
    },
    {
      question: "Aşağıdakilerden hangisi genç yetişkinlikte ölüm oranını arttıran temel faktördür?",
      options: ["Kronik hastalıklar", "Erkek ölümleri", "Yaşlılık", "Doğum sorunları"],
      correctIndex: 1,
      explanation: "Genç yetişkinlik dönemindeki ölüm oranı ergenliğin iki katıdır ve bu artış erkek ölümlerinden kaynaklanmaktadır."
    },
    {
      question: "Hangisi yaşlı yetişkinlerin Beş Büyük faktörlerinden 'sorumluluk anlayışı düşük ve nevrotikliği yüksek' olan durumlar için doğrudur?",
      options: ["Uzun yaşam ile ilişkilidir", "Erken ölüm riskini arttırdığı tespit edilmiştir", "Hiç etkisi yoktur", "Sadece kadınlarda görülür"],
      correctIndex: 1,
      explanation: "Sorumluluk anlayışı düşük ve nevrotikliği yüksek olan durumların erken ölüm riskini arttırdığı tespit edilmiştir (Wilson vd., 2004)."
    },
    {
      question: "Aşağıdakilerden hangisi orta yetişkinlikte 'çalışma belleği' konusunda Denise Park'ın (2001) görüşüdür?",
      options: ["Çalışma belleği orta yetişkinlikte gelişmeye devam eder", "Orta yaşın sonlarında yeni bilgi öğrenmek için daha çok zamana ihtiyaç vardır", "Çalışma belleği sabit kalır", "Çalışma belleği genç yetişkinlikte düşer"],
      correctIndex: 1,
      explanation: "Denise Park (2001) - orta yaşın sonlarında yeni bilgi öğrenmek için daha çok zamana ihtiyaç vardır."
    },
    {
      question: "Aşağıdakilerden hangisi orta yetişkinlikte 'pratik problem çözme' konusunda doğru bilgidir?",
      options: ["İlk ve orta yetişkinlikte düşmeye başlar", "Günlük problem çözme ve karar verme etkinliği ilk ve orta yetişkinlikte sabit kalmakta, geç yetişkinlikte düşmektedir", "Geç yetişkinlikte artar", "Sürekli artar"],
      correctIndex: 1,
      explanation: "Günlük problem çözme ve karar verme etkinliği ilk ve orta yetişkinlikte sabit kalmakta, geç yetişkinlikte düşmektedir (Thornton & Dumke, 2009)."
    },
    {
      question: "Hangi araştırmacılar 'önyargılı ve yıkıcı' kavramlarını orta yaş yetişkinlerinin yaşam dönemleri ile ilgili kullanmıştır?",
      options: ["Erikson", "Levinson", "Costa ve McCrae", "Schaie"],
      correctIndex: 1,
      explanation: "Levinson'un 4 büyük çatışmasından biri 'yıkıcılığa karşı yapıcılık' tır."
    },
    {
      question: "Aşağıdakilerden hangisi yas süreciyle ilgili 'mahrum kalınmış yas' örneklerinden biri DEĞİLDİR?",
      options: ["Eski eşle ilişki", "Kürtaj gibi gizli kayıp", "AIDS nedeniyle ölüm gibi etiketlenmiş ölüm biçimi", "Yakın bir arkadaşın ölümü"],
      correctIndex: 3,
      explanation: "Mahrum kalınmış yas örnekleri: eski eşle ilişki, kürtaj gibi gizli kayıp, AIDS nedeniyle ölüm gibi etiketlenmiş ölüm biçimleridir. Yakın arkadaş kaybı sosyal olarak kabul gören bir kayıptır."
    },
    {
      question: "Aşağıdakilerden hangisi yas süresinde başa çıkmaya yardım eden kültürel çeşitliliklerden biridir?",
      options: ["Yas tutmama", "Cenaze töreni", "Yas tutmayı yasaklama", "Üzüntüyü saklama"],
      correctIndex: 1,
      explanation: "Cenaze töreni çoğu kültürde yas tutmanın önemli bir yönüdür. Bazı kültürlerde ölümden sonra törensel bir yemek verilir, bazılarında ise siyah kolluk takılır."
    },
    {
      question: "Aşağıdakilerden hangisi 'Çocuktuk dönemindeki ölüm algısı' konusunda doğrudur?",
      options: ["Çocuklar ölümün geri dönüşü olmadığını anlar", "Çocukların zaman algısı yetişkinlerinkinden farklıdır ve 9 yaşına kadar ölümü evrensel ve geri dönüşü olmayan bir durum olarak algılayamaz", "Çocuklar ölümle ilgili felsefi düşünebilir", "Çocuklarla ölüm konuşulmamalıdır"],
      correctIndex: 1,
      explanation: "Çocukların zaman algısı yetişkinlerinkinden farklıdır. 9 yaşına kadar ölümü evrensel ve geri dönüşü olmayan bir durum olarak algılayamadıkları sonucuna ulaşılmıştır."
    },
    {
      question: "Hangi araştırmacı yaşlı yetişkinlerin ölüm oranı ile ilişkili Beş Büyük faktörlerini tespit etmiştir?",
      options: ["Martin, Friedman & Schwartz", "Erikson", "Levinson", "Schaie"],
      correctIndex: 0,
      explanation: "Martin, Friedman & Schwartz (2007) - kişiliğin Beş Büyük faktöründen sorumluluk sahibi olmanın çocukluktan ileri yetişkinliğe kadar daha yüksek ölüm riski ile ilişkili olduğunu ortaya koymuştur."
    },
    {
      question: "Aşağıdakilerden hangisi 4 kuşaklı ailelerin genişlemesinin temel nedenidir?",
      options: ["Daha az çocuk doğurma", "Boşanmaların azalması", "20. yüzyılın sonunda üç kuşaktan oluşan ailelerin yaygınken bugün dört kuşağın birden hayatta olduğu ailelere de sık rastlanmaktadır", "Aile yapısının değişmesi"],
      correctIndex: 2,
      explanation: "20. yüzyılın sonunda üç kuşaktan oluşan aileler yaygınken, bugün dört kuşağın birden hayatta olduğu ailelere de sık rastlanmaktadır (Harris, 2002)."
    },
    {
      question: "Yaşlı yetişkinlerin gönüllülük çalışmalarının yaklaşık yüzde kaçı dini kuruluşların sundukları hizmetlere yöneliktir?",
      options: ["%30", "%40", "%50", "%70"],
      correctIndex: 2,
      explanation: "Yaşlı yetişkinlerin gönüllülük çalışmalarının neredeyse yüzde 50'si dini kuruluşların sundukları hizmetlere yöneliktir."
    }
  ]
});

// ============== SINAV 10 ==============
EXAMS.push({
  id: 10,
  title: "Sınav 10",
  description: "Genel kapsamlı değerlendirme - tüm konular",
  fillInBlanks: [
    {
      question: "Yetişkinliğin önemli bir belirleyicisi olarak okuldan sonra _______ ve tam zamanlı bir işe başlama belirtilmiştir.",
      answer: "sürekli",
      acceptableAnswers: ["sürekli", "surekli"],
      explanation: "Bireylerin okulu bitirdikten sonra sürekli, tam zamanlı bir işe başlayabilmesi yetişkinliğin belirleyicisidir."
    },
    {
      question: "Demansın bir türü olan Parkinson hastalığı, kaslardaki titreme, hareketlerin yavaşlaması ve kısmi felç gibi belirtilerle tanımlanan, beyindeki _______ üreten sinirlerin zarar görmesiyle ortaya çıkar.",
      answer: "dopamin",
      acceptableAnswers: ["dopamin"],
      explanation: "Parkinson hastalığı beyindeki dopamin üreten sinirlerin zarar görmesiyle ortaya çıkar."
    },
    {
      question: "Yaşlanmanın evrimsel kuramına göre, doğal seçilimin sunduğu faydaların yaş ilerledikçe azaldığı çünkü doğal seçilimin _______ gücü ile bağlantılı olduğu savunulur.",
      answer: "üreme",
      acceptableAnswers: ["üreme", "ureme"],
      explanation: "Evrimsel kuram, doğal seçilimin üreme gücü ile bağlantılı olduğunu savunur."
    },
    {
      question: "Genç yetişkinlik döneminde cinsel olarak aktif bireyler arasında ABD'de erkekler için ortalama evlenme yaşı _______ ve kadınlar için 26 olarak tespit edilmiştir.",
      answer: "27",
      acceptableAnswers: ["27"],
      explanation: "ABD'de erkekler için evlenme yaşı ortalama 27 ve kızlar için 26 olarak tespit edilmiştir."
    },
    {
      question: "Orta yetişkinlerin yaklaşık %_______ ı orta yaş krizini yaşamamakta, Vaillant'a göre bu kriz sadece küçük bir azınlıkta görülür.",
      answer: "70-80",
      acceptableAnswers: ["70-80", "70", "80"],
      explanation: "Vaillant orta yaş krizinin sadece küçük bir azınlıkta görüldüğünü savunur; Levinson'a göre ise %70-80'i geçişi sancılı bulur."
    },
    {
      question: "Yas süresince geride kalan kişilerin başa çıkmasında iki temel stres kaynağı bulunmaktadır: kayıp odaklı ve _______ odaklı.",
      answer: "iyileşme",
      acceptableAnswers: ["iyileşme", "iyilesme"],
      explanation: "İkili-süreç modelinde iki temel stres kaynağı: kayıp odaklı stres kaynakları ve iyileşme odaklı stres kaynakları."
    },
    {
      question: "Yaşlanmanın hücresel saat kuramı, biz yaşlandıkça hücrelerimizin _______ kabiliyetinin azaldığını savunur.",
      answer: "bölünme",
      acceptableAnswers: ["bölünme", "bolunme"],
      explanation: "Hayflick'in hücresel saat kuramına göre yaşlandıkça hücrelerin bölünme kabiliyeti azalır."
    },
    {
      question: "Erikson'un genç yetişkinlik için tanımladığı _______ döneminde kişi başkasında kendini kaybederek kendini bulma sürecini yaşar.",
      answer: "yakınlık",
      acceptableAnswers: ["yakınlık", "yakinlik", "yakınlığa karşı yalıtılmışlık"],
      explanation: "Erikson'a göre yakınlık, birinin kendisini bir başkasında kaybederek kendini bulma süreci olarak tanımlanır."
    },
    {
      question: "Costa ve McCrae'nin Baltimore Çalışması'nda kullandıkları kişilik testi _______ Büyük Faktör testidir.",
      answer: "Beş",
      acceptableAnswers: ["Beş", "Bes", "Five", "Big Five"],
      explanation: "Costa ve McCrae Beş Büyük Faktör (Big Five) kişilik testini kullandılar."
    },
    {
      question: "İleri yetişkinlerde aktif olmak, dışarı çıkmak, seyahatler yapmak ve toplantılara katılmak _______ yaşlanmanın temel özelliklerindendir.",
      answer: "başarılı",
      acceptableAnswers: ["başarılı", "basarili"],
      explanation: "Aktif olmak, dışarı çıkmak, seyahatler ve toplantılara katılmak başarılı yaşlanma için önemlidir."
    }
  ],
  multipleChoice: [
    {
      question: "Aşağıdakilerden hangisi yaşlanma uzmanlarının (gerontologlar) yaşlı yetişkinlere önerdiği egzersiz türlerindendir?",
      options: ["Sadece aerobik aktivite", "Aerobik aktivite, esneme egzersizleri ve güç arttırıcı antrenmanlar", "Sadece güç antrenmanları", "Sadece yürüyüş"],
      correctIndex: 1,
      explanation: "Gerontologlar (yaşlılık bilim uzmanları) yaşlı yetişkinler için aerobik aktivitenin yanı sıra esneme egzersizlerini ve güç arttırıcı antrenmanları önermektedir (Peiffer vd., 2010)."
    },
    {
      question: "Aşağıdakilerden hangisi ileri yetişkinlikte 'duyusal gelişim' konusunda doğrudur?",
      options: ["Tüm duyular geliştirilir", "İşitme, görme ve duyusal işlevselliğin diğer yönleri günlük faaliyetlerimizi gerçekleştirme becerimizle ilişkilidir", "Sadece görme zayıflar", "Duyu organları sabit kalır"],
      correctIndex: 1,
      explanation: "İşitme, görme ve duyusal işlevselliğin diğer yönleri günlük faaliyetlerimizi gerçekleştirme becerimizle ilişkilidir."
    },
    {
      question: "Aşağıdakilerden hangisi yaşlı yetişkinlerde 'dolaşım sistemi ve akciğer' konusunda Aronow'un (2007) bulgusudur?",
      options: ["Sadece %20'sinde yüksek tansiyon vardır", "80 yaşındaki erkeklerin yüzde 57'sinde ve 81 yaşındaki kadınların yüzde 60'ında yüksek tansiyon bulunduğu", "Sadece kadınlarda yüksek tansiyon", "Hiç sorun yoktur"],
      correctIndex: 1,
      explanation: "Bir analizde 80 yaşındaki erkeklerin yüzde 57'si ve 81 yaşındaki kadınların yüzde 60'ında yüksek tansiyon bulunduğu görülmüştür (Aronow, 2007)."
    },
    {
      question: "Aşağıdakilerden hangisi orta yetişkinlikteki kadınlarda menopozun ortalama görülme yaşıdır?",
      options: ["41 yaş", "45 yaş", "51 yaş", "55 yaş"],
      correctIndex: 2,
      explanation: "Kadınlar son menstrual dönemini ortalama 51 yaşında yaşar (Wise, 2006)."
    },
    {
      question: "Aşağıdakilerden hangisi yaşlı yetişkinlere yönelik 'sosyal destek' konusunda Cheng, Lee & Chow'un (2010) görüşüdür?",
      options: ["Sadece duygusal destek önemlidir", "Sosyal destek fiziksel ve zihinsel sağlıkları ile ilişkilidir", "Sosyal destek gerekli değildir", "Sosyal destek sadece aile içindir"],
      correctIndex: 1,
      explanation: "Yaşlı yetişkinler için sosyal destek fiziksel ve zihinsel sağlıkları ile ilişkilidir (Cheng, Lee & Chow, 2010)."
    },
    {
      question: "Aşağıdakilerden hangisi 'yetişkin bağlanmasının' özelliğidir?",
      options: ["Sadece çocuklukla ilişkilidir", "Mizaçta olduğu gibi, bağlanma da bebeklik yıllarında ortaya çıkmakta ve sosyoduygusal gelişim alanında önemli rol oynamaktadır", "Yetişkinlikte oluşur", "İlişkilerde rol oynamaz"],
      correctIndex: 1,
      explanation: "Mizaçta olduğu gibi, bağlanma da bebeklik yıllarında ortaya çıkmakta ve sosyoduygusal gelişim alanında önemli rol oynamaktadır."
    },
    {
      question: "Aşağıdakilerden hangisi ergenlik döneminde ölüm hakkındaki yaklaşımı doğru tanımlar?",
      options: ["Ölüm somuttur", "Ergenlerin ölüm kavramları çocuklarınkinden daha soyuttur", "Çocukların ölüm kavramı ergenlerden daha karmaşıktır", "Ergenler ölümü hiç düşünmez"],
      correctIndex: 1,
      explanation: "Ergenlik döneminde, yaşlanma ihtimali gibi ölme ihtimalinin de uzak olduğu, ölümün kaçınılabilir, görmezden gelinebilir ve alay edilebilir olduğu düşünülmektedir. Ergenlerin ölüm kavramları çocuklarınkinden daha soyuttur."
    },
    {
      question: "Aşağıdakilerden hangisi ileri yetişkinlikte 'işleme hızı' konusunda doğrudur?",
      options: ["Hep yavaşlar", "Sağlık ve spor, işleme hızında ne derece azalma olacağını etkileyebilir", "Sadece zekayı etkiler", "Sabit kalır"],
      correctIndex: 1,
      explanation: "Sağlık ve spor, işleme hızında ne derece azalma olacağını etkileyebilir. 6 aylık bir aerobik çalışmasından sonra, yaşlıların tepki süresi görevlerinde gelişme göstermiştir (Kramer vd., 1999)."
    },
    {
      question: "Aşağıdakilerden hangisi yas sürecinde 'özlem' duygusunu tanımlar?",
      options: ["Korku", "Kaybedilen kişiyi geri getirmeye yönelik aralıklarla tekrar eden bir ihtiyacı ya da isteği ifade eder", "Sevinç", "Anlama isteği"],
      correctIndex: 1,
      explanation: "Özlem ya da hasret, kaybedilen kişiyi geri getirmeye yönelik aralıklarla tekrar eden bir ihtiyacı ya da isteği ifade eder."
    },
    {
      question: "Aşağıdakilerden hangisi orta yetişkinlikteki 'din ve sağlık' konusunda doğrudur?",
      options: ["Dini katılım sağlığa zararlıdır", "Dini bağlanmaların kan basıncını düzenlediği ve dini katılımların hipertansiyondaki düşüşle ilişkili olduğu", "Din sağlığı etkilemez", "Sadece beden sağlığını etkiler"],
      correctIndex: 1,
      explanation: "Araştırmacılar dini bağlanmaların kan basıncını ve hipertansiyonu düzenlediğini ve dini katılımların hipertansiyondaki düşüşle ilişkili olduğunu bulmuşlardır (Gillum & Ingram, 2007)."
    },
    {
      question: "Aşağıdakilerden hangisi ileri yetişkinlikte 'yaşlanan beyin' konusunda doğru bir bilgidir?",
      options: ["Beyin tamamen büzüşür", "Beyin 20 ila 90 yaşları arasında ortalama olarak ağırlığının yüzde 5 ila 10'unu kaybeder", "Beyin ağırlığında değişiklik yoktur", "Beyin ağırlığı artar"],
      correctIndex: 1,
      explanation: "Beyin 20 ila 90 yaşları arasında ortalama olarak ağırlığının yüzde 5 ila 10'unu kaybeder. Beynin hacmi de azalır (Bondare, 2007)."
    },
    {
      question: "Yaşlı yetişkin ebeveynler ve yetişkin çocukları arasındaki ilişkilerle ilgili olarak hangi bulgu doğrudur?",
      options: ["İlişkiler daha uzaktır", "Yetişkin kız çocuklar ebeveynlerine günlük faaliyetlerinde 3 kat daha fazla yardım eder", "Çocuklar ebeveynleriyle hiç ilgilenmez", "Erkek çocuklar daha fazla yardım eder"],
      correctIndex: 1,
      explanation: "Yetişkin kız çocukların ebeveynlerine günlük faaliyetlerinde yardımcı olma olasılıkları yetişkin erkek çocuklara göre üç kat daha fazladır."
    },
    {
      question: "Aşağıdakilerden hangisi 'olası benlikler' kavramının tanımıdır?",
      options: ["Mevcut benlik", "Kişilerin olabilecekleri, olmak istedikleri ve olmaktan korktukları benliklerdir", "Sadece geçmiş benlikler", "Toplumsal benlik"],
      correctIndex: 1,
      explanation: "Olası benlikler, kişilerin olabilecekleri, olmak istedikleri ve olmaktan korktukları benliklerdir (Hoppmann & Smith, 2007; Markus & Nurius, 1987)."
    },
    {
      question: "Aşağıdakilerden hangisi Kübler-Ross'un 5 evresinin sıralamasını doğru gösterir?",
      options: ["İnkâr, Uzlaşma, Öfke, Depresyon, Kabullenme", "İnkâr, Öfke, Uzlaşma, Depresyon, Kabullenme", "Öfke, İnkâr, Depresyon, Uzlaşma, Kabullenme", "Uzlaşma, Öfke, İnkâr, Kabullenme, Depresyon"],
      correctIndex: 1,
      explanation: "Kübler-Ross'un 5 evresi: 1. İnkâr ve yalıtılmışlık, 2. Öfke, 3. Uzlaşma, 4. Depresyon, 5. Kabullenme."
    },
    {
      question: "Hangi araştırmacı 'Bir Erkeğin Yaşam Dönemleri' (1978) ile bilinir?",
      options: ["Erik Erikson", "Daniel Levinson", "George Vaillant", "K. Warner Schaie"],
      correctIndex: 1,
      explanation: "Daniel Levinson, klinik psikolog olarak 40 yaşındaki erkeklerle yaptığı görüşmelerin sonuçlarına dayanan 'Bir Erkeğin Yaşam Dönemleri (1978)' çalışmasıyla bilinir."
    },
    {
      question: "Hangisi 'sosyal saat' kavramını öneren araştırmacıdır?",
      options: ["Bernice Neugarten", "Erik Erikson", "Daniel Levinson", "George Vaillant"],
      correctIndex: 0,
      explanation: "Sosyal saat kavramı Bernice Neugarten (1986) tarafından önerilmiştir."
    },
    {
      question: "Yaşlanmanın 'mitokondrial kuramı' nasıl tanımlanır?",
      options: ["Hormonal değişikliklere bağlıdır", "Yaşlanmanın işlev, büyüme ve onarım için enerji sağlayan küçük hücresel cisimler olan mitokondrianın bozulmasından kaynaklandığını savunan", "Telomerler ile ilgilidir", "Bağışıklık sistemine bağlıdır"],
      correctIndex: 1,
      explanation: "Mitokondrial kuram: yaşlanmanın işlev, büyüme ve onarım için enerji sağlayan küçük hücresel cisimler olan mitokondrianın bozulmasından kaynaklandığını savunan kuramdır."
    },
    {
      question: "Aşağıdakilerden hangisi orta yetişkinlik dönemindeki 'üretkenlik' kavramının tanımıdır?",
      options: ["Kişisel başarı", "Yetişkinlerin gelecek nesillere mirasları bırakma istekleri", "Çocuk sahibi olma", "Maddi kazanç"],
      correctIndex: 1,
      explanation: "Üretkenlik, yetişkinlerin gelecek nesillere mirasları bırakma isteklerini kapsar. Yetişkinler bu miras sayesinde bir tür ölümsüzlüğe ulaşırlar (Peterson, 2002)."
    },
    {
      question: "Aşağıdakilerden hangisi yaşlı yetişkinler için 'aktif olmak' konusunda Erickson & Krarner (2009) tarafından önemli bulunmuştur?",
      options: ["Sadece evde kalma", "Düzenli olarak egzersiz yapan, dışarı çıkan, seyahatlere ve toplantılara giden, dini kurum faaliyetlerine katılan yaşlıların daha fazla doyum sağladığı", "Sosyal izolasyon", "Sürekli televizyon izleme"],
      correctIndex: 1,
      explanation: "Erickson ve Krarner (2009) - aktif olmak başarılı yaşlanma açısından önemlidir. Düzenli olarak egzersiz yapan, dışarı çıkan, seyahatlere ve toplantılara giden, dini kurum faaliyetlerine katılan yaşlı yetişkinler daha fazla doyum sağlar."
    },
    {
      question: "Aşağıdakilerden hangisi 'yaşlı yetişkinlerde benlik saygısı' konusunda Robins ve diğerlerinin (2002) bulgusudur?",
      options: ["Benlik saygısı sabit kalır", "Benlik saygısı yirmili yaşlarda artmış, otuzlu ve kırklı yaşlarda dengelenmiş, ellili ve altmışlı yaşlarda kayda değer oranda yükselmiş ve daha sonra yetmişli ve seksenli yaşlarda önemli oranda düşmüştür", "Benlik saygısı sürekli artar", "Benlik saygısı sürekli düşer"],
      correctIndex: 1,
      explanation: "Benlik saygısı yirmili yaşlarda artmış, otuzlu ve kırklı yaşlarda dengelenmiş, ellili ve altmışlı yaşlarda kayda değer oranda yükselmiş ve daha sonra yetmişli ve seksenli yaşlarda önemli oranda düşmüştür."
    },
    {
      question: "Aşağıdakilerden hangisi Genç Yetişkinlik döneminde 'çift cinsiyetli' (biseksüel) bireyleri tanımlar?",
      options: ["Sadece kadınlar", "Bazı bireyler her iki cinsiyeti de cinsel olarak çekici bulmaktadır", "Sadece erkekler", "Cinsel yönelimleri yoktur"],
      correctIndex: 1,
      explanation: "Bazı bireyler ise her iki cinsiyeti de cinsel olarak çekici bulmaktadır. Bu durum biseksüel kavramı ile ifade edilmektedir (Hyde & DeLamater, 2011)."
    },
    {
      question: "Aşağıdakilerden hangisi yaşlı yetişkinlerin yaklaşık yüzde kaçının çocuğunun 65 yaşında veya daha yaşlı olduğunu gösteren oranı verir?",
      options: ["%2", "%10", "%20", "%30"],
      correctIndex: 1,
      explanation: "Yaşlı yetişkinlerin yaklaşık yüzde 10'unun çocukları 65 yaşında ve daha yaşlıdır."
    },
    {
      question: "Aşağıdakilerden hangisi 'kıymak' kavramı ile ilgili Erikson'un yaklaşımıdır?",
      options: ["Kıymak yaşlılıkla ilgilidir", "Yakınlık, birinin kendisini bir başkasında kaybederek kendini bulma süreci biçiminde tanımlanmaktadır", "Kıymak ergenlikle ilgilidir", "Kıymak ilkokulla ilgilidir"],
      correctIndex: 1,
      explanation: "Erikson yakınlığı, birinin kendisini bir başkasında kaybederek kendini bulma süreci biçiminde tanımlamaktadır."
    },
    {
      question: "Hangi araştırmacı yaşlı yetişkinlerde 'başkalarına faydalı olma duygusu' düşük olan kişilerin erken ölüm riskini ortaya çıkarmıştır?",
      options: ["Erikson", "Gruenewald ve diğerleri", "Levinson", "Schaie"],
      correctIndex: 1,
      explanation: "Gruenewald ve diğerleri (2009) - 12 yıllık boylamsal bir çalışma, başkalarına faydalı olma duyguları düşük ve azalmakta olan yaşlı yetişkinlerin erken ölüm risklerinin daha yüksek olduğunu ortaya çıkarmıştır."
    },
    {
      question: "Aşağıdakilerden hangisi 'beyin ölümü' için doğru bir tanımdır?",
      options: ["Vücut işlevlerinin durması", "Ölümün nörolojik açıklamasıdır; beynin elektriksel etkinliğinin belirli bir süre bütünüyle durmasıyla bir insanın beyin ölümü gerçekleşmiş olur", "Sadece kalp atışının durması", "Solunumun durması"],
      correctIndex: 1,
      explanation: "Beyin ölümü, ölümün nörolojik açıklamasıdır. Beynin elektriksel etkinliğinin belirli bir süre bütünüyle durmasıyla bir insanın beyin ölümü gerçekleşmiş olur."
    }
  ]
});

if (typeof module !== 'undefined' && module.exports) {
  module.exports = EXAMS;
}
