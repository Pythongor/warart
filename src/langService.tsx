// import { resources } from 'services/lang.service';
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

enum LangIndex {
  en,
  fr,
  uk,
}

type ITrans = {
  [key: string]: [string, string, string];
};
type ITransKeys = keyof ITrans;

const translations: ITrans = {
  sorry: ["Sorry!", "Pardon!", "Вибачте!"],
  inDevText: [
    "We are currently working on this page. Please contact us by email:\n" +
      "warart.ua@gmail.com",
    "Cette page est en cours de création. Veuillez nous contacter par email:" +
      "\nwarart.ua@gmail.com",
    "Ця сторінка знаходиться на стадії розробки. Якщо у вас виникли питання, " +
      "ми радо відповімо на них тут:\nwarart.ua@gmail.com",
  ],
  fullName: ["Full Name", "Prénom Nom", "Ім'я, Прізвище"],
  email: ["Email", "Adresse e-mail", "Електронна адреса"],
  password: ["Password", "Mot de passe", "Пароль"],
  login: ["Log in", "Se connecter", "Увійти"],
  signup: ["Sign up", "S'inscrire", "Реєстрація"],
  signupWithFB: [
    "Sign up with Facebook",
    "Continuer sur Facebook",
    "Реєстрація через Facebook",
  ],
  signupWithGoogle: [
    "Sign up with Google",
    "Continuer sur Google",
    "Реєстрація через Google",
  ],
  rememberMe: ["Remember me?", "Mémoriser le mot de passe", ""],
  forgotPass: ["Forgot Password?", "Mot de passe oublié?", ""],
  or: ["or", "ou", "або"],
  back: ["Back", "Retour", "Назад"],
  donate: ["donate", "Contribuer", "Зробити внесок"],
  home: ["Home", "Accueil", "Головна"],
  submission: ["Submission", "Soumettre", "Податися"],
  about: ["About", "À propos", "Про нас"],
  mottoPart1: ["no ", "AUCUN ", ""],
  mottoPart2: ["art", "ART ", "Мистецтво"],
  mottoPart3: [" is indifferent", "N'EST INDIFFÉRENT", " Небайдуже"],
  aboutThis: ["about this", "À PROPOS DE CE", "Про цей"],
  project: ["project", "projet", "проєкт"],
  aboutArticle: [
    "is the first free online art-gallery aimed to share all forms of art " +
      "devoted to the russian invasion of Ukraine in 2022. All artists and " +
      "journalists who transmit their emotions via a work-of-art are just as " +
      "powerful and significant as warriors. They are brave. Here you can " +
      "submit any of your art dedicated to the war, just choose the right " +
      "category from the list.",
    "est la première galerie d'art en ligne qui a pour but de partager " +
      "toutes formes d'art consacré à la guerre en Ukraine. Tous les artistes" +
      " qui transmettent leurs émotions via l'art sont aussi puissants que " +
      "les guerriers. Ils sont courageux. Soumettez-nous votre œuvre juste en" +
      " choisissant la bonne catégorie de la liste.",
    "це перша безкоштовна онлайн арт-платформа, де користувачі зможуть " +
      "публікувати витвори мистецтва, присвячені російському вторгенню в " +
      "Україну у 2022 році. Журналісти i митці, які не приховуючи емоцій " +
      "розказують всю правду, такі ж могутні, як i наші бійці. Вони справжні " +
      "сміливці. Тисніть на Податися та обирайте потрібну категорію.",
  ],
  readMore: ["Read more", "Voir plus", "Читати далі"],
  submit: ["Submit", "Soumettre", "Податися"],
  art: ["art", "art", "мистецтво"],
  view: ["view", "voir", "переглянути"],
  subcategories: ["subcategories", "sous-catégories", "підкатегорії"],
  categories: ["categories", "les categories", "категорії"],
  visual: ["visual", "visuel", "візуальне"],
  sound: ["sound", "sonore", "звукове"],
  textual: ["textual", "textuel", "текстуальне"],
  graphicArt: ["graphic art", "ART GRAPHIQUE", "ГРАФІЧНІ ТВОРИ"],
  tattoo: ["tattoo", "tattoo", "тату"],
  photography: ["photography", "PHOTOGRAPHIE", "ФОТОГРАФІЯ"],
  handcraft: ["handcraft", "ARTISANAT", "РЕМЕСЛО"],
  videoArt: ["video art", "ART VIDÉO", "ВІДЕО-АРТ"],
  audioBook: ["audio books", "LIVRES AUDIO", "аудіокниги"],
  music: ["music", "MUSIQUE", "музика"],
  podcast: ["podcast", "PODCAST", "ПОДКАСТ"],
  poetry: ["poetry", "POÉSIE", "поезія"],
  prose: ["prose", "prose", "проза"],
  publicistic: ["publicism", "PUBLICISME", "ПУБЛІЦИСТИКА"],
  drama: ["drama", "drame", "драма"],
  submitBannerPart1: ["Submit your art", "", "ЗАВАНТАЖТЕ СВІЙ ПРОЄКТ"],
  submitBannerPart2: ["here", "SOUMETTEZ-NOUS", "ТУТ"],
  submitBannerPart3: [
    "to support Ukraine",
    "VOTRE ŒUVRE POUR AIDER L’UKRAINE",
    "АБИ ПІДТРИМАТИ УКРАЇНУ",
  ],
  services: ["services", "services", "сервіси"],
  legal: ["legal", "legal", "умови"],
  contactUs: ["contact us", "Contactez-nous", "Напишіть нам"],
  ourTeam: ["our team", "Notre équipe", "Наша команда"],
  joinUs: ["join us", "Rejoignez-nous", "Приєднатися до нас"],
  partners: ["partners", "Partenaires", "Партнери"],
  donations: ["donations", "Contributions", "Внески"],
  submitYourWork: [
    "submit your work",
    "Soumettre votre art",
    "Подати свою роботу",
  ],
  terms: ["terms", "Politique d’utilisation", "Умови"],
  privacy: ["privacy", "Consentement", "Правила користування"],
  help: ["help", "Aide", "Допомога"],
  viewCategories: [
    "view categories",
    "Voir les catégories",
    "Переглянути категорії",
  ],
  aboutOurArtists: [
    "about our artists",
    "À propos de nos artistes",
    "Про наших авторів",
  ],
  childrenAndWar: ["children and war", "Enfants et guerre", "Діти і війна"],
  submissionText: [
    "gives you an opportunity to share your own experience " +
      "about the war via any form of art. You onlyneed to fill in the " +
      "submission form below and wait for your work to beapproved by the " +
      "moderators. You need to choose one or more categories and " +
      "subcategories, then select tags. Once your work is approved, you’ll " +
      "receive a notification from the moderator. If you have any questions, " +
      "don’t hesitate to contact us here warart.ua@gmail.com!",
    "vous donne l’opportunité de partager vos sentiments à propos de la " +
      "guerre. Vous devez seulement remplir la fiche ci-dessous et attendre " +
      "que votre travail soit approuvé par les modérateurs. Choisissez les " +
      "catégories et sous-catégories, ajoutez les mots-clés. Une fois votre " +
      "travail approuvé, vous recevrez une notification du modérateur. Si " +
      "vous avez des questions, n’hésitez pas à nous contacter ici: " +
      "warart.ua@gmail.com!",
    "дає вам можливість поділитися вашим досвідом за допомогою мистецтва. " +
      "Лише заповніть форму та дочекайтеся, коли вашу роботу буде ухвалено " +
      "модераторами. Оберіть одну чи більше категорій та підкатегорій, після " +
      "цього відмітьте теги. Коли проєкт буде ухвалено, ви отримаєте " +
      "сповіщення. Якщо у вас залишилися питання, звертайтесь до нас тут: " +
      "warart.ua@gmail.com!",
  ],
  submissionSectionTitlePart1: [
    "SHARE YOUR ",
    "PARTAGEZ VOTRE ",
    "ПОДІЛІТЬСЯ ",
  ],
  submissionSectionTitlePart2: ["ART", "ART", "МИСТЕЦТВОМ"],
  submissionSectionTitlePart3: [
    " WITH THE WORLD",
    " AVEC LE MONDE",
    "ЗІ СВІТОМ",
  ],
  submitYour: ["SUBMIT YOUR ", "SOUMETTRE VOTRE ", "ЗАВАНТАЖТЕ СВІЙ"],
  selectCategory: [
    "Select category",
    "Sélectionner la catégorie",
    "Оберіть категорію",
  ],
  selectSubcategory: [
    "Select subcategory",
    "Sélectionner la sous-catégorie",
    "Оберіть підкатегорію",
  ],
  selectTags: ["Select tags", "Sélectionner les mots-clés", "Оберіть теги"],
  addUpTo10Tags: [
    "Add up to 10 tags…",
    "Ajouter jusqu’à 10 mots-clés…",
    "Додайте до 10 тегів…",
  ],
  addTheTitle: [
    "Add the title of your art…",
    "Ajouter un titre de votre projet…",
    "Додайте назву проєкту…",
  ],
  projectName: ["Project name", "Titre du projet", "Назва проєкту"],
  visibility: ["Visibility", "Visibilité", "Аудиторія"],
  everyone: ["everyone", "Tout le monde", "Для всіх"],
  content: ["Content", "Contenu", "Контент"],
  adult: ["adult", "Public adulte", "18+"],
  uploadYourProject: [
    "Upload your project",
    "Uploader le project",
    "Завантажити файл",
  ],
  addDescription: [
    "Add project description",
    "Ajouter la description",
    "Додати опис",
  ],
  attachFile: ["Attach file", "Sélectionnez des fichiers", "Виберіть файли"],
  dropProject: [
    "Or drop your project here",
    "Déposez vos titres ici",
    "Або перетягніть їх сюди",
  ],
  projectDescrPlaveholder: [
    "Write a few words about yourself and your project…",
    "Ecrivez quelques mots sur vous et votre projet…",
    "Напишіть кілька слів про себе і свій проєкт…",
  ],
  thanksForSubmitTitle: [
    "Thank you for submission!",
    "Merci!",
    "Файл завантажено!",
  ],
  thanksForSubmitText: [
    "We will let you know once your art is approved. Just check your notifications!",
    "Nous vous informerons une fois votre art approuvé. Veillez vérifiez vos notifications!",
    "Ми дамо знати, коли проєкт буде ухвалено модератором. Слідкуйте за сповіщеннями.",
  ],
  whoAreWeTitlePart1: ["WHO ARE ", "À PROPOS DE ", "ХТО "],
  whoAreWeTitlePart2: ["we?", "NOUS?", "МИ?"],
  whoAreWeTextPart1: [
    "Our team is yet too small, but we are looking for talented people to " +
      "join us! Yelyzaveta Drach is a young UX Designer whose initiative was " +
      "to create the first art-platform fully dedicated to a slaughterous war " +
      "in Ukraine led by russia. Her main idea was to raise money from art " +
      "donations to support ",
    "Notre équipe est encore trop petite, mais nous recherchons des personnes " +
      "talentueuses pour nous rejoindre! Yelyzaveta Drach est une jeune UX " +
      "Designer dont l’initiative était de créer la première plateforme d’art " +
      "dédiée à une guerre meurtrière en Ukraine menée par la russie. Son idée " +
      "principale était de collecter des fonds à partir de dons d’art pour " +
      "soutenir ",
    "Наша команда поки що невеличка, але наразі ми шукаємо людей, аби її " +
      "сформувати! Єлизавета Драч - молода UX дизайнерка, ідеєю якої було " +
      "створити першу онлайн-галерею, повністю присвячену російському вторгенню " +
      "в Україну у 2022 році. Її головною метою є зібрати гроші на підтримку ",
  ],
  whoAreWeTextPart2: [
    "the Armed Forces of Ukraine",
    "les Forces armées de l’Ukraine",
    "Збройних Сил України",
  ],
  whoAreWeTextPart3: [
    ". Dmytro Drach is a resourceful Frontend developer searching for a " +
      "small team of developers who would like to participate in the creation " +
      "of the first online-platform dedicated to the russian invasion of " +
      "Ukraine in 2022. We are open to any ideas and eager to receive your " +
      "useful feedback to become better and help our country! Let’s keep in touch.",
    ". Dmytro Drach est un développeur Frontend à la recherche d’une petite " +
      "équipe de développeurs. Nous sommes ouverts à toutes les idées et " +
      "impatients de recevoir vos commentaires utiles pour devenir meilleurs " +
      "et aider notre pays! Restons en contact.",
    ". Дмитро Драч - креативний фронтенд розробник, який шукає команду " +
      "розробників, які хотіли би допомогти у створенні цієї мистецької " +
      "платформи. Ми відкриті до будь-яких ідей та будемо щасливі отримати " +
      "важливий фідбек, щоби стати кращими і допомогти країні! Чекаємо на " +
      "ваші повідомлення.",
  ],
  ourTeamPart1: ["Our ", "NOTRE ", "НАША "],
  ourTeamPart2: ["team", "ÉQUIPE", "КОМАНДА"],
  YelyzavetaDrach: ["Yelyzaveta Drach", "Yelyzaveta Drach", "Єлизавета Драч"],
  DmytroDrach: ["Dmytro Drach", "Dmytro Drach", "Дмитро Драч"],
  KaterynaPylypchuk: [
    "Kateryna Pylypchuk",
    "Kateryna Pylyptchuk",
    "Катерина Пилипчук",
  ],
  YaroslavYarosh: ["Yaroslav Yarosh", "Yaroslave Yaroche", "Ярослав Ярош"],
  DianaDrach: ["Diana Drach", "Diana Dratch", "Діана Драч"],
  NastiaSvistunova: [
    "Nastia Svistunova",
    "Nastia Svistunova",
    "Настя Свистунова",
  ],
  Yelyzaveta: ["Yelyzaveta", "Yelyzaveta", "Єлизавета"],
  Dmytro: ["Dmytro", "Dmytro", "Дмитро"],
  Drach: ["Drach", "Drach", "Драч"],
  JoinUs: ["Join Us", "Rejoignez-nous", "Приєднуйтесь"],
  YelyzavetaRole: [
    "UX designer, creator",
    "UX Designer, créatrice",
    "UX дизайнерка, фундаторка",
  ],
  DmytroRole: [
    "Front-end developer",
    "Développeur Frontend",
    "Фронтенд розробник",
  ],
  YaroslavRole: ["Lawyer", "Juriste", "Юрист"],
  KaterynaRole: [
    "Business-modeling advisor",
    "Conseillère en modélisation d'entreprise",
    "Радниця з бізнес-питань",
  ],
  DianaRole: ["Art-manager", " Agent artistique", "Арт-менеджер"],
  AnastasiiaRole: ["Art-manager", " Agent artistique", "Арт-менеджер"],
  weAreWait: [
    "We are waiting for you",
    "Nous vous attendons",
    "Ми чекаємо на вас!",
  ],
  contactUsPart1: ["Contact", "CONTACTEZ", "НАПИШІТЬ"],
  contactUsPart2: [" Us", "-NOUS", " НАМ"],
  aboutTextPart1: [
    "is the first free online art-gallery aimed to share all forms of art " +
      "devoted to the russian invasion of Ukraine in 2022. All artists and " +
      "journalists who transmit their emotions via a work-of-art are just as " +
      "powerful and significant as warriors. They are brave. Here you can " +
      "submit any of your art dedicated to the war, just choose the right " +
      "category from the list. On our platform you will find a triad of " +
      "visual, sound and textual art. This project was born in April 2022, " +
      "when the pain we felt reached its peak, as it seemed, and the idea was " +
      "to scream as loudly as we could, that Ukraine needs help! The disaster " +
      "threatening the whole world is still here, and we need to fight it on " +
      "every front. The illustrations for ",
    "est la première galerie d’art en ligne qui a pour but de partager " +
      "toutes formes d’art consacré à la guerre en Ukraine. Tous les artistes " +
      "qui transmettent leurs émotions via l’art sont aussi puissants que les " +
      "guerriers. Ils sont courageux. Soumettez-nous votre œuvre juste en " +
      "choisissant la bonne catégorie de la liste. Sur notre plateforme, vous " +
      "trouverez l’art visuel, sonore et textuel. Ce projet est né en avril " +
      "2022, lorsque la douleur que nous ressentions a atteint son apogée, " +
      "semble-t-il, et l’idée était de crier aussi fort que possible, que " +
      "l’Ukraine a besoin d’aide! Le désastre qui menace le monde entier est " +
      "toujours là, et nous devons le combattre sur tous les fronts. Les " +
      "illustrations de ",
    "– це перша безкоштовна онлайн-галерея, де користувачі зможуть " +
      "публікувати витвори мистецтва, присвячені російському вторгненню в " +
      "Україну у 2022 році. Журналісти і митці, які, не приховуючи емоцій, " +
      "розказують всю правду, такі ж могутні, як і наші бійці. Вони справжні " +
      "сміливці. Тисніть на Податися і обирайте потрібну категорію: візуальне, " +
      "звукове чи текстуальне мистецтво. Цей проєкт зародився у квітні 2022 " +
      "року, коли біль переповнював нас і з’явилося бажання кричати ще гучніше " +
      "про те, що Україні вкрай потрібна допомога! Те страшне лихо, що " +
      "продовжує залякувати весь світ, дотепер тут, і треба боротися із ним на " +
      "всіх фронтах. Ілюстрації, створені для ",
  ],
  aboutTextPart2: [
    " attribute to mighty Kyiv of the 9th-11th century, the greatest city " +
      "of Kyivan Rus’, the city of cities, an absolute metropolis of arts and " +
      "a beacon of enlightenment. After ten centuries there is still a triad " +
      "of force, knowledge and freedom. Stay strong and remember – ",
    " attribuent au puissant Kyiv du IXe au XIe siècle, la plus grande ville " +
      "de Kievan Rus, une métropole absolue des arts et un phare de " +
      "l’illumination. Après dix siècles, il y a toujours une triade de force, " +
      "de connaissance et de liberté. Restez forts et rappelez-vous – ",
    " – це данина пам’яті могутньому Києву 9-11 століття, найзаможнішому " +
      "місту Київської Русі, місту міст, справжній святині мистецтв і центру " +
      "просвіти. Минуло 10 століть, а Київ досі лишається осередком могутності, " +
      "знань та свободи. Будьте сильними і пам’ятайте – ",
  ],
  aboutTextPart3: [
    "no art is indifferent",
    "aucun art n’est indifférent",
    "мистецтво небайдуже",
  ],
  see: ["see", "VOYONS", "бачимо"],
  hear: ["hear", "ENTENDONS", "чуємо"],
  perceive: ["perceive", "PERCEVONS", "сприймаємо"],
  howWeFeelWarPart1: ["how we ", "COMMENT NOUS ", "як ми "],
  howWeFeelWarPart2: [" the war", " LA GUERRE", " війну"],
  visualCategoryTextPart1: [
    "Open your eyes wide. The war is something that should be seen clearly, " +
      "because eyes are made to build the bridge between the brain and the soul. ",
    "Ouvrez vos yeux. La guerre est quelque chose qu’il faut voir clairement, " +
      "car les yeux sont faits pour construire le pont entre le cerveau et " +
      "l’âme. La marque ",
    "Відкрийте очі. Війна це те, що треба узріти, адже очі нам для того, " +
      "щоби прокласти місток між свідомістю та душею. Знайома нам всім позначка ",
  ],
  visualCategoryTextPart2: [
    "‘Sensitive Content’",
    "’Contenu potentiellement sensible’",
    "‘Потенційно неприйнятний контент’",
  ],
  visualCategoryTextPart3: [
    " mark that ‘crosses our eyes’ causes total unawareness. The truth is " +
      "considered to be offensive or disturbing. It may be so for someone. It " +
      "may be so until it happens to you, until your personal tragedy strikes. " +
      "Don’t close yourself off from the truth. Let us make you see the war " +
      "through visual metaphors. Let us make you see the war firsthand.",
    " provoque une inconscience totale. La vérité est considérée comme " +
      "offensante ou dérangeante. Il peut en être ainsi jusqu’à ce que cela " +
      "vous arrive, jusqu’à ce que votre tragédie personnelle vous frappe. " +
      "Ne vous fermez pas à la vérité. Laissez-nous vous faire voir la guerre " +
      "à travers des métaphores visuelles. Laissez-nous vous faire voir la " +
      "guerre de première main.",
    ", яка ‘перекреслює наші очі’, породжує повне незнання. Правда тепер " +
      "вважається образливою та кривдною. Можливо, для когось так і є. Допоки " +
      "цей хтось не зіштовхнеться зі своєю особистою трагедією. Не " +
      "закривайтеся від правди. Дозвольте нам показати вам війну через " +
      "призму візуальних метафор. Подивіться на війну власними очима.",
  ],
  soundCategoryTextPart1: [
    "Listen close. Can you hear it too? The war is something that changed our ",
    "Écoutez attentivement. Pouvez-vous l'entendre aussi? La guerre est " +
      "quelque chose qui a changé notre ",
    "Прислухайтесь. Ви теж це чуєте? Війна дуже змінила наше ",
  ],
  soundCategoryTextPart2: [
    "perception of the sounds",
    "perception des sons",
    "сприйняття звуків",
  ],
  soundCategoryTextPart3: [
    ". No more sound in the world seems to be neutral " +
      "for us now. Do you usually shiver when you hear the door slam? We do. " +
      "Do you lain on your bed for a long time waiting for something bad to " +
      "happen before you fall asleep? We do. Do you find the sound of " +
      "air-raid warning habitual? We do. Our new soundscape is alarmingly " +
      "quiet and routinely loud. We are scared of the sounds, as well as " +
      "frightened by the silence. So let us share it with you.",
    ". Plus aucun son dans le monde ne semble être neutre pour nous " +
      "maintenant. Avez-vous l'habitude de frissonner lorsque vous entendez " +
      "la porte claquer? Êtes-vous allongé sur votre lit pendant longtemps en " +
      "attendant que quelque chose de grave se produise avant de vous " +
      "endormir? Trouvez-vous le son des avertissements de raid aérien " +
      "habituel? Nous en faisons. Notre nouveau paysage sonore est " +
      "incroyablement silencieux et terriblement lourd. Nous sommes " +
      "effrayés par les sons, ainsi que effrayés par le silence. Alors " +
      "laissez-nous en partager avec vous.",
    ". Більше жоден звук не здається нам нейтральним. Чи часто ви здригаєтесь " +
      "від гуркоту дверей? Ми - весь час. Чи часто ви лежите у ліжку, очікуючи " +
      "на щось страшне, перед тим, як поснете? Ми - кожну ніч. Чи здаються вам " +
      "звуки повітряної тривоги звичними? Нам - так. Наш звукопростір до жаху " +
      "тихий та водночас голосний. Ми боїмося звуків, але ще більше нас лякає " +
      "тиша. Тож дозвольте поділится з вами цим.",
  ],
  textualCategoryTextPart1: [
    "Every word matters. Be it kind or rude, be it " +
      "written or spoken. Words always matter. They transmit our ideas and " +
      "share our worldview with others. They say human life consists of " +
      "narratives. We ",
    "Chaque mot compte. Que ce soit un mot gentil ou grossier, que ce soit " +
      "un mot écrit ou parlé. Les mots comptent toujours. Ils transmettent " +
      "nos idées et partagent notre vision du monde avec les autres. On dit " +
      "que la vie humaine se compose de récits. Nous ",
    "Кожне слово важить. Добре воно, чи лихе, написане на папері, чи " +
      "сказане вголос. Слова завжди важать. Вони транслюють наші думки та " +
      "допомагають ділитися життєвим досвідом. Кажуть, що людське життя " +
      "складається із історій. Ми ",
  ],
  textualCategoryTextPart2: [
    "tell stories",
    "racontons des histoires",
    "розповідаємо їх",
  ],
  textualCategoryTextPart3: [
    " everyday, out loud or inside our heads, but we " +
      "do. Not all the narratives are easy to read, but if they are hard to " +
      "read, maybe you should try at least? The war is hard to perceive, " +
      "painful to describe and impossible to forgive. Let this story not be " +
      "forgotten and neglected. Relive it and it will stay in your heart " +
      "forever.",
    " tous les jours, à haute voix ou dans nos têtes, mais nous le faisons. " +
      "Pas chaque récit est facile à lire, mais s'il est difficile à lire, " +
      "peut-être devriez-vous au moins essayer? La guerre est dure à " +
      "percevoir, douloureuse à décrire et impossible à pardonner. Que cette " +
      "histoire ne soit pas oubliée et négligée. Revivez-le et il restera à " +
      "jamais dans votre cœur.",
    " кожного дня, до самих себе чи вголос, не важливо. Не всі оповіді " +
      "легко читати, але, може, варто спробувати? Війну важко сприйняти, " +
      "боляче описати і неможливо пробачити. Дозвольте цій історії не " +
      "зникнути. Проживіть її і вона залишиться у вашому серці навік.",
  ],
  untitledProject: ["Untitled project", "Sans titre", "Проєкт без назви"],
  untitledAuthor: ["Untitled author", "Aucun auteur", "Невідомий автор"],
  filterBy: ["Filter by ", "Filtrer par ", "Фільтрувати за "],
  tags: ["Tags", "Mots-clés", "Тегами"],
  projectTextPart1: ["This can be ", "Cela pourrait être ", "Це може бути "],
  projectTextPart2: ["your project", "votre projet", "ваш проєкт"],
  projectTextPart3: [
    " approved by our moderators. The project must reflect " +
      "any feeling that you experienced during the russian invasion of Ukraine " +
      "in 2022. Anyone reviewing your project can press the Donate button and " +
      "in such a way your art will support the Armed Forces of Ukraine. Add a " +
      "general description of your artwork, a few words about yourself and how " +
      "the war influenced your art.",
    " approuvé par nos modérateurs. Le projet doit refléter tout sentiment " +
      "que vous avez ressenti lors de l’invasion russe de l’Ukraine en 2022. " +
      "Toute personne examinant votre projet peut appuyer sur le bouton " +
      "Contribuer et votre art soutiendra les Forces armées ukrainiennes. " +
      "Ajoutez une description générale de votre œuvre, quelques mots comment " +
      "la guerre a influencé votre art.",
    ", ухвалений нашими модераторами. Проєкт має відображати будь-які " +
      "почуття, які ви спізнали під час російського вторгення в Україну. " +
      "Будь-який користувач може натиснути на кнопку Зробити внесок і таким " +
      "чином підтримати Зброєні Сили України. Додайте опис до вашої роботи, " +
      "кілька слів про себе і про те, як війна вплинула на вашу творчість.",
  ],
  contactUsBody: [
    "Dear WARART team!",
    "Chère équipe de WARART!",
    "Шановна командо WARART!",
  ],
  joinUsSubject: ["Join WARART", "joindre WARART", "Приєднатися до WARART"],
  joinUsBody: [
    "Dear WARART team! I would like to become a part of your team.",
    "Chère équipe de WARART! Je voudrais joindre votre équipe.",
    "Шановна командо WARART! Я хочу стати частиною вашої команди.",
  ],
  helpSubject: ["WARART help", "WARART aide", "WARART допомога"],
  noProject: [
    "There are no projects yet",
    "Il y a pas de projets pour maintenant",
    "Тут поки що нема проєктів",
  ],
  submittingProject: [
    "Submitting Project",
    "Soumettre un projet",
    "Подання проекту",
  ],
  projectDescription: [
    "Project description",
    "Description du projet",
    "Опис проекту",
  ],
  dontForgetFile: [
    "DON’T FORGET TO UPLOAD YOUR FILE",
    "N’OUBLIEZ PAS D’AJOUTER UNE PIECE-JOINTE",
    "НЕ ЗАБУДЬТЕ ПРИКРІПИТИ ФАЙЛ",
  ],
  aboutAuthor: ["ABOUT", "À PROPOS", "ПРО АВТОРА "],
};

const makeResource = (index: LangIndex) => {
  const transKeys = Object.keys(translations) as ITransKeys[];
  return transKeys.reduce<Record<ITransKeys, string>>((acc, key) => {
    acc[key] = translations[key][index];
    return acc;
  }, {} as { [P in ITransKeys]: string });
};

export const resources = {
  en: { translations: makeResource(LangIndex.en) },
  fr: { translations: makeResource(LangIndex.fr) },
  uk: { translations: makeResource(LangIndex.uk) },
};

const parseLanguage = (): string => {
  const storedLanguage = window.localStorage.getItem("i18nextLng");
  if (storedLanguage) return storedLanguage;
  const browserLanguage =
    window.navigator && window.navigator.language.substr(0, 2);
  return Object.keys(LangIndex).includes(browserLanguage)
    ? browserLanguage
    : "en";
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: parseLanguage(),
    resources: resources,
    ns: ["translations"],
    defaultNS: "translations",
    fallbackLng: ["en"],
    debug: false && process.env.NODE_ENV === "development",
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
