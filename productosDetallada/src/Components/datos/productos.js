// datos/productos.js
export const productos = [
  {
    id: 1,
    nombre: 'Smartwatch Pro X',
    vendedor: {
      nombre: 'ElectroHub',
      rating: 4.8
    },
    imagenes: [
      'https://picsum.photos/200/200?random=1',
      'https://picsum.photos/200/200?random=2'
    ],
    enStock: true,
    precio: {
      moneda: '€',
      valor: 215.50,
      enOferta: true
    },
    caracteristicas: ['GPS integrado', 'Monitor de ritmo cardíaco', 'Resistente al agua (5 ATM)']
  },
  {
    id: 2,
    nombre: 'Auriculares Gamer X200',
    vendedor: {
      nombre: 'AudioPlus',
      rating: 4.5
    },
    imagenes: [
      'https://picsum.photos/200/200?random=3',
      'https://picsum.photos/200/200?random=4'
    ],
    enStock: true,
    precio: {
      moneda: '€',
      valor: 89.99,
      enOferta: false
    },
    caracteristicas: ['Sonido 7.1 envolvente', 'Micrófono ajustable', 'Almohadillas cómodas']
  },
  {
    id: 3,
    nombre: 'Teclado Mecánico RGB',
    vendedor: {
      nombre: 'KeyMasters',
      rating: 4.7
    },
    imagenes: [
      'https://picsum.photos/200/200?random=5',
      'https://picsum.photos/200/200?random=6'
    ],
    enStock: false,
    precio: {
      moneda: '€',
      valor: 129.50,
      enOferta: true
    },
    caracteristicas: ['Switches Cherry MX Red', 'Iluminación RGB personalizable', 'Teclas anti-ghosting']
  }
];
