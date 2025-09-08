import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function PropertyDetails() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/properties/${id}`)
      .then(response => setProperty(response.data))
      .catch(error => console.error('Error fetching property:', error));
  }, [id]);

  if (!property) return <div className="container mt-4 text-center">Loading... <i className="bi bi-hourglass-split fs-3 text-warning"></i></div>;

  return (
    <div className="container mt-4">
      <div className="card shadow-lg border-0 rounded overflow-hidden">
        <img src={property.image} alt={property.title} className="card-img-top" style={{ maxHeight: '400px', objectFit: 'cover' }} />
        <div className="card-body">
          <h1 className="card-title text-primary">{property.title} <i className="bi bi-house-fill ms-2"></i></h1>
          <p className="lead text-success">Price: ₹{property.price.toLocaleString()} <i className="bi bi-currency-rupee ms-1"></i></p>
          <p className="text-muted">Location: {property.location} <i className="bi bi-geo-alt-fill ms-1"></i></p>
          <p className="text-secondary">{property.description} <i className="bi bi-info-circle-fill ms-1"></i></p>
        </div>
      </div>
    </div>
  );
}