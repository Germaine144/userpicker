import React from 'react';
import { FavoriteUserProvider } from './components/FavoriteUserContext';
import UserPicker from './components/UserPicker';
import UserDisplay from './components/UserDisplay';

function App() {
  return (
    <FavoriteUserProvider>
      <div className="min-h-screen bg-gray-900 text-white p-6">
        <div className="max-w-4xl mx-auto border border-gray-700 rounded-xl overflow-hidden">
          <div className="px-5 py-2 bg-gradient-to-tr from-blue-500 to-green-500 hover:from-blue-400 hover:to-green-400 rounded-md font-medium transition-colors duration-300 focus:outline-none">
            <h1 className="text-4xl font-extrabold tracking-tight text-center">Favorite User Picker</h1>
          </div>
          <div className="p-6 bg-gray-800">
            <UserDisplay />
            <UserPicker />
          </div>
        </div>
      </div>
    </FavoriteUserProvider>
  );
}

export default App;