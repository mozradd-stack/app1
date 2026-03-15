const glossary = [
  {
    term: 'Steuer-ID (Steuerliche Identifikationsnummer)',
    explanation: {
      de: 'Eine persönliche 11-stellige Nummer vom Finanzamt. Sie haben sie per Post bekommen, als Sie sich in Deutschland angemeldet haben. Sie ändert sich nie.',
      en: 'A personal 11-digit number from the tax office. You received it by mail when you registered in Germany. It never changes.',
      ar: 'رقم شخصي مكون من 11 رقمًا من مكتب الضرائب. تلقيته بالبريد عند تسجيلك في ألمانيا. لا يتغير أبدًا.',
      tr: 'Vergi dairesinden 11 haneli kişisel bir numara. Almanya\'ya kaydolduğunuzda postayla almışsınızdır. Asla değişmez.',
      uk: 'Особистий 11-значний номер від податкової. Ви отримали його поштою, коли зареєструвалися в Німеччині. Він ніколи не змінюється.',
      fr: 'Un numéro personnel à 11 chiffres du bureau des impôts. Vous l\'avez reçu par courrier lors de votre inscription en Allemagne. Il ne change jamais.',
      fa: 'یک شماره شخصی 11 رقمی از اداره مالیات. آن را هنگام ثبت نام در آلمان از طریق پست دریافت کرده‌اید. هرگز تغییر نمی‌کند.'
    }
  },
  {
    term: 'Bedarfsgemeinschaft',
    explanation: {
      de: 'Menschen, die zusammen in einer Wohnung wohnen und gemeinsam wirtschaften (z.B. Ehepartner). Ihre Einkommen und Ausgaben werden zusammen berechnet.',
      en: 'People who live together in one apartment and share finances (e.g. spouses). Their income and expenses are calculated together.',
      ar: 'أشخاص يعيشون معًا في شقة واحدة ويتقاسمون المالية (مثل الأزواج). يتم حساب دخلهم ونفقاتهم معًا.',
      tr: 'Bir dairede birlikte yaşayan ve mali durumlarını paylaşan kişiler (örn. eşler). Gelirleri ve giderleri birlikte hesaplanır.',
      uk: 'Люди, які живуть разом в одній квартирі і ведуть спільне господарство (напр. подружжя). Їхні доходи та витрати розраховуються разом.',
      fr: 'Personnes vivant ensemble dans un appartement et partageant les finances (ex: conjoints). Leurs revenus et dépenses sont calculés ensemble.',
      fa: 'افرادی که با هم در یک آپارتمان زندگی می‌کنند و مالیات مشترک دارند (مثلا همسران). درآمد و هزینه‌های آنها با هم محاسبه می‌شود.'
    }
  },
  {
    term: 'Meldebescheinigung',
    explanation: {
      de: 'Ein Dokument vom Bürgeramt, das bestätigt, wo Sie wohnen. Sie bekommen es nach der Anmeldung Ihrer Wohnung.',
      en: 'A document from the Citizens\' Office confirming where you live. You get it after registering your residence.',
      ar: 'وثيقة من مكتب المواطنين تؤكد مكان إقامتك. تحصل عليها بعد تسجيل سكنك.',
      tr: 'Vatandaş Ofisinden nerede yaşadığınızı onaylayan bir belge. İkametinizi kaydettirdikten sonra alırsınız.',
      uk: 'Документ з бюро громадян, що підтверджує ваше місце проживання. Ви отримуєте його після реєстрації.',
      fr: 'Un document du bureau des citoyens confirmant votre lieu de résidence. Vous l\'obtenez après l\'enregistrement.',
      fa: 'یک سند از اداره شهروندان که محل سکونت شما را تأیید می‌کند. پس از ثبت محل سکونت خود آن را دریافت می‌کنید.'
    }
  },
  {
    term: 'Aufenthaltstitel',
    explanation: {
      de: 'Eine offizielle Erlaubnis, in Deutschland zu leben. Es gibt verschiedene Arten: Aufenthaltserlaubnis (befristet), Niederlassungserlaubnis (unbefristet), Blaue Karte EU.',
      en: 'An official permission to live in Germany. There are different types: residence permit (temporary), settlement permit (permanent), EU Blue Card.',
      ar: 'إذن رسمي للعيش في ألمانيا. هناك أنواع مختلفة: تصريح إقامة (مؤقت)، تصريح استيطان (دائم)، البطاقة الزرقاء للاتحاد الأوروبي.',
      tr: 'Almanya\'da yaşamak için resmi izin. Farklı türleri vardır: oturma izni (geçici), yerleşme izni (kalıcı), AB Mavi Kartı.',
      uk: 'Офіційний дозвіл на проживання в Німеччині. Є різні типи: дозвіл на перебування (тимчасовий), дозвіл на поселення (постійний), Блакитна карта ЄС.',
      fr: 'Une autorisation officielle de vivre en Allemagne. Il existe différents types : permis de séjour (temporaire), permis d\'établissement (permanent), Carte bleue européenne.',
      fa: 'مجوز رسمی زندگی در آلمان. انواع مختلفی دارد: اجازه اقامت (موقت)، اجازه استقرار (دائمی)، کارت آبی اتحادیه اروپا.'
    }
  },
  {
    term: 'Wohnungsgeberbestätigung',
    explanation: {
      de: 'Ein Dokument von Ihrem Vermieter, das bestätigt, dass Sie in seine Wohnung eingezogen sind. Sie brauchen es für die Anmeldung beim Bürgeramt.',
      en: 'A document from your landlord confirming you moved into their apartment. You need it for registration at the Citizens\' Office.',
      ar: 'وثيقة من المالك تؤكد أنك انتقلت إلى شقته. تحتاجها للتسجيل في مكتب المواطنين.',
      tr: 'Ev sahibinizden, dairesine taşındığınızı onaylayan bir belge. Vatandaş Ofisindeki kayıt için gereklidir.',
      uk: 'Документ від орендодавця, що підтверджує ваше заселення. Потрібний для реєстрації в бюро громадян.',
      fr: 'Un document de votre propriétaire confirmant que vous avez emménagé. Nécessaire pour l\'inscription au bureau des citoyens.',
      fa: 'یک سند از صاحبخانه شما که تأیید می‌کند شما به آپارتمان او نقل مکان کرده‌اید. برای ثبت نام در اداره شهروندان لازم است.'
    }
  },
  {
    term: 'IBAN',
    explanation: {
      de: 'Ihre internationale Bankkontonummer. Sie finden sie auf Ihrer Bankkarte oder im Online-Banking. In Deutschland beginnt sie mit DE und hat 22 Zeichen.',
      en: 'Your international bank account number. Found on your bank card or in online banking. In Germany it starts with DE and has 22 characters.',
      ar: 'رقم حسابك البنكي الدولي. تجده على بطاقتك البنكية أو في الخدمات المصرفية عبر الإنترنت. في ألمانيا يبدأ بـ DE ويتكون من 22 حرفًا.',
      tr: 'Uluslararası banka hesap numaranız. Banka kartınızda veya çevrimiçi bankacılıkta bulabilirsiniz. Almanya\'da DE ile başlar ve 22 karakterdir.',
      uk: 'Ваш міжнародний номер банківського рахунку. Знаходиться на банківській картці або в онлайн-банкінгу. В Німеччині починається з DE і має 22 символи.',
      fr: 'Votre numéro de compte bancaire international. Se trouve sur votre carte bancaire ou dans la banque en ligne. En Allemagne, il commence par DE et a 22 caractères.',
      fa: 'شماره حساب بانکی بین‌المللی شما. روی کارت بانکی یا در بانکداری آنلاین قابل مشاهده است. در آلمان با DE شروع می‌شود و 22 کاراکتر دارد.'
    }
  },
  {
    term: 'Kindergeld',
    explanation: {
      de: 'Geld vom Staat für jedes Kind. Aktuell 250€ pro Kind pro Monat. Jeder, der in Deutschland lebt und Kinder hat, kann es beantragen.',
      en: 'Government money for each child. Currently €250 per child per month. Anyone living in Germany with children can apply.',
      ar: 'أموال من الدولة لكل طفل. حاليًا 250 يورو لكل طفل شهريًا. يمكن لأي شخص يعيش في ألمانيا ولديه أطفال التقدم بطلب.',
      tr: 'Her çocuk için devletten para. Şu anda çocuk başına aylık 250€. Almanya\'da yaşayan ve çocuğu olan herkes başvurabilir.',
      uk: 'Гроші від держави на кожну дитину. Наразі 250€ на дитину на місяць. Кожен, хто живе в Німеччині і має дітей, може подати заяву.',
      fr: 'Argent de l\'État pour chaque enfant. Actuellement 250€ par enfant par mois. Toute personne vivant en Allemagne avec des enfants peut en faire la demande.',
      fa: 'پول دولتی برای هر کودک. در حال حاضر 250 یورو به ازای هر کودک در ماه. هر کسی که در آلمان زندگی می‌کند و فرزند دارد می‌تواند درخواست دهد.'
    }
  },
  {
    term: 'Bürgergeld',
    explanation: {
      de: 'Finanzielle Hilfe vom Staat für Menschen, die arbeitslos sind oder zu wenig verdienen. Früher hieß es "Hartz IV". Man beantragt es beim Jobcenter.',
      en: 'Financial help from the government for people who are unemployed or earn too little. It used to be called "Hartz IV". You apply at the Jobcenter.',
      ar: 'مساعدة مالية من الدولة للأشخاص العاطلين عن العمل أو الذين يكسبون القليل. كان يُسمى سابقًا "هارتس 4". يتم التقديم في مركز العمل.',
      tr: 'İşsiz olan veya çok az kazanan kişiler için devletten mali yardım. Eskiden "Hartz IV" olarak adlandırılıyordu. İş Merkezinde başvurulur.',
      uk: 'Фінансова допомога від держави для безробітних або тих, хто мало заробляє. Раніше називалася "Hartz IV". Подається у центрі зайнятості.',
      fr: 'Aide financière de l\'État pour les personnes au chômage ou gagnant trop peu. Anciennement appelé "Hartz IV". La demande se fait au Jobcenter.',
      fa: 'کمک مالی دولتی برای افرادی که بیکار هستند یا درآمد کمی دارند. قبلاً "هارتس 4" نامیده می‌شد. در مرکز کاریابی درخواست داده می‌شود.'
    }
  },
  {
    term: 'Familienkasse',
    explanation: {
      de: 'Die Behörde, die Kindergeld auszahlt. Sie gehört zur Bundesagentur für Arbeit.',
      en: 'The authority that pays child benefit. It belongs to the Federal Employment Agency.',
      ar: 'الهيئة التي تدفع إعانة الأطفال. تابعة لوكالة العمل الفيدرالية.',
      tr: 'Çocuk parası ödeyen kurum. Federal İş Ajansına bağlıdır.',
      uk: 'Орган, який виплачує дитячу допомогу. Належить до Федерального агентства зайнятості.',
      fr: 'L\'autorité qui verse les allocations familiales. Elle fait partie de l\'Agence fédérale pour l\'emploi.',
      fa: 'سازمانی که کمک هزینه کودک را پرداخت می‌کند. متعلق به آژانس فدرال کار است.'
    }
  },
  {
    term: 'Bürgeramt',
    explanation: {
      de: 'Das Amt in Ihrer Stadt, wo Sie sich anmelden, einen Ausweis beantragen oder andere Verwaltungssachen erledigen können.',
      en: 'The office in your city where you can register, apply for an ID, or handle other administrative tasks.',
      ar: 'المكتب في مدينتك حيث يمكنك التسجيل أو التقدم للحصول على بطاقة هوية أو إنجاز أمور إدارية أخرى.',
      tr: 'Şehrinizdeki kayıt, kimlik başvurusu veya diğer idari işleri yapabileceğiniz ofis.',
      uk: 'Офіс у вашому місті, де можна зареєструватися, подати заяву на посвідчення або вирішити інші адміністративні справи.',
      fr: 'Le bureau de votre ville où vous pouvez vous inscrire, demander une pièce d\'identité ou effectuer d\'autres démarches administratives.',
      fa: 'اداره‌ای در شهر شما که می‌توانید ثبت نام کنید، برای کارت شناسایی درخواست دهید یا کارهای اداری دیگر انجام دهید.'
    }
  }
];

module.exports = glossary;
