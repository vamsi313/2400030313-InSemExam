import React, { useState } from "react";
import "./App.css";


const PRODUCTS = [
  // Stationery
  { id: 1, name: "Notebook", price: 40, category: "Stationery" },
  { id: 2, name: "Gel Pen", price: 20, category: "Stationery" },
  { id: 3, name: "Pencil Box", price: 70, category: "Stationery" },
  { id: 4, name: "Eraser Set", price: 15, category: "Stationery" },
  { id: 5, name: "Sketch Pens", price: 120, category: "Stationery" },

  // Bags
  { id: 6, name: "Laptop Bag", price: 1200, category: "Bags" },
  { id: 7, name: "Travel Backpack", price: 950, category: "Bags" },
  { id: 8, name: "School Bag", price: 750, category: "Bags" },
  { id: 9, name: "Gym Duffle Bag", price: 600, category: "Bags" },

  // Electronics
  { id: 10, name: "Headphones", price: 1500, category: "Electronics" },
  { id: 11, name: "Bluetooth Speaker", price: 2000, category: "Electronics" },
  { id: 12, name: "USB Cable", price: 150, category: "Electronics" },
  { id: 13, name: "Smart Watch", price: 2500, category: "Electronics" },
  { id: 14, name: "Wireless Mouse", price: 600, category: "Electronics" },

  // Fashion
  { id: 15, name: "T-Shirt", price: 450, category: "Fashion" },
  { id: 16, name: "Jeans", price: 1200, category: "Fashion" },
  { id: 17, name: "Sneakers", price: 2200, category: "Fashion" },
  { id: 18, name: "Jacket", price: 1800, category: "Fashion" },
  { id: 19, name: "Watch", price: 1450, category: "Fashion" },

  // Kids
  { id: 20, name: "Toy Car", price: 300, category: "Kids" },
  { id: 21, name: "Building Blocks", price: 500, category: "Kids" },
  { id: 22, name: "Coloring Book", price: 120, category: "Kids" },
  { id: 23, name: "Kids Shoes", price: 700, category: "Kids" },
  { id: 24, name: "Stuffed Teddy", price: 450, category: "Kids" },

  // Cosmetics
  { id: 25, name: "Lipstick", price: 250, category: "Cosmetics" },
  { id: 26, name: "Face Cream", price: 400, category: "Cosmetics" },
  { id: 27, name: "Nail Polish", price: 120, category: "Cosmetics" },
  { id: 28, name: "Perfume", price: 800, category: "Cosmetics" },
  { id: 29, name: "Makeup Brush Set", price: 600, category: "Cosmetics" },
];

export default function App() {
  
  const [selectedCategory, setSelectedCategory] = useState("All");

  //  build category list + "All"
  const categories = ["All", ...Array.from(new Set(PRODUCTS.map(p => p.category)))];

  // filter dynamically based on category
  const filteredProducts =
    selectedCategory === "All" ? PRODUCTS : PRODUCTS.filter(p => p.category === selectedCategory);

  return (
    <div className="app">
      <header className="hero">
        <h1> Product List with Category Filter</h1>
        <p className="subtitle">Select a category using buttons or dropdown</p>
      </header>

      {/* CATEGORY BUTTONS + DROPDOWN */}
      <section className="controls">
        <div className="buttons">
          {categories.map(cat => (
            <button
              key={cat}
              className={`cat-btn ${cat === selectedCategory ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="dropdown">
          <label htmlFor="catSelect">Choose: </label>
          <select
            id="catSelect"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </section>

      {/* INFO SECTION */}
      <section className="summary">
        <p>
          Showing <strong>{filteredProducts.length}</strong> product(s) for{" "}
          <strong>{selectedCategory}</strong>
        </p>
      </section>

      {/* PRODUCTS GRID */}
      <main className="grid">
        {filteredProducts.map(product => (
          <article key={product.id} className="card">
            <div className="card-top">
              <div className="product-name">{product.name}</div>
              <div className="product-category">{product.category}</div>
            </div>
            <div className="card-bottom">
              <div className="product-price">₹{product.price}</div>
              <button
                className="buy-btn"
                onClick={() => alert(`${product.name} (₹${product.price}) selected`)}
              >
                Select
              </button>
            </div>
          </article>
        ))}
      </main>

      {/* IF EMPTY */}
      {filteredProducts.length === 0 && (
        <p className="no-data">No products found in this category.</p>
      )}

      {/* FOOTER */}
      <footer className="footer">
        <div className="made-by">
          made by : 2400030313<br />
          G.Vamsi Krishna<br />
          Section 205
        </div>
      </footer>
    </div>
  );
}
