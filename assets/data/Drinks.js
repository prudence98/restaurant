const Drinks  = [
    {
      id: '1',
      image: require('../images/CocktailFizzy.png'),
      title: 'Cocktail Fizzy',
      weight: '500 ml',
      rating: '5.0',
      price: 35.75,
      sizeName: 'Regular',
  
      crust: 'none',
      deliveryTime: 10,
      ingredients: [
        {
          id: '1',
          name: 'Blue Berry',
          image: require('../images/blueberry.png'),
        },
        {
          id: '2',
          name: 'Orange',
          image: require('../images/orange.png'),
        },
        {
          id: '3',
          name: 'Green Lemon',
          image: require('../images/greenLemon.png'),
        },
        {
          id: '4',
          name: 'StrawBerry',
          image: require('../images/StrawBerry.png'),
        },
      ],
    },
    {
      id: '2',
      image: require('../images/coffee.png'),
    title: 'Coffee',
    weight: '250 ml',
    rating: '4.0',
    price: 35.99,
    sizeName: 'Regular',

    crust: 'none',
    deliveryTime: 10,
    ingredients: [
      {
        id: '1',
        name: 'coffee beans',
        image: require('../images/coffeeBeans.png'),
      },
      ]
    },
    {
      id: '3',
      image: require('../images/passionfruit.png'),
      title: 'Passion fruit',
      weight: '500 ml',
      rating: '5.0',
      price: 19.99,
      sizeName: 'Regular',
      crust: 'none',
      deliveryTime: 5,
      ingredients: [
        {
          id: '1',
          name: 'Orange',
          image: require('../images/orange.png'),
        },
        {
          id: '2',
          name: 'Mint',
          image: require('../images/mint.png'),
        },
        
      ],
    },
    {
        id: '4',
        image: require('../images/orangeMilkshake.png'),
        title: 'Mango MilkShake',
        weight: '500  ml',
        rating: '5.0',
        price: 29.99,
        sizeName: 'Regular',
        crust: 'none',
        deliveryTime: 8,
        ingredients: [
          {
            id: '1',
            name: 'Mango',
            image: require('../images/Mango.png'),
          },
          {
            id: '2',
            name: 'Milk',
            image: require('../images/milk.png'),
          },
         
          {
            id: '3',
            name: 'Ice Cream',
            image: require('../images/iceCream.png'),
          }, {
            id: '4',
            name: 'Whipped Cream',
            image: require('../images/whippedCream.png'),
          },
         
        ],
      },
      {
        id: '5',
        image: require('../images/appleJuice.png'),
        title: '100% Apple Juice',
        weight: '750 ml',
        rating: '5.0',
        price: 23.33,
        sizeName: 'Large',
      
        crust: 'none',
        deliveryTime: 15,
        ingredients: [
          {
            id: '1',
            name: 'Apple',
            image: require('../images/apple.png'),
          },
          
        ],
      },
  ];
  
  export default Drinks;
  