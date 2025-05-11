import { useParams } from "react-router-dom";

const SMERY = {
  "renesance": {
    období: "14.-16. století ",
    charakteristika: "Období znovuzrození antických ideálů, důraz na člověka, jeho rozum a schopnosti.",
    znaky: [
      "Antropocentrismus - člověk jako střed světa",
      "Individualismus - důraz na jedinečnost jednotlivce",
      "Inspirace antikou - návrat k antickým vzorům a hodnotám",
      "Světskost - zaměření na pozemský život a jeho radosti",
      "Rozvoj národních jazyků - literatura psaná v národních jazycích místo latiny",
      "Vznik nových literárních žánrů - sonet, novela, esej",
    ],
    autoři: [
      "Dante Alighieri - Božská komedie",
      "William Shakespeare - Romeo a Julie, Hamlet, Macbeth",
    ],
  },
  "klasicismus": {
    období: "17.-18. století",
    charakteristika: "Inspirace antikou, důraz na rozum, řád, harmonii a pevné formy.",
    znaky: [
      "Dodržování pravidel jednoty místa, času a děje",
      "Výchovný charakter literatury",
    ],
    autoři: [
      "Molière", "Jean Racine", "Pierre Corneille", "Carlo Goldoni"
    ],
  },
  "romantismus": {
    období: "Konec 18. století - polovina 19. století",
    charakteristika: "Důraz na cit, individualismus, přírodu a svobodu",
    znaky: [
      "Hrdina často osamělý, rozervaný, stojící proti společnosti",
      "časté motivy nešťastné lásky a smrti.",
    ],
    autoři: [
      "Victor Hugo", "Alexandr Sergejevič Puškin", "Karel Hynek Mácha", "Karel Jaromír Erben"
    ],
  },
  "realismus": {
    období: "Druhá polovina 19. století",
    charakteristika: "Snaha o objektivní a věrné zobrazení reality.",
    znaky: [
      "Zaměření na každodenní život",
      "detailní popisy",
      "typizace postav",
    ],
    autoři: [
      "Karel Havlíček Borovský", "Jaroslav Vrchlický", "Erich Maria Remarque", "John Steinbeck", "Jaroslav Hašek"
    ],
  },
  "naturalismus": {
    období: "Konec 19. století",
    charakteristika: "Rozšíření realismu o důraz na vliv dědičnosti a prostředí na člověka.",
    znaky: [
      "Determinismus",
      "často zobrazování negativních jevů společnosti",
    ],
    autoři: [
      "Émile Zola", "Guy de Maupassant", "Henrik Ibsen"
    ],
  },
  "symbolismus": {
    období: "Konec 19. století",
    charakteristika: "Použití symbolů k vyjádření abstraktních myšlenek a emocí.",
    znaky: [
      "Hudebnost verše",
      "subjektivita",
      "tajemnost",
    ],
    autoři: [
      "Charles Baudelaire", "Arthur Rimbaud", "Viktor Dyk"
    ],
  },
  "impresionismus": {
    období: "Konec 19. století - začátek 20. století",
    charakteristika: "Zachycení okamžitého dojmu, smyslového vnímání.",
    znaky: [
      "Lyričnost",
      "subjektivita",
      "popis nálad a atmosféry",
    ],
    autoři: [
      "Paul Verlaine", "Anton Pavlovič Čechov"
    ],
  },
  "modernismus": {
    období: "Konec 19. století - první polovina 20. století",
    charakteristika: "Reakce na krizi tradičních hodnot, experimentování s formou a jazykem.",
    znaky: [
      "Fragmentace",
      "subjektivní pohled",
      "hledání nových výrazových prostředků",
    ],
    autoři: [
      "Franz Kafka", "Karel Čapek", "Francis Scott Fitzgerald", "Ernest Hemingway", "George Orwell", "Viktor Dyk"
    ],
  },
  "postmodernismus": {
    období: "Druhá polovina 20. století - současnost",
    charakteristika: "Skeptický přístup k velkým vyprávěním, hra s textem a intertextualitou.",
    znaky: [
      "Ironie",
      "parodie",
      "mísení žánrů",
      "metafikce",
    ],
    autoři: [
      "Umberto Eco", "Thomas Pynchon", "Bohumil Hrabal"
    ],
  },
  "ztracená-generace": {
  období: "20. a 30. léta 20. století (mezi světovými válkami)",
  charakteristika: "Autoři často reflektovali deziluzi po první světové válce, ztrátu ideálů a smyslu života. Vyjadřovali pocit vykořenění a marnosti.",
  znaky: [
    "Pesimismus a bezvýchodnost",
    "Ztráta víry v civilizaci, pokrok a hodnoty",
    "Samota, odcizení, neschopnost navázat vztahy",
    "Téma války a jejích následků",
  ],
  autoři: [
    "Ernest Hemingway – Stařec a moře",
    "Francis Scott Fitzgerald – Velký Gatsby",
    "John Steinbeck – O myších a lidech",
  ],
},
"anarchičtí-buřiči": {
  období: "přelom 19. a 20. století",
  charakteristika: "Česká literární skupina autorů, kteří se bouřili proti společnosti, konvencím a měšťácké morálce. Byli ovlivněni symbolismem a dekadencí.",
  znaky: [
    "Vzdor proti konvencím",
    "Individualismus, samota, rozervanost",
    "Témata smrti, lásky, odporu",
    "Vliv filozofie anarchismu",
  ],
  autoři: [
    "Viktor Dyk – Krysař",
    "František Gellner",
    "S. K. Neumann",
    "Karel Toman",
  ],
},
"satira": {
  období: "různá období – od antiky po moderní dobu",
  charakteristika: "Satira využívá humor, ironii a nadsázku ke kritice společnosti, politiky nebo lidských nedostatků.",
  znaky: [
    "Výsměch a zesměšnění určitých jevů nebo postav",
    "Ironie, nadsázka, karikatura",
    "Výchovný nebo kritický podtext",
  ],
  autoři: [
    "Jaroslav Hašek – Osudy dobrého vojáka Švejka",
    "Jonathan Swift – Gulliverovy cesty",
    "George Orwell – Farma zvířat",
    "Karel Havlíček Borovský – Král Lávra",
  ],
},

};

export default function SmerDetail() {
  const { smer } = useParams();
  const info = SMERY[smer];

  if (!info) {
    return (
      <div className="p-6 max-w-3xl mx-auto text-red-500 text-lg">
        Směr <strong>{smer.replace(/-/g, " ")}</strong> nebyl nalezen.
      </div>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold capitalize mb-4">{smer.replace(/-/g, " ")}</h1>

      <p className="mb-4"><strong>Období:</strong> {info.období}</p>
      <p className="mb-4"><strong>Charakteristika:</strong> {info.charakteristika}</p>

      <div className="mb-4">
        <strong>Znaky:</strong>
        <ul className="list-disc list-inside mt-2">
          {info.znaky.map((znak, i) => (
            <li key={i}>{znak}</li>
          ))}
        </ul>
      </div>

      <div>
        <strong>Významní autoři:</strong>
        <ul className="list-disc list-inside mt-2">
          {info.autoři.map((autor, i) => (
            <li key={i}>{autor}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <a href="/cestina" className="text-blue-600 hover:underline">← Zpět na tabulku</a>
      </div>
    </div>
  );
}
