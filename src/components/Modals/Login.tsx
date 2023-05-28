import { authModalState } from '@/atoms/authAtomModal';
import React from 'react';
import { useSetRecoilState } from 'recoil';

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState);

  const handleClick = (event: 'login' | 'register' | 'forgotPassword') => {
    setAuthModalState((prev) => {
      return {
        ...prev,
        type: event,
      };
    });
  };
  return (
    <form action="" className="space-y-6 px-6 py-4">
      <h3 className="text-xl font-medium text-white">Sign In to Peer.js</h3>

      {/* input div */}
      <div>
        <label
          htmlFor="email"
          className="text:sm font-medium block mb-2 text-gray-300"
        >
          Your Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="border-2 outline-none sm:text:sm rounded-lg w-full focus:ring-blue-500 focus:border-blue-500 p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400"
          placeholder="name@company.com"
        />
      </div>

      {/* input div */}
      <div>
        <label
          htmlFor="password"
          className="text:sm font-medium block mb-2 text-gray-300"
        >
          Your Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="border-2 outline-none sm:text:sm rounded-lg w-full focus:ring-blue-500 focus:border-blue-500 p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400"
          placeholder="********"
        />
      </div>

      <button
        type="submit"
        className="w-full text-white focus:ring-blue-300 font-medium rounded-lg text-sm
       px-5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange-s"
      >
        Login
      </button>

      <button className="flex w-full justify-end">
        <a
          href="#"
          className="text-brand-orange text-sm block w-full text-right hover:underline"
          onClick={() => handleClick('forgotPassword')}
        >
          Forgot Password?
        </a>
      </button>

      <div className="text-sm font-medium text-gray-300">
        Not Registered?{' '}
        <a
          href="#"
          className="text-blue-700 hover:underline"
          onClick={() => handleClick('register')}
        >
          Create Account
        </a>
      </div>
    </form>
  );
};
export default Login;
