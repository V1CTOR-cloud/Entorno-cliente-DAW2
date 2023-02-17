export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

export interface Card {
  title: string;
  subtitle: string;
  image: string;
  littleImage: string;
  text: string;
  caption: string;
}

// Contents
export const panel: Tile[] = [
  { text: '1', cols: 1, rows: 1, color: '#ffb78c' },
  { text: '2', cols: 3, rows: 1, color: '#ffb78c' },
  { text: '3', cols: 1, rows: 1, color: '#ffb78c' },
  { text: '4', cols: 2, rows: 1, color: '#ffb78c' },
  { text: '5', cols: 3, rows: 1, color: '#ffb78c' },
];

export const cards: Card[] = [
  {
    title: '1',
    subtitle: 'La lucha contra el cambio climático',
    image:
      'https://bezero.es/wp-content/uploads/2021/04/transi_transiccion.jpg',
    littleImage:
      "url('https://media.wired.co.uk/photos/606da3f7ce1204c637f2f554/4:3/w_2664,h_1998,c_limit/wired-uk-climate-change-facts-5.jpg'",
    text: '¿Cuál es el estado actual de la transición energética?',
    caption: 'Ampliar información',
  },
  {
    title: '2',
    subtitle: 'La lucha contra el cambio climático',
    image:
      'https://endef.com/wp-content/uploads/2019/10/Foto-entrada-Transici%C3%B3n-Energ%C3%A9tica-2000x1125.jpg',
    littleImage:
      "url('https://media.wired.co.uk/photos/606da3f7ce1204c637f2f554/4:3/w_2664,h_1998,c_limit/wired-uk-climate-change-facts-5.jpg'",
    text: '¿Por qué es tan difícil la transición energética?',
    caption: 'Ampliar información',
  },
  {
    title: '3',
    subtitle: 'La lucha contra el cambio climático',
    image:
      'https://www.energias-renovables.com/ficheroenergias/fotos/panorama/ampliada/m/mano-mujer.png',
    littleImage:
      "url('https://media.wired.co.uk/photos/606da3f7ce1204c637f2f554/4:3/w_2664,h_1998,c_limit/wired-uk-climate-change-facts-5.jpg'",
    text: '¿Cómo lo está haciendo el mundo hasta ahora?',
    caption: 'Ampliar información',
  },
  {
    title: '4',
    subtitle: 'La lucha contra el cambio climático',
    image:
      'https://i1.wp.com/www.revistamercado.do/wp-content/uploads/2022/03/transicio%CC%81n-energe%CC%81tica-energia-renovable.jpg?fit=1280%2C638&ssl=1',
    littleImage:
      "url('https://media.wired.co.uk/photos/606da3f7ce1204c637f2f554/4:3/w_2664,h_1998,c_limit/wired-uk-climate-change-facts-5.jpg'",
    text: '¿Qué necesitamos hacer ahora?',
    caption: 'Ampliar información',
  },
  {
    title: '5',
    subtitle: 'La lucha contra el cambio climático',
    image:
      'https://s31888.pcdn.co/wp-content/uploads/2022/05/Net-zero-guide-cropped.jpg.optimal.jpg',
    littleImage:
      "url('https://media.wired.co.uk/photos/606da3f7ce1204c637f2f554/4:3/w_2664,h_1998,c_limit/wired-uk-climate-change-facts-5.jpg'",
    text: '¿Cómo llegamos al cero neto?',
    caption: 'Ampliar información',
  },
];

export const paragraphs: string[][] = [
  [
    'Cuando empecé a informarme sobre el cambio climático hace 15 años, llegué a tres conclusiones. En primer lugar, evitar una catástrofe climática sería el reto más difícil al que la gente se hubiera enfrentado jamás. En segundo lugar, la única manera de conseguirlo era invertir enérgicamente en la innovación y el despliegue de energías limpias. Y tercero, teníamos que ponernos en marcha.',
    'Desde entonces, una afluencia de inversiones privadas y públicas ha acelerado la innovación más rápido de lo que me atrevía a esperar. Este progreso me hace ser optimista sobre el futuro.',
    'Pero también soy realista sobre el presente. El mundo todavía tiene que reducir las emisiones anuales de gases de efecto invernadero de 51.000 millones de toneladas a cero, pero las emisiones globales siguen aumentando cada año. Si sigues los informes anuales del IPCC, habrás visto cómo los escenarios para limitar el aumento de la temperatura global a 1,5 o incluso 2 grados centígrados son cada vez más remotos. Y algunas de las tecnologías limpias que necesitamos aún están muy lejos de convertirse en soluciones prácticas y rentables que podamos desplegar a gran escala.',
    'En la última década, por fin nos hemos puesto en marcha. En los próximos tres, tenemos que ir mucho más lejos, mucho más rápido. Sigo creyendo que podemos evitar una catástrofe climática si dedicamos la próxima generación a movilizar la mayor respuesta a una crisis de la historia de la humanidad.',
  ],
  [
    'Para entender lo que hará falta para llegar a cero, tenemos que empezar por preguntarnos de dónde proceden los 51.000 millones de toneladas de emisiones. Por desgracia, la respuesta es de todo y de todas partes.',
    'Todo: prácticamente todas las actividades humanas producen emisiones de gases de efecto invernadero. La gente piensa automáticamente en la electricidad, donde hay un camino hacia cero porque la energía eólica y solar son ahora más baratas que los combustibles fósiles. Pero la electricidad sólo representa el 26% de las emisiones mundiales. Del mismo modo, las baterías de iones de litio permiten pensar en un futuro con cero emisiones en los desplazamientos en coche. Pero los coches representan menos de la mitad del 16% de las emisiones del sector del transporte. Las baterías de iones de litio no hacen mucho por reducir las emisiones de los viajes de larga distancia en aviones, buques de carga y camiones pesados.',
    'La agricultura y la construcción representan el 21% y el 7% de las emisiones, respectivamente. El sector con más emisiones, el 30% del total, es el de la fabricación de los productos de los que depende la vida moderna, como el cemento, el plástico y el acero. En la actualidad no hay ninguna fábrica de cemento en el mundo, y exactamente una fábrica de acero, que no produzca CO2.',
    'Así que, si estás leyendo esto mientras almuerzas en un dispositivo de plástico en tu edificio de oficinas de hormigón y acero climatizado al que has cogido un autobús para llegar, empiezas a ver cómo más o menos todos los aspectos de nuestras vidas contribuyen al problema.',
    'En todas partes: Más de 70 países se han comprometido a alcanzar el objetivo de cero emisiones netas, incluidos grandes contaminadores como Estados Unidos y la Unión Europea. Sin embargo, aunque Estados Unidos y Europa lo consigan, no habremos resuelto el problema. Tres cuartas partes de la población mundial vive en economías emergentes como Brasil, China, India y Sudáfrica, y aunque históricamente han desempeñado un papel muy pequeño como causantes del cambio climático, ahora son responsables de dos tercios de las emisiones totales de gases de efecto invernadero. China por sí sola emite más de una cuarta parte. Así que las soluciones no pueden depender de las condiciones únicas de un solo país o región. Tienen que funcionar en todos los países, o la temperatura seguirá subiendo.',
    'Pensar globalmente en vez de nacionalmente revela por qué no podemos resolver el cambio climático simplemente consumiendo menos energía. Los países de renta baja y media están construyendo agresivamente para alcanzar el nivel de vida al que aspiran sus habitantes, y deberían hacerlo. Muchos países de Europa y Norteamérica llenaron la atmósfera de carbono para alcanzar la prosperidad, y es poco realista e injusto esperar que todos los demás renuncien a una vida más cómoda porque ese carbono resultó cambiar el clima.',
    'La solución al reto de "todo, en todas partes" tiene tres vertientes. En primer lugar, tenemos que inventar tecnologías limpias que sustituyan a todos los procesos intensivos en emisiones que utilizamos hoy en día: una nueva forma de fabricar acero, de hacer funcionar los aviones, de fertilizar los campos.',
    'En segundo lugar, tenemos que reducir el coste de las nuevas tecnologías limpias para que puedan competir, no sólo en los países ricos, sino en todos los países. Yo llamo "Prima Verde" a la diferencia de precio entre cualquier tecnología actual y la alternativa limpia, y es la clave para que el mundo evite una catástrofe climática. Las Primas Verdes tienen que ser cercanas, iguales o inferiores a cero. Mientras el cemento limpio cueste el doble que el cemento fabricado tradicionalmente, por ejemplo, la gran mayoría de los compradores sencillamente no lo elegirán.',
    'La tercera parte de la solución consiste en implantar rápidamente estas tecnologías competitivas. Tenemos que sustituir todas y cada una de las infraestructuras dedicadas a hacer las cosas de la manera antigua por infraestructuras dedicadas a hacer las cosas de una manera nueva, y eso no ocurre instantáneamente, sobre todo teniendo en cuenta la alucinante magnitud del trabajo.',
    'Por ejemplo, actualmente hay 2.412 centrales eléctricas de carbón en el mundo, y la cifra sigue aumentando. Habrá que sustituir todas y cada una de esas centrales. O veamos un solo yacimiento petrolífero, Hebron-Ben Nevis, frente a la costa de Terranova. Funcionará ininterrumpidamente durante 30 años, empleará a cientos de personas y costará 7.000 millones de dólares, y todo ese tiempo, trabajo y dinero producirá petróleo suficiente para que el mundo dure sólo ocho días.',
    'Usamos tanta energía y hemos invertido tanto en la maquinaria para generarla. Ahora, en el plazo de unos 30 años, tenemos que desmantelarlo todo y empezar de nuevo con tecnologías limpias. Tengo más confianza en los mercados que muchas otras personas, pero ni siquiera yo creo que el mercado por sí solo pueda poner a cero toda una economía en unas pocas décadas. Necesitamos un plan para acelerar el proceso.',
  ],
  [
    'Mucho ha cambiado desde la reunión de la COP 21 en 2015 en París, donde 22 gobiernos lanzaron una iniciativa llamada Mission Innovation. Desde entonces, la financiación pública para la investigación y el desarrollo (I+D) relacionados con el clima ha aumentado en casi un tercio.',
    'El sector privado está invirtiendo en el clima más que nunca',
    'En ese mismo acto, formé parte de un grupo de inversores que lanzaron Breakthrough Energy Ventures, un fondo de capital riesgo centrado en el clima que ahora tiene más de 100 empresas de energías limpias en cartera. Mientras tanto, otros fondos de capital riesgo están realizando más inversiones en el sector. En los dos últimos años, los fondos de capital riesgo han invertido unos 70.000 millones de dólares en más de 1.300 empresas emergentes de energías limpias.',
    'Como resultado de esta actividad, los canales de I+D se están llenando por fin. Por ejemplo, el almacenamiento de energía de larga duración. Muchas fuentes de energía renovables, sobre todo la solar y la eólica, son intermitentes, es decir, no están siempre encendidas. Pero aun así necesitamos poder generar energía a demanda, por lo que necesitamos almacenarla cuando brilla el sol y sopla el viento y utilizarla incluso cuando no lo hacen.',
    'BEV financia múltiples empresas que desarrollan distintos enfoques para el almacenamiento de energía de larga duración, porque no sabemos cuál funcionará mejor. Por ejemplo, Malta, la start-up de Ramya Swaminathan, convierte la electricidad en calor, que se almacena en sales fundidas, y en frío, que se almacena en una solución anticongelante, y los vuelve a convertir en electricidad cuando se necesitan. Form Energy, fundada por Mateo Jaramillo, almacena electricidad en lo que se conoce como una batería de hierro-aire que convierte el hierro en óxido y luego invierte el proceso a demanda. La oferta en otros sectores clave es igualmente variada.',
    'Las empresas consolidadas también han empezado recientemente a reorientar drásticamente sus inversiones y conocimientos para cumplir sus compromisos de producción neta cero. En 2016, solo 21 empresas habían establecido objetivos climáticos. Ahora, ese número es de 3.671. El programa Catalyst de Breakthrough Energy se está asociando con aerolíneas, fabricantes de automóviles y empresas siderúrgicas comprometidas con el despliegue de tecnologías limpias y con bancos y fondos de inversión interesados en financiarlas.',
    'El sector público interviene con políticas de impacto',
    'Una de las razones de este auge de la innovación son unas políticas públicas que se han vuelto más ambiciosas en los últimos años.',
    'En los últimos 12 meses, el Congreso de EE.UU. ha aprobado y el Presidente Biden ha firmado tres leyes relevantes para el clima: la Ley de Reducción de la Inflación, la Ley Bipartidista de Infraestructuras y la Ley CHIPS y de Ciencia. En conjunto, aportan más de 500.000 millones de dólares en créditos fiscales, garantías de préstamos y otras inversiones para la transición energética. Y lo que es más importante, estimularán cientos de nuevos proyectos de energía limpia y movilizarán billones más en inversión privada, incluyendo -de manera crucial- lo que se conoce como proyectos de demostración.',
    'La demostración es la clave para reducir las primas verdes. La única manera de optimizar una nueva tecnología es sacarla del laboratorio, desarrollarla en el mundo real y mejorarla continuamente. Esta legislación no sólo proporciona financiación para hacerlo, sino que también crea una Oficina de Demostraciones de Energía Limpia para gestionar el proceso en el futuro.',
    'Por su parte, la Unión Europea consagró por ley el objetivo de energía neta cero para 2050 en 2021. Ese mismo año, aumentó su objetivo para 2030 de una reducción del 40% al 55% (respecto al nivel de 1990). El plan específico para alcanzar esos objetivos sigue su curso en el proceso legislativo.',
    'Por desgracia, la guerra de Ucrania y la crisis energética que provocó están ejerciendo presión sobre el creciente consenso climático en el continente. Algunos países han invertido recientemente en nuevos proyectos de combustibles fósiles, lo que no hace sino cambiar un gran problema por otro. En última instancia, el balance cero y la seguridad energética son dos caras de la misma moneda. Las innovaciones en materia de energía limpia son la única forma de conseguir ambas cosas.',
  ],
  [
    'Nunca antes la humanidad había tenido ante sí todas estas materias primas: la inversión, la política, el caudal de innovaciones, la conciencia pública general de que el cambio climático es una prioridad. Según los últimos sondeos, hay más personas en todo el mundo que ven el clima como una amenaza importante que cualquier otra cuestión. Y más personas que nunca están tomando medidas productivas para reducir su propia huella de carbono, lo que, visto colectivamente, envía una poderosa señal a los líderes empresariales y gubernamentales de que hay que hacer más. Pero incluso con todas estas herramientas y este impulso, todavía tenemos que convertirlas en una solución global.',
    'Eso significa tres cosas: más investigación, desarrollo y demostración; desarrollar un proceso justo y viable para la ampliación; y ayudar a la gente a adaptarse al cambio climático que se va a producir hagamos lo que hagamos ahora.',
    'Investigación, desarrollo y demostración: Todavía hay muchas tecnologías limpias fundamentales que no son lo bastante baratas para competir. Necesitamos combustibles líquidos sostenibles para el transporte de larga distancia; formas asequibles de capturar CO2 directamente de la atmósfera; fuentes adicionales de energía renovable para mantener el ritmo de la demanda mundial que se duplicará o triplicará a medida que electrifiquemos más y más procesos. Y para llenar estos vacíos, tenemos que seguir haciendo lo que hemos hecho bien desde 2015: tenemos que aumentar aún más la inversión en innovación de energía limpia.',
    'Desarrollar un proceso justo y viable para la ampliación: No podemos fingir que la transición energética no será perturbadora. Aunque aparecerán nuevas industrias y puestos de trabajo, algunos antiguos desaparecerán. Las nuevas infraestructuras afectarán a las comunidades donde se construyan. En el pasado, las comunidades de bajos ingresos y las comunidades de color han sufrido de forma desproporcionada las decisiones sobre dónde deben ir los grandes proyectos de infraestructuras, y no podemos permitir que eso ocurra esta vez. Las políticas públicas deben garantizar una transición justa para que nunca opongamos un planeta habitable a los medios de vida de las personas. Quienes podrían sufrir trastornos necesitan tener voz en el proceso.',
    'Al mismo tiempo, debe haber una transición. El año pasado, los votantes de Maine bloquearon la construcción de las líneas de transmisión necesarias para llevar electricidad baja en carbono al noreste. Algunas de esas líneas debían atravesar granjas y bosques, pero debemos ser capaces de hacer concesiones responsables de forma justa y transparente para poder avanzar más rápido. Los trastornos inimaginables causados por un aumento de la temperatura de 4 grados superarán los inconvenientes de la mayoría de las soluciones de energía limpia, y un sólido proceso de participación de la comunidad dará lugar a un mejor diseño y ubicación de los proyectos.',
    'Ayudar a la gente a adaptarse: El clima ya ha cambiado drásticamente y seguirá haciéndolo. Para minimizar los daños que estos cambios causan, también tenemos que invertir en ayudar a la gente a adaptarse a un clima más cálido, a la subida del nivel del mar y a un tiempo menos predecible. Eso significa invertir en la ciencia de los cultivos para que los agricultores puedan plantar semillas más tolerantes al calor, un área en la que nuestra fundación lleva años trabajando. También significa idear tecnologías como la desalinización para garantizar que las comunidades tengan acceso a agua limpia, y mejorar las instalaciones portuarias de todo el mundo para hacerlas resistentes a inundaciones y tormentas. El mundo debe utilizar las mismas estrategias que han incentivado la innovación en tecnologías de mitigación para empezar a tomarse en serio también la adaptación. En Breakthrough Energy estamos ampliando nuestro enfoque para reflejar esta perspectiva.',
  ],
  [
    'La medida definitiva del éxito son las emisiones globales de gases de efecto invernadero: tenemos que pasar de 51.000 millones de toneladas anuales a cero en las próximas tres décadas. Pero también hay un desfase en esa métrica. La inversión en desarrollo, demostración e implantación de tecnologías limpias es lo primero. El descenso de las emisiones viene después, una vez que la prima verde de una tecnología limpia es lo suficientemente baja como para ampliarla.',
    'Por eso mi medida provisional del éxito son las Primas Verdes. Tenemos que conseguir que se acerquen, lleguen o incluso se sitúen por debajo de cero en 2040 para toda la gama de productos y procesos que tenemos que sustituir. El progreso no será en línea recta. Habrá contratiempos en el camino. Pero si podemos acercarnos a la eliminación de las Primas Verdes, me sentiré bien con el pronóstico a largo plazo para el clima.',
    'Eso nos deja 18 años para llegar de aquí hasta allí. Europa y Estados Unidos, que históricamente han producido la inmensa mayoría de las emisiones de CO2, le deben al mundo no sólo eliminar nuestras propias emisiones, sino invertir agresivamente y conseguir que bajen las Primas Verdes. Esto dará a otros países que no tuvieron mucho que ver con la causa del cambio climático la oportunidad de dejar de emitir gases de efecto invernadero al tiempo que hacen crecer sus economías y elevan su nivel de vida.',
    'Como padre de tres hijos, sé que 18 años no es mucho tiempo. Por eso pido al equipo de Breakthrough Energy que trabaje con innovadores y otros expertos de la comunidad climática para trazar planes rigurosos a 10, 15 y 20 años para reducir las Primas Verdes a cero. No podemos limitarnos a esperar lo mejor. Tenemos que diseñarlo juntos.',
    'Este es el reto más difícil al que se ha enfrentado la humanidad. Nunca ha habido una movilización de este alcance, a esta escala, a esta velocidad y durante tanto tiempo. Pero la humanidad tampoco se ha enfrentado nunca a una crisis existencial como la del cambio climático.',
    'Soy optimista sobre lo que la gente es capaz de hacer en una crisis y, a largo plazo, no apostaría contra nosotros. Por desgracia, no podemos permitirnos el lujo de un largo plazo. Ya hemos logrado muchos avances energéticos. Tenemos que conseguir más, más rápido, para evitar un desastre climático.',
  ],
];
