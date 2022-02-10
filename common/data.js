import graphic2 from '../public/img/graphic2.png';
import graphic1 from '../public/img/graphic1.png';
import digital1 from '../public/img/digital1.png';
import vector1 from '../public/img/vector1.png';
import paint1 from '../public/img/paint1.png';

export const artGroups = [
  {
    name: 'graphic', title: 'Graphic art', arts: [
      { src: graphic1, width: 2221, height: 2686 },
      { src: graphic2, width: 3508, height: 2408 },
    ],
  },
  { name: 'digital', title: 'Digital', arts: [{ src: digital1, width: 2480, height: 3508 }] },
  { name: 'vector', title: 'Vector', arts: [{ src: vector1, width: 4000, height: 5607 }] },
  { name: 'painting', title: 'Painting', arts: [{ src: paint1, width: 3024, height: 4032 }] },
];
