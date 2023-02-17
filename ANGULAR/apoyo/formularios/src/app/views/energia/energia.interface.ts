export interface Contents {
  imgs: string[];
  class: string;
  caption: string;
}

export interface contentsImageTwo {
  firstLetter: string;
  text: string;
  quote: string;
}

// CONTENIDOS

export const contents: Contents[] = [
  {
    imgs: [
      'https://www.lumi4innovation.it/app/uploads/2021/05/efficienza-energetica-LUMI-esco-energy-management.png',
    ],
    class: 'image-container',
    caption: 'Energía',
  },
  {
    imgs: [
      'https://www.greentechmedia.com/assets/content/cache/made/assets/content/cache/remote/https_assets.greentechmedia.com/content/images/articles/Catalina_Utility-Scale_Solar_EDF_XL_Credit_EDF_500_500_80_s_c1.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/2/24/2011-05-10_18-57-46_Switzerland_-_Wil_crop.jpg',
    ],
    class: 'image-container3',
    caption: 'Terabase Energy y energía nuclear',
  },
  {
    imgs: [
      'https://mma.prnewswire.com/media/1600917/Terabase_Energy_Logo_1.jpg?p=facebook',
    ],
    class: 'image-container',
    caption: 'Terabase Energy',
  },
  {
    imgs: [
      'https://www.iaea.org/sites/default/files/styles/original_image_size/public/nuclearpower-1140x640.jpg?itok=gwVrY8nK',
    ],
    class: 'image-container',
    caption: 'Energía nuclear',
  }
];



export const contentsImageTwo: contentsImageTwo[] = [
  {
    firstLetter: 'B',
    text: 'reakthrough Energy Ventures es un fondo de inversión contra el cambio climático fundado por Bill Gates en 2015 que lleva recaudados más de 2.000 millones de dólares para apoyar a empresas que están intentando liderar el camino a las cero emisiones netas. Entre las empresas destinatarias de las donaciones se encuentra Terabase Energy, compañía que ha recibido 52 millones de dólares y tiene como objetivo acelerar el despliegue de la energía solar mediante la construcción de grandes plantas solares.',
    quote: 'Siguiente',
  },
  {
    firstLetter: 'E',
    text: 'n los últimos años, la industria solar ha experimentado notables mejoras en los componentes de los paneles solares, pero en los métodos de ingeniería y construcción de dichos paneles no ha habido mejoras. Esto supone un problema puesto que para poder alcanzar el crecimiento de energía solar requerido para cumplir con los objetivos globales de descarbonización –conseguir las cero emisiones netas para 2.050- es necesario que la tecnología permita realizar el despliegue de plantas solares a gran escala de manera más rápida y eficiente. ',
    quote: 'Siguiente',
  },
  {
    firstLetter: 'T',
    text: 'erabase Energy destinará el recibido de Breakthrough Energy Ventures a la construcción de una plataforma de automatización digital y asistida por robótica. Esto supondrá transformar la forma en que se construyen las plantas de energía fotovoltaica. La primera fábrica automatizada creada por Terabase es capaz de operar 24 horas al día 7 días a la semana, lo que supone una reducción drástica en los tiempos de construcción, reducción de costes y una mayor calidad de construcción. ',
    quote: 'Siguiente',
  },
  {
    firstLetter: 'A',
    text: 'demás, el flujo de trabajo mejorará la salud y seguridad de los trabajadores, al liberarles del levantamiento manual de paneles pesados y componentes de acero en condiciones climáticas adversas. ',
    quote: 'Inicio',
  }
];
