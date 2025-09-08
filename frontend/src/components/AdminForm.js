import { useState } from 'react';
import axios from 'axios';

export default function AdminForm({ token }) {
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    location: '',
    image: '',
    description: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/properties', formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert('Property added!');
      setFormData({ title: '', price: '', location: '', image: '', description: '' });
    } catch (err) {
      alert('Error adding property');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card shadow-lg p-4 rounded bg-light">
      <div className="mb-3">
        <label className="form-label">Title <i className="bi bi-pencil-square text-primary ms-1"></i></label>
        <input name="title" value={formData.title} onChange={handleChange} className="form-control" required />
      </div>
      <div className="mb-3">
        <label className="form-label">Price <i className="bi bi-currency-rupee text-success ms-1"></i></label>
        <input name="price" type="number" value={formData.price} onChange={handleChange} className="form-control" required />
      </div>
      <div className="mb-3">
        <label className="form-label">Location <i className="bi bi-geo-alt-fill text-muted ms-1"></i></label>
        <input name="location" value={formData.location} onChange={handleChange} className="form-control" required />
      </div>
      <div className="mb-3">
        <label className="form-label">Image URL <i className="bi bi-image-fill text-info ms-1"></i></label>
        <input name="image" value={formData.image} onChange={handleChange} className="form-control" required />
      </div>
      <div className="mb-3">
        <label className="form-label">Description <i className="bi bi-text-paragraph text-secondary ms-1"></i></label>
        <textarea name="description" value={formData.description} onChange={handleChange} className="form-control" rows="3" required />
      </div>
      <button type="submit" className="btn btn-success w-100">
        Add Property <i className="bi bi-plus-circle-fill ms-1"></i>
      </button>
    </form>
  );
}