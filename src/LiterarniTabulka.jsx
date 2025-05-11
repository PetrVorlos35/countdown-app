import React from "react";
import { Link } from 'react-router-dom';


const data = [
  ["Sluha dvou pánů", "Carlo Goldoni", "drama", "komedie", "klasicismus", "Benátky, polovina 18.st.", "lidská vypočítavos a sobectví, lži a nedorozumění", "převlek a záměna identity, láska"],
  ["Lakomec", "Molière", "drama", "komedie", "klasicismus", "Paříž, 17.st.", "chamtivost a lakota, láska vs majetek", "láska, záměny a nedorozumění"],
  ["Romeo a Julie", "William Shakespeare", "drama", "tragédie", "renesance", "Verona, 16.st.", "nešťastná láska, rodová nenávist", "láska, smrt, sny a vize"],
  ["Zkrocení zlé ženy", "William Shakespeare", "drama", "komedie", "renesance", "Padov, renesance", "Konfliktní vztahy mezi muži a ženami, přeměna osobnosti", "láska a manželství, sázky"],
  ["Kytice", "Karel Jaromír Erben", "lyrickoepický", "baladická sbírka", "romantismus", "Neurčitý mýtický čas, vesnice, lesy - často přírodní, neurčitá místa", "vina a trest, mateřství a rodinné vztahy", "smrt, příroda, lidové tradice"],
  ["Král Lávra", "Karel Havlíček Borovský", "lyrickoepický", "satirická báseň", "realismus", "Irské království, čas neurčitý (autorova současnost)", "zneužití moci a absolutismus, tajemství a odhalení", "popravy holičů, oslí uši, vrba"],
  ["Máj", "Karel Hynek Mácha", "lyrickoepický", "balada", "romantismus", "Kolem Máchova jezera a hradu Bezděž, v květnu", "tragická láska a odsud, vina a trest", "příroda, loupežník Vilém, Jarmila"],
  ["Evžen Oněgin", "Alexandr Sergejevič Puškin", "lyrickoepický", "román ve verších", "romantismus", "Ruský venkov, počátek 19.st.", "nenaplněná láska, zbytečný člověk", "cestování a hledání smyslu, souboj s Lenským"],
  ["Noc na Karlštejně", "Jaroslav Vrchlický", "drama", "veršovaná komedie s historickým námětem", "realismus, impresionismus, symbolismus", "2 polovina 14.st, Karlštějn", "Láska překonávající překážky, Ženská odvaha a vynalézavost", "Převleky a utajení, Zákaz vstupu žen na hrad"],
  ["Velký Gatsby", "Francis Scott Fitzgerald", "epika", "román", "modernismus, ztracená generace", "léto 1922, New York a Long Island", "Iluze amerického snu, Rozpad morálních hodnot", "Zelené světlo, Večírky v Gatsbyho vile, Západní a Východní Vejce"],
  ["Stařec a moře", "Ernest Hemingway", "epika", "novela", "modernismus, ztracená generace", "pobřeží Kuby a vody Golfského proudu, konec 40.let 20.st.", "Boj člověka s přírodou, Lidská vytrvalost a odhodlání", "moře, marlin (ryba), Santiago"],
  ["Farma zvířat", "George Orwell", "epika", "novela bajka", "modernismus", "Panská farma, později Farma zvířat, předpokláda se polovina 20.st.", "Kritika totalitních režimů, Zneužití moci a manipulace", "Sedm přikázání, Píseň „Zvířata Anglie“, Větrný mlýn"],
  ["Na západní frontě klid", "Erich Maria Remarque", "epika", "válečný román", "realismus", "válečná bojiště západní fronty, 1.světová válka", "Nesmyslnost války, Ztráta iluzí a hodnot, Odtržení od civilního života", "Válka a její hrůzy, Smrt a utrpení, Ztráta mládí"],
  ["O myších a lidech", "John Steinbeck", "epika", "novela", "realismus, ztracená generace", "Kalifornie, 30.léta 20.st.", "Přátelství, Touha po lepším životě", "Násilí a tragédie, Zklamání a rozpad snů, Rasismus a předsudky"],
  ["Bílá nemoc", "Karel Čapek", "drama", "tragédie", "modernismus", "země se symboly totalitního režimu, autorova současnost", "Varování před fašismem a válkou, Epidemie jako metafora", "Konflikt jedince a moci, Bezradnost jednotlivce"],
  ["R.U.R.", "Karel Čapek", "drama", "tragédie", "modernismus", "Rossumův ostrov, neurčená budoucnost (2000)", "Následky technologického pokroku, Ztráta lidskosti", "Vztah člověka a práce, Hranice vědeckého poznání"],
  ["Krysař", "Viktor Dyk", "epika", "novela", "modernismus, anarchičtí buřiči", "Německé město Hameln, lze situovat do 13.st.", "láska a pomsta, když člověk ztratí lásku, ztrácí důvod žít", "láska, pomsta, píšťala, sebevražda, sobectví, propast, krysy"],
  ["Osudy dobrého vojáka Švejka	za světové války (1.díl)", "Jaroslav Hašek", "epika", "humoristický a satirický román", "realismus, satira", "Praha, 1914", "kritika nesmyslnosti války a byrokratického aparátu, lidská hloupost", "vojenská disciplína, autorita, loajalita, humor, ironie"],
  ["Ostře sledované vlaky", "Bohumil Hrabal", "epika", "novela", "postmodernismus", "železniční stanice v Kostomlatech, zima 1945", "Dospívání a ztráta nevinnosti, Absurdnost války", "Odpor proti okupaci, Smrt a obět"],
  ["Postřižiny", "Bohumil Hrabal", "epika", "novela", "postmodernismus", "počátek 20.let 20.st., Nymburk", "kontrast mezi tradičním a moderním způsobem života, radost z obyčejných věcí", "zabijačka, dlouhé vlasy, kolo, pivovar, komín, rádio"],
];

const styleMap = {
  "drama": "bg-blue-300",
  "lyrickoepický": "bg-indigo-400",
  "epika": "bg-green-300",
  "klasicismus": "bg-yellow-200",
  "renesance": "bg-pink-200",
  "romantismus": "bg-red-200",
  "realismus": "bg-orange-200",
  "modernismus": "bg-purple-200",
  "ztracená generace": "bg-purple-300",
  "anarchičtí buřiči": "bg-red-300",
  "postmodernismus": "bg-blue-200",
  "komedie": "bg-blue-500",
  "tragédie": "bg-yellow-300",
  "román": "bg-red-300",
  "balada": "bg-orange-400",
  "novela": "bg-pink-400"
};

function renderSmery(cell) {
    return cell.split(", ").map((smer, i) => (
      <Link
        to={`/smery/${smer.toLowerCase().replace(/\s/g, "-")}`}
        key={i}
        className={`px-1 rounded ${styleMap[smer.trim()] || ""} hover:underline`}
      >
        {smer}
        {i < cell.split(", ").length - 1 && ","}
      </Link>
    ));
  }

  function slugify(text) {
    return text
      .toLowerCase()
      .normalize('NFD') // pro odstranění diakritiky
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }
  
  function renderAutor(cell) {
    const slug = slugify(cell);
    return (
      <Link to={`/autori/${slug}`} className="text-blue-600 hover:underline">
        {cell}
      </Link>
    );
  }
  
  

function getClassNames(cell, index) {
  if (index === 2) return styleMap[cell] || "";
  if (index === 4) {
    const styles = cell.split(", ").map((s) => styleMap[s.trim()] || "");
    return styles.join(" ");
  }
  if (index === 3) {
    const styles = cell.split(" ").map((s) => styleMap[s.trim()] || "");
    return styles.join(" ");
  }  return "";
}

export default function LiterarniTabulka() {
  return (
    <div className="p-4 overflow-x-auto">
      <table className="table-auto w-full border border-gray-300 text-sm text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2 border">Dílo</th>
            <th className="px-4 py-2 border">Autor</th>
            <th className="px-4 py-2 border">Literární druh</th>
            <th className="px-4 py-2 border">Literární žánr</th>
            <th className="px-4 py-2 border">Literární směr</th>
            <th className="px-4 py-2 border">Doba, místo děje</th>
            <th className="px-4 py-2 border">Téma</th>
            <th className="px-4 py-2 border">Motivy</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="hover:bg-gray-200">
            {row.map((cell, j) => (
            <td key={j} className={`px-4 py-2 border ${getClassNames(cell, j)}`}>
                {j === 1
                ? renderAutor(cell)
                : j === 4
                ? renderSmery(cell)
                : cell}
            </td>
            ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}