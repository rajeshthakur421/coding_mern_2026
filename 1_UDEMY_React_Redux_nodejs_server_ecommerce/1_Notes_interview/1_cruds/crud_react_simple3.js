import React, { useState, useEffect } from 'react';

function App() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({ name: '', price: '', description: '' });
  const [editingIndex, setEditingIndex] = useState(null);

  // Simulating initial data load with useEffect
  useEffect(() => {
    // Simulated initial data
    const initialProducts = [
      { name: 'Product 1', price: 10, description: 'Description 1' },
      { name: 'Product 2', price: 20, description: 'Description 2' },
    ];
    setProducts(initialProducts);
  }, []); // Empty dependency array ensures this effect runs once after initial render

  // Handle changes in form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value
    }));
  };

  // Handle form submission for adding or updating a product
  const handleSubmit = (e) => {
    e.preventDefault();
    if (product.name && product.price) {
      if (editingIndex !== null) {
        // Update existing product
        setProducts((prevProducts) =>
          prevProducts.map((p, index) =>
            index === editingIndex ? product : p
          )
        );
        setEditingIndex(null); // Reset the editing index
      } else {
        // Add new product
        setProducts((prevProducts) => [...prevProducts, product]);
      }
      setProduct({ name: '', price: '', description: '' }); // Reset the form
    }
  };

  // Handle clicking the edit button
  const handleEditClick = (index) => {
    setProduct(products[index]);
    setEditingIndex(index);
  };

  // Handle clicking the delete button
  const handleDeleteClick = (index) => {
    setProducts((prevProducts) =>
      prevProducts.filter((_, i) => i !== index)
    );
  };

  return (
    <div>
      <h1>Product List</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Product Name:</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={product.description}
            onChange={handleChange}
          />
        </div>
        <button type="submit">{editingIndex !== null ? 'Update' : 'Add'} Product</button>
      </form>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <strong>{product.name}</strong> - ${product.price} <br />
            {product.description}
            <button onClick={() => handleEditClick(index)}>Edit</button>
            <button onClick={() => handleDeleteClick(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
