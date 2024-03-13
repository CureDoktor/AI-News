import sortNewsByImage from "./sortNewsByImage";
import axios from "axios";
import { TranslatedText } from "./generate-answer";
import { categories } from "@/constants";
import { translateText } from "./translateNews";
const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {
  //countries=rs za srpske vesti

  const nesto = "something here should be translated to Serbian language";
  console.log(nesto + " treba da se prevede");

  const prevedeno = translateText(nesto, "sr");

  const res = await axios({
    method: "get",
    url: `http://api.mediastack.com/v1/news?access_key=a265c48fab503c6cbb4d7aeecd460109&languages=en${
      category ? "&categories=" + category : ""
    }${keywords ? "&keywords=" + keywords : ""}`,
  });

  const cure = sortNewsByImage(res?.data);

  return cure;
};

// const fetchNews = (
//   category?: Category | string,
//   keywords?: string,
//   isDynamic?: boolean
// ) => {
//   const test = {
//     pagination: { limit: 25, offset: 0, count: 25, total: 10000 },
//     data: [
//       {
//         author: "City News Service",
//         title:
//           "Santa Clarita-area Chiquita Canyon Landfill signs deal to allow monitoring of odors",
//         description:
//           "The agreement will allow the landfill to continue to operate, but does not address removing the pollutants or cleaning the air and soil. Rather, it requires the landfill to reveal the source of the pollutants and allow monitoring of the pollution.",
//         url: "https://www.dailynews.com/2024/01/18/santa-clarita-area-chiquita-canyon-landfill-signs-deal-to-allow-monitoring-of-odors/",
//         source: "dailynews",
//         image:
//           "https://www.dailynews.com/wp-content/uploads/2024/01/LDN-L-CHIQUITA-UPDATE-1019-02-1-1.jpg?w=1400px&strip=all",
//         category: "general",
//         language: "en",
//         country: "us",
//         published_at: "2024-01-18T16:29:53+00:00",
//       },
//       {
//         author: null,
//         title:
//           "Berner Podcast «Gesprächsstoff»: Welche Folgen haben die Berner Spesen-Enthüllungen?",
//         description:
//           "Wie eine Banane auf der Spesenabrechnung eines Berner Regierungsrats auch durch ungeschickte Kommunikation zum schweizweiten Interesse wurde – und was jetzt passieren muss.",
//         url: "https://www.bernerzeitung.ch/berner-podcast-gespraechsstoff-welche-folgen-haben-die-berner-spesen-enthuellungen-939015853768",
//         source: "Berner Zeitung",
//         image:
//           "https://cdn.unitycms.io/images/F0aZ2MZ44oq9-WGl766PYl.jpg?op=ocroped&val=400,400,1000,749,0,0&sum=zVs9Wis-GjU",
//         category: "general",
//         language: "de",
//         country: "ch",
//         published_at: "2024-01-18T16:29:43+00:00",
//       },
//       {
//         author: "África Prado",
//         title:
//           "La Generalitat Valenciana adjudica la gestión de la Ciudad de la Luz a la empresa del rodaje de 'Avatar'",
//         description:
//           "La Generalitat Valenciana ha adjudicado a la multinacional americana MBS Group --que está detrás de producciones como &#039;Avatar 2&#039;, &#039;The Mandalorian&#039; o &#039;Outlander&#039;- la gestión del complejo industrial audiovisual de Ciudad de la Luz por un importe de 3.100.000 euros (IVA no incluido) para un periodo de 5 años y con un porcentaje de comercialización para la sociedad del 6,5%. A partir de hoy se abre un periodo de 15 días hábiles en las que se pueden presentar alegaciones.",
//         url: "https://www.laopiniondezamora.es/economia/2024/01/18/generalitat-valenciana-adjudica-gestion-ciudad-97072617.html",
//         source: "laopiniondezamora",
//         image:
//           "https://estaticos-cdn.prensaiberica.es/clip/fafecfc8-e1e9-458d-b17a-0da94624ea31_16-9-aspect-ratio_default_0.jpg",
//         category: "general",
//         language: "es",
//         country: "es",
//         published_at: "2024-01-18T16:29:40+00:00",
//       },
//       {
//         author: "Sgt. Alexander Chatoff",
//         title:
//           "Special Reaction Team Conducts Active Shooting Training [Image 3 of 5]",
//         description:
//           "The 178th and 226th Military Police Detachments Special Reactions Team conducted simulated active shooter training with MPs from the 401st Military Police Company at Fort Cavazos, Sept. 13-14 2023. Training in a realistic and rigorous environment reinforces the importance of resilience and performing effectively in volatile situations.",
//         url: "https://www.dvidshub.net/image/8201846/special-reaction-team-conducts-active-shooting-training",
//         source: "dvidshub",
//         image:
//           "https://d1ldvf68ux039x.cloudfront.net/thumbs/photos/2401/8201846/250w_q95.jpg",
//         category: "general",
//         language: "en",
//         country: "us",
//         published_at: "2024-01-18T16:29:23+00:00",
//       },
//       {
//         author: "Sgt. Alexander Chatoff",
//         title:
//           "Special Reaction Team Conducts Active Shooting Training [Image 4 of 5]",
//         description:
//           "The 178th and 226th Military Police Detachments Special Reactions Team conducted simulated active shooter training with MPs from the 401st Military Police Company at Fort Cavazos, Sept. 13-14 2023. Training in a realistic and rigorous environment reinforces the importance of resilience and performing effectively in volatile situations.",
//         url: "https://www.dvidshub.net/image/8201847/special-reaction-team-conducts-active-shooting-training",
//         source: "dvidshub",
//         image:
//           "https://d1ldvf68ux039x.cloudfront.net/thumbs/photos/2401/8201847/250w_q95.jpg",
//         category: "general",
//         language: "en",
//         country: "us",
//         published_at: "2024-01-18T16:29:23+00:00",
//       },
//       {
//         author: "Sgt. Alexander Chatoff",
//         title:
//           "Special Reaction Team Conducts Active Shooting Training [Image 2 of 5]",
//         description:
//           "The 178th and 226th Military Police Detachments Special Reactions Team conducted simulated active shooter training with MPs from the 401st Military Police Company at Fort Cavazos, Sept. 13-14 2023. Training in a realistic and rigorous environment reinforces the importance of resilience and performing effectively in volatile situations.",
//         url: "https://www.dvidshub.net/image/8201845/special-reaction-team-conducts-active-shooting-training",
//         source: "dvidshub",
//         image:
//           "https://d1ldvf68ux039x.cloudfront.net/thumbs/photos/2401/8201845/250w_q95.jpg",
//         category: "general",
//         language: "en",
//         country: "us",
//         published_at: "2024-01-18T16:29:23+00:00",
//       },
//       {
//         author: "Sgt. Alexander Chatoff",
//         title: "Special Reaction Team Conducts Active Shooting Training",
//         description:
//           "Unfortunately, the potential for active shootings is more prevalent throughout the country than ever before. So in turn, the 89th Military Police Brigade trains to handle and respond to active shootings. The Special Reaction Team, or SRT, with the 178th Military Police Detachment, conducted an active shooter response training for the military police Soldiers of the 401st Military Police Company Sept. 13-14 at Fort Cavazos.",
//         url: "https://www.dvidshub.net/news/462012/special-reaction-team-conducts-active-shooting-training",
//         source: "dvidshub",
//         image:
//           "https://d1ldvf68ux039x.cloudfront.net/thumbs/photos/2401/8201848/250w_q95.jpg",
//         category: "general",
//         language: "en",
//         country: "us",
//         published_at: "2024-01-18T16:29:23+00:00",
//       },
//       {
//         author: "Sgt. Alexander Chatoff",
//         title:
//           "Special Reaction Team Conducts Active Shooting Training [Image 5 of 5]",
//         description:
//           "The 178th and 226th Military Police Detachments Special Reactions Team conducted simulated active shooter training with MPs from the 401st Military Police Company at Fort Cavazos, Sept. 13-14 2023. Training in a realistic and rigorous environment reinforces the importance of resilience and performing effectively in volatile situations.",
//         url: "https://www.dvidshub.net/image/8201848/special-reaction-team-conducts-active-shooting-training",
//         source: "dvidshub",
//         image:
//           "https://d1ldvf68ux039x.cloudfront.net/thumbs/photos/2401/8201848/250w_q95.jpg",
//         category: "general",
//         language: "en",
//         country: "us",
//         published_at: "2024-01-18T16:29:23+00:00",
//       },
//       {
//         author: "Sgt. Alexander Chatoff",
//         title:
//           "Special Reaction Team Conducts Active Shooting Training [Image 1 of 5]",
//         description:
//           "The 178th and 226th Military Police Detachments Special Reactions Team conducted simulated active shooter training with MPs from the 401st Military Police Company at Fort Cavazos, Texas Sept. 13-14 2023. Training in a realistic and rigorous environment reinforces the importance of resilience and performing effectively in volatile situations.",
//         url: "https://www.dvidshub.net/image/8201844/special-reaction-team-conducts-active-shooting-training",
//         source: "dvidshub",
//         image:
//           "https://d1ldvf68ux039x.cloudfront.net/thumbs/photos/2401/8201844/250w_q95.jpg",
//         category: "general",
//         language: "en",
//         country: "us",
//         published_at: "2024-01-18T16:29:22+00:00",
//       },
//       {
//         author: "Efe",
//         title:
//           "El sector de la limpieza de Lugo no llega a un acuerdo y se prolonga la huelga",
//         description:
//           "El próximo jueves, día 25 de enero, habrá una nueva reunión entre la patronal y los sindicatos",
//         url: "https://www.elprogreso.es/articulo/lugo/sector-limpieza-lugo-llega-acuerdo-prolonga-huelga/202401181729201723608.html",
//         source: "elprogreso",
//         image:
//           "https://www.elprogreso.es/media/elprogreso/images/2024/01/07/2024010710031264486.jpg",
//         category: "general",
//         language: "es",
//         country: "es",
//         published_at: "2024-01-18T16:29:20+00:00",
//       },
//       {
//         author: "Redacción Yotele",
//         title:
//           "Nueva bomba de Telecinco: Gabriela Guillén, primera entrevista en plató tras dar a luz a su hijo con Bertín",
//         description:
//           "Telecinco ha conseguido cerrar una de las entrevistas más codiciadas de la actualidad de la crónica del corazón. Gabriela Guillén, madre del nuevo hijo de Bertín Osborne, se sentará este próximo viernes en &#039;D Viernes&#039;, según ha desvelado la cadena y el propio programa en la mañana de este jueves.",
//         url: "https://www.laopiniondezamora.es/ocio/tv/2024/01/18/nueva-bomba-telecinco-gabriela-guillen-entrevista-97072577.html",
//         source: "laopiniondezamora",
//         image:
//           "https://estaticos-cdn.prensaiberica.es/clip/f7b21a30-af42-434c-9533-43eb19aea213_16-9-aspect-ratio_default_0.jpg",
//         category: "general",
//         language: "es",
//         country: "es",
//         published_at: "2024-01-18T16:29:09+00:00",
//       },
//       {
//         author: "Redacción Yotele",
//         title:
//           "Nueva bomba de Telecinco: Gabriela Guillén, primera entrevista en plató tras dar a luz a su hijo con Bertín",
//         description:
//           "Telecinco ha conseguido cerrar una de las entrevistas más codiciadas de la actualidad de la crónica del corazón. Gabriela Guillén, madre del nuevo hijo de Bertín Osborne, se sentará este próximo viernes en &#039;D Viernes&#039;, según ha desvelado la cadena y el propio programa en la mañana de este jueves.",
//         url: "https://www.informacion.es/ocio/tv/2024/01/18/nueva-bomba-telecinco-gabriela-guillen-entrevista-97072560.html",
//         source: "ocio",
//         image:
//           "https://estaticos-cdn.prensaiberica.es/clip/f7b21a30-af42-434c-9533-43eb19aea213_16-9-aspect-ratio_default_0.jpg",
//         category: "general",
//         language: "es",
//         country: "es",
//         published_at: "2024-01-18T16:29:06+00:00",
//       },
//       {
//         author: null,
//         title:
//           "Aménagement à Genève: Une école privée vendue à la Ville sans solution pour ses 200 élèves",
//         description:
//           "À Champel, le lycée Töpffer a cédé son terrain sans trouver de point de chute. La Ville, qui a fait usage de son droit de préemption, a besoin de locaux pour le parascolaire.",
//         url: "https://www.tdg.ch/amenagement-a-geneve-une-ecole-privee-vendue-a-la-ville-sans-solution-pour-ses-200-eleves-429843922151",
//         source: "Tribune de Geneve",
//         image:
//           "https://cdn.unitycms.io/images/5UKWj4ZvKnw8uQQuj_Nt49.jpg?op=ocroped&val=400,400,1000,1000,0,0&sum=Xhf5rUCjHnA",
//         category: "general",
//         language: "fr",
//         country: "ch",
//         published_at: "2024-01-18T16:29:03+00:00",
//       },
//       {
//         author: "Norberto Chijeb",
//         title:
//           "El Ayuntamiento de Adeje colabora para que Karina, Vicente y sus tres hijos puedan conseguir un alquiler económico",
//         description:
//           "Servicios Sociales le ha conseguido un apartamento turístico hasta que se trasladen a una casa, tras ser desahuciados ayer de su vivienda ya subastada",
//         url: "https://diariodeavisos.elespanol.com/2024/01/ayuntamiento-adeje-karina-alquiler-economico/",
//         source: "diariodeavisos",
//         image: null,
//         category: "general",
//         language: "es",
//         country: "es",
//         published_at: "2024-01-18T16:29:56+00:00",
//       },
//       {
//         author: "Notizie news",
//         title:
//           "Houtskool tekeningen: Zwart-wit landschappen. (Arte Book 40) (Dutch Edition) eBook : Rossi, Arduino: Amazon.it: Kindle Store",
//         description:
//           "https://www.amazon.it/Houtskool-tekeningen-Zwart-wit-landschappen-Dutch-ebook/dp/B08RZG7MM3/ref=sr_1_386?qid=1705595343&amp;refinements=p_lbr_books_authors_browse-bin%3AArduino+Rossi&amp;s=digital-text&amp;sr=1-386 ",
//         url: "https://notizienews1.blogspot.com/2024/01/houtskool-tekeningen-zwart-wit_18.html",
//         source: "notizienews1",
//         image: null,
//         category: "general",
//         language: "it",
//         country: "it",
//         published_at: "2024-01-18T16:29:53+00:00",
//       },
//       {
//         author: "Aurora Gentile",
//         title: "Ricette Daniele Persegani, facciamo la pasta e ceci golosa",
//         description:
//           "A grande richiesta la ricetta di Daniele Persegani per fare la pasta e ceci golosa L'articolo Ricette Daniele Persegani, facciamo la pasta e ceci golosa proviene da Ultime Notizie Flash.",
//         url: "https://www.ultimenotizieflash.com/cucina/primi-piatti/2024/01/18/ricette-daniele-persegani-facciamo-la-pasta-e-ceci-golosa",
//         source: "ultimenotizieflash",
//         image: null,
//         category: "general",
//         language: "it",
//         country: "it",
//         published_at: "2024-01-18T16:29:52+00:00",
//       },
//       {
//         author: "Redazione CT",
//         title:
//           "Questura di Catania, in servizio gli agenti assegnati al Decimo reparto mobile",
//         description:
//           "I 24 poliziotti sono stati accolti dal dirigente Domenico DemaioArticolo Questura di Catania, in servizio gli agenti assegnati al Decimo reparto mobile su Live Sicilia.",
//         url: "https://livesicilia.it/questura-catania-24-agenti-assegnati-decimo-reparto-mobile/",
//         source: "livesicilia",
//         image: null,
//         category: "general",
//         language: "it",
//         country: "it",
//         published_at: "2024-01-18T16:29:41+00:00",
//       },
//       {
//         author: "NyasaT Editor",
//         title:
//           "Opinion: Chilima’s political career is in its unprecedented twilight",
//         description:
//           "In this article, our political analyst Joseph Kanyenda argues that vice president Saulos Chilima is a political giant who light is flickering and a political career drifting towards complete end. It is not only the DPP that has not made peace with the fact that President Lazarus Chakwera’s support index in the Southern region is [&#8230;]The post Opinion: Chilima’s political career is in its unprecedented twilight appeared first on Malawi Nyasa Times - News from Malawi about Malawi.",
//         url: "https://www.nyasatimes.com/opinion-chilimas-political-career-is-in-its-unprecedented-twilight/",
//         source: "Nyasa Times",
//         image: null,
//         category: "general",
//         language: "en",
//         country: "mw",
//         published_at: "2024-01-18T16:29:37+00:00",
//       },
//       {
//         author: "Amaechi Okonkwo",
//         title: "Army busts illegal bunkering facilities in Rivers",
//         description:
//           "Tribune OnlineArmy busts illegal bunkering facilities in RiversThe Six Division of Nigerian Army, Port Harcourt, on Thursday, bust several illegal bunkering sites in Odagwa, Etche Local Government Area in Rivers state where over 3 million litres of crude oil and bunkering facilities were captured. Six persons were also arrested, who confessed to being involved at the various levels of the illegal business. [&#8230;]Army busts illegal bunkering facilities in RiversTribune Online",
//         url: "https://tribuneonlineng.com/army-busts-illegal-bunkering-facilities-in-rivers/",
//         source: "tribune",
//         image: null,
//         category: "general",
//         language: "en",
//         country: "ng",
//         published_at: "2024-01-18T16:29:35+00:00",
//       },
//       {
//         author: "Redazione NoiTV",
//         title: "Inaugurata a Villa Bottini la mostra “I fantasmi di Auschwitz”",
//         description:
//           "L'esposizione, che sarà visitabile fino all’8 febbraio, fa parte delle iniziative promosse dal Comune di Lucca per il Giorno della Memoria ed è realizzata grazie al contributo della Fondazione Cassa di Risparmio di Lucca.",
//         url: "https://www.noitv.it/2024/01/inaugurata-a-villa-bottini-la-mostra-i-fantasmi-di-auschwitz-559938/",
//         source: "noitv",
//         image: null,
//         category: "general",
//         language: "it",
//         country: "it",
//         published_at: "2024-01-18T16:29:26+00:00",
//       },
//       {
//         author: "Marcos Mortari",
//         title:
//           "Governo prepara projeto de lei para consolidar regras sobre aplicações financeiras",
//         description:
//           "Projeto terá objetivo exclusivamente regulatório, sem qualquer impacto sobre a carga tributária atualThe post Governo prepara projeto de lei para consolidar regras sobre aplicações financeiras appeared first on InfoMoney.",
//         url: "https://www.infomoney.com.br/politica/governo-prepara-projeto-de-lei-para-consolidar-regras-sobre-aplicacoes-financeiras/",
//         source: "InfoMoney",
//         image: null,
//         category: "business",
//         language: "pt",
//         country: "br",
//         published_at: "2024-01-18T16:29:25+00:00",
//       },
//       {
//         author: "DDC",
//         title:
//           "Crisis migratoria: Cubanos con I-220A exigen frente a la Casa Blanca salir del 'limbo migratorio'",
//         description:
//           "Decenas de #MigrantesCubanos protestan frente a la #CasaBlanca en #Washington, #EEUU, para exigir una revisión de su estatus que les permita regularizarse.",
//         url: "https://diariodecuba.com/cuba/1705595356_52269.html",
//         source: "Diario de Cuba",
//         image: null,
//         category: "general",
//         language: "es",
//         country: "cu",
//         published_at: "2024-01-18T16:29:16+00:00",
//       },
//       {
//         author: "Jeff Stahl",
//         title: "Police make arrests in Desert Hot Springs park shooting death",
//         description:
//           "Desert Hot Springs Police have announced the arrests of two suspects in a December murder investigation.&#160; The two suspects in the crime, both 18, were arrested this week in Las Vegas&#160;after a man was found shot last month at Mission Springs  Park off Park Lane, according to a police&#160;statement. That victim, only described by policeThe post Police make arrests in Desert Hot Springs park shooting death appeared first on KESQ.",
//         url: "https://kesq.com/news/2024/01/18/police-make-arrests-in-desert-hot-springs-park-shooting-death/",
//         source: "kesq",
//         image: null,
//         category: "general",
//         language: "en",
//         country: "us",
//         published_at: "2024-01-18T16:29:14+00:00",
//       },
//       {
//         author: "Notizie news",
//         title:
//           "Kohlezeichnungen: Schwarz-Weiß-Landschaften. (Arte 43) (German Edition) eBook : Rossi, Arduino: Amazon.it: Kindle Store",
//         description:
//           "https://www.amazon.it/Kohlezeichnungen-Schwarz-Wei%C3%9F-Landschaften-Arte-43-German-ebook/dp/B08S1MSNWZ/ref=sr_1_385?qid=1705595283&amp;refinements=p_lbr_books_authors_browse-bin%3AArduino+Rossi&amp;s=digital-text&amp;sr=1-385 ",
//         url: "https://notizienews1.blogspot.com/2024/01/kohlezeichnungen-schwarz-wei_18.html",
//         source: "notizienews1",
//         image: null,
//         category: "general",
//         language: "it",
//         country: "it",
//         published_at: "2024-01-18T16:29:14+00:00",
//       },
//       {
//         author: null,
//         title: "LVMH: new CEO for LVMH Fashion Group",
//         description:
//           "(marketscreener.com) LVMH announces the appointment of Michael Burke as Chairman and CEO of LVMH Fashion Group. He succeeds Sidney Toledano, who is appointed Advisor to Bernard Arnault and leaves the Group's Executive Committee. These changes will be effective from February 1, 2024. Sidney Toledano will remain very committed to me, and will continue to pass on his...https://www.marketscreener.com/business-leaders/Bernard-Arnault-2/news/LVMH-new-CEO-for-LVMH-Fashion-Group--45768460/?utm_medium=RSS&utm_content=20240118",
//         url: "https://www.marketscreener.com/business-leaders/Bernard-Arnault-2/news/LVMH-new-CEO-for-LVMH-Fashion-Group--45768460/?utm_medium=RSS&utm_content=20240118",
//         source: "4-traders",
//         image: null,
//         category: "general",
//         language: "en",
//         country: "us",
//         published_at: "2024-01-18T16:29:07+00:00",
//       },
//     ],
//   };

//   const nesto = "something here should be translated to Serbian language";

//   const prevedeno = translateText(nesto, 'sr');

//   console.log(prevedeno);

//   return test;}
// };

export default fetchNews;

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category,
  }));
}
