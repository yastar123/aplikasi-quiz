import React from 'react';
import { Navigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';

const Autentifikasi = ({ children }) => {
  const auth = getAuth();
  const user = auth.currentUser;

  // Jika pengguna belum login, arahkan ke halaman login
  if (!user) {
    return <Navigate to="/" />;
  }

  // Jika pengguna sudah login, render halaman yang diminta
  return children;
};

export default Autentifikasi;
