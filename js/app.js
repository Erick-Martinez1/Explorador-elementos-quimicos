
const CATS={nm:"No metal",ng:"Gas noble",ma:"Metal alcalino",ae:"Alcalinotérreo",md:"Metaloide",ha:"Halógeno",mt:"Metal de transición",mp:"Metal postransición",la:"Lantánido",ac:"Actínido"};
const NG=[2,10,18,36,54,86,118],HA=[9,17,35,53,85,117],MD=[5,14,32,33,51,52],AL=[3,11,19,37,55,87],NM=[1,6,7,8,15,16,34],MP=[13,31,49,50,81,82,83,84,113,114,115,116],GAS=[1,2,7,8,9,10,17,18,36,54,86],LIQ=[35,80];
// Orden de llenado de subniveles (regla de Aufbau) y capacidad de cada tipo
const ORDER=["1s","2s","2p","3s","3p","4s","3d","4p","5s","4d","5p","6s","4f","5d","6p","7s","5f","6d","7p"];
const CAP={s:2,p:6,d:10,f:14};
// Excepciones a la regla: elementos donde un electrón salta de un subnivel a otro
const EX={24:[["4s","3d",1]],29:[["4s","3d",1]],41:[["5s","4d",1]],42:[["5s","4d",1]],44:[["5s","4d",1]],45:[["5s","4d",1]],46:[["5s","4d",2]],47:[["5s","4d",1]],57:[["4f","5d",1]],58:[["4f","5d",1]],64:[["4f","5d",1]],78:[["6s","5d",1]],79:[["6s","5d",1]],89:[["5f","6d",1]],90:[["5f","6d",2]],91:[["5f","6d",1]],92:[["5f","6d",1]],93:[["5f","6d",1]],96:[["5f","6d",1]],103:[["6d","7p",1]]};
const SUP="⁰¹²³⁴⁵⁶⁷⁸⁹",sup=n=>String(n).split("").map(d=>SUP[d]).join("");
// Calcula la configuración electrónica llenando subniveles hasta agotar electrones
function conf(z){let r=z,c={};for(const s of ORDER){if(r<=0)break;const k=Math.min(CAP[s[1]],r);c[s]=k;r-=k}
 (EX[z]||[]).forEach(([a,b,n])=>{c[a]-=n;c[b]=(c[b]||0)+n});return c}
// Devuelve [periodo, grupo] para colocar el elemento en la tabla (grupo 0 = lantánidos/actínidos)
function pos(z){if(z==1)return[1,1];if(z==2)return[1,18];if(z<=4)return[2,z-2];if(z<=10)return[2,z+8];if(z<=12)return[3,z-10];if(z<=18)return[3,z];
 if(z<=36)return[4,z-18];if(z<=54)return[5,z-36];if(z<=56)return[6,z-54];if(z<=71)return[6,0];if(z<=86)return[6,z-68];if(z<=88)return[7,z-86];if(z<=103)return[7,0];return[7,z-100]}
// Asigna la categoría química según el número atómico
function cat(z){if(NG.includes(z))return"ng";if(HA.includes(z))return"ha";if(MD.includes(z))return"md";if(AL.includes(z))return"ma";if(NM.includes(z))return"nm";if(MP.includes(z))return"mp";
 if(z>=57&&z<=71)return"la";if(z>=89&&z<=103)return"ac";if([4,12,20,38,56,88].includes(z))return"ae";return"mt"}
// Arma el arreglo final E con todos los datos de los 118 elementos (capas, notaciones, estado)
const E=RAW.split("\n").map((l,i)=>{const[sym,name,m,yr,fact]=l.split("|"),z=i+1,c=conf(z),sh=[];
 for(const k in c){const n=+k[0];sh[n-1]=(sh[n-1]||0)+c[k]}
 let core=0;for(const g of NG)if(g<z)core=g;
 const cc=core?conf(core):{};
 const full=ORDER.filter(s=>c[s]>0).map(s=>s+sup(c[s])).join(" ");
 const ab=ORDER.filter(s=>c[s]-(cc[s]||0)>0).map(s=>s+sup(c[s]-(cc[s]||0))).join(" ");
 const[p,g]=pos(z);
 return{z,sym,name,mass:+m,yr,fact,cat:cat(z),period:p,group:g,sh:Array.from(sh,v=>v||0),full,abbr:core?"["+E0(core)+"] "+ab:full,
  state:z>=104?"Desconocido":GAS.includes(z)?"Gas":LIQ.includes(z)?"Líquido":"Sólido"}});
function E0(z){return RAW.split("\n")[z-1].split("|")[0]}
const SHN="KLMNOPQ",$=s=>document.querySelector(s);
const fmt=m=>String(m).replace(".",".");
// Usos cotidianos específicos de algunos elementos; el resto usa los de DEF (por familia)
const REAL={1:[["🚀","Cohetes","Su combustible lleva hidrógeno líquido."],["☀️","El Sol","Fusiona hidrógeno para dar luz y calor."],["💧","El agua","Dos átomos de H por cada O."]],
2:[["🎈","Globos","Flota porque es más ligero que el aire."],["🩻","Resonancias","Enfría los imanes del hospital."],["🤿","Buceo","Se mezcla en tanques de buzos profundos."]],
3:[["📱","Celulares","Sus baterías son de iones de litio."],["🚗","Autos eléctricos","Guardan energía con litio."],["💻","Laptops","Duran muchas horas gracias a él."]],
6:[["✏️","Lápices","La punta es grafito, un tipo de carbono."],["💎","Diamantes","Son carbono muy bien ordenado."],["🌳","Seres vivos","Todo ser vivo lo contiene."]],
7:[["🌬️","El aire","Es casi 4 de cada 5 partes."],["🌱","Fertilizantes","Alimenta a las plantas."],["🍦","Helados","El nitrógeno líquido congela al instante."]],
8:[["🫁","Respiración humana","Tu cuerpo lo usa para obtener energía."],["🌊","Agua de los océanos","Forma parte de cada gota de agua."],["🚀","Cohetes espaciales","Quema el combustible para despegar."]],
11:[["🧂","Sal de mesa","Va unido al cloro: NaCl."],["🛣️","Lámparas de calle","Algunas dan luz naranja gracias a él."],["🧼","Jabones","Se usa para fabricar jabón."]],
13:[["🥫","Latas","Se reciclan una y otra vez."],["✈️","Aviones","Es ligero y resistente."],["🍳","Papel aluminio","Cubre tus comidas."]],
14:[["💻","Computadoras","Los chips son de silicio."],["🏖️","Arena","Está hecha de óxido de silicio."],["🪟","Vidrio","Las ventanas lo contienen."]],
17:[["🏊","Albercas","Mata los microbios del agua."],["🚰","Agua potable","Ayuda a que sea segura para beber."],["🧂","Sal","Forma parte de la sal de mesa."]],
20:[["🦴","Huesos","Los hace fuertes."],["🥛","Leche","Es una gran fuente de calcio."],["🏗️","Cemento","Forma parte de la cal y el cemento."]],
26:[["🌉","Puentes","El acero es hierro con carbono."],["🩸","Tu sangre","La hemoglobina lleva oxígeno con hierro."],["🚗","Autos","El acero forma su estructura."]],
29:[["🔌","Cables","Conduce muy bien la electricidad."],["🪙","Monedas","Muchas llevan cobre."],["🍳","Ollas","Reparte el calor de manera pareja."]],
47:[["💍","Joyería","Brilla mucho y es fácil de pulir."],["🪞","Espejos","Algunos usan una capa de plata."],["🍴","Cubiertos","Hay cubiertos de plata."]],
79:[["🥇","Medallas","Las doradas olímpicas llevan oro."],["💍","Anillos","No se oxida."],["📱","Celulares","Hay oro en sus circuitos."]],
80:[["🌡️","Termómetros antiguos","Hoy se reemplaza por seguridad."],["💡","Lámparas fluorescentes","Llevan una pizca de vapor."],["🧪","Laboratorios","Se usa con mucho cuidado."]],
92:[["⚡","Plantas nucleares","Una pastilla da mucha energía."],["🚢","Submarinos","Algunos funcionan con energía nuclear."],["🔬","Ciencia","Ayuda a datar rocas muy viejas."]]};
// Usos genéricos por categoría para los elementos que no tienen lista propia
const DEF={nm:[["🌍","En la naturaleza","Es parte del aire, agua o seres vivos."],["🧪","En laboratorios","Sirve para hacer experimentos."],["🏭","En la industria","Se usa para fabricar muchos materiales."]],
ng:[["💡","Luces","Hay gases nobles dentro de lámparas."],["🧊","Gases estables","Casi no reacciona con nada."],["🔬","Laboratorios","Sirven para crear ambientes seguros."]],
ma:[["🧪","Laboratorio","Reacciona con fuerza con el agua."],["🔋","Baterías","Sus compuestos guardan energía."],["🧂","Sales","Forma sales con otros elementos."]],
ae:[["🎆","Fuegos artificiales","Sus sales dan color."],["🏗️","Construcción","Sus compuestos se usan en materiales."],["🦴","Naturaleza","Se encuentra en rocas y minerales."]],
md:[["💻","Electrónica","Conducen la electricidad a medias."],["☀️","Paneles solares","Algunos ayudan a captar la luz."],["🔬","Laboratorios","Se estudian por sus usos raros."]],
ha:[["🧼","Limpieza","Sus compuestos desinfectan."],["🧂","Sales","Forman sales con los metales."],["💊","Salud","Hay compuestos en medicinas y dentífricos."]],
mt:[["🔧","Herramientas","Los metales son duros y resistentes."],["⚡","Electricidad","Muchos conducen la corriente."],["🎨","Colores","Sus compuestos dan color a pinturas y vidrios."]],
mp:[["🥫","Objetos de metal","Se usa en aleaciones y recubrimientos."],["🔌","Electrónica","Aparece en soldaduras y circuitos."],["🏭","Industria","Se mezcla con otros metales."]],
la:[["📱","Pantallas","Dan color y brillo a las pantallas."],["🧲","Imanes","Los imanes potentes los incluyen."],["🔋","Tecnología verde","Se usan en turbinas y autos eléctricos."]],
ac:[["⚛️","Energía nuclear","Muchos son radiactivos."],["🔬","Investigación","Se estudian en laboratorios especiales."],["🚀","Ciencia espacial","Algunos alimentan sondas."]]};
// Estado de la app: elemento actual (Oxígeno al inicio), visitados, progreso y pausa del modelo
let cur=E[7],visited=new Set(),prof={best:0,built:false},rot=0;
try{const s=JSON.parse(localStorage.getItem("miniatomos")||"{}");visited=new Set(s.v||[]);prof.best=s.best||0;prof.built=!!s.built}catch(e){}
// Guarda el progreso del niño en el navegador
function save(){try{localStorage.setItem("miniatomos",JSON.stringify({v:[...visited],best:prof.best,built:prof.built}))}catch(e){}}
// Quita mayúsculas y acentos para que la búsqueda sea más flexible
function norm(s){return s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"")}
// Cambia el elemento activo, lo marca como visitado y vuelve a dibujar todo
function setEl(z,scroll){cur=E[z-1];visited.add(z);save();render();if(scroll)$("#parada1").scrollIntoView()}
// Dibuja la ficha completa: identidad, modelo de Bohr, partículas, configuración y usos
function render(){const e=cur,famc="fam-"+e.cat;
 $("#hola").textContent="¡Hola, soy "+e.name+"!";$("#bub").textContent="¡Hola! Soy "+e.name;
 const idc=$("#idc");idc.className="card id "+famc;
 idc.innerHTML=`<div class="top"><span class="n">Nº ${String(e.z).padStart(3,"0")}</span><span>${CATS[e.cat]}</span></div><div class="sym">${e.sym}</div><div><div class="bot"><div class="nm">${e.name}</div><div style="text-align:right"><div class="mono" style="font-size:9px;opacity:.8">MASA ATÓMICA</div><b class="mono">${e.mass} u</b></div></div><div class="pg"><span>PERIODO ${e.period}</span><span>GRUPO ${e.group||"—"}</span><span>${e.state.toUpperCase()}</span></div></div>`;
 const sh=e.sh,R=i=>30+i*(88/Math.max(sh.length,5));
 let svg=`<svg viewBox="0 0 240 240" id="bsvg" class="${rot?"paused":""}"><g fill="none" stroke="#1E2749" stroke-opacity=".25" stroke-dasharray="3 3">${sh.map((_,i)=>`<circle cx="120" cy="120" r="${R(i)}"/>`).join("")}</g>`;
 sh.forEach((n,i)=>{svg+=`<g class="orb" style="animation-duration:${6+i*4}s;animation-direction:${i%2?"reverse":"normal"}">`;for(let j=0;j<n;j++){const a=2*Math.PI*j/n;svg+=`<circle cx="${120+R(i)*Math.cos(a)}" cy="${120+R(i)*Math.sin(a)}" r="3.4" fill="#FF6B6B" stroke="#1E2749" stroke-width="1.2"/>`}svg+="</g>"});
 svg+=`<circle cx="120" cy="120" r="15" fill="#C6F649" stroke="#1E2749" stroke-width="2"/><text x="120" y="125" text-anchor="middle" font-family="Fredoka" font-weight="700" font-size="13" fill="#1E2749">${e.sym}</text></svg>`;
 $("#bohr").className="card bohr"+(rot?" paused":"");
 $("#bohr").innerHTML=`<div class="row"><div><div class="lab">Mira cómo me muevo</div><h3>Mi modelo atómico</h3></div><button class="tog ${rot?"off":""}" id="tg">${rot?"PAUSADO":"¡GIRANDO!"}</button></div>${svg}<div class="pills">${sh.map((n,i)=>`<span>${SHN[i]}: ${n}e⁻</span>`).join("")}</div>`;
 $("#tg").onclick=()=>{rot=!rot;render()};
 const n=Math.round(e.mass)-e.z;
 $("#parts").innerHTML=`<div class="lab">Conoce a mi equipo</div><h3>Mis partículas diminutas</h3>
 <div class="part"><i style="background:var(--yel)">p⁺</i><div>Protones<small>Carga positiva · núcleo</small></div><b>${e.z}</b></div>
 <div class="part"><i style="background:#74c0fc">n⁰</i><div>Neutrones<small>Sin carga · núcleo</small></div><b>${n}</b></div>
 <div class="part"><i style="background:var(--coral);color:#fff">e⁻</i><div>Electrones<small>Carga negativa · órbitas</small></div><b>${e.z}</b></div>
 <div class="formula">NEUTRONES = ${Math.round(e.mass)} − ${e.z} = <b>${n}</b></div>`;
 $("#cfg").innerHTML=`<div class="head"><div><div class="lab">Mi mapa de electrones</div><h3 style="margin-bottom:0">¿Dónde viven mis electrones?</h3></div><span class="pill" style="background:#e6f7ff;box-shadow:none">${sh.length} capa${sh.length>1?"s":""}</span></div>
 <div class="cbox" style="background:#EFFFF5;border-left-color:#2ecc71"><span class="lab">Notación completa</span><b>${e.full}</b></div>
 <div class="cbox" style="background:#EAF7FF;border-left-color:#4dabf7"><span class="lab">Gas noble · abreviada</span><b>${e.abbr}</b></div>
 <div>${sh.map((v,i)=>`<div class="bar"><i>${i+1}</i><div><u style="width:${v/Math.max(...sh)*100}%"></u></div><span>${v}e⁻</span></div>`).join("")}</div>`;
 const items=REAL[e.z]||DEF[e.cat];
 $("#real").innerHTML=`<div class="lab">Mundo real</div><h3 style="margin-bottom:0">¿Dónde me encuentras en la vida real?</h3><div class="items">${items.map(i=>`<div class="item"><div>${i[0]}</div><b>${i[1]}</b><span>${i[2]}</span></div>`).join("")}</div><p class="curio">💡 <b>Dato curioso:</b> ${e.fact} <span class="mono" style="font-size:11px">· Descubierto: ${e.yr}</span></p>`;
 document.querySelectorAll(".el").forEach(b=>{b.classList.toggle("act",+b.dataset.z===e.z);b.classList.toggle("vis",visited.has(+b.dataset.z))})}
// Crea los botones de la tabla periódica y la leyenda que resalta categorías
function buildTable(){const g=$("#ptg");
 g.innerHTML=E.map(e=>{let r,c;if(e.group){r=e.period;c=e.group}else{r=e.cat=="la"?8:9;c=e.z-(e.cat=="la"?57:89)+3}
  return`<button class="el c-${e.cat}" data-z="${e.z}" data-c="${e.cat}" style="grid-row:${r};grid-column:${c}" title="${e.name}"><small>${e.z}</small>${e.sym}</button>`}).join("");
 g.onclick=ev=>{const b=ev.target.closest(".el");if(b)setEl(+b.dataset.z,true)};
 $("#leg").innerHTML=Object.keys(CATS).map(k=>`<button data-k="${k}"><i class="c-${k}"></i>${CATS[k]}</button>`).join("");
 const hl=k=>{g.classList.toggle("dim",!!k);g.querySelectorAll(".el").forEach(b=>b.classList.toggle("hl",b.dataset.c===k))};let lock=null;
 $("#leg").querySelectorAll("button").forEach(b=>{b.onmouseenter=()=>hl(b.dataset.k);b.onmouseleave=()=>hl(lock);
  b.onclick=()=>{lock=lock===b.dataset.k?null:b.dataset.k;$("#leg").querySelectorAll("button").forEach(x=>x.classList.toggle("on",x.dataset.k===lock));hl(lock)}})}
// Busca por nombre, símbolo o número atómico (máximo 6 resultados)
function find(v){v=norm(v.trim());if(!v)return[];const n=parseInt(v,10);
 return E.filter(e=>norm(e.name).startsWith(v)||norm(e.sym)===v||(!isNaN(n)&&String(n)===String(e.z))||(v.length>2&&norm(e.name).includes(v))).slice(0,6)}
// Buscador del hero: sugerencias mientras escribes y búsqueda con Enter
const q=$("#q"),sug=$("#sug");
q.oninput=()=>{const r=find(q.value);sug.hidden=!r.length;sug.innerHTML=r.map(e=>`<button data-z="${e.z}"><em>${e.sym}</em>${e.name}<span class="mono" style="margin-left:auto;font-size:11px">Nº ${e.z}</span></button>`).join("")};
sug.onclick=ev=>{const b=ev.target.closest("button");if(b){sug.hidden=true;q.value="";setEl(+b.dataset.z,true)}};
function explore(){const r=find(q.value);if(r.length){sug.hidden=true;q.value="";setEl(r[0].z,true)}else{q.placeholder="No encontré ese elemento, ¡prueba otro!";q.value=""}}
$("#go").onclick=explore;q.onkeydown=e=>{if(e.key=="Enter")explore()};
document.addEventListener("click",e=>{if(!e.target.closest(".sbox"))sug.hidden=true});
// Botones de acceso rápido y elemento aleatorio
document.querySelectorAll(".chip[data-z]").forEach(b=>b.onclick=()=>setEl(+b.dataset.z,true));
const rand=()=>setEl(1+Math.floor(Math.random()*118),true);
$("#rnd").onclick=rand;$("#otro").onclick=()=>{$("#top").scrollIntoView();q.focus()};
// Interacción del átomo del hero: el globo cambia al pasar el cursor o hacer clic
$("#nuc").onclick=()=>{const e=E[Math.floor(Math.random()*118)];$("#bub").textContent="¡Hola! Soy "+e.name+" ("+e.sym+")"};
$("#nuc").onmouseenter=()=>{$("#bub").textContent="¡Haz clic en mí!"};
$("#nuc").onmouseleave=()=>{$("#bub").textContent="¡Hola! Soy "+cur.name};
document.querySelectorAll("[data-go]").forEach(a=>a.onclick=()=>{const t=a.dataset.go;$(t=="top"?"#top":"#"+t).scrollIntoView();if(t=="top")q.focus()});
// Control de las ventanas emergentes
const modal=$("#modal"),mc=$("#mc");
function open(html){mc.innerHTML=html;modal.classList.add("on")}
$("#mx").onclick=()=>modal.classList.remove("on");modal.onclick=e=>{if(e.target==modal)modal.classList.remove("on")};
document.querySelectorAll("[data-open]").forEach(a=>a.onclick=()=>({learn,lab:()=>lab("build"),club})[a.dataset.open]());
// Contenido de la guía "Aprende"
function learn(){open(`<span class="tag">APRENDE</span><h2>Guía rápida de átomos</h2>
<p><b>⚛️ Protones (p⁺):</b> viven en el núcleo y su número define quién eres: el número atómico.</p>
<p><b>🔵 Neutrones (n⁰):</b> también están en el núcleo y no tienen carga. Se calculan: masa redondeada − protones.</p>
<p><b>🔴 Electrones (e⁻):</b> giran en capas alrededor del núcleo (K, L, M…). Un átomo neutro tiene tantos como protones.</p>
<p><b>🧭 Tabla periódica:</b> los periodos son las filas (cuántas capas) y los grupos son las columnas (familias con comportamientos parecidos).</p>
<p><b>⚡ Iones:</b> si ganas electrones eres un ion negativo; si los pierdes, positivo.</p>`)}
// Medallas del pasaporte: cada una se desbloquea según lo que el niño ha explorado
function badges(){const v=[...visited].map(z=>E[z-1]),c=k=>v.filter(e=>e.cat==k).length,met=v.filter(e=>["ma","ae","mt","mp","la","ac"].includes(e.cat)).length;
 return[["🎈","Cazador de Gases Nobles","Visita 3 gases nobles",c("ng")>=3],["🔩","Maestro de los Metales","Visita 10 metales",met>=10],["☢️","Físico Nuclear Junior","Visita 3 actínidos",c("ac")>=3],["🧭","Explorador","Descubre 10 elementos",v.length>=10],["⚡","Rayo Relámpago","Saca 4/5 en el reto",prof.best>=4],["🧱","Constructor","Crea un átomo",prof.built]]}
// Pasaporte científico: progreso, medallas y elementos visitados
function club(){const n=visited.size,b=badges();open(`<span class="tag">CLUB DE PEQUEÑOS CIENTÍFICOS</span><h2>Mi pasaporte científico</h2><p class="mono"><b>${n}/118</b> descubiertos</p><div class="prog"><u style="width:${n/118*100}%"></u></div>
<div class="med">${b.map(m=>`<div class="${m[3]?"":"lock"}"><span>${m[3]?m[0]:"🔒"}</span><b>${m[1]}</b><small>${m[2]}</small></div>`).join("")}</div>
<div class="lab">Elementos visitados</div><div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:8px">${n?[...visited].sort((a,c)=>a-c).map(z=>`<span class="chip c-${E[z-1].cat}">${E[z-1].sym}</span>`).join(""):"Aún no visitas ninguno. ¡Explora!"}</div>`)}
// Laboratorio: pestañas entre el constructor y el reto relámpago
function lab(t){open(`<span class="tag">LABORATORIO</span><h2>${t=="build"?"¡Crea tu propio átomo!":"Reto Relámpago ⚡"}</h2><div class="tabs"><button data-t="build" class="${t=="build"?"on":""}">Constructor</button><button data-t="quiz" class="${t=="quiz"?"on":""}">Reto Relámpago</button></div><div id="lb"></div>`);
 mc.querySelectorAll(".tabs button").forEach(b=>b.onclick=()=>lab(b.dataset.t));t=="build"?builder():quiz()}
// Constructor de átomos: P guarda protones, neutrones y electrones
let P={p:6,n:6,e:6};
function builder(){const draw=()=>{const el=E[P.p-1],ch=P.p-P.e,heavy=P.p>83||[43,61].includes(P.p),ratio=P.p?P.n/P.p:0,stable=P.p>0&&!heavy&&(P.p<=2?P.n<=P.p+1&&P.n>=P.p-1:P.p<=20?Math.abs(P.n-P.p)<=Math.ceil(P.p*.2):ratio>=1&&ratio<=1.55);
  const sh=P.p>0?(()=>{const c=conf(Math.min(P.e,118)),a=[];for(const k in c)a[+k[0]-1]=(a[+k[0]-1]||0)+c[k];return Array.from(a,v=>v||0)})():[];
  const nuc=P.p+P.n,svg=`<svg viewBox="0 0 240 240" style="width:100%;max-height:230px"><g fill="none" stroke="#1E2749" stroke-opacity=".25" stroke-dasharray="3 3">${sh.map((_,i)=>`<circle cx="120" cy="120" r="${32+i*11}"/>`).join("")}</g>${sh.map((n,i)=>`<g class="orb" style="animation-duration:${6+i*4}s">${Array.from({length:n},(_,j)=>{const a=2*Math.PI*j/n;return`<circle cx="${120+(32+i*11)*Math.cos(a)}" cy="${120+(32+i*11)*Math.sin(a)}" r="3.2" fill="#FF6B6B" stroke="#1E2749"/>`}).join("")}</g>`).join("")}<circle cx="120" cy="120" r="${14+Math.min(nuc,60)/5}" fill="#FFE66D" stroke="#1E2749" stroke-width="2"/><text x="120" y="125" text-anchor="middle" font-family="Fredoka" font-weight="700" font-size="14">${P.p?el.sym:"?"}</text></svg>`;
  const ctl=(k,l,bg,s)=>`<div class="ctl"><i style="background:${bg}">${s}</i><span>${l}</span><button data-k="${k}" data-d="-1">−</button><b>${P[k]}</b><button data-k="${k}" data-d="1">+</button></div>`;
  $("#lb").innerHTML=`<div class="bld"><div>${ctl("p","Protones","var(--yel)","p⁺")}${ctl("n","Neutrones","#74c0fc","n⁰")}${ctl("e","Electrones","var(--coral)","e⁻")}${svg}</div>
  <div class="res"><div class="lab">Construiste</div><div class="big">${P.p?el.sym:"—"}</div><h3>${P.p?el.name:"Aún no hay elemento"}</h3>
  <div class="tags">${P.p?`<span>${ch==0?"Átomo neutro":ch>0?"Ion positivo (+"+ch+")":"Ion negativo ("+ch+")"}</span><span style="background:${stable?"var(--lime)":"var(--coral)"}">${stable?"Estable":"Radiactivo / inestable"}</span>`:""}</div>
  <p style="font-size:13px;opacity:.7">${P.p?"Masa aprox.: "+nuc+" u · el número de protones decide qué elemento eres.":"Agrega protones para empezar."}</p></div></div>`;
  if(P.p>0)prof.built=true,save();
  $("#lb").querySelectorAll("button").forEach(b=>b.onclick=()=>{const k=b.dataset.k;P[k]=Math.max(0,Math.min(k=="n"?180:118,P[k]+ +b.dataset.d));draw()})};draw()}
// Reto relámpago: preguntas, número actual y puntaje
let QS,qi,sc;
function shuffle(a){return a.map(v=>[Math.random(),v]).sort((x,y)=>x[0]-y[0]).map(v=>v[1])}
// Genera 5 preguntas con datos reales (protones, símbolo, dato curioso y modelo de Bohr)
function quiz(){const pool=E.filter(e=>e.z<=86);QS=shuffle(pool).slice(0,5).map((e,i)=>{const kind=i%4,op=shuffle([e,...shuffle(pool.filter(x=>x!=e)).slice(0,3)]);
  const q=kind==0?`¿Qué elemento tiene ${e.z} protones?`:kind==1?`¿Qué elemento tiene el símbolo ${e.sym}?`:kind==2?`Pista: "${e.fact}" ¿Qué elemento soy?`:`Mira mi modelo de Bohr: ${e.sh.map((n,i)=>SHN[i]+" "+n+"e⁻").join(", ")}. ¿Quién soy?`;
  return{e,q,op}});qi=0;sc=0;qstep()}
// Muestra una pregunta, califica la respuesta y avanza; al final guarda el mejor puntaje
function qstep(){if(qi>=5){prof.best=Math.max(prof.best,sc);save();if(sc>=4)confetti();$("#lb").innerHTML=`<div class="res"><div class="big">${sc}/5</div><h3>${sc>=4?"¡Eres un gran científico! 🎉":"¡Sigue explorando! 🔬"}</h3><p>Puntos: ${sc*100}</p><button class="btn" id="again">Jugar otra vez</button></div>`;$("#again").onclick=quiz;return}
 const c=QS[qi];$("#lb").innerHTML=`<div class="mono" style="font-size:11px">PREGUNTA ${qi+1}/5 · ${sc*100} PUNTOS</div><div class="q">${c.q}</div><div class="opts">${c.op.map(o=>`<button data-z="${o.z}">${o.name}</button>`).join("")}</div>`;
 $("#lb").querySelectorAll(".opts button").forEach(b=>b.onclick=()=>{const ok=+b.dataset.z==c.e.z;if(ok)sc++;
  $("#lb").querySelectorAll(".opts button").forEach(x=>{x.disabled=true;if(+x.dataset.z==c.e.z)x.classList.add("ok")});if(!ok)b.classList.add("bad");setTimeout(()=>{qi++;qstep()},1100)})}
// Lanza confeti cuando el puntaje es de 4 o más
function confetti(){const col=["#FF6B6B","#C6F649","#FFE66D","#6C5CE7","#74c0fc"];for(let i=0;i<60;i++){const s=document.createElement("span");s.className="cf";s.style.cssText=`left:${Math.random()*100}vw;background:${col[i%5]};animation-delay:${Math.random()*.8}s`;document.body.appendChild(s);setTimeout(()=>s.remove(),3500)}}
// Arranque de la página
buildTable();render();
 