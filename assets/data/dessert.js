const dessert  = [
    {
      id: '1',
      image: require('../images/CheeseCake.png'),
      title: 'Cheesecake Cream',
      weight: '250 gr',
      rating: '5.0',
      price: 15.99,
      sizeName: '1 Slice',
      
      deliveryTime: '5-8',
      ingredients: [
        {
          id: '1',
          name: 'Mango',
          image: require('../images/Mango.png'),
        },
        {
          id: '2',
          name: 'Cheese',
          image: require('../images/cheese.png'),
        },
        {
          id: '3',
          name: 'Green lemon',
          image: require('../images/greenLemon.png'),
        },
        {
          id: '4',
          name: 'Sour Cream',
          image: require('../images/sourCream.png'),
        },
      ],
    },
    {
      id: '2',
      image: require('../images/BelgianWaffle.png'),
    title: 'Belgian waffle',
    weight: '250 g',
    rating: '4.0',
    price: 25.99,
    sizeName: 'Regular',
    sizeNumber: 10,
    deliveryTime: 20,
    ingredients: [
      {
        id: '1',
        name: 'StrawBerry',
        image: require('../images/StrawBerry.png'),
      },
      {
        id: '2',
        name: 'Blueberry',
        image: require('../images/blueberry.png'),
      },
      {
        id: '3',
        name: 'Ice Cream',
        image: require('../images/iceCream.png'),
      },
      {
        id: '4',
        name: 'Chocolate Syrup',
        image: require('../images/ChocolateSYRUP.png'),
      },]
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
    {
        id: '4',
        image: require('../images/coffeChocolateCake.png'),
        title: 'coffeChocolateCake',
        weight: '70 gr',
        rating: '5.0',
        price: 35.99,
        sizeName: '1 Slice',
       
        deliveryTime: 5,
        ingredients: [
          {
            id: '1',
            name: 'coffe Beans',
            image: require('../images/coffeeBeans.png'),
          },
          {
            id: '2',
            name: 'Chocolate',
            image: require('../images/chocolate.png'),
          },
          {
            id: '3',
            name: 'Whipped Cream',
            image: require('../images/whippedCream.png'),
          },
         
        ],
      },
      {
        id: '5',
        image: require('../images/custardPudding.png'),
        title: 'Custard Pudding',
        weight: '250 gr',
        rating: '5.0',
        price: 64.99,
        sizeName: 'Regular',
     
        deliveryTime: 7,
        ingredients: [
          {
            id: '1',
            name: 'Custard',
            image: require('../images/custard.png'),
          },
          {
            id: '2',
            name: 'Milk',
            image: require('../images/milk.png'),
          },
          {
            id: '3',
            name: 'Villina Powered',
            image: require('../images/villinaPowered.png'),
          },
        ],
      },
  ];
  
  export default dessert;
  