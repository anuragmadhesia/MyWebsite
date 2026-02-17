import { useMemo, useState } from 'https://esm.sh/react@18.3.1';

const products = [
  { id: 1, name: 'Minimal Chair', category: 'Furniture', price: 129 },
  { id: 2, name: 'Desk Lamp', category: 'Lighting', price: 49 },
  { id: 3, name: 'Wall Shelf', category: 'Furniture', price: 89 },
  { id: 4, name: 'Travel Bottle', category: 'Accessories', price: 24 },
];

export default function EcommercePage() {
  const [category, setCategory] = useState('All');
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const filtered = useMemo(() => {
    if (category === 'All') return products;
    return products.filter((product) => product.category === category);
  }, [category]);

  const addToCart = (item) => setCart((items) => [...items, item]);

  return (
    <section>
      <h2>E-commerce UI</h2>
      <div className="row wrap">
        {['All', 'Furniture', 'Lighting', 'Accessories'].map((item) => (
          <button
            key={item}
            className={item === category ? 'primary' : 'ghost'}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
        <button className="primary" onClick={() => setCartOpen(true)}>
          Open Cart ({cart.length})
        </button>
      </div>

      <div className="grid three">
        {filtered.map((product) => (
          <article key={product.id} className="card">
            <h3>{product.name}</h3>
            <p className="muted">{product.category}</p>
            <p className="price">${product.price}</p>
            <button className="primary" onClick={() => addToCart(product)}>
              Add to cart
            </button>
          </article>
        ))}
      </div>

      {cartOpen && (
        <div className="overlay" onClick={() => setCartOpen(false)}>
          <aside className="drawer" onClick={(event) => event.stopPropagation()}>
            <h3>Cart Drawer</h3>
            {cart.length === 0 && <p className="muted">Your cart is empty.</p>}
            <ul>
              {cart.map((item, index) => (
                <li key={`${item.id}-${index}`}>
                  {item.name} - ${item.price}
                </li>
              ))}
            </ul>
            <button className="primary" onClick={() => setCartOpen(false)}>
              Close
            </button>
          </aside>
        </div>
      )}
    </section>
  );
}
