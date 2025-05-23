import React from 'react';
import { NextPage } from 'next';
import { Register } from '@/features/auth/register/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Register | Emma AI Therapist',
  description: 'Create a new account for Emma AI Therapist',
};

const RegisterPage: NextPage = () => {
  return (
    <>
      <div className="flex min-h-screen flex-col bg-black text-white">
        <div className="relative flex flex-1 items-center justify-center py-0">
          <Register />
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
