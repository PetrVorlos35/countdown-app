import { useState } from 'react';

const das = [
  {
    question: "1) Datové sítě",
    answer: "Základní součásti síťové infrastruktury a jejich vzájemné propojení. Bez sítí bychom nebyli schopni komunikovat ve světě internetu.",
  },
  {
    question: "2) Klasifikace sítí",
    answer: "Sítě se dělí na LAN, MAN, WAN podle jejich geografického rozsahu. Je to jako síť mezi vašimi kamarády nebo třeba mezi městy a kontinenty.",
  },
  {
    question: "3) Komponenty sítě a jejich funkce v síti",
    answer: "V síti máme komponenty jako routery, switche, a kabely, které umožňují přenos dat. Každá součást má svou roli při propojení světa.",
  },
  {
    question: "4) Komunikační modely, protokoly sítě",
    answer: "Modely jako OSI a TCP/IP definují pravidla pro komunikaci v síti. Protokoly jsou jako pravidla pro konverzaci mezi počítači.",
  },
  {
    question: "5) ISO/OSI",
    answer: "Je to model pro síťovou komunikaci, který rozdělil komunikaci na 7 vrstev. Základem je to, že každá vrstva dělá svou specifickou práci.",
  },
  {
    question: "6) Fyzická vrstva",
    answer: "Tato vrstva se stará o fyzický přenos dat mezi zařízeními. Bez ní by data neprošla žádným kabelem ani rádiovými vlnami.",
  },
  {
    question: "7) Linková vrstva",
    answer: "Linková vrstva zajišťuje přenos dat na krátkou vzdálenost. Je to jako váš dopis poslaný poštou, který dorazí k adresátovi.",
  },
  {
    question: "8) Síťová vrstva",
    answer: "Síťová vrstva se stará o přenos dat mezi různými sítěmi. Funguje to tak, že najde nejlepší cestu pro doručení dat.",
  },
  {
    question: "9) Transportní vrstva",
    answer: "Transportní vrstva se zaměřuje na spolehlivý přenos dat mezi koncovými zařízeními. Je to, jako když si objednáte jídlo, a někdo vám přiveze správné jídlo ve správný čas.",
  },
  {
    question: "10) Aplikační vrstva",
    answer: "Tato vrstva zajišťuje, že aplikace, jako je váš webový prohlížeč, mohou komunikovat přes síť. Poskytuje rozhraní pro uživatele.",
  },
  {
    question: "11) TCP/UDP",
    answer: "TCP je spolehlivý protokol, který zajišťuje, že všechny data dojdou. UDP je rychlý, ale někdy ztrácí data. Rychlost vs. bezpečnost.",
  },
  {
    question: "12) IP adresace sítí",
    answer: "IP adresy identifikují zařízení v síti. Je to jako poštovní adresa pro vaše data.",
  },
  {
    question: "13) IP adresace sítí - podsítě",
    answer: "Podsíťování je technika, která rozdělí velkou síť na menší části. Je to jako rozdělení města na různé čtvrti.",
  },
  {
    question: "14) Ethernet - historie",
    answer: "Ethernet je technologie, která se používá pro propojení počítačů v síti. Byla vyvinuta v 70. letech a je stále v použití dnes.",
  },
  {
    question: "15) Ethernet",
    answer: "Ethernet je metoda pro přenos dat mezi počítači a zařízeními. Je to jako rychlá dálnice pro vaše data.",
  },
  {
    question: "16) Síťový HW",
    answer: "Síťový hardware zahrnuje zařízení jako routery, switche a kabely, které umožňují přenos dat v síti.",
  },
  {
    question: "17) Přepínání v sítích IP",
    answer: "Přepínání v IP sítích je proces, při kterém se rozhoduje, jak se data přes síť dostanou na správné místo.",
  },
  {
    question: "18) Virtuální LAN",
    answer: "Virtuální LAN je technologie, která vytváří logické sítě v rámci fyzické sítě. Umožňuje izolovat provoz bez nutnosti nové kabeláže.",
  },
  {
    question: "19) Směrování v sítích IP",
    answer: "Směrování v IP sítích určuje, jakým směrem budou data putovat. Je to jako mapování cesty pro vaše data.",
  },
  {
    question: "20) Směrovací protokoly",
    answer: "Směrovací protokoly určují pravidla, podle kterých směrovače rozhodují o trasách pro data. Oproti tomu je to jako plánování cesty pro auto.",
  },
  {
    question: "21) LAN design",
    answer: "Design LAN sítě zahrnuje plánování a organizování způsobu propojení zařízení v místní síti, aby byla efektivní a spolehlivá.",
  },
  {
    question: "22) Bezdrátové sítě",
    answer: "Bezdrátové sítě používají rádiové vlny k přenosu dat místo kabelů. To je výhodné pro mobilitu a flexibilitu.",
  },
  {
    question: "23) WAN",
    answer: "WAN (Wide Area Network) spojuje různé geografické oblasti, aby umožnila komunikaci mezi vzdálenými místy.",
  },
  {
    question: "24) IOS Cisco",
    answer: "IOS je operační systém používaný na zařízeních Cisco. Je to základ pro správu a konfiguraci síťových zařízení.",
  },
  {
    question: "25) Bezpečnost sítí",
    answer: "Bezpečnost sítí chrání data a zařízení před neoprávněným přístupem. Je to jako bezpečnostní opatření pro vaši digitální pevnost.",
  },
];

const pov = [
    {
      question: "1) Zobrazovací soustava",
      answer: "Systém, který slouží k zobrazování obrazů, ať už na obrazovce počítače nebo v jiných elektronických zařízeních. Jako magie pro vaše oči!",
    },
    {
      question: "2) Tiskárny, scannery",
      answer: "Zařízení, která nám umožňují tisknout nebo skenovat dokumenty. Zkrátka to, co přemění vaše digitální výtvory na fyzické objekty.",
    },
    {
      question: "3) Paměťová zařízení",
      answer: "Zařízení, která uchovávají data v počítači. Ať už jde o RAM, flash paměť, nebo disk, paměť je mozkem počítače.",
    },
    {
      question: "4) Pevný disk – HDD, SSD",
      answer: "HDD je starý známý pevný disk, zatímco SSD je rychlý a tichý nováček, který šetří čas a nervy.",
    },
    {
      question: "5) Napájecí zdroj, počítačová skříň, cloudová uložiště a využití AI",
      answer: "Napájecí zdroj dodává energii počítači, skříň ho chrání, cloudová uložiště uchovávají vaše data a AI je ta kouzelná technologie, která všechno propojuje.",
    },
    {
      question: "6) Základní deska",
      answer: "Hlavní deska, která propojuje všechny součásti počítače. Bez ní by počítač byl jen hromada plastu a kovu bez života.",
    },
    {
      question: "7) Mikroprocesory + komunikace mikroprocesoru s okolím",
      answer: "Mikroprocesor je srdcem počítače a komunikuje s okolními komponentami, aby vše fungovalo jako orchestr.",
    },
    {
      question: "8) Software, autorská práva, citace, viry, AI",
      answer: "Software je něco, co používáme, ale nikdy nevíme, co přesně dělá. Autorská práva chrání naše nápady, citace dávají respekt, viry jsou to, co nechceme, a AI je budoucnost.",
    },
    {
      question: "9) Operační systém",
      answer: "Operační systém je jako dirigent orchestru, který řídí všechny komponenty počítače a zajišťuje jejich správnou spolupráci.",
    },
    {
      question: "10) Správa operační paměti",
      answer: "Operační paměť je RAM, která je jako pracovní stůl počítače. Když je plný, počítač zpomalí, takže je důležité mít dostatek místa.",
    },
    {
      question: "11) Virtualizace paměti",
      answer: "Je to trik, díky kterému se počítač domnívá, že má více paměti, než ve skutečnosti má. Magie v akci!",
    },
    {
      question: "12) Logický adresový prostor a využití rámců",
      answer: "Logický adresový prostor je oblast paměti, kterou proces používá, a rámce jsou bloky paměti, které tento prostor vyplňují.",
    },
    {
      question: "13) Správa procesů",
      answer: "Správa procesů je způsob, jakým operační systém koordinuje a řídí běh všech procesů. Jako v orchestru, každý nástroj má svůj čas.",
    },
    {
      question: "14) Synchronizace",
      answer: "Synchronizace je způsob, jakým se procesy dohodnou, kdo kdy bude vykonávat svou práci. Zajišťuje, že vše běží hladce.",
    },
    {
      question: "15) Meziprocesová komunikace",
      answer: "Procesy musí komunikovat, aby si předaly informace. Meziprocesová komunikace je jejich způsob, jak si vyměňovat zprávy.",
    },
    {
      question: "16) Konceptuální model DB, Relace a UID",
      answer: "Konceptuální model databáze zobrazuje, jak jsou data organizována. Relace jsou propojení mezi tabulkami, a UID je jedinečný identifikátor pro každý záznam.",
    },
    {
      question: "17) Specifické ERD, logický a fyzický model DB",
      answer: "ERD (Entity-Relationship Diagram) ukazuje, jak jsou data propojena. Logický model je jak data souvisejí, a fyzický model zobrazuje, jak jsou uložena na disku.",
    },
    {
      question: "18) Built-in funkce, NULL, konverze dat, bezpečnost dat",
      answer: "Built-in funkce jsou vestavěné funkce v SQL, NULL znamená neznámou hodnotu, konverze dat přetváří jeden typ dat na jiný, a bezpečnost dat je o ochraně dat před únikem.",
    },
    {
      question: "19) Datové typy, DDL, DML, omezení, sekvence a indexy",
      answer: "Datové typy určují, jaký druh dat je uložen. DDL (Data Definition Language) vytváří a mění strukturu databáze, DML (Data Manipulation Language) upravuje data, omezení upravují pravidla pro data, sekvence generují hodnoty a indexy zrychlují vyhledávání.",
    },
    {
      question: "20) DQL SQL, joiny, subquery, view a spojení selectů",
      answer: "DQL je jazyk pro dotazy. Joiny spojují tabulky, subquery jsou dotazy uvnitř jiných dotazů, view je uložený dotaz, a spojení selectů kombinuje více dotazů.",
    },
    {
      question: "21) Bloky, podmínky, cykly, kurzory a výjimky",
      answer: "Bloky jsou skupiny příkazů, podmínky rozhodují, které příkazy se vykonají, cykly opakují akce, kurzory procházejí daty a výjimky zachytávají chyby.",
    },
    {
      question: "22) Procedury, funkce, triggery, package a objekty",
      answer: "Procedury a funkce jsou kódy, které vykonávají úkoly. Triggery reagují na události, package je balíček kódu a objekty jsou součástí objektově orientovaného programování.",
    },
    {
      question: "23) Typy DBMS, zamykání tabulek, DCL a TCL SQL",
      answer: "DBMS (Database Management System) jsou systémy pro správu databází. Zamykání tabulek chrání data, DCL (Data Control Language) řídí oprávnění, a TCL (Transaction Control Language) říká, jak transakce probíhají.",
    },
    {
      question: "24) Objektově orientované techniky a návrhové vzory",
      answer: "Objektově orientované techniky pomáhají organizovat kód kolem objektů, a návrhové vzory jsou osvědčené způsoby řešení běžných problémů v programování.",
    },
    {
      question: "25) Logické funkce a Booleova algebra",
      answer: "Logické funkce umožňují rozhodování v programech. Booleova algebra je matematika pro logiku, která používá hodnoty pravda nebo nepravda.",
    },
    {
      question: "26) Funkce a zapojení základních elektronických součástek.",
      answer: "Funkce elektronických součástek je řídit a manipulovat elektrické signály, a jejich zapojení tvoří základ pro složitější elektronické zařízení.",
    },
  ];
  

  const Quiz = () => {
    const [index, setIndex] = useState(null);
    const [showAnswer, setShowAnswer] = useState(false);
    const [isDas, setIsDas] = useState(true); 
  
    const nextQuestion = () => {
      const questions = isDas ? das : pov; 
      const newIndex = Math.floor(Math.random() * questions.length);
      setIndex(newIndex);
      setShowAnswer(false);
    };
  
    const toggleSet = () => {
      setIsDas(!isDas);  
      setIndex(null);  
      setShowAnswer(false);  
    };
  
    const questions = isDas ? das : pov; 
  
    return (
<div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-900 px-4 py-8">
  <div className="w-full max-w-4xl text-center">
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-10">
      <h3 className="text-3xl font-bold text-blue-400">Mini kvíz</h3>

      <h2 className="text-3xl font-bold text-blue-400">
        {isDas ? "DAS" : "POV"}
      </h2>

      <button
        onClick={toggleSet}
        className="bg-gray-600 hover:bg-gray-700 px-5 py-2 rounded-xl text-white text-base transition"
      >
        {isDas ? "Přepnout na POV" : "Přepnout na DAS"}
      </button>
    </div>

    {index === null ? (
      <p className="text-gray-300 mb-8 text-xl">Klikni na tlačítko a začni trénovat mozek!</p>
    ) : (
      <div className="mb-8 transition duration-300">
        <p className="text-2xl font-semibold text-white">{questions[index].question}</p>

        {showAnswer && (
          <p className="mt-4 text-green-400 text-lg italic">{questions[index].answer}</p>
        )}
      </div>
    )}

    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-4">
      <button
        onClick={nextQuestion}
        className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl text-white text-lg transition"
      >
        {index === null ? "Spustit kvíz" : "Další otázka"}
      </button>

      {index !== null && !showAnswer && (
        <button
          onClick={() => setShowAnswer(true)}
          className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-xl text-white text-lg transition"
        >
          Zobrazit odpověď
        </button>
      )}
    </div>
  </div>
</div>

    );
  };
  
  export default Quiz;
  