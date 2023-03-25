let items = [
  {
    id: 1,
    title: 'buttermilk pancakes',
    category: 'breakfast',
    price: 15.99,
    img: 'https://images.pexels.com/photos/15874528/pexels-photo-15874528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: 'diner double',
    category: 'Burger',
    price: 13.99,
    img: 'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: 'Veggie',
    category: 'Pizzas',
    price: 6.99,
    img: 'https://images.pexels.com/photos/13814644/pexels-photo-13814644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    desc: ` base de masa crujiente, salsa de tomate, verduras frescas variadas como pimientos, cebolla, champiñones y aceitunas, cubierta con queso mozzarella derretido.`,
  },
  {
    id: 4,
    title: 'country delight',
    category: 'breakfast',
    price: 20.99,
    img: 'https://images.pexels.com/photos/15801899/pexels-photo-15801899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: 'egg attack',
    category: 'Burger',
    price: 22.99,
    img: 'https://images.pexels.com/photos/4393010/pexels-photo-4393010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: 'Cantimpalo especial',
    category: 'Pizzas',
    price: 18.99,
    img: 'https://images.pexels.com/photos/8056635/pexels-photo-8056635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    desc: `base de masa crujiente, salsa de tomate, hongos frescos como champiñones, Cantimpalo o shiitake, y queso mozzarella derretido.`,
  },
  {
    id: 7,
    title: 'bacon overflow',
    category: 'breakfast',
    price: 8.99,
    img: 'https://images.pexels.com/photos/13999223/pexels-photo-13999223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: 'american classic',
    category: 'Burger',
    price: 12.99,
    img: 'https://images.pexels.com/photos/1556688/pexels-photo-1556688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: 'Pepperoni',
    category: 'Pizzas',
    price: 16.99,
    img: 'https://images.pexels.com/photos/4109137/pexels-photo-4109137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    desc: `masa crujiente, salsa de tomate, pepperoni picante y queso mozzarella derretido..`,
  }
];

const addNewItem = (newItem) => {
  newItem.id = items.length + 1;
  items.push(newItem);
}

export { items, addNewItem };




