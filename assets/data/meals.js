const meals = [
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
      },]
    },
    {
      id: '3',
      image: require('../images/food (1).png'),
      title: 'Patty & Fries',
      weight: '700 gr',
      rating: '5.0',
      price: 74.99,
      sizeName: 'Large',
      sizeNumber: 18,
      crust: 'none',
      deliveryTime: 15,
      ingredients: [
        {
          id: '1',
          name: 'Tomato',
          image: require('../images/tomato.png'),
        },
        {
          id: '2',
          name: 'Patty',
          image: require('../images/Patty.png'),
        },
        {
          id: '3',
          name: 'Lettuce',
          image: require('../images/lettuce.png'),
        },
        {
          id: '4',
          name: 'Fries',
          image: require('../images/fries.png'),
        },
      ],
    },
    {
        id: '4',
        image: require('../images/food (3).png'),
        title: 'Nugget',
        weight: '700 gr',
        rating: '5.0',
        price: 29.99,
        sizeName: '10 Piece',
        sizeNumber: 18,
        crust: 'none',
        deliveryTime: 15,
        ingredients: [
          {
            id: '1',
            name: 'Dipping Sauce',
            image: require('../images/dipping.png'),
          },
          {
            id: '2',
            name: 'Nuggets',
            image: require('../images/nuggets.png'),
          },
          {
            id: '4',
            name: 'Lettuce',
            image: require('../images/lettuce.png'),
          },
          {
            id: '5',
            name: 'Special sauce',
            image: require('../images/whitedipping.png'),
          },
         
        ],
      },
      {
        id: '5',
        image: require('../images/food (4).png'),
        title: 'pork chop & Fries',
        weight: '700 gr',
        rating: '5.0',
        price: 64.99,
        sizeName: 'Large',
        sizeNumber: 18,
        crust: 'none',
        deliveryTime: 15,
        ingredients: [
          {
            id: '1',
            name: 'fries',
            image: require('../images/fries.png'),
          },
          {
            id: '2',
            name: 'pork chop',
            image: require('../images/pork.png'),
          },
          {
            id: '3',
            name: 'green salad',
            image: require('../images/salad.png'),
          },
        ],
      },
  ];
  
  export default meals;
  