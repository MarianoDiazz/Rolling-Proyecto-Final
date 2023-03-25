import React from 'react';

function Menus({ items, addToCart }) {
  return (
    <div className="section-center">
      {items.map(item => {
        const { id, title, img, desc, price } = item;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">${price}</h4>
              </header>
              <p className="item-text">{desc}</p>
              <button className="filter-btn" onClick={() => addToCart(item)}>
                Add to cart
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default Menus;
