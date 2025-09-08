import { Link } from 'react-router-dom';

export default function PropertyCard({ property }) {
  return (
    <div className="card h-100 shadow-lg border-0 rounded overflow-hidden transition-hover" style={{ transition: 'transform 0.3s', cursor: 'pointer' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
      <img src={property.image} className="card-img-top" alt={property.title} style={{ height: '200px', objectFit: 'cover' }} />
      <div className="card-body">
        <h5 className="card-title text-primary">{property.title} <i className="bi bi-house-fill ms-2"></i></h5>
        <p className="card-text text-success">Price: ₹{property.price.toLocaleString()}</p>
        <p className="card-text text-muted">Location: {property.location} <i className="bi bi-geo-alt-fill ms-1"></i></p>
        <Link to={`/property/${property.id}`} className="btn btn-outline-primary btn-sm w-100">
          View Details <i className="bi bi-arrow-right-circle ms-1"></i>
        </Link>
      </div>
    </div>
  );
}