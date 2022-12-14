import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setModal } from "ducks/actions";
import { StateType } from "ducks/types";
import { Section, Categories } from "components";
// import { ReactComponent as Coin } from "assets/images/coin.svg";
import styles from "./termsAndConditions.module.scss";

type StateProps = ReturnType<typeof MSTP>;
type DispatchProps = typeof MDTP;

const TermsAndConditions: React.FC<StateProps & DispatchProps> = ({
  isLoggedIn,
  setModal,
}) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { hash } = useLocation();
  const termsAnchorRef = useRef<HTMLAnchorElement>(null);
  const rulesAnchorRef = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    if (hash === "#terms" && termsAnchorRef.current) {
      termsAnchorRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (hash === "#rules" && rulesAnchorRef.current) {
      rulesAnchorRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash, termsAnchorRef, rulesAnchorRef]);
  return (
    <div className={styles.wrapper}>
      <a className={styles.anchor} id="terms" ref={termsAnchorRef}></a>
      <Section
        title={
          <>
            УМОВИ КОРИСТУВАННЯ WAR<span className={styles.bold}>ART</span>
          </>
        }
      >
        1. Загальні положення
        <br />
        <br />
        1.1. Визначення термінів
        <br />
        Сайт WARART (далі — «WARART») — спільнота професійних митців та
        митців-аматорів, що присвячують свої твори війні.
        <br />
        Умови користування WARART (далі — «Умови») — правила, які описують те,
        як ви можете отримувати доступ до сайту WARART і користуватися ним.
        <br />
        Користувач (далі — «Користувач») — будь-яка особа, яка досягла 18 років
        і надала згоду щодо Умов користування сайтом WARART. Користувачі
        поділяються на два типи: «Митець» та «Відвідувач».
        <br />
        Митець (далі — «Митець») — будь-яка особа, яка публікує свій Проєкт на
        сайті WARART.
        <br />
        Відвідувач (далі — «Відвідувач») — будь-яка особа, яка користується
        сайтом WARART з метою перегляду контенту / витворів мистецтва, не
        публікуючи свій Проєкт.
        <br />
        Проєкт (далі — «Проєкт») — витвір мистецтва, що публікує Митець, і що
        відповідає Правилам спільноти та не порушує Умови користування сайтом
        WARART.
        <br />
        Правила спільноти — низка умов, яких потрібно дотримуватися під час
        користування сайтом WARART. Отримуючи доступ або використовуючи WARART,
        ви погоджуєтеся дотримуватися цих Умов та Правил спільноти.
        <br />
        1.2. Ці Умови набирають чинності з моменту розміщення їх на сайті WARART
        в мережі Інтернет за посиланням: https://warart.gallery. Ці Умови є
        безстроковими та можуть бути зміненими або відкликаними Сайтом у
        будь-який час шляхом розміщення відповідної інформації на сайті.
        <br />
        <br />
        <br />
        2. Послуги
        <br />
        <br />
        2.1. WARART дозволяє публікувати мистецькі проєкти, присвячені війні, у
        трьох категоріях (візуальне мистецтво, звукове мистецтво та літературне
        мистецтво, далі - «Проєкт»). Сайт WARART містить функцію пожертви грошей
        через Благодійний фонд Богдана Ступки (детальніше про умови
        взаємовідносин щодо пожертв у Публічній оферті про надання добровільної
        благодійної пожертви). ???
        <br />
        2.2. Право та можливість користування WARART надається Користувачам, які
        надали згоду щодо умов користування Сайтом. Будь-яким особам, які не
        досягли 18 років, користуватися чи отримувати доступ до WARART
        заборонено. Під час подання Проєкту на WARART ви маєте надати правдиву й
        повну інформацію. Ви погоджуєтеся, що сайт може публікувати Проєкт для
        демонстрації, і ці Умови діятимуть, поки ви не відкличете Проєкт
        (детальніше у пункті 4.2.Відкликання проєкту).
        <br />
        2.3. Послуги надаються двом типам Користувачів (Митцям та Відвідувачам).
        Для Митців існує спеціальна форма та порядок подання Проєктів на сайті
        WARART.
        <br />
        <br />
        <br />
        3. Матеріали Митців
        <br />
        <br />
        3.1. WARART дозволяє публікувати Проєкти та описи Проєктів. Усе, що ви
        розміщуєте або робите доступним у будь-який спосіб на WARART,
        називається «матеріалами користувача». Ви зберігаєте всі авторські права
        і несете виключну відповідальність за матеріали користувача, які
        публікуєте на WARART.
        <br />
        3.2. Подання та схвалення Проєкту
        <br />
        Як тільки вашу заявку було схвалено та Проєкт опубліковано на сайті
        WARART, інші Користувачі можуть бачити, копіювати, використовувати
        та/або іншим чином поширювати цю інформацію в некомерційних цілях.
        Використання/поширення матеріалів та цитування дозволяється лише за
        умови наявності прямого та відкритого для пошукових систем
        гіперпосилання на безпосередню адресу матеріалу на сайті WARART та
        зазначення ім’я (ініціалів) автора.
        <br />
        3.3. Положення щодо дотримання авторських прав
        <br />
        WARART дотримується Закону України «Про авторське право та суміжні
        права», а також Закону про авторське право у цифрову епоху — DMCA
        (Digital Millennium Copyright Act) та залишає за собою право з будь-якої
        причини видаляти, а також змінювати те, яким чином матеріали використані
        на WARART. Зокрема, це стосується матеріалів користувача, які порушують
        положення цих Умов, або будь-яку іншу політику. WARART жодним чином не
        претендує на авторські права Проєкту і є лише платформою для поширення
        та каталогізації Проєктів, присвячених війні. Користувачі не мають права
        копіювати, відтворювати, перевидавати, завантажувати, публікувати,
        транслювати, передавати, надавати у суспільне користування або іншим
        чином використовувати зміст сайту, за винятком особистих, некомерційних
        цілей. Вони також погоджуються не адаптувати, не перетворювати, не
        змінювати і не створювати похідних робіт з жодних елементів змісту сайту
        WARART, за винятком особистих, некомерційних цілей. Будь-яке інше
        використання змісту сайту можливе лише за умови попередньої письмової
        згоди Митця.
        <br />
        3.4. Строк зберігання матеріалів
        <br />
        Після відкликання проєкту або видалення будь-яких матеріалів користувача
        з WARART, Проєкт має повністю бути видалений з категорії, у якій він був
        розміщений, протягом 5 робочих днів.
        <br />
        <br />
        <br />
        4. Розірвання угоди
        <br />
        <br />
        4.1. WARART може позбавити Митця права користуватися сайтом або
        припинити його діяльність на сайті з будь-якої причини, попередньо про
        це повідомивши або без попереднього повідомлення, якщо для цього наявні
        ґрунтовні підстави, зокрема в разі порушення Правил спільноти та
        недотримання положень, встановлених у пункті 6.2. Умов користування.
        <br />
        4.2. Відкликання проєкту
        <br />
        Митець має право на відкликання його Проєкту, розміщеному на сайті
        WARART. Відкликання здійснюється шляхом заповнення Google форми на
        сторінці сайту. Проєкт видаляться з сайту протягом 5 робочих днів з
        моменту отримання заявки від Митця. Відкликання Проєкту не передбачає
        жодної грошової компенсації з боку сайту і фактично означає розірвання
        угоди за умови, якщо на сайті не залишається жодного Проєкту,
        опублікованого даним Митцем.
        <br />
        <br />
        <br />
        5. Відповідальність сторін
        <br />
        <br />
        5.1. WARART жодним чином не є відповідальним і не бере на себе
        відповідальності за будь-які матеріали Митця, які він, інша особа або
        будь-яка третя сторона розміщує або надсилає за допомогою послуг, що
        надаються сайтом.
        <br />
        5.2. Користувач розуміє та погоджується з тим, що йому можуть
        відображатися матеріали Митця, які містять образливі, неприйнятні чи
        агресивні матеріали, що можуть впливати/вплинути на психологічний стан
        людини.
        <br />
        5.3. WARART не є відповідальним за будь-які непрямі, випадкові,
        фактичні, побічні або штрафні збитки чи за будь-яку втрату прибутків або
        доходів, незалежно від того, яким чином та у який спосіб це сталося; за
        будь-які втрати даних, репутаційні та / або інші нематеріальні втрати,
        які були спричинені:
        <br />
        1) вашим доступом або використанням наших послуг чи неможливістю
        отримати доступ і користуватися ними;
        <br />
        2) будь-якою дією або розміщеними на сайті матеріалами третіх осіб,
        зокрема, будь-якими наклепами, образами або незаконною діяльністю інших
        користувачів або третіх осіб;
        <br />
        3) неавторизованим доступом, використанням або зміною ваших переданих
        даних або матеріалів.
        <br />
        <br />
        <br />
        6. Дозволи та заборони Подаємо список «Дозволів і заборон», який
        передбачає умови користування сайтом WARART.
        <br />
        <br />
        6.1. Дозволи
        <br />
        Митець та Відвідувач погоджуються з наступним:  дотримуватися умов
        конфіденційності, поважати інтелектуальну власність та авторські права;
        надавати сайту WARART тільки правдиву та достовірну інформацію.
        <br />
        6.2. Заборони
        <br />
        Митець та Відвідувач погоджуються з наступним:  не подавати Проєкт за
        когось, крім себе (реальної особи), або використовувати чиєсь ім’я або
        псевдонім (окрім Проєктів, які подають неповнолітні особи); не
        розробляти програмне забезпечення або сайти, які копіюють інтерфейс,
        принцип роботи або дані сайту WARART; не порушувати права
        інтелектуальної власності інших користувачів, враховуючи авторські
        права, патенти, торгові марки. Не копіюйте та не поширюйте Проєкти інших
        користувачів (крім випадків персонального використання із обов’язковим
        гіперпосиланням на проєкт) без згоди автора; не порушувати право
        власності WARART, не використовувати логотип, назву чи будь-яку
        ідентичність, пов’язану зі Сайтом, без письмової згоди WARART; не
        заявляти, що ви є членом команди WARART без письмові згоди Сайту; не
        продавати, не надавати в оренду чи будь-яким іншим чином не монетизувати
        Сайт без письмової згоди WARART; не застосовувати ботів чи інші
        автоматичні методи, аби будь-яким чином використовувати Сайт WARART;
        жодним чином не змінювати технічну складову Сайту WARART шляхом
        зламування чи інших кіберзлочинних дій (спам, будь-які види хакерських
        атак тощо); не порушувати Правила спільноти чи Умови користування
        сайтом, згоду на обов’язковість яких ви надаєте, як тільки розпочинаєте
        користування сайтом WARART.
        <br />
        <br />
        <br />
        7. Скарги через неправильне користування контентом
        <br />
        <br />
        7.1. Загальне положення про користування контентом
        <br />
        WARART поважає права інтелектуальної власності інших користувачів.
        Підписуючи ці умови, ви погоджуєтесь з тим, що будете поважати авторські
        права та дотримуватися відповідних законів використання Проєктів,
        опублікованих на сайті.
        <br />
        7.2. Якщо ви зустріли контент або будь-які дані, що не поважають права
        інтелектуальної власності користувачів або суперечать Правилам
        спільноти, ви маєте право подати скаргу тут (посилання на гугл форму).
        <br />
        <br />
        <br />
        8. Наші контакти з усіх питань просимо звертатися до WARART за цією
        адресою warart.ua@gmail.com
      </Section>
      <a className={styles.anchor} id="rules" ref={rulesAnchorRef}></a>
      <Section
        title={
          <>
            <span className={styles.bold}>ПРАВИЛА</span> СПІЛЬНОТИ
          </>
        }
      >
        Наша мета
        <br />
        <br />
        Мета WARART — показати наслідки російської агресії усіма можливими
        творчими засобами, розповісти історії та пробудити почуття. Чи не
        найголовнішою метою є збір коштів на допомогу армії та привернення уваги
        суспільства до війни, зокрема іноземного суспільства. Тема війни дуже
        страшна та агресивна, як і роботи, створені на цю тему. Тим не менш, не
        весь контент може допускатися до публікації на сайті. Саме тому ми
        створили Правила спільноти, які визначають, що ми дозволяємо
        публікувати, а які матеріали публікувати заборонено. Тому, якщо ви
        знайдете вміст, який суперечить Правилам спільноти, поданим нижче,
        зверніться до нас за адресою: warart.ua@gmail.com
        <br />
        <br />
        Ми намагаємося уважно відслідковувати та не допускати до публікації той
        контент, який може порушувати чиїсь права.
        <br />
        <br />
        Безпека вмісту
        <br />
        <br />
        На WARART прагнемо надати користувачам чіткі та прозорі Правила, які
        легко зрозуміти. Якщо у вас є запитання або ви зіткнулися з будь-якими
        труднощами чи проблемами, будь ласка, зверніться до нас за адресою:
        warart.ua@gmail.com
        <br />
        <br />
        Матеріали для дорослих
        <br />
        <br />
        WARART — це не сайт для порнографічних матеріалів. Ми можемо обмежувати
        розповсюдження чи видаляти відвертий вміст, у тому числі неприкрите
        графічне зображення дій сексуального характеру; зображення наготи, де
        пози, кути камери чи реквізит передбачають порнографічний вміст. Ми
        розуміємо, що тема війни може передбачати тематику насилля у проєктах, в
        тому числі сексуального насилля, але ми можемо обмежити видимість такого
        вмісту, щоб люди не могли випадково натрапити на нього. На сайті діє
        вікове обмеження для користувачів, які не досягли 18 років. При поданні
        проєкту автор має змогу вибрати помітку «жорстокий контент», щоб
        користувачі могли знайти цей проєкт тільки за відповідними тегами.
        Експлуатація WARART — це не місце для експлуатації людей і тварин. Ми
        забороняємо публікувати або розповсюджувати контент, пов’язаний із:
        сексуальною експлуатацією неповнолітніх; послугами сексуального
        характеру для дорослих; торгівлею людьми або рабством;  продажем диких
        тварин чи знущанням над тваринами.
        <br />
        <br />
        Переслідування соціально вразливих груп
        <br />
        <br />
        WARART не допускає до публікації Проєкти, які пропагують: расову,
        релігійну чи гендерну ненависть; підтримку верховенства білої раси,
        обмеження прав жінок та інших дискримінаційних ідей; заперечення
        геноциду народів; заперечення гендерної ідентичності або сексуальної
        орієнтації особи.
        <br />
        <br />
        Введення в оману та пропаганда
        <br />
        <br />
        WARART не публікує матеріалів, які вводять в оману. Війна нерідко стає
        темою для спекуляцій чи розповсюдження неправдивого або оманливого
        вмісту, тому закликаємо вас не подавати проєктів, в яких міститься:  
        пропаганда фальшивих даних, наприклад екстрені заходи безпеки щодо
        евакуації тощо;  неправдивий або оманливий вміст стосовно військових або
        громадських дій;  неправдивий або оманливий вміст, який провокує масове
        занепокоєння, недовіру або фізичне насильство; ваші особисті припущення
        чи різкі судження щодо будь-яких дій; інформація, яка навмисно
        публікується або змінюється, щоб зруйнувати довіру або заподіяти шкоду,
        наприклад зміна або упущення контексту, дати чи часу; сфабрикований або
        навмисно змінений візуальний або аудіо вміст, який руйнує довіру або
        заподіює шкоду. Суворо забороняється подавати проєкти, які містять
        символіку, гасла чи будь-які пропагандистські знаки, що агітують до
        підтримки терористичних організацій чи країн, які чинять військові
        злочини. Винятком можуть бути тільки проєкти, які нівелюють та
        заперечують цю символіку.
        <br />
        <br />
        Різкі висловлювання
        <br />
        <br />
        Прояви ворожнечі під час війни є видом реакції Митців, саме тому на
        сайті WARART ми надаємо певну свободу висловлення. За наявності відмітки
        «жорстокий контент», ми допускаємо: змінені зображення, що жартують над
        особами, які певним чином ворожо себе поводять стосовно України та
        українців; критику, яка містить образи, ненормативну лексику та інші
        висловлювання або зображення образливого характеру; алегоричне
        зображення вбивства або самогубства; алегоричне зображення насильства чи
        смерті.  Ми в жодному разі не закликаємо повторювати побачене, прочитане
        чи почуте у реальному житті. Кожна людина має розуміти, що жорстокість
        притаманна тільки неосвіченим особам, без цивілізованого виховання.
        Алегоричні зображення чи будь-які звукові або літературні образи, які ви
        можете зустріти на сайті WARART із поміткою «жорстокий контент», лише
        адаптують емоції та демонструють реакції людей на жорстокість, але
        жодним чином не агітують та не спонукають до подібної поведінки.
        <br />
        <br />
        Інші заборони
        <br />
        <br />
        Сайт WARART також забороняє поширювати: персональну чи конфіденційну
        інформацію (паспортні дані, адреси, фінансові дані тощо); інформацію про
        розповсюдження наркотичних засобів, неліцензійного алкоголю чи тютюну;
        інструкції з виготовлення наркотичних засобів, летальних речовин чи
        зброї;  інформацію про екстремістські та терористичні організації.  Якщо
        ви побачили небажану інформацію про вас, зверніться до нас за адресою:
        warart.ua@gmail.com
      </Section>
    </div>
  );
};

const MSTP = ({ isLoggedIn }: StateType) => ({
  isLoggedIn,
});

const MDTP = { setModal };

export default connect(MSTP, MDTP)(TermsAndConditions);
