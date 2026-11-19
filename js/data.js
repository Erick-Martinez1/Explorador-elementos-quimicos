// ===== DATOS: un elemento por línea con el formato símbolo|nombre|masa|año|dato curioso =====
// El número atómico es la posición de la línea (línea 1 = H, línea 118 = Og).
const RAW=`H|Hidrógeno|1.008|1766|El más ligero del universo; las estrellas lo usan como combustible.
He|Helio|4.0026|1868|Hace flotar los globos y te pone la voz graciosa.
Li|Litio|6.94|1817|Da energía a las baterías de celulares y autos eléctricos.
Be|Berilio|9.0122|1798|Metal ligero y rígido usado en telescopios espaciales.
B|Boro|10.81|1808|Está en el vidrio resistente de los refractarios de cocina.
C|Carbono|12.011|Antigüedad|Forma el lápiz y el diamante; es la base de la vida.
N|Nitrógeno|14.007|1772|Es casi el 80 % del aire que respiras.
O|Oxígeno|15.999|1774|Lo respiras en cada segundo; sin él no hay fuego ni vida.
F|Flúor|18.998|1886|Protege tus dientes en la pasta dental.
Ne|Neón|20.180|1898|Hace brillar de colores los letreros luminosos.
Na|Sodio|22.990|1807|Junto con el cloro forma la sal de mesa.
Mg|Magnesio|24.305|1755|Arde con una luz blanca muy brillante, como en las bengalas.
Al|Aluminio|26.982|1825|Ligero y brillante; con él se hacen latas y aviones.
Si|Silicio|28.085|1824|Es el cerebro de las computadoras y celulares.
P|Fósforo|30.974|1669|Está en tus huesos y en las cerillas.
S|Azufre|32.06|Antigüedad|Es amarillo y huele a huevo podrido en los volcanes.
Cl|Cloro|35.45|1774|Mantiene limpia el agua de las albercas.
Ar|Argón|39.948|1894|Gas tranquilo que llena los focos para protegerlos.
K|Potasio|39.098|1807|Los plátanos lo tienen y ayuda a tus músculos.
Ca|Calcio|40.078|1808|Hace fuertes tus huesos y dientes.
Sc|Escandio|44.956|1879|Fortalece las bicicletas de aluminio de competencia.
Ti|Titanio|47.867|1791|Fuerte como el acero pero mucho más ligero; hay prótesis y raquetas.
V|Vanadio|50.942|1801|Vuelve muy resistentes las herramientas de acero.
Cr|Cromo|51.996|1797|Da el brillo de espejo a las defensas y llaves.
Mn|Manganeso|54.938|1774|Ayuda a fabricar acero fuerte y está en las pilas.
Fe|Hierro|55.845|Antigüedad|Forma puentes y edificios; también viaja en tu sangre.
Co|Cobalto|58.933|1735|Da un azul intenso al vidrio y la cerámica.
Ni|Níquel|58.693|1751|Se usa para fabricar monedas resistentes.
Cu|Cobre|63.546|Antigüedad|Conduce muy bien la electricidad; está en los cables.
Zn|Zinc|65.38|1746|Protege el hierro de la oxidación y refuerza tus defensas.
Ga|Galio|69.723|1875|Se derrite en tu mano, ¡pero no es peligroso como el mercurio!
Ge|Germanio|72.630|1886|Ayudó a construir los primeros transistores.
As|Arsénico|74.922|Antigüedad|Es un metaloide venenoso que se usó en la historia como veneno.
Se|Selenio|78.971|1817|Se usa en celdas solares y fotocopiadoras.
Br|Bromo|79.904|1826|Es uno de los dos elementos líquidos a temperatura ambiente.
Kr|Kriptón|83.798|1898|Su nombre significa oculto; ilumina lámparas especiales.
Rb|Rubidio|85.468|1861|Se usa en relojes atómicos súper precisos.
Sr|Estroncio|87.62|1790|Pinta de rojo los fuegos artificiales.
Y|Itrio|88.906|1794|Da el color rojo a las pantallas antiguas.
Zr|Circonio|91.224|1789|Imita al diamante en joyería y resiste el calor.
Nb|Niobio|92.906|1801|Se usa en imanes de trenes que flotan.
Mo|Molibdeno|95.95|1778|Hace al acero más duro; es necesario para el cuerpo.
Tc|Tecnecio|98|1937|Primer elemento hecho por humanos; ayuda en estudios médicos.
Ru|Rutenio|101.07|1844|Cubre contactos eléctricos para que duren más.
Rh|Rodio|102.91|1803|Uno de los metales más caros; limpia los gases de los autos.
Pd|Paladio|106.42|1803|Ayuda a limpiar el escape de los autos.
Ag|Plata|107.87|Antigüedad|Es el mejor conductor eléctrico y brilla en joyas.
Cd|Cadmio|112.41|1817|Se usó en pilas recargables y en pinturas amarillas.
In|Indio|114.82|1863|Está en las pantallas táctiles de tu tablet.
Sn|Estaño|118.71|Antigüedad|Recubre las latas de conserva.
Sb|Antimonio|121.76|Antigüedad|Se mezcla en metales para hacerlos más duros.
Te|Telurio|127.60|1782|Se usa en paneles solares delgados.
I|Yodo|126.90|1811|Ayuda a tu tiroides; está en la sal yodada.
Xe|Xenón|131.29|1898|Da luz muy potente a los faros de algunos autos.
Cs|Cesio|132.91|1860|Mide el tiempo con precisión en los relojes atómicos.
Ba|Bario|137.33|1808|Pinta de verde los fuegos artificiales.
La|Lantano|138.91|1839|Está en lentes de cámaras y encendedores.
Ce|Cerio|140.12|1803|Hace chispas en los encendedores de piedra.
Pr|Praseodimio|140.91|1885|Da un color verde amarillento a los vidrios.
Nd|Neodimio|144.24|1885|Forma los imanes más potentes, como los de audífonos.
Pm|Prometio|145|1945|Es radiactivo y brilla en la oscuridad.
Sm|Samario|150.36|1879|Se usa en imanes que resisten el calor.
Eu|Europio|151.96|1901|Da el color rojo a las pantallas y a los billetes.
Gd|Gadolinio|157.25|1880|Ayuda a ver mejor en resonancias magnéticas.
Tb|Terbio|158.93|1843|Da el color verde a las pantallas y focos ahorradores.
Dy|Disprosio|162.50|1886|Ayuda a los imanes a funcionar en autos eléctricos.
Ho|Holmio|164.93|1878|Tiene los imanes más fuertes conocidos en laboratorio.
Er|Erbio|167.26|1843|Ayuda a enviar internet por cables de fibra óptica.
Tm|Tulio|168.93|1879|Se usa en máquinas portátiles de rayos X.
Yb|Iterbio|173.05|1878|Se usa en relojes de altísima precisión.
Lu|Lutecio|174.97|1907|Se usa en estudios médicos de imagen.
Hf|Hafnio|178.49|1923|Se usa en los chips de computadora.
Ta|Tántalo|180.95|1802|Está en los condensadores de los celulares.
W|Wolframio|183.84|1783|Tiene el punto de fusión más alto; era el filamento de los focos.
Re|Renio|186.21|1925|Se usa en motores de jets.
Os|Osmio|190.23|1803|Es el elemento natural más denso: ¡muy pesado!
Ir|Iridio|192.22|1803|Es raro en la Tierra pero abundante en meteoritos.
Pt|Platino|195.08|1735|Es muy caro; se usa en joyería y convertidores de autos.
Au|Oro|196.97|Antigüedad|Brilla sin oxidarse; se usa en joyas y medallas olímpicas.
Hg|Mercurio|200.59|Antigüedad|Es un metal líquido que se usaba en termómetros.
Tl|Talio|204.38|1861|Es muy tóxico; se usó en veneno para ratas.
Pb|Plomo|207.2|Antigüedad|Es muy pesado; protege de los rayos X.
Bi|Bismuto|208.98|1753|Forma cristales de arcoíris; está en medicinas para el estómago.
Po|Polonio|209|1898|Descubierto por Marie Curie y nombrado por su país natal, Polonia.
At|Astato|210|1940|Es de los elementos naturales más escasos de la Tierra.
Rn|Radón|222|1900|Es un gas radiactivo que sale de rocas y suelos.
Fr|Francio|223|1939|Es tan inestable que dura muy poco tiempo.
Ra|Radio|226|1898|Lo descubrieron Marie y Pierre Curie; brillaba en la oscuridad.
Ac|Actinio|227|1899|Brilla con luz azulada en la oscuridad.
Th|Torio|232.04|1829|Puede servir de combustible en reactores nucleares.
Pa|Protactinio|231.04|1913|Es muy raro y radiactivo.
U|Uranio|238.03|1789|Da energía a las plantas nucleares.
Np|Neptunio|237|1940|Se nombró por el planeta Neptuno.
Pu|Plutonio|244|1940|Da energía a sondas espaciales que viajan muy lejos.
Am|Americio|243|1944|Está dentro de los detectores de humo de las casas.
Cm|Curio|247|1944|Lleva el nombre de los científicos Marie y Pierre Curie.
Bk|Berkelio|247|1949|Se creó en un laboratorio de la ciudad de Berkeley.
Cf|Californio|251|1950|Se usa para detectar metales y encontrar petróleo.
Es|Einstenio|252|1952|Se halló tras una explosión de prueba; honra a Albert Einstein.
Fm|Fermio|257|1952|Honra al físico Enrico Fermi; solo se hace en laboratorios.
Md|Mendelevio|258|1955|Honra a Mendeléyev, el creador de la tabla periódica.
No|Nobelio|259|1958|Honra a Alfred Nobel, creador de los premios Nobel.
Lr|Laurencio|266|1961|Honra a Ernest Lawrence, inventor del ciclotrón.
Rf|Rutherfordio|267|1964|Honra a Ernest Rutherford, quien descubrió el núcleo atómico.
Db|Dubnio|268|1967|Se nombró por Dubná, la ciudad rusa donde se creó.
Sg|Seaborgio|269|1974|Lleva el nombre de Glenn Seaborg, que aún vivía cuando se bautizó.
Bh|Bohrio|270|1981|Honra a Niels Bohr, creador del modelo atómico que ves aquí.
Hs|Hasio|277|1984|Su nombre viene de Hesse, una región de Alemania.
Mt|Meitnerio|278|1982|Honra a Lise Meitner, pionera de la fisión nuclear.
Ds|Darmstadtio|281|1994|Se nombró por Darmstadt, la ciudad alemana donde se creó.
Rg|Roentgenio|282|1994|Honra a Wilhelm Röntgen, descubridor de los rayos X.
Cn|Copernicio|285|1996|Honra a Nicolás Copérnico, quien dijo que la Tierra gira alrededor del Sol.
Nh|Nihonio|286|2004|Se nombró por Nihon, que significa Japón en japonés.
Fl|Flerovio|289|1998|Honra al laboratorio ruso Flerov, donde se creó.
Mc|Moscovio|290|2003|Se nombró por la región de Moscú.
Lv|Livermorio|293|2000|Se nombró por el laboratorio Lawrence Livermore.
Ts|Teneso|294|2010|Se nombró por Tennessee, un estado de EE. UU.
Og|Oganesón|294|2002|Lleva el nombre de Yuri Oganessian, que sigue vivo; es de los más pesados.`;
// Nombres de categorías y listas de números atómicos que sirven para clasificar
 