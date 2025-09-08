import { useState, useEffect } from 'react';
import axios from 'axios';
import PropertyCard from '../components/PropertyCard';

export default function Home() {
  const [properties, setProperties] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredProperties, setFilteredProperties] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/properties')
      .then(response => {
        setProperties(response.data);
        setFilteredProperties(response.data);
      })
      .catch(error => console.error('Error fetching properties:', error));
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    const filtered = properties.filter(p =>
      p.location.toLowerCase().includes(value.toLowerCase()) ||
      (value && p.price <= parseInt(value)) || value === ''
    );
    setFilteredProperties(filtered);
  };

  return (
    <div className="container mt-4 py-4 bg-white rounded shadow-sm">
      <h1 className="mb-4 text-center text-primary">Property Listings <i className="bi bi-search-heart ms-2"></i></h1>
      <input
        type="text"
        placeholder="Search by location or max price"
        value={search}
        onChange={handleSearch}
        className="form-control mb-4 shadow-sm"
      />
      <div className="row g-4">
        {filteredProperties.map(property => (
          <div key={property.id} className="col-md-4">
            <PropertyCard property={property} />
          </div>
        ))}
      </div>
    </div>
  );
}