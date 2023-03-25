import React, { useState } from 'react';
import Menus from './Menus';
import Categories from './Categories';
import { addNewItem } from './data';
import './Carta.css';
import { items } from './data';

const allCategories = ['all', ...new Set(items.map(item => item.category))];

function Carta() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = category => {
    if(category ==='all'){
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  const agregar = (item) => {
    addNewItem(item);
    setMenuItems(items);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Menu</h2>
          <div className="underline" />
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menus items={menuItems} agregar={agregar} />
      </section>
    </main>
  );
}

export default Carta;
