import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

const AUTORI = {
    "carlo-goldoni": {
      jmeno: "Carlo Goldoni",
      obdobi: "18. století, Itálie",
      smer: "Klasicismus, zejména komedie dell'arte. Goldoni přistoupil k reformě italského divadla a přinesl nový směr v komediální literatuře.",
      znaky: [
        "Goldoni odstranil prvky improvizace, které byly tradiční pro komedii dell'arte, a místo toho kladl důraz na realistické postavy a dialekty",
        "Představoval svět běžných lidí a jejich každodenní problémy, což bylo novátorské pro jeho dobu",
      ],
      vliv: "Je považován za otce italské komedie, jehož díla přetrvávají dodnes. Jeho komedie byly populární v celé Evropě a ovlivnily i pozdější generace dramatiků",
      dila: ["Lhář", "Poprask na laguně", "Sluha dvou pánů"]
    },
    "moliere": {
      jmeno: "Molière",
      obdobi: "17. století, Francie",
      smer: "Klasicismus, francouzská komedie",
      znaky: [
        "Molière je známý svou schopností kombinovat komedii s vážnými společenskými tématy",
        "V jeho dílech najdeme kritiku lidských vad, jako je lakomství, falešná zbožnost, pokrytectví a lidská hloupost",
        "Jeho postavy jsou často přehnané karikatury, což dává jeho komediím univerzální a nadčasový charakter"
      ],
      vliv: "Molière je považován za jednoho z největších dramatiků vůbec a jeho komedie ovlivnily evropskou literaturu až do 21. století.",
      dila: ["Tartuffe", "Mizantrop", "Lakomec", "Don Juan", "Zdravý nemocný"]
    },
    "william-shakespeare": {
      jmeno: "William Shakespeare",
      obdobi: "16.–17. století, Anglie",
      smer: "Renesance, anglický klasicismus",
      znaky: [
        "Shakespeare je považován za největšího dramatika všech dob",
        "Jeho díla se zaměřují na širokou škálu témat, včetně lásky, moci, zrad, přátelství, války a rodinných vztahů",
        "Jeho postavy jsou mnohorozměrné a jeho dramata často zkoumají komplexní lidské emoce a morální dilemata",
        "Shakespeare se také proslavil svou schopností používat jazyk a verše"
      ],
      vliv: "Shakespeare ovlivnil všechny žánry, které vytvořil: tragédie, komedie, historické hry, sonety. Jeho díla jsou stále velmi relevantní a pravidelně se hrají po celém světě",
      dila: ["Romeo a Julie", "Macbeth", "Othello", "Zkrocení zlé ženy", "Jindřich II."]
    },
    "karel-jaromir-erben": {
      jmeno: "Karel Jaromír Erben",
      obdobi: "19. století, Čechy",
      smer: "Romantismus",
      znaky: [
        "Erben byl významným českým básníkem a sběratelem lidových pohádek",
        "Jeho díla jsou plná symbolů a přírodních motivů",
        "Byl mistrem poezie a přispěl k formování české národní literatury"
      ],
      vliv: "Erben je považován za jednoho z největších českých romantických básníků. Jeho tvorba ovlivnila celou generaci českých autorů",
      dila: ["Kytice", "Prostonárodní české písně a říkadla"]
    },
    "karel-havlicek-borovsky": {
      jmeno: "Karel Havlíček Borovský",
      obdobi: "19. století, Čechy",
      smer: "Realismus",
      znaky: [
        "Borovský byl český novinář, satirik a politik, který kritizoval habsburskou monarchii a bojoval za českou národní identitu",
        "Jeho satirické noviny a básně kritizovaly nejen politickou situaci, ale i společenské zlo"
      ],
      vliv: "Je považován za jednoho z největších českých novinářů a politických myslitelů. Přispěl k rozvoji české literatury v realistickém směru",
      dila: ["Král Lávra", "Křest svatého Vladimíra", "Tyrolské elegie", "epigramy"]
    },
    "karel-hynek-macha": {
      jmeno: "Karel Hynek Mácha",
      obdobi: "19. století, Čechy",
      smer: "Romantismus",
      znaky: [
        "Mácha je považován za jednoho z nejvýznamnějších českých romantických básníků",
        "Jeho díla vyjadřují pesimistické názory na lidský život, přírodu a smrt",
        "Mácha ve své poezii kladl důraz na vnitřní prožitky a city, což bylo pro romantismus typické",
        "Jeho nejznámější dílo, Máj, je básnický epos o tragické lásce"
      ],
      vliv: "Mácha přispěl k formování české literární tradice a jeho díla jsou stále studována a interpretována",
      dila: ["Máj", "Obrazy ze života mého", "Cikáni", "Křivoklad"]
    },
    "alexandr-sergejevic-puskin": {
      jmeno: "Alexandr Sergejevič Puškin",
      obdobi: "19. století, Rusko",
      smer: "Romantismus",
      znaky: [
        "Puškin je považován za zakladatele moderní ruské literatury",
        "Jeho díla jsou plná národní identity, historie, a často zkoumala problémy lidské existence",
        "Puškinovo dílo je bohaté na metafory a symboliku, a přispěl k rozvoji ruské literární tradice"
      ],
      vliv: "Puškin je jedním z největších ruských básníků a dramatiků, který položil základy pro další ruské autory, jako byli Tolstoj a Dostojevskij",
      dila: ["Evžen Oněgin", "Boris Godunov", "Kapitánská dcerka"]
    },
    "jaroslav-vrchlicky": {
      jmeno: "Jaroslav Vrchlický",
      obdobi: "19.–20. století, Čechy",
      smer: "Realismus, impresionismus, symbolismus",
      znaky: [
        "Vrchlický byl český básník, dramatik, a překladatel, který ovlivnil českou literaturu především svými básněmi a dramaty",
        "Často čerpal z historických a mytologických témat, přičemž se snažil o vysokou estetiku a umělecký výraz"
      ],
      vliv: "Vrchlický byl jedním z nejvýznamnějších českých básníků 2. poloviny 19. století. Jeho tvorba se zaměřovala na filosofii krásy a umění, což ho zařadilo mezi hlavní představitele českého symbolizmu",
      dila: ["Noc na Karlštejně", "Zlomky epopeje", "Smrt Odyssea"]
    },
    "francis-scott-fitzgerald": {
      jmeno: "Francis Scott Fitzgerald",
      obdobi: "20. století, USA",
      smer: "Modernismus, ztracená generace",
      znaky: [
        "Fitzgerald byl jedním z hlavních představitelů amerického modernismu",
        "Jeho díla zkoumají americkou společnost 20. let 20. století, zvláště problémy spojené s bohatstvím, láskou a touhou po štěstí",
        "Jeho styl je bohatý na symboliku a vysoce literární jazyk"
      ],
      vliv: "Fitzgeraldova tvorba ovlivnila nejen americkou literaturu, ale i celosvětovou kulturu. Jeho nejslavnější dílo, Velký Gatsby, je považováno za jedno z největších amerických románů 20. století",
      dila: ["Velký Gatsby", "Na prahu ráje", "poslední magnát"]
    },
    "ernest-hemingway": {
      jmeno: "Ernest Hemingway",
      obdobi: "20. století, USA",
      smer: "Modernismus, naturalismus, ztracená generace",
      znaky: [
        "Hemingway byl známý svou jednoduchou, úspornou prózou, která se stala známá jako (Hemingwayův styl). ",
        "Jeho díla se často zaměřují na postavy, které se potýkají s těžkými životními situacemi, a zobrazují lidskou odolnost, přírodu a války"
      ],
      vliv: "Hemingway je jedním z nejvlivnějších amerických spisovatelů 20. století. Jeho knihy byly inspirací pro mnoho dalších autorů a jeho jednoduchý styl ovlivnil vývoj americké prózy",
      dila: ["Stařec a moře", "Komu zvoní hrana"]
    },
    "george-orwell": {
      jmeno: "George Orwell",
      obdobi: "20. století, Velká Británie",
      smer: "Modernismus, politická literatura",
      znaky: [
        "Orwell byl známý svými kritikami totalitních režimů a zneužívání moci",
        "Jeho díla často reflektují problémy, jako jsou autoritářství, ztráta svobody a rovnost v politických systémech",
        "Orwellovo psaní bylo jasně politické a vyzývalo k vědomí o nebezpečí zneužívání moci"
      ],
      vliv: "Orwell je jedním z největších autorů 20. století, jehož díla jsou i dnes velmi aktuální, zejména pro svou politickou a sociální reflexi",
      dila: ["1984", "Farma zvířat", "Hold Katalánsku"]
    },
    "erich-maria-remarque": {
      jmeno: "Erich Maria Remarque",
      obdobi: "20. století, Německo",
      smer: "Realismus, protiválečná literatura",
      znaky: [
        "Remarque je známý svou realistickou a přímou kritikou války a jejích dopadů na jednotlivce",
        "Jeho díla se zaměřují na ztrátu lidskosti, posttraumatické následky války a hledání smyslu života v době chaosu"
      ],
      vliv: "Remarqueův nejznámější román, Na západní frontě klid, je považován za jedno z nejvýznamnějších protiválečných děl, které ukazuje brutalitu první světové války",
      dila: ["Na západní frontě klid", "Cesta zpátky", "Tři kamarádi"]
    },
    "john-steinbeck": {
      jmeno: "John Steinbeck",
      obdobi: "20. století, USA",
      smer: "Realismus, sociální literatura, ztracená generace",
      znaky: [
        "Steinbeckovo psaní je známé svou sociální kritikou a empatií k chudým a utlačovaným",
        "Jeho romány často pojednávají o těžkostech života obyčejných lidí, zejména těch, kteří žijí na venkově nebo v těžkých ekonomických podmínkách"
      ],
      vliv: "Steinbeck je považován za jednoho z největších amerických spisovatelů. Jeho díla se zaměřují na základní lidské hodnoty jako soucit, čestnost a boj za spravedlnost",
      dila: ["O myších a lidech", "Hrozny hněvu", "Na východu od ráje"]
    },
    "karel-capek": {
      jmeno: "Karel Čapek",
      obdobi: "20. století, Čechy",
      smer: "Modernismus, filozofický realismus",
      znaky: [
        "Čapek byl český spisovatel, novinář, filozof a dramatik",
        "Jeho díla zkoumají otázky lidské existence, etiky a technologie",
        "Čapek byl známý svou schopností reflektovat společenské změny a jeho práce jsou plná optimismu i pesimismu"
      ],
      vliv: "Čapek měl obrovský vliv na českou i světovou literaturu. Jeho filozofické a etické otázky se staly základem pro diskuze o vědeckém pokroku a jeho vlivu na lidskou přirozenost",
      dila: ["Válka s Mloky", "R.U.R.", "Bílá nemoc", "Továrna na absolutno", "Krakatir", "Věc Makropulos"]
    },
    "viktor-dyk": {
      jmeno: "Viktor Dyk",
      obdobi: "19.–20. století, Čechy",
      smer: "Modernismus, český symbolismus, anarchičtí buřiči",
      znaky: [
        "Dyk byl český básník, novinář a dramatik, který byl velmi aktivní v politickém životě",
        "Jeho poezie je výrazně symbolistní, jeho dramata a básně zkoumají téma vlastenectví, hrdinství a tragédie"
      ],
      vliv: "Dyk je považován za jednoho z hlavních představitelů české moderní literatury",
      dila: ["Krysař", "Noci chiméry", "Zvěrstva"]
    },
    "jaroslav-hasek": {
      jmeno: "Jaroslav Hašek",
      obdobi: "20. století, Čechy",
      smer: "Satira, realismus",
      znaky: [
        "Hašek byl známý svým humoristickým a satirickým stylem, který často využíval k tomu, aby kritizoval vojenskou byrokracii, státní autoritu a společenské normy",
        "Jeho nejznámější postava, Švejk, je symbolem lidské odolnosti a humoru ve tváři absurdity"
      ],
      vliv: "Haškovo dílo ovlivnilo českou a světovou literaturu, a jeho satirické pojetí války a byrokracie stále rezonuje",
      dila: ["Osudy dobrého vojáka Švejka za světové války", "Dobrý voják Švejk v zajetí", "Dobrý voják Švejk a jiné podivné historky"]
    },
    "bohumil-hrabal": {
      jmeno: "Bohumil Hrabal",
      obdobi: "20. století, Čechy",
      smer: "Postmodernismus, realismus",
      znaky: [
        "Hrabal je známý svým originálním stylem psaní, který spojuje humor, grotesku a tragiku",
        "Jeho díla často vycházejí z každodenního života obyčejných lidí a jejich hledání smyslu v těžkých dobách",
        "Používal kolokviální jazyk a jeho postavy jsou často popletené, ale neuvěřitelně lidské"
      ],
      vliv: "Hrabal se stal jedním z nejvýznamnějších českých spisovatelů 20. století. Jeho díla byla přeložena do mnoha jazyků a jeho schopnost vykreslit realitu z jedinečné perspektivy ovlivnila celou generaci spisovatelů",
      dila: ["Ostře sledované vlaky", "Pábitelé", "Obsluhoval jsem anglického krále"]
    }
  };
  

export default function AutorDetail() {
  const { autor } = useParams();
  const info = AUTORI[autor];

  if (!info) {
    return (
      <div className="p-6 text-red-500 text-lg">
        Autor <strong>{autor.replace(/-/g, " ")}</strong> nebyl nalezen.
      </div>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{info.jmeno}</h1>

      <p className="mb-2"><strong>Doba a místo:</strong> {info.obdobi}</p>
      <p className="mb-2"><strong>Literární směr:</strong> {info.smer}</p>

      <div className="mb-4">
        <strong>Hlavní znaky:</strong>
        <ul className="list-disc list-inside mt-2">
          {info.znaky.map((znak, i) => <li key={i}>{znak}</li>)}
        </ul>
      </div>

      <p className="mb-4"><strong>Vliv na literaturu:</strong> {info.vliv}</p>

      <div className="mb-4">
        <strong>Známá díla:</strong>
        <ul className="list-disc list-inside mt-2">
          {info.dila.map((dilo, i) => <li key={i}>{dilo}</li>)}
        </ul>
      </div>

      <Link to="/cestina" className="text-blue-600 hover:underline">← Zpět na tabulku</Link>
      </div>
  );
}
