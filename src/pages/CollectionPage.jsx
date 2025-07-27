import React, { useEffect, useState } from "react";
import axios from "axios";

function CollectionPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Replace with your actual API endpoint or JSON data
    axios.get("/api/bottomwear-collection")
      .then((res) => setItems(res.data))
      .catch((err) => console.error("Failed to fetch items", err));
  }, []);

  return (
    <div className="p-4">
      {/* Banner Section */}
      <div className="w-full h-[300px] bg-gray-100 rounded-xl overflow-hidden mb-6">
        <img
          src="/path-to/your-collection-banner.webp"
          alt="Collection Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Heading */}
      <h2 className="text-2xl font-bold mb-4">2 BOTTOMWEAR FOR ₹2799</h2>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <aside className="w-full md:w-1/4">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-2">Category</h3>
            {/* Static filter example */}
            <div>
              <label><input type="checkbox" /> Jeans</label>
            </div>
            <div>
              <label><input type="checkbox" /> Trousers</label>
            </div>
            <div>
              <label><input type="checkbox" /> Cargos</label>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <main className="w-full md:w-3/4 grid grid-cols-2 md:grid-cols-3 gap-4">
          {items.map((item, index) => (
            <div key={index} className="bg-white p-3 rounded-lg shadow">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-60 object-cover rounded"
              />
              <h4 className="mt-2 font-semibold">{item.name}</h4>
              <p className="text-gray-600">{item.price}</p>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}

export default CollectionPage;
