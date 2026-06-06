// Klasik (açık uçlu) sorular ve ek genel değerlendirme sınavları
// Bu dosya exams.js'ten sonra yüklenmeli — EXAMS array'ini modifiye eder.

const CLASSIC_BY_EXAM = {
  1: [
    {
      question: "Jeffrey Arnett'in 'yetişkinliğe geçiş' (emerging adulthood) kavramını açıklayınız ve bu dönemin 5 temel özelliğini sıralayınız.",
      answer: "Arnett'e göre 18-25 yaşları arası ergenlikten yetişkinliğe geçiş dönemidir. Beş temel özellik: (1) özellikle aşk ve iş konularında kimlik arayışı, (2) kararsızlık, (3) öze-dönüklük (kendine odaklanma), (4) kararsız duygular ve (5) bireylerin yaşamlarını değiştirme fırsatını yakalayabildikleri olasılıklar dönemi olmasıdır. Bu süreç deneme ve keşifle karakterizedir.",
      keyPoints: ["18-25 yaş", "kimlik arayışı", "kararsızlık", "öze-dönüklük", "kararsız duygular", "olasılıklar", "deneme ve keşif"],
      explanation: "Arnett (2006), ergenlikten yetişkinliğe geçiş döneminin kendine özgü bir gelişim aşaması olduğunu savunur."
    },
    {
      question: "Erikson'un genç yetişkinlik dönemi için tanımladığı 'yakınlığa karşı yalıtılmışlık' krizini açıklayınız.",
      answer: "Erikson, genç yetişkinlik dönemini yakınlığa karşı yalıtılmışlık krizi olarak tanımlar. Yakınlık, birinin kendini bir başkasında kaybederek kendini bulma sürecidir ve bu dönemin birine adanmayı gerektirdiğini öne sürer. Genç yetişkin yakın ilişkiler geliştiremezse yalıtılmışlık duygusu yaşar; bu da kişiliğinde hasarlara yol açar. Yakınlık/samimiyet; kendini açma ve özel düşüncelerin paylaşımıdır.",
      keyPoints: ["yakınlık", "yalıtılmışlık", "kendini açma", "birine adanma", "samimiyet", "kimliğin tamamlanması"],
      explanation: "Erikson'un psikososyal gelişim kuramının 6. evresidir; başarılı çözümü yakın ilişki, başarısızlığı yalnızlıktır."
    },
    {
      question: "Hücresel saat kuramını ve telomerlerin yaşlanmadaki rolünü açıklayınız.",
      answer: "Leonard Hayflick'in hücresel saat kuramına göre, bir insan hücresi yaklaşık 75 ila 80 kez bölünebilir. Yaşlandıkça hücrelerin bölünme kabiliyeti azalır. Kromozomların uçlarını örten DNA dizileri olan telomerler her hücre bölünmesinde giderek kısalır. Telomerlerin yeterince kısalmasıyla hücre bölünmesi durur ve bu da yaşlanma sürecine katkıda bulunur.",
      keyPoints: ["Hayflick", "75-80 bölünme", "telomer", "DNA dizileri", "kromozom uçları", "bölünme kapasitesinin azalması"],
      explanation: "Hücresel saat kuramı, biyolojik yaşlanma kuramlarından biridir; diğerleri evrimsel, serbest radikal, mitokondrial ve hormonal stres kuramlarıdır."
    },
    {
      question: "Kübler-Ross'un ölüm evreleri modelini 5 evresiyle birlikte açıklayınız.",
      answer: "Kübler-Ross (1969) ölmekte olan kişilerin davranış ve düşünme biçimlerini 5 evreyle açıklamıştır: (1) İnkâr ve yalıtılmışlık - kişi gerçekten öldüğünü inkâr eder; (2) Öfke - inkârın yerini öfke, küskünlük, hiddet ve kıskançlık alır; (3) Uzlaşma - ölümün ertelenebileceği umudunu geliştirir; (4) Depresyon - ölümün kesinliğini kabul etmeye başlar, hazırlayıcı keder yaşanır; (5) Kabullenme - huzur duygusu geliştirir, kaderini kabullenir ve çoğu durumda yalnız kalmayı arzular.",
      keyPoints: ["inkâr", "öfke", "uzlaşma", "depresyon", "kabullenme", "hazırlayıcı keder", "5 evre"],
      explanation: "Kübler-Ross'un modeli ölümle yüzleşme sürecinde yaşanan duygusal aşamaları tanımlamak için kullanılan klasik bir çerçevedir."
    },
    {
      question: "Sternberg'in Aşk Üçgeni Kuramı'nı açıklayınız. Boyutları ve farklı kombinasyonlarının doğurduğu aşk türlerini örnekleyiniz.",
      answer: "Sternberg aşkta üç boyut öne sürer: tutku, samimiyet ve bağlanma. Tutku, fiziksel ve cinsel çekim; samimiyet, yakınlık ve duygusal paylaşım; bağlanma ise uzun vadeli adanmadır. Bu üç boyutun farklı kombinasyonları farklı aşk türlerini ortaya çıkarır. Romantik aşk (tutkulu aşk) tutku ve samimiyetin baskın olduğu, genellikle ilişkilerin ilk dönemlerinde görülen türdür. Samimi aşk (yoldaş aşkı) ise samimiyet ve bağlanmanın baskın olduğu, daha olgun aşk türüdür.",
      keyPoints: ["tutku", "samimiyet", "bağlanma", "romantik/tutkulu aşk", "samimi/yoldaş aşkı", "üçgen"],
      explanation: "Sternberg'in kuramı aşkın çok boyutlu doğasını anlamamıza yardımcı olur; farklı kombinasyonlar farklı ilişki türlerini açıklar."
    }
  ],
  2: [
    {
      question: "Yaşlanmanın 5 biyolojik kuramını kısaca açıklayınız.",
      answer: "(1) Evrimsel kuram: Doğal seçilim üreme gücüyle bağlantılı olduğu için yaşlı yetişkinlerdeki zararlı durumları ayıklayamamıştır. (2) Hücresel saat kuramı (Hayflick): Hücreler yaklaşık 75-80 kez bölünür; telomerler her bölünmede kısalır. (3) Serbest radikal kuramı: Hücrelerdeki normal metabolizma kararsız oksijen molekülleri (serbest radikaller) üretir, bunlar DNA'ya zarar verir. (4) Mitokondrial kuram: Enerji sağlayan mitokondrianın bozulması yaşlanmaya neden olur. (5) Hormonal stres kuramı: Hormonal sistemin strese karşı direnci azalır.",
      keyPoints: ["evrimsel", "hücresel saat/Hayflick", "serbest radikal", "mitokondrial", "hormonal stres", "telomer", "DNA hasarı"],
      explanation: "Beş biyolojik kuramın birden fazlasının yaşlanmaya katkıda bulunduğu düşünülmektedir (Miller, 2009)."
    },
    {
      question: "Carstensen'in Sosyoduygusal Seçicilik Kuramı'nı detaylı şekilde açıklayınız.",
      answer: "Laura Carstensen tarafından geliştirilen Sosyoduygusal Seçicilik Kuramı, yaşlı yetişkinlerin sosyal ilişki ağları konusunda daha seçici hale geldiklerini savunur. Duygusal olarak daha fazla değer vermeleri nedeniyle yaşlı yetişkinler tanıdıkları ve ödüllendirici ilişkiler içinde oldukları kişilerle daha fazla zaman geçirirler. Kuram, yaşlıların kasıtlı olarak tanımadıkları kişilerle sosyal ilişki kurmaktan kaçındıklarını ve yakın ilişkiler içinde bulundukları arkadaşları ile aile üyeleri ile görüşmelerini sürdürdüklerini ya da arttırdıklarını savunur. Yaşam süresinin sınırlılığı algısı, duygusal hedefleri ön plana çıkarır.",
      keyPoints: ["Carstensen", "seçici sosyal ağ", "duygusal anlam", "tanıdık kişiler", "yakın ilişkilere odaklanma", "yaşam süresi algısı"],
      explanation: "Bu kuram, yaşlanmaya bağlı sosyal daralmanın bir kayıp değil, seçici bir tercih olduğunu öne sürer."
    },
    {
      question: "Levinson'un 'Bir Erkeğin Yaşam Dönemleri' çalışmasında orta yaş geçişinde başa çıkılması gereken 4 büyük çatışmayı açıklayınız.",
      answer: "Levinson (1978), 40 yaşındaki erkeklerle yaptığı görüşmelere dayanarak orta yaş geçişinde başa çıkılması gereken 4 büyük çatışma tanımlamıştır: (1) Gençliğe karşı yaşlılık - yaşlanma ve ölümle yüzleşme; (2) Yıkıcılığa karşı yapıcılık - üretken olma ve geride iz bırakma; (3) Erkekselliğe karşı kadınsılık - kişiliğin her iki yönünü bütünleştirme; (4) Başkalarıyla birlikte olmaya karşı onlardan ayrı olma - ilişki ve özerklik dengesi. Geçişin başarısı, bu zıtlıkları azaltıp her birinin benliğin bir parçası olduğunu kabul etmeye bağlıdır.",
      keyPoints: ["gençlik-yaşlılık", "yıkıcılık-yapıcılık", "erkekselik-kadınsılık", "birlikte-ayrı", "5 yıl süren geçiş", "%70-80 sancılı geçiş"],
      explanation: "Levinson'a göre orta yaş geçişi yaklaşık 5 yıl sürer (40-45) ve erkeklerin %70-80'i bunu sancılı bulur."
    },
    {
      question: "İkili-süreç modelini ve yas sürecindeki rolünü açıklayınız.",
      answer: "İkili-süreç modeli yasla başa çıkmada iki boyut olduğunu vurgular: (1) Kayıp odaklı stres kaynakları - ölen kişiye odaklanır ve yas süreci ile kaybın olumlu ve olumsuz değerlendirmelerini içerir. Kaybın olumlu değerlendirilmesi ölümün çekilen acılara son verdiği kabulünü, olumsuz değerlendirme ise sevilen kişiye özlem duyma ve ölüm hakkında sürekli düşünüp durmayı içerir. (2) İyileşme odaklı stres kaynakları - yasın dolaylı sonucu olarak ortaya çıkar: kimlik değişimi (eş kimliğinden dul kimliğine), yönetici beceriler (maddi konular). İyileşme süreci 'dünya hakkındaki yıkılan varsayımları' ve kişinin o dünyadaki yerini yeniden inşa eder. İkili-süreç modelinde kayıpla başa çıkma ve iyileşme çabası eş zamanlı gider.",
      keyPoints: ["kayıp odaklı", "iyileşme odaklı", "eş zamanlı", "kimlik değişimi", "dünya varsayımları", "dul kimliği"],
      explanation: "Bu model, yasın doğrusal değil dalgalı bir süreç olduğunu açıklar; kişi iki yönelim arasında gider gelir."
    },
    {
      question: "Bartholomew'un Dörtlü Bağlanma Modeli'ni 4 kategoriyle birlikte açıklayınız.",
      answer: "Bartholomew ve Horowitz (1991) kendilik ve öteki modellerini birleştirerek 4 kategorili yetişkin bağlanma modeli ortaya koymuştur: (1) Güvenli - olumlu benlik, olumlu başkaları: yakın ilişki kurma konusunda rahat ve özerk; (2) Saplantılı - olumsuz benlik, olumlu başkaları: ilişkilere takıntılı, onaylanma ihtiyacı yüksek; (3) Kayıtsız - olumlu benlik, olumsuz başkaları: yakınlığa kayıtsız ve bağımlılık karşıtı; (4) Korkulu - olumsuz benlik, olumsuz başkaları: yakınlıktan korkan ve sosyal açıdan kaçıngan. Olumlu benlikte içsel olarak gelişmiş, kendini seven ve kendine saygı duyan bireyler yer alırken, olumlu başkaları modelinde 'diğerleri'nin güvenilir ve ulaşılabilir olduğuna dair içsel bir inanç bulunur.",
      keyPoints: ["güvenli", "saplantılı", "kayıtsız", "korkulu", "kendilik modeli", "öteki modeli", "olumlu/olumsuz"],
      explanation: "Bartholomew'un modeli, Hazan ve Shaver'ın üçlü modelini genişleterek 4 kategori sunmuştur."
    }
  ],
  3: [
    {
      question: "Bilişsel mekanikler ve bilişsel pragmatikler arasındaki farkı açıklayınız. Bunların akıcı ve kristalize zekayla ilişkisini belirtiniz.",
      answer: "Bilişsel mekanikler zihnin 'donanımı'dır; beynin nörofizyolojik yapısını yansıtır ve duyusal girdi, görsel-motor bellek, ayırt etme, karşılaştırma ve kategorizasyon süreçlerinden oluşan hız ve doğruluğu içerir. Bilişsel pragmatikler ise zihnin kültüre dayalı 'yazılım programları'dır; okuma yazma becerilerini, dilin kavranmasını, eğitimsel-profesyonel becerileri ve yaşamla başa çıkma bilgisini içerir. Bu iki kavram akıcı (mekanikler) ile kristalize (pragmatikler) zeka arasındaki ayrıma benzer (Lovden ve Lindenberg, 2007). Mekanikler/akıcı zeka yaşla düşerken, pragmatikler/kristalize zeka yaşla artmaya devam edebilir.",
      keyPoints: ["mekanikler-donanım", "pragmatikler-yazılım", "akıcı zeka", "kristalize zeka", "Lovden ve Lindenberg", "kültür"],
      explanation: "Bu ayrım, yaşlandıkça neden bazı bilişsel becerilerin düştüğünü ama bazılarının korunduğunu ya da geliştiğini açıklar."
    },
    {
      question: "Demans, Alzheimer ve çoklu damar tıkanmasına bağlı demans arasındaki farkları açıklayınız.",
      answer: "Demans, zihinsel işlevlerin bozulması olan nörolojik bozukluklara verilen genel addır. Alzheimer hastalığı demansın bir türüdür; bellekte, muhakemede, dilde ve sonunda fiziksel işlevlerde derece derece bir bozulmayla kendini gösteren, ilerleyen ve geri dönüşü olmayan bir beyin rahatsızlığıdır. 65 yaş öncesi başlayanlar erken başlangıçlı olarak tanımlanır; hafif düzeyde bilişsel bozulma Alzheimer için risk unsurudur. Çoklu damar tıkanmasına bağlı demans ise cerebral atardamarlarda tekrarlanan, geçici kan akışı engellenmesi sonucunda zihinsel işlevlerde düzensiz ve ilerleyen kayıpları ifade eder; erkeklerde daha yaygındır. Klinik görünümü Alzheimer'dan farklıdır: Alzheimer hastaları sürekli kötüye giderken çoklu damar tıkanmasına bağlı demans hastaları iyileşebilmektedir.",
      keyPoints: ["demans-genel ad", "Alzheimer-geri dönüşsüz", "vasküler-iyileşebilir", "erken başlangıç", "65 yaş öncesi", "erkek yaygın"],
      explanation: "Alzheimer en yaygın demans türüdür ve dünya çapında milyonlarca yaşlıyı etkilemektedir."
    },
    {
      question: "Ötenazi türlerini (pasif ve aktif) ve hospis (imarethane) bakımını karşılaştırarak açıklayınız.",
      answer: "Ötenazi (kolay ölüm), tedavisi imkansız bir hastalığı ya da ağır engeli olan kişilerin yaşamlarını acısız bir şekilde sona erdirme eylemidir. Pasif ötenazi tedaviyi veya yaşam destek üniteleri gibi son vererek kişinin ölmesine izin vermedir. Aktif ötenazi ise ölümcül dozda ilaç verme gibi kasıtlı yollarla hastanın yaşamını sonlandırmadır. Hekim destekli intihar buna örnektir (Jack Kevorkian). Hospis/imarethane ise kişilerin yaşamlarının sonunu mümkün olduğunca ağrısız, kaygısız ve depresyonsuz geçirmelerini sağlamaya çalışan bir programdır. İmarethanenin amacı hastalığı iyileştirmek ya da ömrü uzatmak değil, acıyı azaltma ve onurlu bir biçimde ölmelerine yardımcı olmaktır. Yatıştırıcı (palliative) bakım imarethanelerde uygulanır ve hizmetlerin yaklaşık %90'ı hastaların evinde verilmektedir.",
      keyPoints: ["pasif ötenazi", "aktif ötenazi", "Kevorkian", "imarethane", "palyatif bakım", "onurlu ölüm", "%90 evde"],
      explanation: "Ötenazi etik tartışmaları sürdürmekte olan bir konudur; hospis bakımı ise yaygın olarak kabul gören bir yaklaşımdır."
    },
    {
      question: "Ödünleme yoluyla seçici optimizasyon (SOC) kuramını üç bileşeniyle birlikte ve Arthur Rubinstein örneği üzerinden açıklayınız.",
      answer: "SOC kuramı, yaşlı yetişkinlerin nasıl yeni kaynaklar ürettiklerini ve görevleri etkili bir şekilde paylaştırdıklarını açıklar. Üç bileşeni vardır: (1) Seçme - yaşlı yetişkinlerde eksilen kapasite ve fonksiyon kaybı anlayışına dayanır; bu da yaşam alanlarının çoğunda performans azalmasına yol açar, dolayısıyla seçme yapılır. (2) Optimizasyon - sürekli alıştırma ve yeni teknolojileri kullanarak bazı alanlarda performansın sürdürülebileceğini önermektedir. (3) Ödünleme - yaşam görevleri yaşlı yetişkinin o anki performans potansiyelinin ötesinde bir kapasite gerektirdiği zaman ortaya çıkar. Klasik örnek piyanist Arthur Rubinstein'dır: yaşlandıkça daha az parça çalmış (seçme), seçtiklerini daha fazla pratik etmiş (optimizasyon) ve hızlı geçişler için tempoyu yavaşlatıp kontrastı arttırmıştır (ödünleme).",
      keyPoints: ["seçme", "optimizasyon", "ödünleme", "Arthur Rubinstein", "performans potansiyeli", "kapasite eksilmesi"],
      explanation: "Baltes ve arkadaşları tarafından geliştirilen bu kuram başarılı yaşlanma çerçevesinde merkezi bir yere sahiptir."
    },
    {
      question: "Genç yetişkinlik dönemindeki Tannen'in 'rapport talk' ve 'report talk' kavramlarını açıklayınız. Cinsiyetle ilişkisini değerlendiriniz.",
      answer: "Tannen iki iletişim biçimi öne sürmektedir: (1) Uyuma dayalı konuşma (rapport talk) - bağların oluşturulması ve müzakere ilişkileri esastır; ilişki kurma ve duygusal bağ amaçlıdır. (2) Resmi konuşma (report talk) - bilgi verme esastır; somut bilgi aktarma ve durum tanımlama odaklıdır. Tannen'e göre kadınlar genellikle rapport talk kullanmaktadır; kelimeleri kendilerinin ve başkalarının yaptıklarını tartışmak, şüphe gibi içsel süreçlerini başkalarına aktarmak amacıyla kullanırlar. Erkekler ise report talk kullanma eğilimindedir; kelimeleri dışsal olaylar, nesneler ve iş, para, spor gibi dışsal süreçlere yönelik kullanmaktadır. Bu durum, kadınların iletişimde sorun paylaşma, erkeklerin sorun paylaşmama eğiliminden de gözlenmektedir.",
      keyPoints: ["rapport talk", "report talk", "kadın-bağ kurma", "erkek-bilgi verme", "iç süreçler", "dış süreçler"],
      explanation: "Tannen'in modeli cinsiyet farklılıklarını kalıp yargılarla açıklaması nedeniyle eleştirilse de iletişim örüntülerini anlamada kullanışlıdır."
    }
  ],
  4: [
    {
      question: "Klimakterik, menopoz ve orta yaşlı erkeklerdeki hormonal değişiklikleri karşılaştırarak açıklayınız.",
      answer: "Klimakterik, doğurganlığın azaldığı orta yaşa geçişi tanımlamak için kullanılan terimdir. Menopoz, bir kadının menstrual döneminin tamamen bitmesi olup genellikle 40'lı yaşların sonunda ya da 50'lerin başında ortaya çıkar; kadınlar son dönemi ortalama 51 yaşında yaşar (39-59 arası olabilir). Menopozda yumurtalıklar tarafından üretilen östrojen aniden azalır; bazı kadınlarda sıcak basması, mide bulantısı, yorgunluk ve hızlı kalp atışı gibi olumsuz belirtilere yol açar. Düzenli sigara içen kadınlar 1-2 yıl daha erken menopoza girerler. Orta yaşlı erkeklerde durum farklıdır: üremeyi kaybetmezler, ancak testosteron üretimi orta yetişkinlik boyunca yılda yaklaşık %1 oranında düşmeye başlar ve sperm sayısı yavaş bir düşüş gösterir. Erektil fonksiyon bozukluğu (tatmin edici cinsel performansa yol açan ereksiyonun sağlanmaması) görülebilir.",
      keyPoints: ["klimakterik-geçiş", "menopoz 51 yaş", "östrojen azalması", "sıcak basması", "testosteron %1/yıl", "erektil fonksiyon"],
      explanation: "Kadınlar ve erkekler orta yaşta hormonal değişiklikleri farklı şekilde yaşar; menopoz net bir son verirken erkekteki süreç kademelidir."
    },
    {
      question: "Erikson'un 'üretkenliğe karşı verimsizlik' dönemini açıklayınız ve günlük yaşamdan örnekler veriniz.",
      answer: "Erikson'a göre üretkenlik, orta yetişkinlikte yetişkinlerin gelecek nesillere mirasları bırakma isteklerini kapsar; yetişkinler bu miras sayesinde bir tür ölümsüzlüğe ulaşırlar. Üretken bireyler çocuk yetiştirme, mentörlük yapma, topluma katkıda bulunma, sanat veya bilim üretme, gönüllü çalışma gibi yollarla iz bırakmaya yönelir. Verimsizlik (bazen kendi kendini soğurma-emilim denen) ise bireylerin gelecek nesiller için hiçbir şey yapmadıkları duygusunu yaşamasıdır; içe dönük, kendi ihtiyaçlarına saplanmış ve durağan bir yaşam anlamına gelir. Örnek: çocuklarına değerler aktaran bir ebeveyn, genç meslektaşlarına rehberlik eden bir profesyonel veya topluluk projelerinde gönüllülük yapan bir orta yaşlı kişi üretkenliği yaşar.",
      keyPoints: ["üretkenlik", "verimsizlik/durağanlık", "miras bırakma", "kendi kendini soğurma", "gelecek nesil", "ölümsüzlük"],
      explanation: "Erikson'un kuramında her psikososyal evre olumlu ve olumsuz iki kutbu içerir; orta yetişkinliğin görevi üretken olmayı seçmektir."
    },
    {
      question: "Costa ve McCrae'nin Beş Büyük Faktör (Big Five) kişilik modelini ve faktörleri açıklayınız.",
      answer: "Costa ve McCrae'nin Baltimore Çalışması yaklaşık 1000 tane 20-90 arası üniversite mezunu kadın ve erkek üzerinde yapılmıştır. Beş büyük faktör kişilik testini kullanarak araştırmacılar beş büyük kişilik yapısında büyük oranda istikrarın (stabilite) olduğu sonucuna varmışlardır. Faktörler: (1) Yaşantıya açıklık (openness to experience) - yaratıcılık, merak, yeni deneyimlere açık olma; (2) Sorumluluk (conscientiousness) - düzenlilik, disiplinli olma, hedefe yönelik davranma; (3) Dışa dönüklük (extraversion) - sosyallik, enerji, sosyal etkileşim arama; (4) Yumuşak başlılık (agreeableness) - empati, kooperatif olma, başkalarıyla geçinme; (5) Nevrotizm-duygusal denge (emotional stability) - kaygı, duygusal istikrar veya istikrarsızlık. Veri toplama 1950'lerin ortalarında başladı ve hâlâ devam etmektedir.",
      keyPoints: ["açıklık", "sorumluluk", "dışa dönüklük", "yumuşak başlılık", "nevrotizm", "Baltimore", "stabilite"],
      explanation: "Big Five modeli kişilik psikolojisinde en yaygın kabul gören modeldir ve sağlık ve uzun ömürle ilişkileri çok araştırılmıştır."
    },
    {
      question: "Yaslarda 'mahrum kalınmış yas' kavramını açıklayınız ve örnekler veriniz.",
      answer: "Mahrum kalınmış yas, kişinin açık bir biçimde yası tutulamayacak ya da desteklenemeyecek, sosyal olarak belirsiz bir kayıp için yaşadığı yası ifade eder (Aloi, 2009; Hendry, 2009). Bu yas türünde toplum kaybı kabul etmediği ya da görmezden geldiği için yaşanan acı dışa vurulamaz, paylaşılamaz ve dolayısıyla iyileşme süreci zorlaşır. Mahrum kalınmış yas örnekleri arasında eski eşle ilişki gibi sosyal açıdan kabul görmeyen bir ilişkinin kaybı, kürtaj gibi gizli bir kayıp ve AIDS nedeniyle ölüm gibi etiketlenmiş ölüm biçimleri sayılabilir. Eşcinsel partnerin ölümü veya evcil hayvan kaybı da bu türe örnek olabilir. Bu durumlarda yas sürecinin uzaması ve karmaşıklaşması riski artar.",
      keyPoints: ["sosyal olarak belirsiz", "kabul görmeyen", "eski eş", "kürtaj", "AIDS", "etiketlenmiş ölüm"],
      explanation: "Mahrum kalınmış yas, sosyal destek eksikliği nedeniyle psikolojik açıdan daha zor atlatılır."
    },
    {
      question: "Genç yetişkinlikte yaratıcılık ve kariyer gelişimi süreçlerini ilişkilendirerek açıklayınız.",
      answer: "Genç yetişkinlik dönemi yaratıcılık için önemli bir dönemdir. Lehman (1960) en yaratıcı ürünlerin otuzlu yaşlarda üretildiğini ve en önemli yaratıcı katkıların %80'inin 50'li yaşlarda tamamlandığını tespit etmiştir. Yaratıcılık doruk noktasına 40'lı yaşlarda ulaşır, sonra düşmeye başlar (Simonton, 1996). Bu dönemde kariyer yapılanması da gerçekleşir; insanların iş seçimlerinde etkili olan faktörler ve kariyer kurma genç yetişkinlik döneminin önemli konularındandır. William Damon'un çalışmasında gençlerin %25'i ne yapmak istediğini bilirken, %60'ı makul planlama yapmakta ve %20'sinin ise herhangi bir beklentisi olmadığı tespit edilmiştir. Bireyin sahip olduğu iş yaşamını ciddi biçimde şekillendirir (Blustein, 2008); nerede, nasıl yaşadığını, arkadaşlarının kimler olduğunu ve sağlık durumunu etkiler.",
      keyPoints: ["30'lu yaşlar yaratıcılık", "%80 50'lerde", "40'lı yaşlarda doruk", "Damon %25-60-20", "iş kimlik", "kariyer kurma"],
      explanation: "Genç yetişkinlik hem fiziksel hem zihinsel performans olarak doruk dönemidir; yaratıcı ve mesleki çıktılar bu dönemde şekillenir."
    }
  ],
  5: [
    {
      question: "Yetişkinliğin belirleyicilerini açıklayınız. Yetişkin olmak için hangi koşullar gereklidir?",
      answer: "Yetişkinliğin belirleyicileri olarak üç temel kriter sayılır: (1) Bireylerin okulunu bitirdikten sonra sürekli, tam zamanlı bir işe başlayabilmesi; (2) Ekonomik bağımsızlık - bir çalışmada yetişkinliğe geçişte 17-27 yaş grubunda 10 yıllık bir aralığın olduğu ve bu aralıkta katılımcıların çoğunun ekonomik bağımsızlık elde etmede iniş ve çıkışlar sergilediği tespit edilmiştir; (3) Bireylerin sorumluluk alabilmesi - hem ebeveynler hem de üniversite öğrencileri, bireyin yaptıklarının sorumluluğunu almasının ve duygusal kontrol geliştirebilmesinin yetişkinliğin önemli belirleyicileri olarak gördükleri bulunmuştur (Nelson ve diğerleri, 2007). Yetişkin olmak bir olay değil bir süreçtir.",
      keyPoints: ["sürekli tam zamanlı iş", "ekonomik bağımsızlık", "17-27 yaş", "sorumluluk", "duygusal kontrol", "Nelson 2007"],
      explanation: "Yetişkinliğin belirleyicileri kültürlere göre değişebilir, ancak modern toplumlarda bu üç kriter yaygın olarak kabul edilir."
    },
    {
      question: "Schaie'nin Seattle Boylamsal Çalışmasında test edilen 6 zihinsel yeteneği sıralayıp orta yetişkinlikteki seyirlerini açıklayınız.",
      answer: "Seattle Boylamsal Çalışması, K. Warner Schaie tarafından 1956'da başlatılmıştır ve 7 yıllık aralıklarla yenilenmiştir (1963, 1970, 1977, 1984, 1991, 1998, 2005). Test edilen 6 temel zihinsel yetenek: (1) Kelime Bilgisi, (2) Sözel Bellek, (3) Sayı, (4) Mekânsal Oryantasyon, (5) Tümevarımsal Muhakeme, (6) Algısal Hız. Hem erkekler hem de kadınlar için sözel yetenek, sözel bellek, tümevarımsal muhakeme ve mekânsal oryantasyondaki en yüksek performans orta yaştadır. Altı yetenekten sadece sayı ve algısal hızda orta yaşta düşme olur; algısal hız en erken düşüşü gösterir ve ilk yetişkinlikte başlar. Schaie (1994) zihinsel yetenekleri hem enlemesine-kesitsel hem de boylamsal olarak ölçtüğünde, enlemesine-kesitsel ölçümlerde boylamsala göre daha çok düşüş olduğunu da bulmuştur.",
      keyPoints: ["6 yetenek", "kelime bilgisi", "sözel bellek", "sayı", "mekânsal", "tümevarım", "algısal hız", "Schaie 1956"],
      explanation: "Seattle çalışması zihinsel yeteneklerin yaşa bağlı seyrini anlamada en kapsamlı boylamsal çalışmalardan biridir."
    },
    {
      question: "Beyin ölümü, yaşam vasiyeti ve önceden kararların etik açıdan önemini açıklayınız.",
      answer: "Beyin ölümü ölümün nörolojik açıklamasıdır; beynin elektriksel etkinliğinin belirli bir süre bütünüyle durmasıyla bir insanın beyin ölümü gerçekleşmiş olur. Belirli bir süre kaydedilen düz EEG kaydı beyin ölümü için bir ölçüttür. Günümüzde çoğu doktorun kabul ettiği beyin ölümü tanımı hem yukarı kortikal işlevlerin hem de aşağı beyin kökü işlevlerinin durması şeklindedir (Truog, 2008). Ciddi hastalıkların ve kazaların söz konusu olduğu durumlarda hastalar kararlar verme konusunda yeterli olmayabilirler. Bu nedenle bireyler önceden karar alabilirler. 'Ölüm Tercihi (Choice in Dying)' adlı örgüt yaşam vasiyeti adında bir şey ortaya atmıştır. Bu doğal ölüm yasası, ölümcül derecede hasta olan kişilerin acı içinde ve bitkisel hayatta yaşamak yerine ölmeyi tercih edebileceği ihtimaline dayanır. Yaşam vasiyeti kişinin otonomisini korur ve aile için karar yükünü azaltır.",
      keyPoints: ["beyin ölümü-nörolojik", "düz EEG", "kortikal+beyin kökü", "Truog 2008", "yaşam vasiyeti", "Choice in Dying", "doğal ölüm yasası"],
      explanation: "Bu konular tıp etiği, hasta hakları ve aile karar verme süreçlerinin kesişiminde yer alır."
    },
    {
      question: "Vaillant'ın yetişkin gelişimi üzerine üç boylamsal çalışmasını ve bulgularını açıklayınız.",
      answer: "Vaillant (2002) yetişkin gelişimi ve yaşlanma üzerine üç adet boylamsal çalışma yürütmüştür: (1) Sosyal olarak avantajlı, 1920'lerde doğan Harvard mezunlarının yer aldığı örnek ('Grant Study' denen); (2) Sosyal olarak dezavantajlı, 1930'larda doğan 450 erkeğin yer aldığı örnek; (3) 1910'larda doğmuş entelektüel kabiliyeti olan 90 kadının yer aldığı örnek. Bu bireyler üzerinde 1920'lerden 1940'larda başlayan, hayatta varsa sayısız kez değerlendirme yapılmıştır. Vaillant 75 ile 85 yaş arasındaki bireyleri 'mutlu-iyi', 'üzgün-hasta' ve 'ölü' olarak kategorize etti. Çalışmasındaki çarpıcı bir bulguya göre 50 yaşında alkol kullanma ve sigara içme, bireylerin 75-80 yaşlarında ölüp ölmeyeceklerinin en iyi göstergeleridir. Vaillant ayrıca orta yaş krizinin yetişkinlerin sadece küçük bir azınlığında görüldüğünü savunmuştur (Levinson'un görüşüne karşıt olarak).",
      keyPoints: ["Grant Study", "Harvard 1920", "dezavantajlı 1930", "kadınlar 1910", "mutlu-iyi/üzgün-hasta/ölü", "50 yaş alkol-sigara", "75-80 yaş"],
      explanation: "Vaillant'ın çalışmaları yaşam tarzı seçimlerinin uzun vadeli sonuçlarını gösteren önemli kanıtlar sunmuştur."
    },
    {
      question: "Yaşlanma sürecinde 'kullan ya da kaybet' kavramını ve bilişsel becerilerin geliştirilebilirliğini açıklayınız.",
      answer: "Bilişsel faaliyet örüntülerindeki değişimler, bilişsel becerilerin kullanılmamasından ve bunun sonucunda da atrofi oluşmasından kaynaklanmaktadır (Hughes, 2010). 'Kullan ya da kaybet' kavramı bu durumu ifade eder. Yaşlı yetişkinlerde bilişsel becerilerin devam etmesine katkıda bulunma olasılığı olan zihinsel faaliyetler arasında kitap okuma, bulmaca çözme, derse ve konsere gitme sayılabilir. Bilişsel becerilerin geliştirilebilirliği konusunda Sherry Willis ve meslektaşlarının (2006) yakın zamanda gerçekleştirdiği kapsamlı çalışmada, yaşlı yetişkinler seçkisiz olarak seçilip dört gruptan birine yerleştirilmiştir: (1) Muhakeme, (2) Bellek, (3) İşleme hızı eğitimi alan gruplar ya da (4) Eğitim almayan kontrol grubu. Her eğitim türü kendi alanında hemen etkisini göstermiştir; muhakeme eğitimi muhakemeyi geliştirmiş, bellek eğitimi belleği geliştirmiştir. Ancak eğitimin etkileri diğer bilişsel alanlara transfer edilmemiştir.",
      keyPoints: ["kullan ya da kaybet", "atrofi", "kitap-bulmaca-konser", "Willis 2006", "muhakeme/bellek/işleme hızı", "transfer olmama"],
      explanation: "Bilişsel rezerv kavramı ve nöroplastisite araştırmaları bu yaklaşımı desteklemektedir."
    }
  ]
};

// 6-10 arası sınavlara klasik soruları ekle
Object.assign(CLASSIC_BY_EXAM, {
  6: [
    {
      question: "Hazan ve Shaver'ın üçlü yetişkin bağlanma modelini açıklayınız ve her kategoriyi tanımlayınız.",
      answer: "Hazan ve Shaver (1987) yetişkin bağlanmasını öncekı yıllarda yapılan çalışmalardan yararlanarak üç kategoride ele almıştır: (1) Güvenli bağlanma - birey yakın ilişkilerde rahattır, başkalarına güvenir ve duygusal yakınlığı destekler. Yakınlık konusunda kaygı duymaz. (2) Kaygılı/Kararsız bağlanma - bireyin yakın ilişkilerinde kararsızlık görülür; ilişkilerini terk edilme korkusuyla idame ettirir, ilişki onayı için sürekli ihtiyaç hisseder. (3) Çekingen bağlanma - bireyler yakın ilişkilerden uzak durur, duygusal bağ kurmaktan kaçınır ve özerklikle tanımlanır. Bu üçlü model Bartholomew tarafından kendilik ve öteki modeli boyutları eklenerek dörtlü modele genişletilmiştir.",
      keyPoints: ["güvenli", "kaygılı/kararsız", "çekingen", "Hazan Shaver 1987", "bağlanma stilleri", "yakın ilişkiler"],
      explanation: "Bowlby ve Ainsworth'un çocukluk bağlanma çalışmalarını yetişkinliğe uyarlama girişimidir."
    },
    {
      question: "Genç yetişkinlikte alkolizm ve sigara kullanımının sağlığa etkilerini açıklayınız.",
      answer: "Alkolizm, sağlığa ve sosyal ilişkilere ciddi biçimde zarar veren; uzun süreli, tekrarlanan, kontrol dışı, takıntılı ve aşırı miktarda alkollü içecek tüketimini içeren bir bozukluktur. Sigara ve nikotin konusunda birçok çalışmada sigaranın zararları vurgulanmaktadır (Amerikan Kanser Topluluğu, 2010). Örneğin, kanserden ölümlerin %30'u, kalp hastalıkları ölümlerinin %21'i ve akciğer hastalıklarından ölümlerin %82'si sigaraya bağlı olarak gerçekleşmektedir. Türkiye'de 2018 EGM araştırmasına göre genel nüfusta tütün kullanım oranı %47, alkol kullanım oranı %22.1'dir. Yaşlı yetişkinlerde alkol kullanımı sakinleştirici ya da yatıştırıcılarla birleştiğinde solunumu bozabilmekte, aşırı sedasyona yol açabilmekte ve öldürücü olabilmektedir.",
      keyPoints: ["alkolizm-kontrol dışı", "sigara %30 kanser", "%21 kalp", "%82 akciğer", "Türkiye tütün %47", "alkol+yatıştırıcı tehlikeli"],
      explanation: "Madde bağımlılığı genç yetişkinlikte yaygın bir halk sağlığı sorunudur ve uzun vadeli sonuçları çok ciddidir."
    },
    {
      question: "Levinson'a göre orta yaş geçişi nasıl sürecektir ve neden çoğu erkek için sancılı geçer?",
      answer: "Levinson'a göre, orta yaş yetişkinliğine geçiş yaklaşık 5 yıl sürer (40 yaşından 45 yaşına kadar) ve yetişkin erkeğin ergenlikten itibaren hayatında var olan 4 büyük çatışma ile baş etmesi gerekir: gençliğe karşı yaşlılık, yıkıcılığa karşı yapıcılık, erkekselliğe karşı kadınsılık ve başkaları ile birlikte olmaya karşı onlardan ayrı olma. Levinson'un görüştüğü erkeklerin %70-80'i, yaşamlarının birçok yönünün gündeme gelmesinden dolayı, geçiş sürecini sarsıntılı ve psikolojik olarak sancılı bulmuştur. Levinson'a göre, orta yaş geçişinin başarısı bireyin zıtlıkları ne kadar etkili azalttığına ve bunların her birinin kendi benliğinin bir parçası olduğunu kabul etmesine bağlıdır. Vaillant ise (1977) yetişkinlerin sadece küçük bir azınlığının bu krizi yaşadığını savunmaktadır.",
      keyPoints: ["5 yıl geçiş", "40-45 yaş", "4 çatışma", "%70-80 sancılı", "zıtlıklar", "bütünleştirme"],
      explanation: "Levinson'un görüşü orta yaş krizini bir norm olarak görürken, Vaillant'ın görüşü bunu istisna olarak değerlendirir."
    },
    {
      question: "Episodik bellek, anlamsal bellek ve çalışma belleği arasındaki farkları açıklayınız.",
      answer: "Episodik bellek yaşam olaylarının nerede ve ne zaman olduğuyla ilgili bilginin korunmasıdır. Örneğin, küçük kardeşin doğduğunda neye benziyordu, ilk doğum günümüzde ne oldu ve bu sabah kahvaltıda ne yediğin gibi bilgiler episodik belleğe aittir. Anlamsal bellek insanın dünya hakkındaki bilgileridir. Bu bilgiler, bir satranç ustasının satranç bilgisi gibi kişinin uzman olduğu alanı; geometri gibi okulda öğrenilen genel akademik bilgileri de içerir. İleri yetişkinlik döneminde anlamsal belleğin birçok boyutu iyi şekilde korunmaktadır. Çalışma belleği ise bireylerin karar verirken, problem çözerken, yazılan ve konuşulan dili kavrarken bilgiyi değişimlemesine ve kurgulamasına izin veren zihinsel bir 'iş tezgâhına' (work bench) benzer. Yaşlı yetişkinlerin yaygın bellek problemi 'dilin ucunda fenomeni' (DUF), anlamsal bellekte kelime geri çağırma sürecini etkiler.",
      keyPoints: ["episodik-nerede ne zaman", "anlamsal-dünya bilgisi", "çalışma belleği-iş tezgâhı", "DUF", "uzmanlık", "geri çağırma"],
      explanation: "Farklı bellek türleri farklı yaşa bağlı seyirler izler; anlamsal bellek iyi korunurken çalışma belleği yaşla zayıflar."
    },
    {
      question: "Yas süresinde 'sağlıklı yas' boyutlarını ve kültürel çeşitliliği örnekleriyle açıklayınız.",
      answer: "Sağlıklı yas boyutları olarak duygusal uyuşukluk, inanmama, ayrılık kaygısı, çaresizlik, üzüntü ve yalnızlık sayılır. Özlem ya da hasret, kaybedilen kişiyi geri getirmeye yönelik aralıklarla tekrar eden bir ihtiyacı ya da isteği ifade eder. Maciejevvski (2007) bu olumsuz duyguların 6 ay içerisinde azaldığını ve kabullenmenin gerçekleştiğini bulmuştur. Kültürel çeşitlilik açısından: Japonya'da ölen kişiyle bağların sürdürülmesi, kabul gören ve dini törenlerle devam ettirilen bir şeydir. Arizona'daki Hopi kabilesinde ise ölen kişi olabildiğince kısa zamanda unutulur ve hayat normal akışında devam eder; Hopilerde cenaze törenleri ölüler ile ruhları arasındaki bağın kopması ile sona erer. Naaş yakımı Amerika'nın Pasifik bölgesinde, güney bölgesine göre daha yaygındır; ayrıca Kanada'da Amerika'dan daha yaygındır ve en fazla Japonya'da ve pek çok Asya ülkesinde uygulanmaktadır. Bazı kültürlerde ölümden sonra törensel bir yemek verilir; bazılarında bir yıl boyunca siyah kolluk takılır.",
      keyPoints: ["6 ay azalma", "Maciejevvski", "Japonya-bağ sürdürme", "Hopi-unutma", "Pasifik-naaş yakımı", "siyah kolluk", "duygusal uyuşukluk"],
      explanation: "Yas evrensel bir deneyim olsa da, kültürel bağlam yas ifadesini, ritüellerini ve süresini şekillendirir."
    }
  ],
  7: [
    {
      question: "Genç yetişkinlikte cinsel etkinlik ve cinsel eğilimleri Hyde ve DeLamater'ın çalışması bağlamında açıklayınız.",
      answer: "Genç yetişkinlik döneminde birçok birey evlenmekte ve cinsel olarak aktif olmaktadır. ABD'de erkekler için evlenme yaşı ortalama 27, kızlar için 26 olarak tespit edilmiştir. Türkiye'de TÜİK 2013 verilerine göre erkeklerde 27.3, kadınlarda 24.1 olan ortalama ilk evlilik yaşı, geçen yıl erkeklerde 27.7'ye, kadınlarda 24.6'ya çıkmıştır. Erkekler cinselliği kadınlara göre daha çok akıllarına getirmektedir: erkek katılımcıların %54'ü her gün ya da günde birkaç kez cinselliği akıllarına getirdiklerini, kadınların %67'si haftada ya da ayda birkaç kez akıllarına geldiğini belirtmiştir. 19. yüzyılın sonlarına kadar insanların ya heteroseksüel ya da homoseksüel oldukları düşünülmekteydi; günümüzde ise cinsel tercihlerin arasında kesin bir ayrımın söz konusu olmadığı, aksine aynı kişilerin erkek-kadın ilişkileri yanı sıra hem cinsiyle de ilişki kurabildikleri görülmektedir (Hyde & DeLamater, 2011). Bu durum biseksüel kavramı ile ifade edilmektedir.",
      keyPoints: ["evlilik yaşı 27/26", "TÜİK Türkiye", "erkek %54", "kadın %67", "biseksüel", "Hyde DeLamater"],
      explanation: "Cinsel yönelim modern psikolojide bir spektrum olarak ele alınmaktadır, ikili kategorilerden ziyade."
    },
    {
      question: "İleri yetişkinlikte yaşlı yetişkinlere yönelik kalıp yargıları ve yaş ayrımcılığını açıklayınız.",
      answer: "Yaşlı yetişkinlerin sosyal katılımı, yaşlarından dolayı diğerlerine özellikle de yaşlı yetişkinlere karşı önyargılı olmak anlamına gelen yaş ayrımcılığı nedeniyle çoğunlukla engellenmektedir. Yaşlı yetişkinler çoğunlukla mantıklı düşünme, yeni şeyler öğrenme, topluma katkıda bulunma ve sorumluluk içeren işleri yürütme becerisinden yoksun olarak algılandıkları ve ayrımcılığa maruz kaldıkları için fazla kibar ya da çekingen olabilmektedirler. Yaşlı yetişkinler, yaşları nedeniyle oluşan kalıp yargılardan dolayı yeni işlere alınmayabilmekte, eski işlerinden çıkarılabilmekte, sosyal anlamda soyutlanabilmekte ve aile yaşamının dışına itilebilmektedirler. Toplumsal politika sorunları yaşlanmakta olan toplum ve bu toplum içinde yaşlı kişilerin konumları olarak gündeme gelmektedir; ekonomik durum, sağlık hizmetlerinin sunumu, yaşlı yetişkinlere bakan ailelere destek sağlanması ve kuşaklar arasındaki eşitsizlikler bunlar arasındadır.",
      keyPoints: ["yaş ayrımcılığı", "kalıp yargılar", "iş kaybı", "sosyal soyutlanma", "politika sorunları", "kuşak eşitsizliği"],
      explanation: "Yaş ayrımcılığı sadece bireysel bir tutum değil, toplumsal ve kurumsal bir sorundur."
    },
    {
      question: "Genç yetişkinlikte cinsel yolla bulaşan hastalıkları (CYBH) sınıflandırarak açıklayınız.",
      answer: "Cinsel yolla bulaşan hastalıklar (sexually transmitted infections-STIs), özellikle cinsel ilişki yoluyla bulaşan hastalıklardır. Belirtilen hastalıklar her altı Amerikalı'nın birini etkilemektedir (Ulusal Sağlık İstatistik Merkezi, 2010). En yaygın olarak görülen hastalıklar iki kategoride sınıflandırılır: (1) Bakteriler yoluyla bulaşan hastalıklar: bel soğukluğu, frengi, parariketsiyoz vb. enfeksiyonlar; (2) Virüsler yoluyla bulaşan hastalıklar: genital uçuk, genital tümörler ve AIDS'e sebep olan HIV virüsü. Genç yetişkinlikte sosyal ilişkiler ve cinsel etkinlik artmakta olduğundan, CYBH risklerine maruz kalma da artmaktadır. Eğitim, koruyucu önlemler ve düzenli tarama bu hastalıklarla mücadelede önemli stratejilerdir.",
      keyPoints: ["STI/CYBH", "bakteriyel-bel soğukluğu/frengi", "viral-uçuk/HIV", "her 6 kişiden 1", "AIDS"],
      explanation: "CYBH'ler özellikle 18-29 yaş arası en yaygın olarak görülür ve uzun vadeli sağlık sorunlarına yol açabilir."
    },
    {
      question: "Yaşlanmanın hormonal stres kuramını ve bağışıklık sistemiyle ilişkisini açıklayınız.",
      answer: "Hormonal stres kuramı, vücudun hormonal sistemindeki yaşlanmanın strese karşı direnci azaltabileceği ve hastalık olasılığını arttırabileceğini savunan bir kuramdır. Bu, beş biyolojik yaşlanma kuramından biridir. Bağışıklık sistemi açısından, hormonal stres kuramında daha önce de açıklanmış olduğumuz gibi yaşlı yetişkinlerde stres süresinin uzaması ve azalan yenileyici süreçler yaşlanmanın bağışıklık üzerindeki etkilerini hızlandırabilmektedir. Yaşlandıkça vücudun strese tepki vermesi ve toparlanması yavaşlar, bu da kronik hastalıklara, enfeksiyonlara ve bilişsel düşüşe karşı savunmayı zayıflatır. Stres hormonlarının (kortizol gibi) uzun süreli yüksek düzeylerde kalması hipokampüs gibi hafıza yapılarına da zarar verebilir.",
      keyPoints: ["hormonal stres kuramı", "strese direnç azalır", "hastalık olasılığı", "bağışıklık etkilenir", "uzun stres süresi", "yenileyici süreç azalır"],
      explanation: "Hormonal stres kuramı, beden-zihin bağlantısını ve stresin yaşlanmadaki rolünü vurgulayan biyolojik bir modeldir."
    },
    {
      question: "İmarethane (hospis) bakımı, yatıştırıcı bakım ve yaşamın sonu kararlarının insancıl boyutlarını açıklayınız.",
      answer: "Gereklilik: Ölmekte olan kişiler çoğu zaman ya çok az ya da çok fazla bakım görürler. Bilimsel gelişmeler bazen kaçınılmaz olanı geciktirerek ölümü zorlaştırır. Birçok sağlık çalışanı, yeterli yaşam sonu bakımı sağlama ya da bunun anlamı konusunda eğitimli değillerdir. Sağlık çalışanlarına 'iyi bir ölüm' yaşamaları konusunda yardım etmeye olan ilgileri giderek artmaktadır (Bradley & Brasel, 2009). Bir görüş, iyi bir ölüm deneyiminin fiziksel rahatlık, sevilen kişilerin desteği, kabullenme ve uygun tıbbi bakımı içerdiği yönündedir. İmarethane/Bakımevi: Kişilerin yaşamlarının sonunu mümkün olduğunca ağrısız, kaygısız ve depresyonsuz geçirmelerini sağlamaya çalışan bir programdır. Amacı hastalığı iyileştirmek ve ömrü uzatmak olan hastanelerden farklı olarak bakımevlerinin amaçları acıyı azaltma ve insanların onurlu bir biçimde ölmelerine yardımcı olmayı içerir. Yatıştırıcı (Palliative) bakım imarethanelerde uygulanan bakım türüdür. Ağrıyı azaltma ve insanların onurlarıyla ölmelerine yardımcı olmayı içerir. Günümüzde imarethane hizmetlerinin yaklaşık %90'ı hastaların evinde verilmektedir (Hayslip & Hansson, 2007).",
      keyPoints: ["iyi ölüm", "fiziksel rahatlık", "sevilen kişi desteği", "imarethane", "palyatif bakım", "%90 evde", "onurlu ölüm"],
      explanation: "Modern tıp ölümle yüzleşmek için bütüncül yaklaşımlar geliştirmiş, salt biyomedikal modelden insancıl bakım modeline geçiş yapmıştır."
    }
  ],
  8: [
    {
      question: "Yetişkinliğin gelişimsel açıdan tanımlanmasında 'çok-boyutluluk ve çok-yönlülük' kavramlarını açıklayınız.",
      answer: "Yetişkinlik dönemindeki bilişsel değişim ele alındığında, bilişi çok boyutlu bir kavram olarak değerlendirmek gerekmektedir. Düşünülmesi gereken önemli bir nokta, bilişin bazı boyutları biz yaşlandıkça azalmakla birlikte, bazıları durağan kalmakta ya da gelişmektedir. Bu çok-yönlülük (multidirectionality) kavramıyla ifade edilir. Örneğin akıcı zeka (hızlı bilgi işleme, problem çözme) orta yaştan itibaren düşmeye başlarken, kristalize zeka (birikmiş bilgi, sözel beceri) yaş ilerledikçe artmaya devam edebilir. Çok-boyutluluk ise bilişin tek bir genel zeka faktörü olmadığı, çoklu boyutları (bellek, dikkat, dil, muhakeme, vb.) içerdiği anlayışını yansıtır. Yaşlanma uzmanları bu nedenle yetişkin kategorilerini yaştan çok işlevsellik açısından ele almayı tercih etmektedir; örneğin 85 yaşında bir kişinin işlevsel yaş açısından 65 yaşında bir kişiye göre çok daha sağlıklı olması pekala mümkündür.",
      keyPoints: ["çok-boyutluluk", "çok-yönlülük", "bazıları azalır", "bazıları artar", "akıcı vs kristalize", "işlevsel yaş"],
      explanation: "Yaşlanma homojen değildir; aynı kişide bile bilişin farklı boyutları farklı yönlerde değişebilir."
    },
    {
      question: "Genç yetişkinlikte Piaget'nin görüşüne göre düşünme süreçleri ve postformal düşünmeyi karşılaştırarak açıklayınız.",
      answer: "Piaget, genç yetişkinlerin ergenlere göre düşünme süreçlerinde niceliksel olarak daha ileri düzeyde ve daha fazla bilgiye sahip olduklarını vurgulamaktadır. Ayrıca, bu dönemde bilgi-işlem psikologlarının öne sürdüğü gibi yetişkinlerin belirli alanlardaki bilgilerinde, örneğin fizikçinin fizik alanındaki, finans analistinin finans konusundaki bilgilerinin artışının söz konusu olduğunu öne sürmektedir. Fakat Piaget'ye göre ergenler ve yetişkinler niteliksel olarak benzer düşünce yapılarına sahiptir. Bazı kuramcılar ise genç yetişkinlikte sergilenen değişimleri bir araya getirerek yeni bir bilişsel gelişim dönemi öne sürmektedir: Formel işlemler sonrası düşünme 'postformal'. Belirtilen düşünce yapısı; soruların doğru cevaplarının yansıtıcı düşünme gerektirdiğinin ve durumdan duruma değişebildiğinin, doğruyu bulma sürecinin asla bitmeyen devamlı bir süreç olduğunun anlaşılmasını içermektedir (Kitcher, King & Deluca, 2006). Örneğin genç yetişkinler sorunları çözerken yansıtıcı kararlar almakta; çeşitli politikaların boyutları, kariyerleri ve işleri, ilişkileri ve yaşamın diğer alanları hakkında derin düşünebilirler.",
      keyPoints: ["Piaget-niceliksel ileri", "niteliksel benzer", "postformal", "yansıtıcı düşünme", "Kitcher King Deluca", "doğru cevap değişebilir"],
      explanation: "Postformal düşünme, ergenliğin formel işlemler döneminin ötesinde bir gelişim dönemi olarak önerilmektedir."
    },
    {
      question: "Yaşlanmanın 'mitokondrial kuramını' ve hangi hastalıklarla ilişkili olduğunu açıklayınız.",
      answer: "Mitokondrial kuram, yaşlanmanın işlev, büyüme ve onarım için enerji sağlayan küçük hücresel cisimler olan mitokondrianın bozulmasından kaynaklandığını savunan kuramdır. Mitokondriadaki kusurlar şu hastalıklara neden olabilir: kalp damar sistemi hastalığı, bunama ve Parkinson hastalığı gibi nörodejeneratif hastalıklar ve karaciğer fonksiyonlarındaki bozulmalar. Mitokondri hücrelerin enerji santralleri olarak düşünülebilir; ATP üretirler ve hücrenin metabolik fonksiyonlarını destekler. Yaşla birlikte mitokondri DNA'sında biriken mutasyonlar ve oksidatif hasar, hücrelerin enerji üretiminde azalmaya yol açar. Bu, özellikle enerji ihtiyacı yüksek organlarda (beyin, kalp, kas) daha belirgin olarak gözlemlenir. Bu nedenle mitokondrial yaşlanma kuramı, yaşa bağlı pek çok dejeneratif hastalığın altında yatan ortak mekanizmalardan biri olarak kabul edilir.",
      keyPoints: ["mitokondri-enerji", "küçük hücresel cisim", "kalp damar", "Parkinson", "Alzheimer/bunama", "karaciğer", "nörodejeneratif"],
      explanation: "Mitokondrial yaşlanma kuramı son yıllarda yapılan araştırmalarla giderek daha fazla destek bulmaktadır."
    },
    {
      question: "Yaşlı yetişkinlerin sosyal ilişkilerinde aile, kardeşler, arkadaşlar ve büyük ebeveyn rollerini açıklayınız.",
      answer: "Aile yapısı: Yaşlı yetişkinlerin yaklaşık 2/3'ü aile üyeleriyle (eş, çocuk, kardeş) ve yaklaşık 1/3'ü yalnız yaşamaktadır. %80'inin çoğu orta yetişkin olmak üzere çocukları hayattadır. Yetişkin kız çocuklar ebeveynlerine günlük faaliyetlerinde yardımcı olma olasılıkları yetişkin erkek çocuklara göre 3 kat daha fazladır (Dwyer & Coward, 1991). Kardeşler: Bugünün yetişkinlerinin %85'inin hayatta en az bir kardeşi vardır. Kardeş ilişkileri yetişkinlik döneminde çoğu zaman çok yakın, duyarsız ya da aşırı rekabetçi olabilir; kardeşler birbirlerine sık sık maddi ve manevi destek sağlamaktadır (Voorpostel & Blieszner, 2008). Arkadaşlar: İleri yetişkinlikte yeni arkadaşlıkların kurulma olasılığı daha azdır (Zettel-Watson & Roolc, 2009). Carstensen (1998) insanların yaşlandıkça yeni arkadaşlar yerine eski arkadaşlarını tercih ettiklerini ortaya koymuştur. Büyük büyükanne/babalık: 20. yüzyılın sonunda üç kuşaktan oluşan aileler yaygınken, bugün dört kuşağın birden hayatta olduğu ailelere de sık rastlanmaktadır. Büyük büyükanne ve babalar aile öykülerini aktararak çocuk-torun-torun çocuklarına aile mirası taşır.",
      keyPoints: ["2/3 aile ile", "1/3 yalnız", "%80 hayattaki çocuk", "kız çocuk 3 kat", "%85 kardeş", "eski arkadaşlar", "4 kuşak"],
      explanation: "Yaşlı yetişkinlerin sosyal yaşamı çok katmanlı olup farklı ilişki türleri farklı işlevler görür."
    },
    {
      question: "Yas süresinde 'uzamış yas' ile 'mahrum kalınmış yas' arasındaki farkı açıklayınız.",
      answer: "Uzamış yas: Kalıcı çaresizlik içeren ve uzun zaman geçmesine rağmen çözülemeyen yastır. Uzamış yas, bazen maskelenmiş olabilir ve kişileri depresyona ve intihara yatkınlaştırabilir. Duygusal olarak bağlı olduğu bir kişiyi kaybedenler, genellikle uzun süreli yas yaşama riski en yüksek kişilerdir. Bu yas türünde kişi yas tutmayı bir türlü tamamlayamaz ve sevilen kişi hakkında sürekli düşünüp durur. Mahrum kalınmış yas: Bir başka yas türü olup kişinin açık bir biçimde yası tutulamayacak ya da desteklenemeyecek, sosyal olarak belirsiz bir kayıp için yaşadığı yası ifade eder (Aloi, 2009; Hendry, 2009). Mahrum kalınmış yas örnekleri arasında eski eşle ilişki gibi sosyal açıdan kabul görmeyen bir ilişki, kürtaj gibi gizli bir kaybı, AIDS nedeniyle ölüm gibi etiketlenmiş ölüm biçimlerini içermektedir. Aralarındaki temel fark, uzamış yas süresinin uzunluğu ve şiddeti üzerine odaklanırken, mahrum kalınmış yasın sosyal kabul ve destek eksikliği üzerine odaklanmasıdır.",
      keyPoints: ["uzamış-kalıcı çaresizlik", "depresyon/intihar riski", "mahrum-sosyal belirsiz", "eski eş", "kürtaj", "AIDS"],
      explanation: "İki tür de patolojik yas kategorisinde değerlendirilir ve profesyonel destek gerektirebilir."
    }
  ],
  9: [
    {
      question: "Genç yetişkinlikte Erikson'un 'yakınlığa karşı yalıtılmışlık' krizini detaylı açıklayınız ve yakınlık kavramının önemini değerlendiriniz.",
      answer: "Yakınlık/samimiyet, kendini açma ve özel düşüncelerin paylaşımı yakınlığın temel unsurlarıdır. Samimi duyguların yaşanması, kimlik kazanımının tamamlanması ve bağımsızlık gibi birbiriyle yarışan, rekabet halinde olan istek ve duygularla baş edebilme yetişkinlik döneminin temel görevidir. Erikson'un Dönemleri: Yakınlığa karşı yalıtılmışlık. Erikson yakınlığı, birinin kendisini bir başkasında kaybederek kendini bulma süreci biçiminde tanımlamakta ve bu dönemin birine adanmayı gerektirdiğini öne sürmektedir. Erikson'a göre birey genç yetişkinlikte yakın ilişkiler geliştiremediği takdirde yalıtılmışlık duygusu yaşamaktadır. Başkalarıyla anlamlı ilişkiler geliştirme becerilerindeki yoksunluklar ise bireyin kişiliğinde hasarlara yol açmaktadır. Yakınlık ve Bağımsızlık: Genç yetişkinlikte gelişim sıklıkla yakınlık ve bağlanma ile bağımsızlık ve özgürlük duygu ve ihtiyaçları arasında dengenin kurulmasını içermektedir. Örneğin, ebeveynleri ile bağlarından yeterince uzaklaşamamış genç yetişkinler hem kişilerarası ilişkilerde hem de kariyer bağlamında sorunlar yaşayabilmektedirler.",
      keyPoints: ["yakınlık", "yalıtılmışlık", "kendini açma", "birine adanma", "bağımsızlık dengesi", "ebeveynden ayrılma"],
      explanation: "Erikson'a göre kimlik kazanımı yakınlığın önkoşuludur; sağlam bir kimliği olmayan kişi gerçek yakınlığı yaşayamaz."
    },
    {
      question: "Yas süreçlerinde 'sağlıklı yas' boyutlarını sıralayıp her birini açıklayınız.",
      answer: "Yasın boyutları, sevdiğimiz bir kişinin kaybından sonra hissedilen duygusal uyuşukluk, inanmama, ayrılık kaygısı, çaresizlik, üzüntü ve yalnızlıktır. Duygusal uyuşukluk, kayba ilk tepki olarak ortaya çıkan donmuş ve duyarsız hissetme halidir. İnanmama, gerçekleşmiş olanı kabullenememek ve şok hissidir. Ayrılık kaygısı, kaybedilen kişinin yokluğunda yaşanan derin endişedir. Çaresizlik, durumu değiştirme kapasitesi olmadığını hissetmektir. Üzüntü, derin bir keder duygusudur. Yalnızlık, sosyal ve duygusal anlamda boşluk hissetmektir. Özlem ya da hasret, kaybedilen kişiyi geri getirmeye yönelik aralıklarla tekrar eden bir ihtiyacı ya da isteği ifade eder. Özlem ve ölümle ilişkili olumsuz duyguların 6 ay içerisinde azalması ile birlikte kabullenme de gerçekleşir (Maciejevvski ve diğerleri, 2007). Bu yas süreci normal olarak değerlendirilir; uzamadığı sürece patolojik değildir.",
      keyPoints: ["duygusal uyuşukluk", "inanmama", "ayrılık kaygısı", "çaresizlik", "üzüntü", "yalnızlık", "özlem", "6 ay"],
      explanation: "Sağlıklı yas, zamanla azalan ve adaptasyona izin veren doğal bir tepki sürecidir."
    },
    {
      question: "Yaşlı yetişkinlerde olası benlikler, benlik kontrolü ve yaşamı gözden geçirme kavramlarını ilişkilendirerek açıklayınız.",
      answer: "Olası benlikler, kişilerin olabilecekleri, olmak istedikleri ve olmaktan korktukları benliklerdir (Hoppmann & Smith, 2007; Markus & Nurius 1987). Yaşlı yetişkinlerde ideal ve gelecek benliklerin kabul edilmesi azalırken geçmişteki benliklerin kabulü artar (Ryff, 1991). Benlik Kontrolü: Yaşlı yetişkinlerin yaşla ilgili kayıpların farkında olmalarına karşın bu kişilerin çoğu benlik kontrolü duygusunu etkili bir şekilde korumayı sürdürürler (Lewis, Todd & Xu, 2011). Fiziksel ve bilişsel becerilerdeki gerileme ve hastalıkların artması gibi yaşla ilgili tipik sorunların esnek ve uyum sağlayıcı bir kontrol tarzı ile hafifletilmesi mümkündür. Araştırmacılar, orta yetişkinlik döneminden başlamak üzere, uyum sağlayıcı kontrol stratejilerinin (kişinin belirli bir koşula uymak için hedeflerini değiştirmesi) öneminin arttığını ve asimilatif kontrol stratejilerinin (kişinin hedeflerine ulaşmak için bir durumu değiştirmesi) öneminin ise azaldığını tespit etmişlerdir (Brandstadter & Renner, 1990). Yaşamı Gözden Geçirme: Erikson'un benlik bütünlüğüne karşı umutsuzluk olarak adlandırılan son döneminde oldukça önemlidir. Robert Butler yaşamın gözden geçirilmesini içerir.",
      keyPoints: ["olası benlikler", "geçmiş benlik kabulü", "benlik kontrolü", "uyum sağlayıcı kontrol", "asimilatif kontrol", "yaşamı gözden geçirme", "Butler"],
      explanation: "Bu kavramlar yaşlanmanın psikolojik adaptasyon süreçlerini açıklar; başarılı yaşlanmanın anahtarıdırlar."
    },
    {
      question: "Yaşlı yetişkinlerde aileler ve sosyal ilişkilerin yaşam tarzı çeşitliliğini örnekleriyle açıklayınız.",
      answer: "Yaşam Tarzı Çeşitliliği: Yaşlı yetişkinlerin yaşam tarzları değişmektedir. Evli Yaşlı Yetişkinler: Emeklilik ile ölüm arasındaki süre bazen 'evlilik sürecinin son aşaması' olarak adlandırılır. Yaşlı yetişkinlerin yaşamlarında evlilik kavramı pek çok çift için olumludur (Peek, 2009). Bir araştırma evlilik doyumunun yaşlı yetişkinlerde orta yaşlı yetişkinlere göre daha fazla olduğunu ortaya çıkarmıştır (Henry vd., 2007). İleri yetişkinlik döneminde evli ya da eşi olan kişiler, bekâr olanlara göre genellikle daha mutludurlar ve daha uzun yaşarlar (Manzoli vd., 2007). Boşanmış ve Yeniden Evlenmiş Yaşlı Yetişkinler: Boşanma yaşlı yetişkinlerde genç yetişkinlere göre daha az görülür. Bu, yaşlıların ait oldukları kuşaklarda genç oldukları dönemde boşanmaların nadir olması nedeniyle yaştan çok kuşak etkisini yansıtmaktadır. Artan boşanma oranları, yaşam süresinin uzaması ve sağlıkla ilgili iyileşmeler yaşlı yetişkinlerin yeniden evlenmelerinde artışa yol açmıştır. Birlikte Yaşayan Yaşlı Yetişkinler: Pek çok durumda yaşlı yetişkinlerin birlikte yaşamalarının nedeni aşktan çok arkadaşlıktır. Yaşlı Yetişkinlerin İlişkilerinde Romantizm ve Cinsellik: Yaşlı yetişkinlerin cinselliğe ya da romantik ilişkilere duydukları ilgi genellikle düşünülmez; ancak bunlar mümkündür. Yaşlı yetişkinler sağlıklı iseler cinsel aktivitede bulunabilirler.",
      keyPoints: ["evlilik son aşaması", "evli daha mutlu", "boşanma az-kuşak etkisi", "yeniden evlenme artıyor", "arkadaşlık ile birlikte yaşama", "cinsellik mümkün"],
      explanation: "Yaşlı yetişkinlerin ilişki yapıları çeşitlenmiştir; kalıp yargıların aksine cinsellik ve aşk yaşanabilir."
    },
    {
      question: "İleri yetişkinlikte 'başarılı yaşlanma' kavramını ve bileşenlerini açıklayınız.",
      answer: "İleri yetişkinliğin olumlu boyutları uzun süre göz ardı edilmiştir (Charles & Carstensen 2010; Depp & Jeste, 2010; Stirling, 2011). Uygun bir beslenme, aktif yaşam tarzı, zihinsel uyarı ve esneklik, olumlu başa çıkma becerileri, iyi sosyal ilişkiler ve desteğin varlığı ve hastalık olmaması durumunda yaşlandıkça pek çok becerimizi sürdürmemiz ve hatta bazı durumlarda geliştirmemiz mümkündür. Aktif olmak özellikle başarılı yaşlanma açısından önemlidir (Erickson & Krarner, 2009). Düzenli olarak egzersiz yapan, dışarı çıkan ve seyahatlere çıkan, dini kurum faaliyetlerine katılan ve toplantılara giden yaşlı yetişkinler, toplumdan uzak yaşayan emsallerine göre yaşamlarından daha fazla doyum sağlarlar. Başarılı yaşlanma aynı zamanda çevre üzerinde algılanan kontrolü de içerir. Araştırmacılar pek çok yaşlı yetişkinin kontrol duygularını koruma ve kendileri hakkında olumlu bir görüşe sahip olma konularında son derece etkili olduklarını ortaya çıkarmışlardır. Yaşlı yetişkinlerin gönüllülük çalışmalarının yaklaşık %50'si dini kuruluşların hizmetlerine yöneliktir; başkalarına faydalı olma duyguları olan kişilerin erken ölüm riskleri daha düşüktür (Gruenewald vd., 2009).",
      keyPoints: ["başarılı yaşlanma", "uygun beslenme", "aktif yaşam", "Erickson Krarner", "egzersiz-seyahat-dini etkinlik", "algılanan kontrol", "gönüllülük"],
      explanation: "Başarılı yaşlanma sadece hastalık yokluğu değil, anlamlı ve aktif bir yaşamdır."
    }
  ],
  10: [
    {
      question: "Yaşlı yetişkinlerde 'bilgelik' kavramını tanımlayıp özelliklerini açıklayınız.",
      answer: "Bilgelik, önemli konularda doğru yargılamalar yapmamızı sağlayan yaşamın uygulamaya dair boyutlarında, uzmanlık düzeyindeki bilgidir (Staudinger & Gluck, 2011). Bilgelik, zekânın standart kavramlarından çok, hayatın pragmatik ve insan koşullarına odaklanmaktadır. Bilgeliğin temel özellikleri arasında: derin yaşam deneyimine dayalı içgörü, belirsizlik karşısında karar verebilme, perspektif alma yeteneği, kendinden ve başkalarından öğrenebilme, duygusal düzenleme becerisi ve etik değerlendirme sayılabilir. Yaşlanma ile birlikte bireyler hayatın karmaşıklığı, paradokslar ve insan doğası hakkında daha derin bir anlayışa kavuşabilirler. Bilgelik aynı zamanda alçakgönüllülüğü içerir: bilge kişi her şeyi bilemeyeceğini kabul eder ve farklı bakış açılarını dikkate alır. Bilgelik geliştirme için yaşam deneyimi gerekli olmakla birlikte, sadece yaşlanmak bilgelik için yeterli değildir; refleksiyon, sorgulama ve bağlam içinde anlam aramak da önemlidir.",
      keyPoints: ["pragmatik bilgi", "uzmanlık", "Staudinger Gluck", "yaşam pragmatiği", "insan koşulları", "perspektif alma", "deneyim+refleksiyon"],
      explanation: "Bilgelik kavramı pozitif yaşlanma ve gelişimsel psikolojinin önemli yapı taşlarından biridir."
    },
    {
      question: "Erikson'un üç yetişkinlik dönemini (yakınlık-yalıtılmışlık, üretkenlik-verimsizlik, benlik bütünlüğü-umutsuzluk) bir arada açıklayınız.",
      answer: "Erikson'un psikososyal gelişim kuramı yetişkinlik için üç ana evre tanımlar: (1) Genç yetişkinlik (yakınlığa karşı yalıtılmışlık): Yakınlık, birinin kendisini bir başkasında kaybederek kendini bulma sürecidir; birey yakın ilişkiler geliştiremezse yalıtılmışlık duygusu yaşar. (2) Orta yetişkinlik (üretkenliğe karşı verimsizlik): Üretkenlik, yetişkinlerin gelecek nesillere mirasları bırakma isteklerini kapsar; yetişkinler bu miras sayesinde bir tür ölümsüzlüğe ulaşırlar. Aksine verimsizlikte (kendini soğurma) bireyler gelecek nesiller için hiçbir şey yapmadıkları duygusu geliştirir. (3) İleri yetişkinlik (benlik bütünlüğüne karşı umutsuzluk): Benlik bütünlüğü, geçmişe yönelik değerlendirmede olumlu bir gözden geçirme ya da geçmişteki yaşamın iyi harcandığı sonucuna varılmasını içerir. Yaşamı Gözden Geçirme (Robert Butler) bu dönemde önemlidir; yaşamın gözden geçirilmesi acı, öfke, suç ve keder olasılıklarının yanı sıra çözümleme ve kutlama, onaylama ve umut, uzlaşma ve kişisel gelişim için olanaklar da içerir.",
      keyPoints: ["yakınlık-yalıtılmışlık", "üretkenlik-verimsizlik", "benlik bütünlüğü-umutsuzluk", "miras", "yaşamı gözden geçirme", "Butler"],
      explanation: "Erikson'un kuramı yaşam boyu gelişim perspektifinde ölüm öncesi kişiliğin bütünleşmesini açıklamada hâlâ etkilidir."
    },
    {
      question: "Genç yetişkinlikte yaşam biçimi tercihleri (yalnız, birlikte, evli, boşanmış, eşcinsel) ve evliliğin başarı faktörlerini açıklayınız.",
      answer: "Günümüzde yetişkinler farklı yaşam biçimleri seçmekte ve aile yapıları oluşturmaktadır. Yetişkinler yalnız yaşamayı, birlikteliği, evliliği, boşanmayı, tekrar evlenmeyi ya da hem cinsiyle birlikte yaşamayı seçebilmektedir. Yalnız Yetişkinler: bağımsız yaşam, kişisel kaynaklar geliştirme avantajları varken sosyal baskı ve yalnızlık sorunları görülür. Birlikte Yaşayan Yetişkinler: cinsel ilişkili birliktelik. Evli Yetişkinler: Mutlu bir evlilik yaşayan bireyler, boşanmış ya da mutsuz evlilik yaşayanlara göre daha uzun yaşamakta ve daha sağlıklı bir yaşam sürdürmektedir. Mutsuz evlilik ise insan ömrünü ortalama 4 yıl azaltmaktadır (Gove, Style & Hughes, 1990). Boşanmış Yetişkinler: Genç yaşta evlilik, düşük eğitim düzeyi, düşük gelir, dini inanca sahip olmamak, boşanmış ebeveyne sahip olmak boşanmada artışa yol açan faktörlerdir. Hetherington (2006) hem boşanmış kadınlar hem de erkeklerin yalnızlık, özgüven kaybı şikayetleri olduğunu bulmuştur. Tekrar Evlenen Yetişkinler: tekrar evlenmelerin %50'si boşanma sonrasında 3 yıl içinde yapılmaktadır. Gey ve Lezbiyen Yetişkinler: eşcinsel evlilikler ilişkilerinde özellikle eşitliğe öncelik vermektedir (Peplau & Fingerhut, 2007). Gottman'ın başarılı evlilik için 7 ilkesi: aşk haritası oluşturun, düşkünlük/hayranlık besleyin, yakınlaşın, eşinizin etkilemesine izin verin, çözülebilir çatışmaları çözün, kilitlenmelerin üstesinden gelin, ortak anlam yaratın.",
      keyPoints: ["yalnız", "birlikte", "evli", "boşanmış", "eşcinsel", "mutsuz evlilik 4 yıl azaltır", "Gottman 7 ilke"],
      explanation: "Aile yapıları modern toplumda çeşitlenmiş; her seçeneğin kendi avantaj ve dezavantajları vardır."
    },
    {
      question: "İleri yetişkinlikte demans, Alzheimer, Parkinson ve çoklu damar tıkanmasına bağlı demansı karşılaştırarak açıklayınız.",
      answer: "Demans: Temel belirtisi, zihinsel işlevlerin bozulması olan nörolojik bozukluklara verilen genel addır. Zihinsel bozukluklar arasında yaşlı yetişkinlere en fazla zarar veren rahatsızlık demanslardır. Alzheimer Hastalığı: Demansın bir türü olan Alzheimer hastalığı; bellekte, muhakeme yeteneğinde, dilde ve sonunda fiziksel işlevlerde derece derece bir bozulmayla kendini gösteren, ilerleyen, geri dönüşü olmayan bir beyin rahatsızlığıdır. 65 yaş öncesi başlayanlar erken başlangıçlı olarak tanımlanmaktadır. Hafif düzeyde bilişsel bozulma Alzheimer için bir risk unsuru olarak düşünülür, o yüzden erken tanı önemlidir. Asetilkolin azalmasının Alzheimer ile ilişkili olduğu öne sürülür. Çoklu Damar Tıkanmasına Bağlı Demans: cerebral atardamarlarda tekrarlanan, geçici kan akışı engellenmesi sonucunda zihinsel işlevlerde düzensiz ve ilerleyen kayıpları ifade etmektedir ve erkeklerde daha yaygındır. Klinik görünümü Alzheimer'dan farklıdır: Alzheimer hastaları sürekli kötüye giderken, çoklu damar tıkanmasına bağlı demansa sahip kişiler iyileşebilmektedir. Belirtileri: zihin karışıklığı, kelimeleri iyi telaffuz edememek, yazma bozuklukları, yüzün/bacağın/kolun bir tarafının uyuşması. Parkinson Hastalığı: Demansın diğer bir türü olan Parkinson hastalığı, kaslardaki titreme, hareketlerin yavaşlaması ve kısmi felç gibi belirtilerle tanımlanan sürekli ve ilerleyen bir rahatsızlıktır. Parkinson hastalığı, beyindeki dopamin üreten sinirlerin zarar görmesiyle ortaya çıkmaktadır.",
      keyPoints: ["demans-genel ad", "Alzheimer-geri dönüşsüz", "asetilkolin", "vasküler-iyileşebilir-erkek", "Parkinson-dopamin", "titreme-felç"],
      explanation: "Farklı demans türleri farklı patofizyoloji, seyir ve tedavi gerektirir; doğru tanı kritik öneme sahiptir."
    },
    {
      question: "Ölmekte olan bir kişiyle iletişim ve geride kalanlarla başa çıkma süreçlerini açıklayınız.",
      answer: "Ölmekte Olan Bir Kişiyle İletişim: Çoğu psikolog, ölmekte olan kişilere karşı açık bir iletişim biçimi önermektedirler. İletişim, ruhsal patoloji ve ölüme hazırlık üzerine olmamalı, bunun yerine ölmekte olan kişinin dayanıklılığını vurgulamalıdır. Ayrıca, ölmekte olan kişi için önemli destek yalnızca ruh sağlığı uzmanlarından değil aynı zamanda hemşireler, hekimler, eş ve yakın arkadaşlardan da gelebilir. Başka Birinin Ölümüyle Başa Çıkma: Kayıp hayatımızda çeşitli şekillerde karşımıza çıkabilir – boşanma, evcil bir hayvanın ölümü, işini kaybetme – ancak hiçbir kayıp sevdiğimiz ve değer verdiğimiz bir kişinin (anne, baba, kardeş, eş, akraba ya da arkadaş) ölümünden daha büyük olamaz. Ayrılık kaygısı ve kayıp duygusu yaşam boyu hissedilmeye devam edebilir, ancak çoğu insan keder gözyaşlarından uzaklaşır, dikkatini yeniden üretken işlere verir ve yaşama karşı yeniden olumlu bir bakış açısı kazanır (Carrington & Sogetz, 2004). Hayat Arkadaşının Kaybı: Eşlerinin ölümünden sonra geride kalanlar genellikle büyük bir keder, kalıcı mali kayıp, yalnızlık, artan fiziksel hastalık ve depresyon gibi psikolojik rahatsızlıklarla karşılaşmaktadır (Kowalski & Bondmass, 2008). Kadınlar erkeklerden daha iyi durumdadırlar. Sosyal destek hem dul erkeklere hem de kadınlara yarar sağlar.",
      keyPoints: ["açık iletişim", "dayanıklılığı vurgulama", "destek kaynakları", "üretken işler", "keder kayıp", "kadınlar daha iyi", "sosyal destek"],
      explanation: "Ölüm ve yas süreçleri hem ölmekte olan kişi hem de geride kalanlar için zorlu deneyimlerdir; iyi iletişim ve destek hayati önem taşır."
    }
  ]
});

// ============== SINAV 11 - ZOR GENEL DEĞERLENDİRME ==============
EXAMS.push({
  id: 11,
  title: "Sınav 11 - Zorlu Genel Değerlendirme",
  description: "Tüm konuları kapsayan ileri seviye değerlendirme. Detaylar ve ince ayrımlar.",
  fillInBlanks: [
    {
      question: "Hayat arkadaşının kaybı üzerine yapılan 6 yıllık boylamsal bir çalışmada, eş kaybının özellikle _______ , zaman içinde düşük yaşam doyumu düzeyiyle ilişkili bulunmuştur.",
      answer: "erkeklerde",
      acceptableAnswers: ["erkeklerde", "erkekler"],
      explanation: "Geride kalan eşlerin başa çıkma biçimleri farklılaşır; özellikle erkeklerde yaşam doyumu daha çok düşmektedir."
    },
    {
      question: "Yaşlı yetişkinlerin %95'i toplum içinde yaşamakla birlikte, aile üyeleriyle yaşama oranı yaklaşık _______ üçte ikidir.",
      answer: "iki",
      acceptableAnswers: ["iki", "2"],
      explanation: "Yaşlı yetişkinlerin yaklaşık üçte ikisi aile üyeleriyle yaşarken, yaklaşık üçte biri yalnız yaşamaktadır."
    },
    {
      question: "Kişiliğin Beş Büyük faktöründen yaşlılık ölüm oranıyla ilişkili olarak sorumluluk düşük + nevrotizm yüksek değerleri _______ ölüm riskini arttırmaktadır.",
      answer: "erken",
      acceptableAnswers: ["erken"],
      explanation: "Sorumluluk anlayışı düşük ve nevrotikliği yüksek olan durumların erken ölüm riskini arttırdığı tespit edilmiştir (Wilson vd., 2004)."
    },
    {
      question: "Yas üzerine ikili-süreç modelinde, kimlik değişimi (eş kimliğinden dul kimliğine geçiş) gibi durumlar _______ odaklı stres kaynaklarına örnektir.",
      answer: "iyileşme",
      acceptableAnswers: ["iyileşme", "iyilesme"],
      explanation: "İyileşme odaklı stres kaynakları, yas sürecinin dolaylı sonucu olarak ortaya çıkan kimlik değişimi gibi durumları içerir."
    },
    {
      question: "Schaie (1994) zihinsel yetenekleri hem enlemesine-kesitsel hem de boylamsal olarak ölçtüğünde, enlemesine-kesitsel ölçümlerde boylamsala göre daha çok _______ olduğunu bulmuştur.",
      answer: "düşüş",
      acceptableAnswers: ["düşüş", "dususl", "düşme"],
      explanation: "Enlemesine-kesitsel çalışmalar kuşak etkisi nedeniyle daha çok düşüş gösterir; boylamsal çalışmalar bireysel değişimi daha doğru yakalar."
    },
    {
      question: "Vaillant'ın çalışmasında 1910'larda doğmuş 90 kadının yer aldığı örnek _______ kabiliyeti olan kadınları içerir.",
      answer: "entelektüel",
      acceptableAnswers: ["entelektüel", "entelektuel"],
      explanation: "Vaillant'ın üçüncü çalışması 1910'larda doğmuş entelektüel kabiliyeti olan 90 kadını içerir."
    },
    {
      question: "Carstensen'in sosyoduygusal seçicilik kuramına göre, yaşlı yetişkinler yakın ilişkiler içinde bulundukları kişilerle görüşmelerini _______ ya da arttırırlar.",
      answer: "sürdürürler",
      acceptableAnswers: ["sürdürürler", "surdururler", "sürdürür"],
      explanation: "Carstensen kuramı, yaşlıların seçici bir şekilde yakın ilişkilerini sürdürdüklerini veya arttırdıklarını öne sürer."
    },
    {
      question: "Yaşlanmanın mitokondrial kuramına göre, mitokondrianın bozulması karaciğer fonksiyonları yanında kalp damar sistemi hastalığı, bunama ve _______ hastalığı gibi nörodejeneratif hastalıklara da neden olabilir.",
      answer: "Parkinson",
      acceptableAnswers: ["Parkinson", "parkinson"],
      explanation: "Mitokondrial kusurlar; kalp damar hastalığı, bunama ve Parkinson gibi nörodejeneratif hastalıklara neden olabilir."
    },
    {
      question: "Yaşlı yetişkinlerin yaşamlarına stres yüklemek anlamına geleceği için tanımadıkları kişilerle sosyal ilişki kurmaktan _______ bir şekilde kaçındıklarını Carstensen savunur.",
      answer: "kasıtlı",
      acceptableAnswers: ["kasıtlı", "kasitli", "bilinçli"],
      explanation: "Sosyoduygusal seçicilik kuramında yaşlıların tanımadıkları kişilerle sosyal ilişki kurmaktan kasıtlı bir şekilde kaçındıkları belirtilir."
    },
    {
      question: "Mahrum kalınmış yas örneklerinden biri olarak AIDS gibi etiketlenmiş ölüm biçimleri sayılır; bu durum bireyi _______ açıdan destekten yoksun bırakabilir.",
      answer: "sosyal",
      acceptableAnswers: ["sosyal"],
      explanation: "Mahrum kalınmış yas, sosyal olarak belirsiz kayıplar için yaşanan ve sosyal desteğin eksik olduğu yas türüdür."
    }
  ],
  multipleChoice: [
    {
      question: "Aşağıdakilerden hangisi 'çağdaş yaşam-olayları yaklaşımı'nın gelenekselden farklı olarak vurguladığı noktadır?",
      options: ["Sadece olayın kendisinin gelişimi etkilediği", "Olayın yanı sıra dolaylı değişkenler, bireyin uyumu, yaşam dönemi ve sosyo-tarihsel bağlamın da etkili olduğu", "Yaşam olaylarının önemsiz olduğu", "Sadece olumlu yaşam olaylarının gelişimi etkilediği"],
      correctIndex: 1,
      explanation: "Çağdaş yaklaşım, olayın kendisinin yanı sıra dolaylı değişkenler (bireyin sağlığı, aile desteği), bireyin uyumu, yaşam dönemi ve sosyo-tarihsel bağlama dikkat çeker."
    },
    {
      question: "Salthouse (2009)'a göre erken ve orta yetişkinlikteki düşük düzeyde bilişsel fonksiyonların yaşa bağlı nörobiyolojik düşüşlerden kaynaklandığı savunulurken, enlemesine-kesitsel çalışmalar bu düşüşün hangi yaşlarda başladığını gösterir?",
      options: ["10-15'li yaşlar", "20'li ve 30'lu yaşlar", "40-50'li yaşlar", "60'lı yaşlardan sonra"],
      correctIndex: 1,
      explanation: "Salthouse (2009) enlemesine-kesitsel çalışmaların nörobiyolojik faktörlerin (bölgesel beyin hacmi, kortikal kalınlık, sinaptik yoğunluk, miyelinizasyon) 20'li ve 30'lu yaşlarda düştüğünü gösterdiğini savunur."
    },
    {
      question: "Aşağıdakilerden hangisi orta yetişkinlikte din ile ilgili Krause'nin bulgularını doğru özetler?",
      options: ["Dindarlık yaşla azalır", "Birçok insanın yaşamlarında dinin önemini bulan kişilerin, bulamadığını söyleyenlere kıyasla fiziksel olarak daha sağlıklı, daha mutlu ve daha az depresyona girdikleri", "Din sadece kadınları etkiler", "Dindarlık fiziksel sağlığı olumsuz etkiler"],
      correctIndex: 1,
      explanation: "Krause (2004, 2009): hayatın anlamını bulan kişiler bulamayanlara kıyasla fiziksel olarak daha sağlıklı, daha mutlu ve daha az depresyona girmektedir."
    },
    {
      question: "Aşağıdakilerden hangisi Berkeley Boylamsal Çalışmasında en stabil özellik olarak bulunmuştur?",
      options: ["Bireyin merhametli ya da düşman olup olmadığı", "Bireyin entelektüel yönelimli, özgüven ve yeni deneyimlere açık olma dereceleri", "Bireyin sosyo-ekonomik durumu", "Bireyin fiziksel görünümü"],
      correctIndex: 1,
      explanation: "Berkeley Boylamsal Çalışmasında en stabil özellikler bireyin entelektüel yönelimli, özgüven ve yeni deneyimlere açık olma dereceleridir."
    },
    {
      question: "Aşağıdakilerden hangisi Yaşam-olayları yaklaşımının geleneksel versiyonunda vurgulanan görüştür?",
      options: ["Olaylar birey üzerinde etki yapmaz", "Eşin ölümü, boşanma, evlilik ve bunun gibi olayların çeşitli derecelerde stres içerdiğine ve bu yüzden de bireyin gelişimini etkileyeceğine inanılıyordu", "Sadece olumlu olayların etkisi vardır", "Stresin gelişimle ilgisi yoktur"],
      correctIndex: 1,
      explanation: "Yaşam-olayları yaklaşımının geleneksel versiyonunda eşin ölümü, boşanma, evlilik gibi olayların çeşitli derecelerde stres içerdiğine ve gelişimi etkilediğine inanılıyordu."
    },
    {
      question: "Aşağıdakilerden hangisi orta yetişkinlikte 'genç-yaşlılara dönük endişe' olarak Hellons Mills Üniversitesi Çalışmasında 40'lı yaşların başında kadınların paylaştığı durumdur?",
      options: ["Sadece kariyer endişesi", "İçe bakış, köklere ilgi duymak, kısıtlamaların ve ölümün farkında olmak", "Sadece çocuk yetiştirme", "Tatil planlama"],
      correctIndex: 1,
      explanation: "Hellons Mills çalışmasında kadınların çoğunluğunun Levinson'un erkeklerinde rastlanan endişeleri paylaştığı görülmüştür: genç ve yaşlılara dönük endişe, içe bakış, köklere ilgi duymak, kısıtlamaların ve ölümün farkında olmak."
    },
    {
      question: "Aşağıdakilerden hangisi yas süresinde 'travmatik ölüm' kapsamında değerlendirilen durumun özelliğidir?",
      options: ["Doğal ölümle aynıdır", "Ani, zamansız, şiddet içeren ya da travmatik ölümlerin geride kalan kişiler üzerindeki etkisi daha yoğun ve uzun süreli olur ve başa çıkma sürecini daha da zorlaştırır", "Daha kolay atlatılır", "Yas süreci hiç yaşanmaz"],
      correctIndex: 1,
      explanation: "Ani, zamansız, şiddet içeren ya da travmatik ölümlerin geride kalan kişiler üzerindeki etkisi daha yoğun ve uzun süreli olur ve başa çıkma sürecini daha da zorlaştırır."
    },
    {
      question: "Vaillant'ın çalışmalarında 50 yaşında alkol kullanma ve sigara içme nasıl bir gösterge olarak değerlendirilmiştir?",
      options: ["Mutluluk göstergesi", "75-80 yaşları arasında ölüp ölmeyeceğin en iyi göstergesi", "Sosyal başarı göstergesi", "Bilişsel yetenek göstergesi"],
      correctIndex: 1,
      explanation: "Vaillant'a göre 50 yaşında alkol kullanma ve sigara içme, bireylerin 75-80 yaşlarında ölüp ölmeyeceklerinin en iyi göstergeleridir."
    },
    {
      question: "Brandstadter ve Renner'a (1990) göre orta yetişkinlik döneminden başlamak üzere hangi kontrol stratejilerinin öneminin arttığı tespit edilmiştir?",
      options: ["Asimilatif kontrol stratejileri", "Uyum sağlayıcı kontrol stratejileri (kişinin belirli bir koşula uymak için hedeflerini değiştirmesi)", "Hiçbiri", "Sadece kadınlar için"],
      correctIndex: 1,
      explanation: "Orta yetişkinlikten başlayarak uyum sağlayıcı kontrol stratejilerinin (kişinin koşula uymak için hedeflerini değiştirmesi) öneminin arttığı, asimilatif kontrol stratejilerinin öneminin ise azaldığı tespit edilmiştir."
    },
    {
      question: "Aşağıdakilerden hangisi Bartholomew ve Horowitz'in (1991) yetişkin bağlanma modelinde 'olumlu benlik + olumsuz başkaları' modeline sahip bireyin özelliğidir?",
      options: ["Yakın ilişki kurma konusunda rahat ve özerk", "İlişkilere takıntılı", "Yakınlığa karşı kayıtsız ve bağımlılık karşıtı", "Yakınlıktan korkan ve sosyal açıdan kaçıngan"],
      correctIndex: 2,
      explanation: "Kayıtsız bağlanma: olumlu benlik + olumsuz başkaları = yakınlığa karşı kayıtsız ve bağımlılık karşıtı bireyler."
    },
    {
      question: "Yaşlanmanın evrimsel kuramı doğal seçilimin yaşlı yetişkinlerde görülen pek çok zararlı durumu ne için ayıklamadığını savunur?",
      options: ["Çünkü doğal seçilim mükemmeldir", "Çünkü doğal seçilimin sunduğu faydaların yaş ilerledikçe azaldığı, çünkü doğal seçilimin üreme gücü ile bağlantılı olduğu", "Çünkü insanlar uzun yaşamaz", "Çünkü genetik önemsizdir"],
      correctIndex: 1,
      explanation: "Evrimsel kuram: doğal seçilimin sunduğu faydaların yaş ilerledikçe azaldığı, çünkü doğal seçilimin üreme gücü ile bağlantılı olduğunu savunur."
    },
    {
      question: "İleri yetişkinlikte yetişkin kız çocukların ebeveynlerine günlük faaliyetlerinde yardımcı olma olasılıkları, yetişkin erkek çocuklara göre kaç kat daha fazladır?",
      options: ["Eşit", "İki kat", "Üç kat", "Dört kat"],
      correctIndex: 2,
      explanation: "Yetişkin kız çocuklar ebeveynlerine günlük faaliyetlerinde yardımcı olma olasılıkları yetişkin erkek çocuklara göre üç kat daha fazladır (Dwyer & Coward, 1991)."
    },
    {
      question: "Hangi araştırmacı yaşlı yetişkinlerin yaklaşık %50'sinin gönüllülük çalışmalarının dini kuruluşların sundukları hizmetlere yönelik olduğunu belirtmiştir?",
      options: ["Carstensen", "Erikson", "Krause", "İleri yetişkinlik literatürü genel bulgusu olarak"],
      correctIndex: 3,
      explanation: "İleri yetişkinlik literatüründe yaşlı yetişkinlerin gönüllülük çalışmalarının neredeyse %50'sinin dini kuruluşların sundukları hizmetlere yönelik olduğu belirtilir."
    },
    {
      question: "Bilgi işleme hızı yaşlandıkça bir saniyenin altında bir düşüş gösteriyorsa, hangi durum doğrudur?",
      options: ["Ani bir düşüş", "Çoğu araştırmada düşüş ani değildir, bir saniyenin altındadır", "Çok hızlı düşüş", "Düşüş yoktur"],
      correctIndex: 1,
      explanation: "Schaie'nin çalışmalarında bilgi işleme hızındaki düşüş ani değildir; çoğu araştırmada bir saniyenin altındadır."
    },
    {
      question: "Aşağıdakilerden hangisi Berscheid (2010) tarafından öne sürülen aşk türlerinin tümünde ortak unsurdur?",
      options: ["Cinsel tutku", "Tekerrür eden yakınlık/samimiyet duygusu", "Sadece bağlanma", "Güç"],
      correctIndex: 1,
      explanation: "Berscheid'in aşk türlerinin (arkadaşlık, romantik aşk, samimi aşk, anlaşmalı aşk) çoğunluğunda tekerrür eden yakınlık/samimiyet duygusudur."
    },
    {
      question: "Yaşlı yetişkin ebeveynler ile yetişkin çocukları arasında 1.599 yetişkin çocuğun yaşlı yetişkin ebeveynleri ile ilişkileri hakkında bir çalışma, çelişkili duyguların genellikle hangi durumlarda görüldüğünü gösterir?",
      options: ["Kayınvalide ve kayınpederler, sağlığı kötü olan ebeveynler ve yaşamlarının daha erken dönemlerinde aileleri ile aralarındaki ilişki iyi olmayan yetişkin çocuklar durumunda", "Sağlıklı ebeveynler", "Sadece babalar", "Mutlu evlilikler"],
      correctIndex: 0,
      explanation: "Wilson, Shuey & Elder (2003): çelişkili duygular genellikle kayınvalide ve kayınpederler, sağlığı kötü olan ebeveynler ve yaşamlarının daha erken dönemlerinde aileleri ile aralarındaki ilişki iyi olmayan yetişkin çocuklar durumunda ortaya çıkabilir."
    },
    {
      question: "Aşağıdakilerden hangisi yas süreciyle ilgili 'naaş yakımı' (kremasyon) konusunda doğru bir bilgidir?",
      options: ["Amerika'nın güney bölgesinde Pasifik'ten daha yaygındır", "Amerika'nın Pasifik bölgesinde, güney bölgesine göre daha yaygındır", "Kanada'da hiç uygulanmaz", "Hindistan'da yasaktır"],
      correctIndex: 1,
      explanation: "Naaş yakımı Amerika'nın Pasifik bölgesinde, güney bölgesine göre daha yaygındır. Ayrıca Kanada'da Amerika'dan ve en fazla Japonya'da ve pek çok Asya ülkesinde uygulanmaktadır."
    },
    {
      question: "Aşağıdakilerden hangisi 'sağlıklı yas sürecinde kültürel çeşitlilikler' başlığı altında verilebilecek örnektir?",
      options: ["Tüm kültürlerde yas tutmama", "Japonya'da ölen kişiyle bağların sürdürülmesi - Hopi kabilesinde bağların kısa zamanda kopması", "Hiçbir kültürde yas tutulmaz", "Sadece Batı kültürlerinde yas vardır"],
      correctIndex: 1,
      explanation: "Japonya'da ölen kişiyle bağların sürdürülmesi kabul gören bir şeydir; Arizona'daki Hopi kabilesinde ise ölen kişi olabildiğince kısa zamanda unutulur."
    },
    {
      question: "İleri yetişkinlikte Robert Butler'ın 'yaşamı gözden geçirme' kavramına göre yaşamın gözden geçirilmesi:",
      options: ["Sadece olumsuz yönleri içerir", "Acı, öfke, suç ve keder olasılıklarının yanı sıra çözümleme ve kutlama, onaylama ve umut, uzlaşma ve kişisel gelişim için olanaklar da içerir", "Sadece olumlu yönleri içerir", "Hiçbir gelişim için olanak sunmaz"],
      correctIndex: 1,
      explanation: "Butler'a göre yaşamın gözden geçirilmesi acı, öfke, suç ve keder olasılıklarının yanı sıra çözümleme ve kutlama, onaylama ve umut, uzlaşma ve kişisel gelişim için olanaklar da içerir."
    },
    {
      question: "Aşağıdakilerden hangisi yetişkin gelişiminde 'kuşak etkisi' (cohort effects) konusunu doğru tanımlar?",
      options: ["Yaş farkı önemsizdir", "Farklı tarihsel dönemler ve farklı sosyal beklentilerin etkili olduğu, aynı yıl veya dönemde doğan birey grupları (Schaie 2010, 2011)", "Sadece genetik farklılıklar önemli", "Kuşak etkisi yoktur"],
      correctIndex: 1,
      explanation: "Tarihsel Bağlam (Kuşak Etkiler): Bazı gelişimciler farklı tarihsel dönemler ve farklı sosyal beklentilerin etkili olduğu sonucuna varıyorlar - aynı yıl veya dönemde doğan birey grupları (Schaie, 2010, 2011)."
    },
    {
      question: "Yaşam beklentisinde kadınların erkeklerden uzun yaşaması ve sanayileşmiş toplumlarda 100 yaşına kadar yaşama oranının artması ile ilgili olarak hangisi doğrudur?",
      options: ["Sadece genetik etkili", "Tıp, beslenme, egzersiz ve yaşam biçimi alanlarında kaydedilen gelişmeler yaşam beklentisini ortalama 30 yıl arttırmıştır", "1900'den beri hiç değişiklik yok", "Sadece kadınlar için artış var"],
      correctIndex: 1,
      explanation: "1900'den bu yana tıp, beslenme, egzersiz ve yaşam biçimi alanlarında kaydedilen gelişmeler yaşam beklentisini ortalama 30 yıl arttırmıştır."
    },
    {
      question: "Aşağıdakilerden hangisi 'olası benlikler' kavramı için doğrudur?",
      options: ["Yaşlı yetişkinlerde ideal ve gelecek benliklerin kabulü artar", "Yaşlı yetişkinlerde ideal ve gelecek benliklerin kabul edilmesi azalırken geçmişteki benliklerin kabulü artar", "Olası benlikler hiç değişmez", "Yaşlanma olası benlikleri etkilemez"],
      correctIndex: 1,
      explanation: "Ryff (1991) - yaşlı yetişkinlerde ideal ve gelecek benliklerin kabul edilmesi azalırken geçmişteki benliklerin kabulü artar."
    },
    {
      question: "Hangi araştırmacılar yaşlı yetişkinlerde Beş Büyük faktörden 'sorumluluk' faktörü ile ölüm oranı arasındaki ilişkiyi ortaya koymuştur?",
      options: ["Erikson", "Levinson", "Martin, Friedman & Schwartz", "Schaie"],
      correctIndex: 2,
      explanation: "Martin, Friedman & Schwartz (2007) - Beş Büyük faktöründen sorumluluk sahibi olmanın çocukluktan ileri yetişkinliğe kadar daha yüksek ölüm riski ile ilişkili olduğunu ortaya koymuşlardır (sorumluluk düşük olunca risk yüksek)."
    },
    {
      question: "Aşağıdakilerden hangisi etnik köken bağlamında ileri yetişkinlik için doğru bir bulgudur (Yee & Chiriboga, 2007)?",
      options: ["Etnik azınlıktaki yaşlı yetişkinlerin sağlıkları azınlık olmayanlara göre daha hızla kötüye gitmektedir", "Etnik azınlıkların sağlığı çok daha iyidir", "Etnik köken sağlığı etkilemez", "Sadece etnik çoğunluk hasta olur"],
      correctIndex: 0,
      explanation: "Yee & Chiriboga (2007) - Etnik azınlıktaki yaşlı yetişkinlerin gerek refahları gerekse sağlıkları, azınlık olmayanlara göre daha hızla kötüye gitmektedir."
    },
    {
      question: "Hangisi Brockmaier 'Aktif Olmak' özelliği ile ilgili olarak başarılı yaşlanmanın belirleyicilerindendir?",
      options: ["Sürekli evde kalmak", "Düzenli olarak egzersiz yapan, dışarı çıkan ve seyahatlere çıkan, dini kurum faaliyetlerine katılan ve toplantılara giden yaşlı yetişkinlerin, toplumdan uzak yaşayan emsallerine göre yaşamlarından daha fazla doyum sağladığı", "Sadece bilgisayar başında olmak", "Sosyal medya kullanmak"],
      correctIndex: 1,
      explanation: "Erickson & Krarner (2009) - Düzenli olarak egzersiz yapan, dışarı çıkan ve seyahatlere çıkan, dini kurum faaliyetlerine katılan ve toplantılara giden yaşlı yetişkinler, toplumdan uzak yaşayan emsallerine göre yaşamlarından daha fazla doyum sağlarlar."
    }
  ],
  classicQuestions: [
    {
      question: "Yetişkinlik dönemlerini (genç, orta, ileri) Erikson, Levinson ve Carstensen'in kuramlarını entegre ederek karşılaştırınız.",
      answer: "Genç yetişkinlik (Erikson: yakınlığa karşı yalıtılmışlık) - kimlik kazanımı sonrası yakın ilişkiler kurma görevidir; Arnett'in 'yetişkinliğe geçiş' dönemi 18-25 yaş arasını kapsar. Orta yetişkinlik (Erikson: üretkenliğe karşı verimsizlik; Levinson: 4 büyük çatışma) - 40-65 yaş arasında gelecek nesillere miras bırakma ve 4 çatışmayı çözme görevi (gençlik-yaşlılık, yıkıcılık-yapıcılık, erkek-kadın, birlikte-ayrı). Levinson'a göre geçiş yaklaşık 5 yıl sürer (40-45) ve %70-80'i bunu sancılı bulur. İleri yetişkinlik (Erikson: benlik bütünlüğüne karşı umutsuzluk; Carstensen: sosyoduygusal seçicilik) - yaşamı gözden geçirme (Butler), bütünlük kazanma ve duygusal anlam veren ilişkilere odaklanma. Carstensen'in kuramı yaşlıların seçici olarak yakın ilişkilerini sürdürdüklerini açıklar. Üç dönem birbirinin üzerine kurulur: yakınlık olmadan üretkenlik, üretkenlik olmadan bütünlük gerçekleştirilemez.",
      keyPoints: ["Erikson 3 evre", "Arnett yetişkinliğe geçiş", "Levinson 4 çatışma", "Carstensen", "yaşamı gözden geçirme", "kümülatif gelişim"],
      explanation: "Bu üç kuram birbirini tamamlar ve yetişkinlik gelişimini farklı açılardan inceler."
    },
    {
      question: "Yaşlanmanın 5 biyolojik kuramını (evrimsel, hücresel saat, serbest radikal, mitokondrial, hormonal stres) detaylı olarak karşılaştırıp her birinin güçlü ve zayıf yönlerini tartışınız.",
      answer: "(1) Evrimsel kuram: Doğal seçilim üreme gücüyle bağlantılı olduğu için yaşlı yetişkinlerdeki zararlı durumları ayıklayamaz. Güçlü yön: yaşlanmanın neden var olduğunu açıklar. Zayıf yön: spesifik mekanizmaları açıklamaz. (2) Hücresel saat (Hayflick): Hücreler 75-80 kez bölünür; telomerler kısalır. Güçlü yön: deneysel olarak doğrulanmıştır. Zayıf yön: bütün doku tiplerini açıklamaz. (3) Serbest radikal: Oksijen molekülleri DNA'ya zarar verir, kanser ve artrite yol açar. Güçlü yön: antioksidan araştırmalarıyla destekli. Zayıf yön: antioksidan tedavinin ömrü uzattığı kesin değil. (4) Mitokondrial: Enerji üretimi bozulur, nörodejeneratif hastalıklara neden olur. Güçlü yön: hücresel düzeyde mekanizma sunar. Zayıf yön: birincil mi yoksa sonuç mu belirsiz. (5) Hormonal stres: Strese karşı direnç azalır. Güçlü yön: kronik hastalıklarla bağlantı kurar. Zayıf yön: hangi hormonların kritik olduğu hala araştırılıyor. Miller (2009) - hangisi en iyi açıklar belirsizdir; birden fazlasının katkısı muhtemeldir.",
      keyPoints: ["5 kuram", "evrimsel-üreme", "Hayflick-75-80", "serbest radikal-DNA", "mitokondri-enerji", "hormonal stres", "Miller 2009"],
      explanation: "Modern yaşlanma araştırmaları bu kuramların birleşik bir modelini önermektedir; her biri farklı bir mekanizmayı vurgular."
    },
    {
      question: "Kübler-Ross'un 5 evre modelinin sınırlılıklarını da göz önünde bulundurarak ölmekte olan bir kişiyle iletişim ilkelerini açıklayınız.",
      answer: "Kübler-Ross modelinin 5 evresi (inkâr, öfke, uzlaşma, depresyon, kabullenme) klasik bir çerçeve sunsa da, tüm ölmekte olan kişiler için doğrusal olarak geçerli değildir; evreler atlanabilir, geri gelebilir veya farklı sıralarda yaşanabilir. Bu modelin sınırlılığı, bireysel deneyimleri standart bir kalıba sokma riskidir. Çoğu psikolog ölmekte olan kişilere karşı açık bir iletişim biçimi önerir. İlkeler: (1) İletişim ruhsal patoloji ve ölüme hazırlık üzerine olmamalı; bunun yerine ölmekte olan kişinin dayanıklılığını vurgulamalıdır. (2) Kişinin duygusal ifadelerine alan vermek - öfke, korku ve üzüntüyü yargılamadan kabul etmek. (3) Pratik ihtiyaçlar (ağrı yönetimi, konfor) ile duygusal ihtiyaçları dengelemek. (4) Ölmekte olan kişi için önemli destek yalnızca ruh sağlığı uzmanlarından değil hemşireler, hekimler, eş ve yakın arkadaşlardan da gelebilir. (5) Hospis/imarethane bakımı 'iyi bir ölüm' deneyimini destekler: fiziksel rahatlık, sevilen kişilerin desteği, kabullenme ve uygun tıbbi bakım. (6) Kişinin yaşam anlamını arayışına ve önemli ilişkilerini sonlandırma ihtiyacına saygı göstermek.",
      keyPoints: ["Kübler-Ross sınırlılık", "doğrusal değil", "açık iletişim", "dayanıklılığı vurgulama", "yargılamadan", "hospis-iyi ölüm", "destek kaynakları"],
      explanation: "Modern yas ve ölüm araştırmaları, Kübler-Ross modelini genişletmiş ve bireysel farklılıkları daha çok vurgulamıştır."
    },
    {
      question: "Genç yetişkinlikte mizaç-bağlanma-aşk ilişkilerini Bartholomew'un dörtlü modeliyle açıklayınız.",
      answer: "Mizaç (Chess & Thomas), çocuklukta belirir ve yetişkin kişilik örüntülerini şekillendirir. 3-5 yaşları arasında kolay mizaç örüntüleri sergileyen çocuklar genç yetişkinlikte daha başarılı uyum süreci sergilerken, zor mizaca sahip çocuklar başarılı biçimde uyum sağlayamamıştır. Engelleyici mizaç sahibi çocuklar (Wachs 2000) daha az atılgan olmakta, daha az sosyal destek edinmekte ve sürekli bir işe girmeyi reddetmektedir. Block (1993) - 3 yaş civarında duygu kontrolünde başarılı çocukların yetişkinlikte de duygularla baş etmede başarılı oldukları görülmüştür. Bağlanma (Hazan & Shaver 1987) bebeklikte ortaya çıkar ve yetişkinlikte ilişki örüntülerini etkiler. Bartholomew (1991) Dörtlü Bağlanma Modeli: (1) Güvenli (olumlu/olumlu) - sağlıklı romantik ilişkiler, samimi aşk türünde başarı; (2) Saplantılı (olumsuz/olumlu) - takıntılı romantik aşk, kaybetme korkusu; (3) Kayıtsız (olumlu/olumsuz) - yüzeysel ilişkiler, samimiyet kaçınma; (4) Korkulu (olumsuz/olumsuz) - hem yakınlık arzusu hem korkusu, çelişkili ilişkiler. Sternberg'in aşk üçgeni (tutku-samimiyet-bağlanma) farklı bağlanma stillerine göre farklı aşk türleri ortaya çıkarır.",
      keyPoints: ["mizaç çocuklukta", "kolay/zor mizaç", "bağlanma bebeklikte", "Bartholomew 4 stil", "Sternberg üçgen", "Erikson yakınlık", "kümülatif etki"],
      explanation: "Erken yaşam deneyimleri ve mizaç, yetişkin bağlanma stilini şekillendirir; bu da romantik ilişki kalitesini etkiler."
    },
    {
      question: "Postformal düşünme, bilgi işleme hızı, çalışma belleği ve uzmanlık kavramlarını orta yetişkinlik bilişsel değişimleri çerçevesinde ele alınız.",
      answer: "Orta yetişkinlikte bilişsel değişim çok-boyutlu ve çok-yönlüdür. (1) Bilgi işleme hızı: Schaie'nin (1994, 1996) Seattle Boylamsal Çalışmasında görüldüğü gibi, algısal hız ilk yetişkinlikte düşmeye başlar ve orta yetişkinlikte düşmeye devam eder. Fakat düşüş ani değildir; çoğu araştırmada bir saniyenin altındadır. Orta yaşlı yetişkinler ışığı gördüğünde butonu itmekte genç yetişkinlerden daha yavaştır. (2) Çalışma belleği: Denise Park'a (2001) göre orta yaşın sonlarında, yeni bilgi öğrenmek için daha çok zamana ihtiyaç vardır. Yeni bilgilerin öğrenilmesindeki yavaşlama karar verirken, problem çözerken ya da yazılan/konuşulan dili anlarken bireylerin bilgileri değişimlediği ve topladığı zihinsel 'çalışma sırası'ndaki değişimlerle ilişkilidir. (3) Uzmanlık (Kim & Hasher, 2009): Uzmanlığa ulaşma uzun zaman aldığı için, erken yetişkinlik yıllarından çok orta yetişkinlik yıllarında ortaya çıkar. (4) Pratik problem çözme (Thornton & Dumke, 2009): Günlük problem çözme ve karar verme etkinliği ilk ve orta yetişkinlikte sabit kalmakta, geç yetişkinlikte düşmektedir. (5) Postformal düşünme: Genç yetişkinlikte başlayan bu düşünme tarzı orta yetişkinlikte daha da olgunlaşır - yansıtıcı, durumsal ve birden çok perspektifi entegre eder.",
      keyPoints: ["bilgi işleme hızı düşer", "ani değil", "çalışma belleği", "Park 2001", "uzmanlık orta yaşta", "pratik problem", "postformal"],
      explanation: "Orta yetişkinlik bazı bilişsel boyutlarda düşüş gösterse de uzmanlık ve postformal düşünme gibi alanlarda gelişme yaşanır."
    }
  ]
});

// ============== SINAV 12 - EN ZOR GENEL DEĞERLENDİRME ==============
EXAMS.push({
  id: 12,
  title: "Sınav 12 - Final Sınavı (En Zor)",
  description: "En kapsamlı ve en zor genel değerlendirme. Tüm konuların derinlemesine bilgisini test eder.",
  fillInBlanks: [
    {
      question: "Yetişkin gelişim kuramları içinde Vaillant'ın 1920'lerde doğan Harvard mezunlarını içeren çalışmasına _______ Study adı verilir.",
      answer: "Grant",
      acceptableAnswers: ["Grant", "grant"],
      explanation: "Vaillant'ın sosyal olarak avantajlı 1920'lerde doğan Harvard mezunlarını içeren çalışmasına 'Grant Study' denir."
    },
    {
      question: "Yaşlanma uzmanı Denise Park'ın 2001 çalışmasında belirttiği gibi, orta yaşın sonlarında yeni bilgi öğrenmek için daha çok zamana ihtiyaç vardır ve bu durum _______ belleğindeki değişimlerle ilişkilidir.",
      answer: "çalışma",
      acceptableAnswers: ["çalışma", "calisma", "working", "çalışma belleği"],
      explanation: "Çalışma belleğindeki değişimler yeni bilgi öğrenmedeki yavaşlamayla ilişkilidir (Park, 2001)."
    },
    {
      question: "Hellons'un Mills Üniversitesi Çalışmasında 40'lı yaşların başında kadınların çoğunun yaşadığı 'Levinson gibi erkeklerde rastlanan endişeleri' arasında 'kısıtlamaların ve _______ farkında olmak' sayılmıştır.",
      answer: "ölümün",
      acceptableAnswers: ["ölümün", "olumun", "ölüm"],
      explanation: "Mills çalışmasında 40'lı yaşların başında kadınların yaşadığı endişeler: genç ve yaşlılara dönük endişe, içe bakış, köklere ilgi duymak, kısıtlamaların ve ölümün farkında olmak."
    },
    {
      question: "Carstensen'in kuramında yaşlı yetişkinler ilişki içerisinde oldukları yakın arkadaşları ve aile üyeleri ile görüşmelerini sürdürür ya da _______.",
      answer: "arttırırlar",
      acceptableAnswers: ["arttırırlar", "arttirirlar", "arttırır", "artırırlar"],
      explanation: "Yaşlı yetişkinler yakın ilişkiler içinde bulundukları kişilerle görüşmelerini sürdürür ya da arttırırlar."
    },
    {
      question: "Yaşlı yetişkinlerin %95'i toplum içinde, yaklaşık 2/3'ü aile üyeleriyle ve yaklaşık _______ yalnız yaşamaktadır.",
      answer: "1/3",
      acceptableAnswers: ["1/3", "üçte biri", "uçte biri", "3'te 1", "0.33"],
      explanation: "Yaşlı yetişkinlerin yaklaşık 2/3'ü aile üyeleriyle ve yaklaşık 1/3'ü yalnız yaşamaktadır."
    },
    {
      question: "İleri yetişkinlikte 12 yıllık boylamsal Gruenewald (2009) çalışmasında, _______ faydalı olma duyguları düşük ve azalmakta olan yaşlı yetişkinlerin erken ölüm riskleri daha yüksek bulunmuştur.",
      answer: "başkalarına",
      acceptableAnswers: ["başkalarına", "baskalarina", "başkaları"],
      explanation: "Başkalarına faydalı olma duyguları düşük ve azalmakta olan yaşlı yetişkinlerin erken ölüm riski yüksektir."
    },
    {
      question: "İkili-süreç modelinde kayıp odaklı stres kaynakları arasında 'kaybın olumsuz değerlendirmesi sevilen kişiye _______ duyma ve ölüm hakkında sürekli düşünüp durmayı' içerebilir.",
      answer: "özlem",
      acceptableAnswers: ["özlem", "ozlem"],
      explanation: "Kaybın olumsuz değerlendirmesi sevilen kişiye özlem duyma ve ölüm hakkında sürekli düşünüp durmayı içerebilir."
    },
    {
      question: "Genç yetişkinlikte fiziksel performansın doruk noktası 19-26 yaşları arasında ulaşılmakla birlikte, aynı zamanda fiziksel performansın _______ başladığı dönemi de yansıtır.",
      answer: "düşmeye",
      acceptableAnswers: ["düşmeye", "dusmeye", "düşmesi"],
      explanation: "Genç yetişkinlik dönemi, fiziksel performansın en üst seviyeye çıktığı dönem olmakla birlikte, aynı zamanda fiziksel performansın düşmeye başladığı dönemi de yansıtır."
    },
    {
      question: "İleri yetişkinlikte 'kullan ya da kaybet' kavramına göre bilişsel becerilerin kullanılmamasından kaynaklanan _______ oluşmaktadır.",
      answer: "atrofi",
      acceptableAnswers: ["atrofi"],
      explanation: "'Kullan ya da kaybet' - bilişsel becerilerin kullanılmamasından ve bunun sonucunda da atrofi oluşmasından kaynaklanmaktadır."
    },
    {
      question: "Lachman ve Firth'ün (2004) çalışmasında genç yetişkinlerin %80'i, orta yaş yetişkinlerin %71'i, _______ erkeklerin %62'si yaşamlarını kontrol ettiklerini ifade etmiştir.",
      answer: "yaşlı",
      acceptableAnswers: ["yaşlı", "yasli"],
      explanation: "Lanchman & Firth (2004): genç yetişkinlerin yaklaşık %80'i, orta yaş yetişkinlerin %71'i, yaşlı erkeklerin %62'si yaşamlarını kontrol ettiklerini ifade etmiştir."
    }
  ],
  multipleChoice: [
    {
      question: "Aşağıdakilerden hangisi orta yetişkinlikte stres ve kişisel kontrolle ilgili Lachman'ın (2006) ulaştığı sonuçtur?",
      options: ["Kişisel kontrol duygusu bireyler yaşlanınca artmaktadır", "Araştırmacılar genel olarak, kişisel kontrol duygusunun bireyler yaşlanınca azaldığı sonucuna varmıştır", "Kontrol duygusu yaşa bağlı değildir", "Sadece kadınlarda azalır"],
      correctIndex: 1,
      explanation: "Araştırmacılar genel olarak, kişisel kontrol duygusunun bireyler yaşlanınca azaldığı sonucuna varmıştır (Lachman, 2006)."
    },
    {
      question: "Aşağıdakilerden hangisi 'Sosyal saat' kavramının doğru bir tanımıdır?",
      options: ["Sosyal aktivitelerin programı", "Bireylerden evlenmek, çocuk yapmak veya bir kariyer kurmak gibi yaşam görevlerini yerlerine getirmeleri beklenen zaman dilimi", "İş saatleri", "Çalışma takvimi"],
      correctIndex: 1,
      explanation: "Sosyal saat (Bernice Neugarten): bireylerden evlenmek, çocuk yapmak veya bir kariyer kurmak gibi yaşam görevlerini yerlerine getirmeleri beklenen zaman dilimidir."
    },
    {
      question: "Boş yuvanın yeniden doldurulması (boomerang) konusunda günümüzün belirsiz ekonomik durumuna bakıldığında hangi durum yaygınlaşmıştır?",
      options: ["Boş yuva", "Boş yuvanın yeniden doldurulması yaygınlaşmıştır - çünkü yetişkin çocukların üniversiteden mezun olduktan sonra evde yaşamak istemesi ya da tam zamanlı bir işe başlayıp para biriktirmek istemesi", "Çocukların hiç dönmemesi", "Sadece kadın çocukların geri dönmesi"],
      correctIndex: 1,
      explanation: "Günümüzün belirsiz ekonomik durumuna bakıldığında, boş yuvanın yeniden doldurulması yaygınlaşmaktadır. Bunun nedeni yetişkin çocukların üniversiteden mezun olduktan sonra evde yaşamak istemesi ya da tam zamanlı bir işe başlayıp para biriktirmek istemesidir (Merrill, 2009)."
    },
    {
      question: "Aşağıdakilerden hangisi 'kuşak etkisi' kavramının somut bir örneğidir?",
      options: ["1960'larda doğan kişilerin tüm yetişkinlik gelişiminin diğer kuşaklarla aynı olduğu", "Boşanmanın yaşlı yetişkinlerde az olmasının yaştan çok kuşak etkisini yansıtması - yaşlıların ait oldukları kuşaklarda genç oldukları dönemde boşanmaların nadir olması", "Kuşak farkının önemsiz olduğu", "Sadece eğitim farkının önemli olduğu"],
      correctIndex: 1,
      explanation: "Boşanma yaşlı yetişkinlerde genç yetişkinlere göre daha az görülür; bu da yaşlıların ait oldukları kuşaklarda genç oldukları dönemde boşanmaların nadir olması nedeniyle yaştan çok kuşak etkisini yansıtmaktadır."
    },
    {
      question: "Aşağıdakilerden hangisi Frankl'a göre üç önemli insan özelliğinden biri DEĞİLDİR?",
      options: ["Dinsellik", "Özgürlük", "Sorumluluk", "Maddi başarı"],
      correctIndex: 3,
      explanation: "Frankl üç önemli insan özelliğinin dinsellik, özgürlük ve sorumluluk olduğunu belirtmiştir. Maddi başarı bu listede yer almaz."
    },
    {
      question: "Berkeley Boylamsal Çalışmasında en stabil ve en çok değişen özellikler nelerdir?",
      options: ["Stabil: fiziksel görünüm, Değişen: sosyo-ekonomik durum", "Stabil: bireyin entelektüel yönelimli, özgüven ve yeni deneyimlere açık olma dereceleri; Değişen: bireylerin merhametli veya düşman olup olmadıkları ya da iyi derecede otokontrole sahip olup olmadıkları", "Stabil: cinsiyet, Değişen: yaş", "Stabil: din, Değişen: meslek"],
      correctIndex: 1,
      explanation: "Berkeley çalışmasında en stabil özellikler entelektüel yönelim, özgüven ve deneyime açıklık; en çok değişen özellikler bireylerin merhametli veya düşman olup olmadıkları ile otokontrol düzeyleridir."
    },
    {
      question: "Aşağıdakilerden hangisi yaşlı yetişkinlerde benlik saygısının seyri hakkında Robins ve diğerlerinin (2002) 300.000+ kişilik enlemesine-kesitsel çalışmasının bulgusudur?",
      options: ["Benlik saygısı yaşam boyu sabit kalır", "Benlik saygısı 20'lerde artmış, 30-40'larda dengelenmiş, 50-60'larda kayda değer yükselmiş ve sonra 70-80'lerde önemli oranda düşmüştür", "Benlik saygısı sürekli artar", "Benlik saygısı sürekli düşer"],
      correctIndex: 1,
      explanation: "Robins (2002): benlik saygısı 20'lerde artmış, 30-40'larda dengelenmiş, 50-60'larda yükselmiş ve sonra 70-80'lerde düşmüştür."
    },
    {
      question: "Bilişsel nörobilim alanı beyin ve bilişsel işlevler arasındaki ilişkileri çalışırken hangi teknikleri kullanır?",
      options: ["EKG, MR", "fMRI, PET ve DTI gibi beyin görüntüleme teknikleri", "Sadece röntgen", "Sadece CT taraması"],
      correctIndex: 1,
      explanation: "Bilişsel nörobilim alanı fMRI, PET ve DTI gibi beyin görüntüleme tekniklerini içermektedir."
    },
    {
      question: "Aşağıdakilerden hangisi orta yaş erkekler için 'erektil fonksiyon bozukluğu' tanımıdır?",
      options: ["Üreme yeteneğinin tamamen kaybı", "Tatmin edici cinsel performansa yol açan ereksiyonun sağlanmaması ve sürdürülmemesi", "Sperm sayısının artması", "Testosteron artışı"],
      correctIndex: 1,
      explanation: "Erektil fonksiyon bozukluğu: tatmin edici cinsel performansa yol açan ereksiyonun sağlanmaması ve sürdürülmemesidir."
    },
    {
      question: "Aşağıdakilerden hangisi yaşlı yetişkinlerin gönüllülük çalışmalarının %50'sinin hangi alana yönelik olduğunu gösterir?",
      options: ["Hayvan bakımı", "Dini kuruluşların sundukları hizmetler", "Sanat etkinlikleri", "Spor faaliyetleri"],
      correctIndex: 1,
      explanation: "Yaşlı yetişkinlerin gönüllülük çalışmalarının neredeyse yüzde 50'si dini kuruluşların sundukları hizmetlere yöneliktir."
    },
    {
      question: "Aşağıdakilerden hangisi yaşlanmanın 'aktif yetişkin gelişimi' kapsamında 'aktif olmak' ile sağladığı doyumu belirten Erickson ve Krarner'ın (2009) görüşüdür?",
      options: ["Aktif olmak yaşlı yetişkinler için yorucudur", "Düzenli olarak egzersiz yapan, dışarı çıkan, seyahatlere giden, dini kurum faaliyetlerine katılan ve toplantılara giden yaşlı yetişkinler, toplumdan uzak yaşayan emsallerine göre yaşamlarından daha fazla doyum sağlar", "Aktif olmak gereksizdir", "Sadece evde kalmak doyum verir"],
      correctIndex: 1,
      explanation: "Aktif olmak başarılı yaşlanma açısından önemlidir (Erickson & Krarner, 2009). Aktif yaşlı yetişkinler toplumdan uzak yaşayan emsallerine göre yaşamlarından daha fazla doyum sağlar."
    },
    {
      question: "Hangi araştırmacı 'kişilerin olabilecekleri, olmak istedikleri ve olmaktan korktukları benlikleri' olarak olası benlikleri tanımlamıştır?",
      options: ["Carstensen", "Hoppmann & Smith ile Markus & Nurius", "Erikson", "Schaie"],
      correctIndex: 1,
      explanation: "Olası benlikler kavramı Hoppmann & Smith (2007) ve Markus & Nurius (1987) tarafından geliştirilmiştir."
    },
    {
      question: "Aşağıdakilerden hangisi yaşlanma ve cinselliğin değişimi konusunda doğru bir bilgidir?",
      options: ["Yaşlanma kadınlarda erkeklere göre daha fazla cinsel performans değişikliği yapar", "Yaşlanma erkeklerde olmak üzere insanların cinsel performansında bazı değişiklikleri tetikleyebilmektedir; kadınlardan daha çok erkekler", "Cinsellik 60 yaş sonrası imkansızdır", "Cinsel değişiklikler sadece kadınlarda görülür"],
      correctIndex: 1,
      explanation: "Yaşlanma, kadınlara göre daha çok erkeklerde olmak üzere insanların cinsel performansında bazı değişiklikleri tetikleyebilmektedir."
    },
    {
      question: "Aşağıdakilerden hangisi 'beyin ölümü' için günümüzde çoğu doktorun kabul ettiği tanımdır?",
      options: ["Sadece nefes durması", "Yukarı kortikal işlevlerin hem de aşağı beyin kökü işlevlerinin durması", "Sadece kalp atışının durması", "Sadece üst beyin işlevlerinin durması"],
      correctIndex: 1,
      explanation: "Truog (2008): Günümüzde çoğu doktorun kabul ettiği beyin ölümü tanımı hem yukarı kortikal işlevlerin hem de aşağı beyin kökü işlevlerinin durması şeklindedir."
    },
    {
      question: "Genç yetişkinlikte yaratıcılığa ilişkin Simonton'un sonuçlarından biri DEĞİLDİR?",
      options: ["Üretkenlikte önemli derecede azalma", "Yaratıcı alanlarda zıtlıklar", "Bireysel farklılıklar", "Yaratıcılık tüm yaşam boyunca sabittir"],
      correctIndex: 3,
      explanation: "Simonton (1996) sonuçları: (1) Üretkenlikte önemli derecede azalma, (2) yaratıcı alanlarda zıtlıklar, (3) bireysel farklılıklar. Yaratıcılık doruk noktasına kırklı yaşlarda ulaşır ve sonra düşer."
    },
    {
      question: "Yaşlanmanın görme kayıpları kapsamında üç temel göz hastalığı hangileridir?",
      options: ["Astigmatizm, hipermetropi, miyopi", "Katarakt, glokom ve maküler dejenerasyon", "Konjonktivit, alerji, kuruluk", "Kızıl, viral enfeksiyon, bakteriyel enfeksiyon"],
      correctIndex: 1,
      explanation: "Yaşlı yetişkinlerin görmesini zayıflatabilecek üç hastalık katarakt, glokom ve maküler dejenerasyondur."
    },
    {
      question: "Aşağıdakilerden hangisi orta yetişkinlikte 'sarcopenia' kavramının doğru tanımıdır?",
      options: ["Yağ artışı", "Yaşla ilişkili kas kütlesi ve güç kaybı; orta yaşta yıllık %1-2 oranında olur", "Kemik erimesi", "Hormonal denge"],
      correctIndex: 1,
      explanation: "Sarcopenia: yaşla ilişkili kas kütlesi ve güç kaybı; orta yaşta yıllık %1-2 oranında olur."
    },
    {
      question: "Yaşlı yetişkinlerde sosyal destek konusunda doğru olan ifade hangisidir?",
      options: ["Sosyal destek sadece duygusal sağlığı etkiler", "Sosyal destek tüm yaşlardaki bireylerin yaşamla etkili bir şekilde başa çıkmalarına yardımcı olabilmekte ve yaşlı yetişkinler için sosyal destek fiziksel ve zihinsel sağlıkları ile ilişkilidir", "Sosyal destek sadece fiziksel sağlığı etkiler", "Sosyal destek önemsizdir"],
      correctIndex: 1,
      explanation: "Sosyal destek tüm yaşlardaki bireyler için yaşamla etkili başa çıkmaya yardımcıdır ve yaşlı yetişkinler için fiziksel ve zihinsel sağlıkları ile ilişkilidir (Cheng, Lee & Chow, 2010)."
    },
    {
      question: "Genç yetişkinlikte cinsel etkinliklerle ilgili olarak Türkiye genelinde 2013 yılında kadınlarda ortalama ilk evlilik yaşı nedir?",
      options: ["22.1", "23.5", "24.1", "26.0"],
      correctIndex: 2,
      explanation: "TÜİK 2013 verileri: Türkiye genelinde kadınlarda ortalama ilk evlilik yaşı 24.1 olarak tespit edilmiştir."
    },
    {
      question: "Aşağıdakilerden hangisi 'episodik bellek' örneği DEĞİLDİR?",
      options: ["Küçük kardeşin doğduğunda neye benziyordu", "İlk doğum günümüzde ne oldu", "Bu sabah kahvaltıda ne yediğin", "Geometri kuralları"],
      correctIndex: 3,
      explanation: "Geometri kuralları anlamsal belleğin örneği. Episodik bellek örnekleri: küçük kardeşin doğumu, ilk doğum günü, bu sabah kahvaltı."
    },
    {
      question: "Bilişsel mekanikler ve bilişsel pragmatikler ayrımının altında yatan kuramsal çerçeve hangisidir?",
      options: ["Erikson'un psikososyal kuramı", "Akıcı (mekanikler) ile kristalize (pragmatik) zeka arasındaki ayrım", "Piaget'nin bilişsel kuramı", "Skinner'ın davranışçılık kuramı"],
      correctIndex: 1,
      explanation: "Bilişsel mekanikler (donanım) ile pragmatikler (yazılım) ayrımı, akıcı (mekanikler) ile kristalize (pragmatik) zeka arasındaki ayrıma benzer (Lovden ve Lindenberg, 2007)."
    },
    {
      question: "Aşağıdakilerden hangisi 'asetilkolin'in azalmasının hangi hastalıkla ilişkili olduğunu gösterir?",
      options: ["Parkinson", "Alzheimer hastalığıyla ilişkili ağır bellek kaybı", "Multiple skleroz", "ALS"],
      correctIndex: 1,
      explanation: "Bazı araştırmacılar Alzheimer hastalığıyla ilişkili ağır bellek kaybından asetilkolindeki azalmaların sorumlu olabileceği sonucuna varmışlardır."
    },
    {
      question: "Genç yetişkinlik dönemindeki 'aşkın son bulması' konusunda hangi sonuçlar yaşanabilir?",
      options: ["Sadece olumsuz duygular", "Karşılıksız aşk; bireyde depresyona, takıntılı düşüncelere, cinsel bozukluklara, işte verimsizliğe, yeni arkadaş edinmede zorlanmaya ve kendini suçlamaya neden olabilmektedir", "Sadece olumlu sonuçlar", "Hiçbir psikolojik etki olmaz"],
      correctIndex: 1,
      explanation: "Karşılıksız aşk bireyde depresyona, takıntılı düşüncelere, cinsel bozukluklara, işte verimsizliğe, yeni arkadaş edinmede zorlanmaya ve kendini suçlamaya neden olabilir."
    },
    {
      question: "Aşağıdakilerden hangisi başarılı orta yaş geçişi için Levinson'un önerdiği önerme?",
      options: ["Sosyal statünün artması", "Bireyin zıtlıkları ne kadar etkili azalttığına ve bunların her birinin kendi benliğinin bir parçası olduğunu kabul etmesine bağlıdır", "Maddi durumun iyileştirilmesi", "Eski hayata dönmek"],
      correctIndex: 1,
      explanation: "Levinson'a göre orta yaş geçişinin başarısı bireyin zıtlıkları ne kadar etkili azalttığına ve bunların her birinin kendi benliğinin bir parçası olduğunu kabul etmesine bağlıdır."
    },
    {
      question: "İleri yetişkinlikte 'kullan ya da kaybet' kavramı hangi bilişsel modeli yansıtır?",
      options: ["Bilişsel beceriler yetişkin yaşamı boyunca asla değişmez", "Bilişsel faaliyet örüntülerindeki değişimler, bilişsel becerilerin kullanılmamasından ve bunun sonucunda da atrofi oluşmasından kaynaklanır", "Bilişsel beceriler tamamen genetik tarafından belirlenir", "Bilişsel becerilerin hiçbiri iyileştirilebilir değildir"],
      correctIndex: 1,
      explanation: "'Kullan ya da kaybet' (Hughes, 2010): bilişsel faaliyet örüntülerindeki değişimler bilişsel becerilerin kullanılmamasından ve bunun sonucunda atrofi oluşmasından kaynaklanır."
    }
  ],
  classicQuestions: [
    {
      question: "Yas süreci üzerine 'ikili-süreç modeli', 'uzamış yas' ve 'mahrum kalınmış yas' kavramlarını entegre ederek tartışınız.",
      answer: "İkili-süreç modeli yasla başa çıkmada iki boyut olduğunu vurgular: (1) Kayıp odaklı stres kaynakları - kaybın olumlu ve olumsuz değerlendirmelerini, sevilen kişiye özlem ve ölüm hakkında sürekli düşünmeyi içerir. Kaybın olumlu değerlendirmesi ölümün çekilen acılara son verdiği kabulünü içerir. (2) İyileşme odaklı stres kaynakları - yasın dolaylı sonucu olarak ortaya çıkar: kimlik değişimi (eş kimliğinden dul kimliğine geçiş), yönetici beceriler (maddi konularla ilgili durumlar). İyileşme süreci 'dünya hakkındaki yıkılan varsayımları' ve kişinin o dünyadaki yerini yeniden inşa eder. İkili süreç modelinde kayıpla başa çıkma ve iyileşme çabası eş zamanlı gider. Bu modelin başarısızlığı uzamış yasa yol açabilir - kalıcı çaresizlik içeren ve uzun zaman geçmesine rağmen çözülemeyen yas. Duygusal olarak bağlı bir kişiyi kaybedenler genellikle uzun süreli yas yaşama riski en yüksek kişilerdir; depresyona ve intihara yatkınlaştırabilir. Mahrum kalınmış yas ise sosyal olarak belirsiz bir kayıp için yaşadığı yası ifade eder; eski eşle ilişki, kürtaj, AIDS gibi etiketlenmiş ölüm biçimleri buna örnektir. Bu yas türü sosyal destekten yoksun olduğu için ikili süreç modelinin iyileşme aşamasını engelleyebilir.",
      keyPoints: ["ikili süreç model", "kayıp odaklı", "iyileşme odaklı", "eş zamanlı", "uzamış yas", "mahrum kalınmış yas", "sosyal destek", "kimlik değişimi"],
      explanation: "Modern yas kuramları doğrusal evre modellerinden uzaklaşıp dinamik süreç modellerine yönelmiştir."
    },
    {
      question: "Schaie'nin Seattle Boylamsal Çalışması ile Salthouse (2009) çalışmasını karşılaştırarak bilişsel yaşlanma konusunda farklı bakış açılarını tartışınız.",
      answer: "Seattle Boylamsal Çalışması (K. Warner Schaie, 1956'dan beri 7 yıllık aralıklarla): Kelime Bilgisi, Sözel Bellek, Sayı, Mekansal Oryantasyon, Tümevarımsal Muhakeme ve Algısal Hız test edilir. Hem erkekler hem kadınlar için sözel yetenek, sözel bellek, tümevarımsal muhakeme ve mekansal oryantasyondaki en yüksek performans orta yaştadır. Sadece sayı ve algısal hızda orta yaşta düşme olur; algısal hız en erken düşüşü gösterir ve ilk yetişkinlikte başlar. Schaie (1994) zihinsel yetenekleri hem enlemesine-kesitsel hem de boylamsal olarak ölçtüğünde, enlemesine-kesitsel ölçümlerde boylamsala göre daha çok düşüş olduğunu bulmuştur (kuşak etkisi). Bu, yaşa bağlı düşüşün abartılabileceğini öne sürer. Salthouse (2009) ise farklı bir bakış açısıyla erken ve orta yetişkinlikteki düşük düzeyde bilişsel fonksiyonların yaşa bağlı nörobiyolojik düşüşlerden kaynaklandığını savunur. Enlemesine-kesitsel çalışmalar bu nörobiyolojik faktörlerin 20'li ve 30'lu yaşlarda düştüğünü göstermiştir: bölgesel beyin hacmi, kortikal kalınlık, sinaptik yoğunluk, miyelinleşmenin bazı yönleri, dopamin ve serotonin gibi nörotransmitterlerin bazı yönlerinin fonksiyonu, beyin korteksine kan akışı ve nöronlarda karışıklığın (tangle) toplanması. Bazı araştırmacılar Schaie'nin 'orta yetişkinliğin, bilişsel alan fonksiyon düzeylerinin korunduğu ya da arttığı bir zaman olduğu' konusundaki görüşüne katılmazlar (Finch, 2009). Bu farklı sonuçlar yöntemsel farklılıklardan kaynaklanır: boylamsal çalışmalar bireysel değişimi takip ederken, enlemesine-kesitsel çalışmalar kuşak etkilerini de içerir.",
      keyPoints: ["Seattle-Schaie 1956", "6 yetenek", "orta yaşta zirve", "Salthouse 2009", "20-30'larda düşüş", "nörobiyolojik", "kuşak etkisi", "boylamsal vs enlemesine"],
      explanation: "Bilişsel yaşlanma araştırmaları yöntem ve bulgular açısından çelişkili sonuçlar verebilmekte; tablo karmaşıktır."
    },
    {
      question: "Beş Büyük kişilik faktörünün yaşlı yetişkinlerin ölüm oranı ile ilişkisini Wilson, Iwasa ve Martin'in çalışmalarını da içererek tartışınız.",
      answer: "Beş Büyük kişilik faktörü (yaşantıya açıklık, sorumluluk, dışa dönüklük, yumuşak başlılık, nevrotizm-duygusal denge) yaşlı yetişkinlerin ölüm oranı ile ilişkilidir. Martin, Friedman & Schwartz (2007) - 70 yıllık bir süre içinde 1.200'den fazla kişi üzerinde gerçekleştirilen boylamsal bir çalışma, kişiliğin Beş Büyük faktöründen sorumluluk sahibi olmanın çocukluktan ileri yetişkinliğe kadar daha yüksek ölüm riski ile ilişkili olduğunu (sorumluluk düşük olunca risk yüksek) ortaya koymuştur. Wilson ve diğerlerinin (2004) bir başka çalışmasında ise söz konusu Beş Büyük faktörden ikisinin yaşlı yetişkinlerin ölüm oranı ile ilişkili olduğunu ve sorumluluk anlayışı düşük ve nevrotikliğin yüksek olduğu durumların erken ölüm riskini arttırdığı tespit edilmiştir. Iwasa ve diğerlerinin (2008) beş yıllık boylamsal bir çalışmada ise yüksek düzeyde sorumluluk, dışa dönüklük ve deneyime açıklığın yüksek ölüm oranı riski ile ilişkili olduğu görülmüştür. Bu son bulgu çelişkili görünebilir ancak Iwasa'nın çalışmasındaki örneklem ve metodoloji farklılıkları sonucu etkilemiş olabilir. Beş Büyük modeli sağlık davranışları, stresle başa çıkma ve sosyal ilişkiler aracılığıyla ölüm oranını etkilemektedir; örneğin yüksek sorumluluk sağlıklı yaşam tarzıyla bağlantılıdır.",
      keyPoints: ["Beş Büyük faktör", "Martin 2007", "70 yıl çalışma", "Wilson 2004", "sorumluluk-nevrotiklik", "Iwasa 2008", "erken ölüm riski"],
      explanation: "Kişilik psikolojisi giderek artan kanıtlarla sağlık davranışları ve uzun ömürle bağlantı kurmaktadır."
    },
    {
      question: "İleri yetişkinlikte demans, Alzheimer, Parkinson ve çoklu damar tıkanmasına bağlı demansı klinik özellikleri, sebepleri ve seyirleriyle karşılaştırarak tartışınız.",
      answer: "Demans, temel belirtisi zihinsel işlevlerin bozulması olan nörolojik bozukluklara verilen genel addır ve yaşlı yetişkinlere en fazla zarar veren rahatsızlık demanslardır. Alzheimer hastalığı: demansın bir türüdür; bellekte, muhakeme yeteneğinde, dilde ve sonunda fiziksel işlevlerde derece derece bir bozulmayla kendini gösteren, ilerleyen, geri dönüşü olmayan bir beyin rahatsızlığıdır. 65 yaş öncesi başlayanlar erken başlangıçlı olarak tanımlanmaktadır. Hafif düzeyde bilişsel bozulma Alzheimer için bir risk unsuru olarak düşünüldüğünden, erken tanı önemlidir. Bazı araştırmacılar Alzheimer hastalığıyla ilişkili ağır bellek kaybından asetilkolindeki azalmaların sorumlu olabileceği sonucuna varmışlardır. Çoklu damar tıkanmasına bağlı demans: bu bozukluk cerebral/beyne ait atardamarlarda tekrarlanan, geçici kan akışı engellenmesi sonucunda zihinsel işlevlerde düzensiz ve ilerleyen kayıpları ifade etmektedir ve erkeklerde daha yaygındır. Klinik görünümü Alzheimer hastalığından farklıdır - Alzheimer hastaları sürekli olarak kötüye giderken, birçok çoklu damar tıkanmasına bağlı demansa sahip kişiler iyileşebilmektedir. Belirtileri zihin karışıklığı, kelimeleri iyi telaffuz edememek, yazma bozuklukları, yüzün/bacağın ya da kolun bir tarafının uyuşmasıdır. Parkinson hastalığı: demansın diğer bir türü olan Parkinson hastalığı, kaslardaki titreme, hareketlerin yavaşlaması ve kısmi felç gibi belirtilerle tanımlanan sürekli ve ilerleyen bir rahatsızlıktır. Parkinson hastalığı, beyindeki dopamin üreten sinirlerin zarar görmesiyle ortaya çıkmaktadır. Farklı patofizyolojik mekanizmaları olan bu rahatsızlıklar farklı tedavi yaklaşımları gerektirir.",
      keyPoints: ["demans-genel ad", "Alzheimer-geri dönüşsüz-asetilkolin", "65 yaş öncesi erken", "vasküler-iyileşebilir-erkek", "Parkinson-dopamin", "titreme-felç"],
      explanation: "Demans türleri farklı klinik tablolar sunar; doğru tanı tedavi planlaması için kritik öneme sahiptir."
    },
    {
      question: "Genç yetişkinlikte yaşam biçimleri (yalnız, birlikte yaşayan, evli, boşanmış, tekrar evlenmiş, eşcinsel) ve evliliğin başarısı/başarısızlığı için Gottman'ın 7 ilkesini detaylı olarak açıklayınız.",
      answer: "Günümüzde yetişkinler farklı yaşam biçimleri seçmektedirler. (1) Yalnız Yetişkinler: yaşama ilişkin kararlar alma, kişisel kaynaklar geliştirme, bağımsız kararlar alma özgürlüğü, kendi ilgilerine zaman ayırma avantajları vardır; ancak yetişkinlerle yakınlık kurmak, yalnızlıkla mücadele etme ve evlilik yaklaşımlı toplum içinde kendine yer edinme zorlukları görülür. (2) Birlikte Yaşayan Yetişkinler: yaşam evlenmeden cinsel ilişkinin yaşandığı birliktelikleri kapsar; onay ve mal paylaşımı sorunları görülür ve bu tür ilişkide kadınlar daha fazla şiddet görürler. (3) Evli Yetişkinler: Mutlu bir evlilik yaşayan bireyler, boşanmış ya da mutsuz evlilik yaşayanlara göre daha uzun yaşamakta ve daha sağlıklı bir yaşam sürdürmektedir. Mutsuz evlilik ise insan ömrünü ortalama 4 yıl azaltmaktadır (Gove, Style, & Hughes, 1990). (4) Boşanmış Yetişkinler: genç yaşta evlilik, düşük eğitim düzeyi, düşük gelir, dini inanca sahip olmamak, boşanmış ebeveyne sahip olmak, evlilik öncesi bebek sahibi olmak gibi faktörler boşanmada artışa yol açmaktadır. (5) Tekrar Evlenen Yetişkinler: yeniden evlenmelerin %50'si boşanma sonrasında 3 yıl içinde yapılmaktadır. Erkekler kadınlara göre çok daha hızlı evlenmektedir. (6) Gey ve Lezbiyen Yetişkinler: eşcinsel evliliklerin sonlandırılmasına yönelik yasal ve sosyal engeller oluşturulmakla birlikte, bu durum eşcinsel evliliklerde söz konusu olmamaktadır. Lezbiyen çiftler ilişkilerinde özellikle eşitliğe öncelik vermektedir. John Gottman'ın 7 ilkesi: (1) Aşk haritanızı oluşturun, (2) Düşkünlük ve hayranlığınızı besleyin, (3) Birbirinizden uzaklaşmak yerine yakınlaşın, (4) Eşinizin sizi etkilemesine izin verin, (5) Çözülebilir çatışmaları çözün, (6) Kilitlenmelerin üstesinden gelin, (7) Ortak anlam yaratın. Tekrar evlenen çiftler için öneriler: gerçekçi beklentiler edinin ve aile içinde yeni olumlu ilişkiler geliştirin.",
      keyPoints: ["6 yaşam biçimi", "evli en uzun yaşar", "mutsuz evlilik -4 yıl", "boşanma faktörleri", "Gottman 7 ilke", "eşcinsel eşitlik"],
      explanation: "Modern yetişkinlik çoğul aile yapılarını barındırır; her seçimin kendi dinamikleri ve sonuçları vardır."
    }
  ]
});

// Tüm sınavlara klasik soruları ekle
EXAMS.forEach(exam => {
  if (CLASSIC_BY_EXAM[exam.id]) {
    exam.classicQuestions = CLASSIC_BY_EXAM[exam.id];
  }
});
