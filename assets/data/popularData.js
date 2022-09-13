const popularData = [
  {
    id: '1',
    image: require('../images/pizza1.png'),
    title: 'Primavera Pizza',
    weight: '540 gr',
    rating: '5.0',
    price: 69.99,
    sizeName: 'Medium',
    sizeNumber: 14,
    crust: 'Thin Crust',
    deliveryTime: 30,
    ingredients: [
      {
        id: '1',
        name: 'ham',
        image: require('../images/ham.png'),
      },
      {
        id: '2',
        name: 'tomato',
        image: require('../images/tomato.png'),
      },
      {
        id: '3',
        name: 'cheese',
        image: require('../images/cheese.png'),
      },
      {
        id: '4',
        name: 'garlic',
        image: require('../images/garlic.png'),
      },
    ],
  },
  {
    id: '2',
    image: require('../images/3PattyBurger.png'),
    title: '3 Patty  Burger',
    weight: '450 gr',
    rating: '4.0',
    price: 95.99,
    sizeName: 'Large',
    sizeNumber: 10,
    crust: 'none',
    deliveryTime: 20,
    ingredients: [
      {
        id: '1',
        name: 'cheese',
        image: require('../images/cheese.png'),
      },
      {
        id: '2',
        name: 'Patty',
        image: require('../images/patty.png'),
      },
      {
        id: '3',
        name: 'Tomato',
        image: require('../images/tomato.png'),
      },
      {
        id: '4',
        name: 'lettuce',
        image: require('../images/lettuce.png'),
      },
      
    ],
    
  },
  {
    id: '3',
    image: require('../images/iceCream1.png'),
    title: 'Ice Cream',
    weight: '700 gr',
    rating: '5.0',
    price: 25.99,
    sizeName: 'Large',
    
    crust: 'none',
    deliveryTime: 5,
    ingredients: [
      {
        id: '1',
        name: 'Cherry',
        image: require('../images/cherry.png'),
      },
      {
        id: '2',
        name: 'Blue Berry',
        image: require('../images/blueberry.png'),
      },
      {
        id: '3',
        name: 'Whipped Cream',
        image: require('../images/whippedCream.png'),
      },
    ],
  },
];

export default popularData;
