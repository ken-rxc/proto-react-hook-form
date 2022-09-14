import React from 'react';
import { RegisterForm } from '../components/RegisterForm';

export const RegisterPage = () => {
  return (
    <div className="App">
      {/* header */}
      <h1>회원가입</h1>

      {/* form */}
      <RegisterForm />
    </div>
  );
};
