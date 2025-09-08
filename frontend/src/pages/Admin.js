import { useState } from 'react';
import axios from 'axios';
import AdminForm from '../components/AdminForm';

export default function Admin() {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/auth/login', { email, password });
      setToken(response.data);
      alert('Login successful');
    } catch (error) {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="container mt-4 py-4 bg-white rounded shadow-sm">
      {!token ? (
        <div className="card shadow-lg p-4 mx-auto" style={{ maxWidth: '500px' }}>
          <h1 className="mb-4 text-center text-primary">Admin Login <i className="bi bi-lock-fill ms-2"></i></h1>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label className="form-label">Email <i className="bi bi-envelope-fill text-muted ms-1"></i></label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Password <i className="bi bi-key-fill text-muted ms-1"></i></label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" required />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Login <i className="bi bi-box-arrow-in-right ms-1"></i>
            </button>
          </form>
        </div>
      ) : (
        <div>
          <h1 className="mb-4 text-center text-primary">Add New Property <i className="bi bi-plus-square-fill ms-2"></i></h1>
          <AdminForm token={token} />
        </div>
      )}
    </div>
  );
}