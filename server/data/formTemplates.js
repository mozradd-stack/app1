const formTemplates = [
  {
    id: 'buergergeld',
    category: 'sozialleistungen',
    name: {
      de: 'Antrag auf Bürgergeld',
      en: 'Application for Citizen\'s Benefit',
      ar: 'طلب إعانة المواطن',
      tr: 'Vatandaş Yardımı Başvurusu',
      uk: 'Заява на отримання допомоги громадянам',
      fr: 'Demande d\'allocation citoyenne',
      fa: 'درخواست کمک هزینه شهروندی'
    },
    description: {
      de: 'Antrag auf Grundsicherung für Arbeitsuchende (Bürgergeld, früher Hartz IV)',
      en: 'Application for basic income support for job seekers (Bürgergeld, formerly Hartz IV)',
      ar: 'طلب الدعم الأساسي للباحثين عن عمل',
      tr: 'İş arayanlar için temel gelir desteği başvurusu',
      uk: 'Заява на базову підтримку доходу для шукачів роботи',
      fr: 'Demande de revenu de base pour les demandeurs d\'emploi',
      fa: 'درخواست حمایت درآمد پایه برای جویندگان کار'
    },
    requiredDocuments: {
      de: ['Personalausweis oder Reisepass', 'Meldebescheinigung', 'Mietvertrag', 'Kontoauszüge der letzten 3 Monate', 'Aufenthaltstitel (wenn nicht deutsch)', 'Einkommensnachweise'],
      en: ['ID card or passport', 'Registration certificate', 'Rental agreement', 'Bank statements (last 3 months)', 'Residence permit (if not German)', 'Proof of income'],
      ar: ['بطاقة الهوية أو جواز السفر', 'شهادة التسجيل', 'عقد الإيجار', 'كشوف الحساب البنكي (آخر 3 أشهر)', 'تصريح الإقامة (إذا لم تكن ألمانيًا)', 'إثبات الدخل'],
      tr: ['Kimlik kartı veya pasaport', 'İkametgah belgesi', 'Kira sözleşmesi', 'Banka hesap özeti (son 3 ay)', 'Oturma izni (Alman değilse)', 'Gelir belgesi'],
      uk: ['Посвідчення особи або паспорт', 'Довідка про реєстрацію', 'Договір оренди', 'Банківські виписки (за останні 3 місяці)', 'Дозвіл на проживання (якщо не німець)', 'Підтвердження доходу'],
      fr: ['Carte d\'identité ou passeport', 'Certificat d\'enregistrement', 'Contrat de bail', 'Relevés bancaires (3 derniers mois)', 'Titre de séjour (si non allemand)', 'Justificatifs de revenus'],
      fa: ['کارت شناسایی یا گذرنامه', 'گواهی ثبت نام', 'قرارداد اجاره', 'صورت حساب بانکی (3 ماه اخیر)', 'مجوز اقامت (اگر آلمانی نیستید)', 'مدرک درآمد']
    },
    submissionInfo: {
      de: 'Abgabe beim zuständigen Jobcenter. Persönlich oder per Post möglich.',
      en: 'Submit at your local Jobcenter. In person or by mail.',
      ar: 'تقديم في مركز العمل المحلي. شخصيًا أو بالبريد.',
      tr: 'Yerel İş Merkezine teslim edin. Şahsen veya posta ile.',
      uk: 'Подайте у місцевий центр зайнятості. Особисто або поштою.',
      fr: 'Dépôt au Jobcenter local. En personne ou par courrier.',
      fa: 'ارسال به مرکز کاریابی محلی. حضوری یا از طریق پست.'
    },
    fields: [
      {
        id: 'familienname',
        type: 'text',
        required: true,
        label: {
          de: 'Familienname',
          en: 'Last name',
          ar: 'اسم العائلة',
          tr: 'Soyadı',
          uk: 'Прізвище',
          fr: 'Nom de famille',
          fa: 'نام خانوادگی'
        },
        explanation: {
          de: 'Ihr Nachname, wie er in Ihrem Ausweis steht.',
          en: 'Your surname as it appears on your ID.',
          ar: 'اسم عائلتك كما هو مكتوب في بطاقة الهوية.',
          tr: 'Kimliğinizde yazan soyadınız.',
          uk: 'Ваше прізвище, як зазначено у посвідченні.',
          fr: 'Votre nom de famille tel qu\'il figure sur votre pièce d\'identité.',
          fa: 'نام خانوادگی شما همانطور که در کارت شناسایی شما نوشته شده.'
        }
      },
      {
        id: 'vorname',
        type: 'text',
        required: true,
        label: {
          de: 'Vorname',
          en: 'First name',
          ar: 'الاسم الأول',
          tr: 'Adı',
          uk: 'Ім\'я',
          fr: 'Prénom',
          fa: 'نام'
        },
        explanation: {
          de: 'Ihr Vorname, wie er in Ihrem Ausweis steht.',
          en: 'Your first name as it appears on your ID.',
          ar: 'اسمك الأول كما هو مكتوب في بطاقة الهوية.',
          tr: 'Kimliğinizde yazan adınız.',
          uk: 'Ваше ім\'я, як зазначено у посвідченні.',
          fr: 'Votre prénom tel qu\'il figure sur votre pièce d\'identité.',
          fa: 'نام شما همانطور که در کارت شناسایی شما نوشته شده.'
        }
      },
      {
        id: 'geburtsdatum',
        type: 'date',
        required: true,
        label: {
          de: 'Geburtsdatum',
          en: 'Date of birth',
          ar: 'تاريخ الميلاد',
          tr: 'Doğum tarihi',
          uk: 'Дата народження',
          fr: 'Date de naissance',
          fa: 'تاریخ تولد'
        },
        explanation: {
          de: 'Ihr Geburtsdatum im Format TT.MM.JJJJ (z.B. 15.03.1990).',
          en: 'Your date of birth in DD.MM.YYYY format (e.g. 15.03.1990).',
          ar: 'تاريخ ميلادك بالتنسيق يوم.شهر.سنة (مثال: 15.03.1990).',
          tr: 'Doğum tarihiniz GG.AA.YYYY formatında (örn. 15.03.1990).',
          uk: 'Ваша дата народження у форматі ДД.ММ.РРРР (напр. 15.03.1990).',
          fr: 'Votre date de naissance au format JJ.MM.AAAA (ex: 15.03.1990).',
          fa: 'تاریخ تولد شما به فرمت روز.ماه.سال (مثلا 15.03.1990).'
        }
      },
      {
        id: 'familienstand',
        type: 'select',
        required: true,
        label: {
          de: 'Familienstand',
          en: 'Marital status',
          ar: 'الحالة الاجتماعية',
          tr: 'Medeni durum',
          uk: 'Сімейний стан',
          fr: 'État civil',
          fa: 'وضعیت تأهل'
        },
        explanation: {
          de: 'Sind Sie verheiratet, ledig, geschieden oder verwitwet?',
          en: 'Are you married, single, divorced, or widowed?',
          ar: 'هل أنت متزوج، أعزب، مطلق، أو أرمل؟',
          tr: 'Evli, bekar, boşanmış veya dul musunuz?',
          uk: 'Ви одружені, неодружені, розлучені або овдовіли?',
          fr: 'Êtes-vous marié(e), célibataire, divorcé(e) ou veuf/veuve ?',
          fa: 'آیا متأهل، مجرد، مطلقه یا بیوه هستید؟'
        },
        options: [
          { value: 'ledig', label: { de: 'Ledig', en: 'Single', ar: 'أعزب', tr: 'Bekar', uk: 'Неодружений/а', fr: 'Célibataire', fa: 'مجرد' } },
          { value: 'verheiratet', label: { de: 'Verheiratet', en: 'Married', ar: 'متزوج', tr: 'Evli', uk: 'Одружений/а', fr: 'Marié(e)', fa: 'متأهل' } },
          { value: 'geschieden', label: { de: 'Geschieden', en: 'Divorced', ar: 'مطلق', tr: 'Boşanmış', uk: 'Розлучений/а', fr: 'Divorcé(e)', fa: 'مطلقه' } },
          { value: 'verwitwet', label: { de: 'Verwitwet', en: 'Widowed', ar: 'أرمل', tr: 'Dul', uk: 'Овдовілий/а', fr: 'Veuf/Veuve', fa: 'بیوه' } }
        ]
      },
      {
        id: 'staatsangehoerigkeit',
        type: 'text',
        required: true,
        label: {
          de: 'Staatsangehörigkeit',
          en: 'Nationality',
          ar: 'الجنسية',
          tr: 'Vatandaşlık',
          uk: 'Громадянство',
          fr: 'Nationalité',
          fa: 'تابعیت'
        },
        explanation: {
          de: 'Das Land, dessen Staatsbürger Sie sind (z.B. Syrisch, Türkisch, Ukrainisch).',
          en: 'The country you are a citizen of (e.g. Syrian, Turkish, Ukrainian).',
          ar: 'البلد الذي تحمل جنسيته (مثل: سوري، تركي، أوكراني).',
          tr: 'Vatandaşı olduğunuz ülke (örn. Suriyeli, Türk, Ukraynalı).',
          uk: 'Країна, громадянином якої ви є (напр. Сирійський, Турецький, Український).',
          fr: 'Le pays dont vous êtes citoyen (ex: Syrien, Turc, Ukrainien).',
          fa: 'کشوری که شهروند آن هستید (مثلا سوری، ترکیه‌ای، اوکراینی).'
        }
      },
      {
        id: 'strasse',
        type: 'text',
        required: true,
        label: {
          de: 'Straße und Hausnummer',
          en: 'Street and house number',
          ar: 'الشارع ورقم المنزل',
          tr: 'Sokak ve ev numarası',
          uk: 'Вулиця та номер будинку',
          fr: 'Rue et numéro',
          fa: 'خیابان و شماره خانه'
        },
        explanation: {
          de: 'Die Adresse, an der Sie aktuell wohnen.',
          en: 'The address where you currently live.',
          ar: 'العنوان الذي تعيش فيه حاليًا.',
          tr: 'Şu anda yaşadığınız adres.',
          uk: 'Адреса, за якою ви зараз проживаєте.',
          fr: 'L\'adresse où vous habitez actuellement.',
          fa: 'آدرسی که در حال حاضر در آن زندگی می‌کنید.'
        }
      },
      {
        id: 'plz',
        type: 'text',
        required: true,
        label: {
          de: 'Postleitzahl',
          en: 'Postal code',
          ar: 'الرمز البريدي',
          tr: 'Posta kodu',
          uk: 'Поштовий індекс',
          fr: 'Code postal',
          fa: 'کد پستی'
        },
        explanation: {
          de: 'Die 5-stellige Postleitzahl Ihres Wohnorts (z.B. 10115 für Berlin-Mitte).',
          en: 'The 5-digit postal code of your residence (e.g. 10115 for Berlin-Mitte).',
          ar: 'الرمز البريدي المكون من 5 أرقام لمكان إقامتك.',
          tr: '5 haneli posta kodunuz.',
          uk: '5-значний поштовий індекс вашого місця проживання.',
          fr: 'Le code postal à 5 chiffres de votre lieu de résidence.',
          fa: 'کد پستی 5 رقمی محل سکونت شما.'
        }
      },
      {
        id: 'ort',
        type: 'text',
        required: true,
        label: {
          de: 'Ort',
          en: 'City',
          ar: 'المدينة',
          tr: 'Şehir',
          uk: 'Місто',
          fr: 'Ville',
          fa: 'شهر'
        },
        explanation: {
          de: 'Der Name der Stadt oder Gemeinde, in der Sie wohnen.',
          en: 'The name of the city or town where you live.',
          ar: 'اسم المدينة أو البلدة التي تعيش فيها.',
          tr: 'Yaşadığınız şehir veya kasabanın adı.',
          uk: 'Назва міста або населеного пункту, де ви живете.',
          fr: 'Le nom de la ville ou de la commune où vous habitez.',
          fa: 'نام شهر یا شهرکی که در آن زندگی می‌کنید.'
        }
      },
      {
        id: 'kontonummer_iban',
        type: 'text',
        required: true,
        label: {
          de: 'IBAN (Kontonummer)',
          en: 'IBAN (Account number)',
          ar: 'IBAN (رقم الحساب)',
          tr: 'IBAN (Hesap numarası)',
          uk: 'IBAN (Номер рахунку)',
          fr: 'IBAN (Numéro de compte)',
          fa: 'IBAN (شماره حساب)'
        },
        explanation: {
          de: 'Ihre internationale Bankkontonummer. Sie finden sie auf Ihrer Bankkarte oder im Online-Banking. Beginnt mit DE und hat 22 Zeichen.',
          en: 'Your international bank account number. Found on your bank card or online banking. Starts with DE and has 22 characters.',
          ar: 'رقم حسابك البنكي الدولي. تجده على بطاقتك البنكية. يبدأ بـ DE ويتكون من 22 حرفًا.',
          tr: 'Uluslararası banka hesap numaranız. Banka kartınızda bulabilirsiniz. DE ile başlar ve 22 karakterdir.',
          uk: 'Ваш міжнародний номер банківського рахунку. Знаходиться на банківській картці. Починається з DE і має 22 символи.',
          fr: 'Votre numéro de compte bancaire international. Se trouve sur votre carte bancaire. Commence par DE et comprend 22 caractères.',
          fa: 'شماره حساب بانکی بین‌المللی شما. روی کارت بانکی شما قابل مشاهده است. با DE شروع می‌شود و 22 کاراکتر دارد.'
        }
      }
    ]
  },
  {
    id: 'kindergeld',
    category: 'familie',
    name: {
      de: 'Antrag auf Kindergeld',
      en: 'Application for Child Benefit',
      ar: 'طلب علاوة الأطفال',
      tr: 'Çocuk Parası Başvurusu',
      uk: 'Заява на дитячу допомогу',
      fr: 'Demande d\'allocations familiales',
      fa: 'درخواست کمک هزینه کودک'
    },
    description: {
      de: 'Antrag auf Kindergeld bei der Familienkasse. Jedes Kind bekommt 250€ pro Monat.',
      en: 'Application for child benefit at the Family Benefits Office. Each child receives €250 per month.',
      ar: 'طلب إعانة الأطفال في مكتب الأسرة. كل طفل يحصل على 250 يورو شهريًا.',
      tr: 'Aile Yardımları Ofisine çocuk parası başvurusu. Her çocuk ayda 250€ alır.',
      uk: 'Заява на дитячу допомогу у Сімейній касі. Кожна дитина отримує 250€ на місяць.',
      fr: 'Demande d\'allocations familiales à la Caisse d\'allocations. Chaque enfant reçoit 250€ par mois.',
      fa: 'درخواست کمک هزینه کودک در اداره خانواده. هر کودک ماهانه 250 یورو دریافت می‌کند.'
    },
    requiredDocuments: {
      de: ['Geburtsurkunde des Kindes', 'Personalausweis/Reisepass der Eltern', 'Meldebescheinigung', 'Steuer-ID des Kindes', 'Steuer-ID der Eltern', 'Aufenthaltstitel (wenn nicht deutsch)'],
      en: ['Child\'s birth certificate', 'Parents\' ID/passport', 'Registration certificate', 'Child\'s tax ID', 'Parents\' tax ID', 'Residence permit (if not German)'],
      ar: ['شهادة ميلاد الطفل', 'هوية/جواز سفر الوالدين', 'شهادة التسجيل', 'الرقم الضريبي للطفل', 'الرقم الضريبي للوالدين', 'تصريح الإقامة (إذا لم تكن ألمانيًا)'],
      tr: ['Çocuğun doğum belgesi', 'Ebeveynlerin kimliği/pasaportu', 'İkametgah belgesi', 'Çocuğun vergi numarası', 'Ebeveynlerin vergi numarası', 'Oturma izni (Alman değilse)'],
      uk: ['Свідоцтво про народження дитини', 'Посвідчення/паспорт батьків', 'Довідка про реєстрацію', 'Податковий номер дитини', 'Податковий номер батьків', 'Дозвіл на проживання (якщо не німець)'],
      fr: ['Acte de naissance de l\'enfant', 'Pièce d\'identité/passeport des parents', 'Certificat d\'enregistrement', 'Numéro fiscal de l\'enfant', 'Numéro fiscal des parents', 'Titre de séjour (si non allemand)'],
      fa: ['گواهی تولد کودک', 'کارت شناسایی/گذرنامه والدین', 'گواهی ثبت نام', 'شناسه مالیاتی کودک', 'شناسه مالیاتی والدین', 'مجوز اقامت (اگر آلمانی نیستید)']
    },
    submissionInfo: {
      de: 'Abgabe bei der Familienkasse der Bundesagentur für Arbeit. Online, per Post oder persönlich.',
      en: 'Submit at the Family Benefits Office of the Federal Employment Agency. Online, by mail, or in person.',
      ar: 'تقديم في مكتب الأسرة التابع لوكالة العمل الفيدرالية. عبر الإنترنت أو البريد أو شخصيًا.',
      tr: 'Federal İş Ajansı Aile Yardımları Ofisine teslim edin. Çevrimiçi, posta ile veya şahsen.',
      uk: 'Подайте у Сімейну касу Федерального агентства зайнятості. Онлайн, поштою або особисто.',
      fr: 'Dépôt à la Caisse d\'allocations familiales de l\'Agence fédérale pour l\'emploi. En ligne, par courrier ou en personne.',
      fa: 'ارسال به اداره خانواده آژانس فدرال کار. آنلاین، از طریق پست یا حضوری.'
    },
    fields: [
      {
        id: 'antragsteller_name',
        type: 'text',
        required: true,
        label: {
          de: 'Name des Antragstellers',
          en: 'Applicant\'s name',
          ar: 'اسم مقدم الطلب',
          tr: 'Başvuru sahibinin adı',
          uk: 'Ім\'я заявника',
          fr: 'Nom du demandeur',
          fa: 'نام متقاضی'
        },
        explanation: {
          de: 'Vor- und Nachname der Person, die das Kindergeld beantragt (Mutter oder Vater).',
          en: 'First and last name of the person applying for child benefit (mother or father).',
          ar: 'الاسم الكامل للشخص المتقدم بطلب إعانة الأطفال (الأم أو الأب).',
          tr: 'Çocuk parası başvurusunda bulunan kişinin adı ve soyadı (anne veya baba).',
          uk: 'Ім\'я та прізвище особи, яка подає заяву на дитячу допомогу (мати або батько).',
          fr: 'Nom et prénom de la personne demandant les allocations (mère ou père).',
          fa: 'نام و نام خانوادگی شخصی که درخواست کمک هزینه کودک را ارائه می‌دهد (مادر یا پدر).'
        }
      },
      {
        id: 'steuer_id_antragsteller',
        type: 'text',
        required: true,
        label: {
          de: 'Steuerliche Identifikationsnummer (Steuer-ID)',
          en: 'Tax identification number (Tax ID)',
          ar: 'رقم التعريف الضريبي',
          tr: 'Vergi kimlik numarası',
          uk: 'Ідентифікаційний податковий номер',
          fr: 'Numéro d\'identification fiscale',
          fa: 'شماره شناسایی مالیاتی'
        },
        explanation: {
          de: 'Eine 11-stellige Nummer vom Finanzamt. Sie haben sie per Post bekommen, als Sie sich in Deutschland angemeldet haben.',
          en: 'An 11-digit number from the tax office. You received it by mail when you registered in Germany.',
          ar: 'رقم مكون من 11 رقمًا من مكتب الضرائب. تلقيته بالبريد عند تسجيلك في ألمانيا.',
          tr: 'Vergi dairesinden 11 haneli bir numara. Almanya\'ya kaydolduğunuzda postayla almışsınızdır.',
          uk: '11-значний номер від податкової. Ви отримали його поштою, коли зареєструвалися в Німеччині.',
          fr: 'Un numéro à 11 chiffres du bureau des impôts. Vous l\'avez reçu par courrier lors de votre inscription en Allemagne.',
          fa: 'یک شماره 11 رقمی از اداره مالیات. آن را هنگام ثبت نام در آلمان از طریق پست دریافت کرده‌اید.'
        }
      },
      {
        id: 'kind_name',
        type: 'text',
        required: true,
        label: {
          de: 'Name des Kindes',
          en: 'Child\'s name',
          ar: 'اسم الطفل',
          tr: 'Çocuğun adı',
          uk: 'Ім\'я дитини',
          fr: 'Nom de l\'enfant',
          fa: 'نام کودک'
        },
        explanation: {
          de: 'Vor- und Nachname Ihres Kindes, wie in der Geburtsurkunde.',
          en: 'First and last name of your child, as on the birth certificate.',
          ar: 'الاسم الكامل لطفلك كما هو في شهادة الميلاد.',
          tr: 'Doğum belgesindeki gibi çocuğunuzun adı ve soyadı.',
          uk: 'Ім\'я та прізвище вашої дитини, як у свідоцтві про народження.',
          fr: 'Nom et prénom de votre enfant, tel que sur l\'acte de naissance.',
          fa: 'نام و نام خانوادگی کودک شما، همانطور که در گواهی تولد نوشته شده.'
        }
      },
      {
        id: 'kind_geburtsdatum',
        type: 'date',
        required: true,
        label: {
          de: 'Geburtsdatum des Kindes',
          en: 'Child\'s date of birth',
          ar: 'تاريخ ميلاد الطفل',
          tr: 'Çocuğun doğum tarihi',
          uk: 'Дата народження дитини',
          fr: 'Date de naissance de l\'enfant',
          fa: 'تاریخ تولد کودک'
        },
        explanation: {
          de: 'Das Geburtsdatum Ihres Kindes.',
          en: 'Your child\'s date of birth.',
          ar: 'تاريخ ميلاد طفلك.',
          tr: 'Çocuğunuzun doğum tarihi.',
          uk: 'Дата народження вашої дитини.',
          fr: 'La date de naissance de votre enfant.',
          fa: 'تاریخ تولد کودک شما.'
        }
      },
      {
        id: 'kind_steuer_id',
        type: 'text',
        required: true,
        label: {
          de: 'Steuer-ID des Kindes',
          en: 'Child\'s tax ID',
          ar: 'الرقم الضريبي للطفل',
          tr: 'Çocuğun vergi numarası',
          uk: 'Податковий номер дитини',
          fr: 'Numéro fiscal de l\'enfant',
          fa: 'شناسه مالیاتی کودک'
        },
        explanation: {
          de: 'Die 11-stellige Steuer-ID Ihres Kindes. Sie wird automatisch nach der Geburt per Post zugeschickt.',
          en: 'Your child\'s 11-digit tax ID. It is automatically sent by mail after birth.',
          ar: 'الرقم الضريبي المكون من 11 رقمًا لطفلك. يُرسل تلقائيًا بالبريد بعد الولادة.',
          tr: 'Çocuğunuzun 11 haneli vergi numarası. Doğumdan sonra otomatik olarak postayla gönderilir.',
          uk: '11-значний податковий номер вашої дитини. Автоматично надсилається поштою після народження.',
          fr: 'Le numéro fiscal à 11 chiffres de votre enfant. Il est envoyé automatiquement par courrier après la naissance.',
          fa: 'شناسه مالیاتی 11 رقمی کودک شما. به طور خودکار پس از تولد از طریق پست ارسال می‌شود.'
        }
      },
      {
        id: 'wohnung_kind',
        type: 'text',
        required: true,
        label: {
          de: 'Wohnung des Kindes (Adresse)',
          en: 'Child\'s address',
          ar: 'عنوان سكن الطفل',
          tr: 'Çocuğun adresi',
          uk: 'Адреса дитини',
          fr: 'Adresse de l\'enfant',
          fa: 'آدرس کودک'
        },
        explanation: {
          de: 'Wo wohnt Ihr Kind? Wenn es bei Ihnen wohnt, geben Sie Ihre Adresse an.',
          en: 'Where does your child live? If with you, enter your address.',
          ar: 'أين يعيش طفلك؟ إذا كان يعيش معك، أدخل عنوانك.',
          tr: 'Çocuğunuz nerede yaşıyor? Sizinle yaşıyorsa, adresinizi girin.',
          uk: 'Де проживає ваша дитина? Якщо з вами, вкажіть вашу адресу.',
          fr: 'Où habite votre enfant ? S\'il vit avec vous, indiquez votre adresse.',
          fa: 'کودک شما کجا زندگی می‌کند؟ اگر با شما زندگی می‌کند، آدرس خود را وارد کنید.'
        }
      }
    ]
  },
  {
    id: 'wohnsitz-anmeldung',
    category: 'meldewesen',
    name: {
      de: 'Anmeldung einer Wohnung',
      en: 'Residence Registration',
      ar: 'تسجيل السكن',
      tr: 'İkamet Kaydı',
      uk: 'Реєстрація місця проживання',
      fr: 'Déclaration de domicile',
      fa: 'ثبت محل سکونت'
    },
    description: {
      de: 'Anmeldung beim Bürgeramt nach Umzug. Muss innerhalb von 14 Tagen erfolgen.',
      en: 'Registration at the Citizens\' Office after moving. Must be done within 14 days.',
      ar: 'التسجيل في مكتب المواطنين بعد الانتقال. يجب أن يتم خلال 14 يومًا.',
      tr: 'Taşındıktan sonra Vatandaş Ofisine kayıt. 14 gün içinde yapılmalıdır.',
      uk: 'Реєстрація в бюро громадян після переїзду. Повинна бути зроблена протягом 14 днів.',
      fr: 'Inscription au bureau des citoyens après un déménagement. Doit être fait dans les 14 jours.',
      fa: 'ثبت نام در اداره شهروندان پس از نقل مکان. باید ظرف 14 روز انجام شود.'
    },
    requiredDocuments: {
      de: ['Personalausweis oder Reisepass', 'Wohnungsgeberbestätigung (vom Vermieter)', 'Mietvertrag', 'Anmeldeformular (im Bürgeramt erhältlich)'],
      en: ['ID card or passport', 'Landlord confirmation (Wohnungsgeberbestätigung)', 'Rental agreement', 'Registration form (available at Citizens\' Office)'],
      ar: ['بطاقة الهوية أو جواز السفر', 'تأكيد المالك', 'عقد الإيجار', 'نموذج التسجيل (متاح في مكتب المواطنين)'],
      tr: ['Kimlik kartı veya pasaport', 'Ev sahibi onayı', 'Kira sözleşmesi', 'Kayıt formu (Vatandaş Ofisinde mevcut)'],
      uk: ['Посвідчення особи або паспорт', 'Підтвердження від орендодавця', 'Договір оренди', 'Реєстраційна форма (доступна в бюро громадян)'],
      fr: ['Carte d\'identité ou passeport', 'Confirmation du propriétaire', 'Contrat de bail', 'Formulaire d\'inscription (disponible au bureau des citoyens)'],
      fa: ['کارت شناسایی یا گذرنامه', 'تأییدیه صاحبخانه', 'قرارداد اجاره', 'فرم ثبت نام (در اداره شهروندان موجود است)']
    },
    submissionInfo: {
      de: 'Persönlich beim Bürgeramt. Termin vorher online buchen!',
      en: 'In person at the Citizens\' Office. Book an appointment online first!',
      ar: 'شخصيًا في مكتب المواطنين. احجز موعدًا عبر الإنترنت أولاً!',
      tr: 'Vatandaş Ofisinde şahsen. Önce çevrimiçi randevu alın!',
      uk: 'Особисто у бюро громадян. Заздалегідь запишіться онлайн!',
      fr: 'En personne au bureau des citoyens. Réservez un rendez-vous en ligne d\'abord !',
      fa: 'حضوری در اداره شهروندان. ابتدا آنلاین وقت رزرو کنید!'
    },
    fields: [
      {
        id: 'familienname',
        type: 'text',
        required: true,
        label: {
          de: 'Familienname', en: 'Last name', ar: 'اسم العائلة', tr: 'Soyadı',
          uk: 'Прізвище', fr: 'Nom de famille', fa: 'نام خانوادگی'
        },
        explanation: {
          de: 'Ihr Nachname wie im Ausweis.',
          en: 'Your last name as on your ID.',
          ar: 'اسم عائلتك كما في بطاقة الهوية.',
          tr: 'Kimliğinizdeki soyadınız.',
          uk: 'Ваше прізвище, як у посвідченні.',
          fr: 'Votre nom de famille tel que sur votre pièce d\'identité.',
          fa: 'نام خانوادگی شما همانطور که در کارت شناسایی شما است.'
        }
      },
      {
        id: 'vorname',
        type: 'text',
        required: true,
        label: {
          de: 'Vorname', en: 'First name', ar: 'الاسم الأول', tr: 'Adı',
          uk: 'Ім\'я', fr: 'Prénom', fa: 'نام'
        },
        explanation: {
          de: 'Ihr Vorname wie im Ausweis.',
          en: 'Your first name as on your ID.',
          ar: 'اسمك الأول كما في بطاقة الهوية.',
          tr: 'Kimliğinizdeki adınız.',
          uk: 'Ваше ім\'я, як у посвідченні.',
          fr: 'Votre prénom tel que sur votre pièce d\'identité.',
          fa: 'نام شما همانطور که در کارت شناسایی شما است.'
        }
      },
      {
        id: 'geburtsdatum',
        type: 'date',
        required: true,
        label: {
          de: 'Geburtsdatum', en: 'Date of birth', ar: 'تاريخ الميلاد', tr: 'Doğum tarihi',
          uk: 'Дата народження', fr: 'Date de naissance', fa: 'تاریخ تولد'
        },
        explanation: {
          de: 'Ihr Geburtsdatum.',
          en: 'Your date of birth.',
          ar: 'تاريخ ميلادك.',
          tr: 'Doğum tarihiniz.',
          uk: 'Ваша дата народження.',
          fr: 'Votre date de naissance.',
          fa: 'تاریخ تولد شما.'
        }
      },
      {
        id: 'neue_wohnung',
        type: 'text',
        required: true,
        label: {
          de: 'Neue Wohnung (Straße, Hausnr., PLZ, Ort)',
          en: 'New address (street, number, postal code, city)',
          ar: 'العنوان الجديد (الشارع، الرقم، الرمز البريدي، المدينة)',
          tr: 'Yeni adres (sokak, numara, posta kodu, şehir)',
          uk: 'Нова адреса (вулиця, номер, поштовий індекс, місто)',
          fr: 'Nouvelle adresse (rue, numéro, code postal, ville)',
          fa: 'آدرس جدید (خیابان، شماره، کد پستی، شهر)'
        },
        explanation: {
          de: 'Die vollständige Adresse Ihrer neuen Wohnung.',
          en: 'The full address of your new residence.',
          ar: 'العنوان الكامل لمسكنك الجديد.',
          tr: 'Yeni evinizin tam adresi.',
          uk: 'Повна адреса вашого нового житла.',
          fr: 'L\'adresse complète de votre nouveau logement.',
          fa: 'آدرس کامل محل سکونت جدید شما.'
        }
      },
      {
        id: 'einzugsdatum',
        type: 'date',
        required: true,
        label: {
          de: 'Einzugsdatum', en: 'Move-in date', ar: 'تاريخ الانتقال', tr: 'Taşınma tarihi',
          uk: 'Дата заселення', fr: 'Date d\'emménagement', fa: 'تاریخ اسباب‌کشی'
        },
        explanation: {
          de: 'Wann sind Sie in die neue Wohnung eingezogen?',
          en: 'When did you move into the new apartment?',
          ar: 'متى انتقلت إلى الشقة الجديدة؟',
          tr: 'Yeni daireye ne zaman taşındınız?',
          uk: 'Коли ви переїхали до нової квартири?',
          fr: 'Quand avez-vous emménagé dans le nouveau logement ?',
          fa: 'چه زمانی به آپارتمان جدید نقل مکان کردید؟'
        }
      }
    ]
  }
];

module.exports = formTemplates;
