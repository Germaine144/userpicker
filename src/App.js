import React from 'react';
import { FavoriteUserProvider } from './components/FavoriteUserContext';
import UserPicker from './components/UserPicker';
import UserDisplay from './components/UserDisplay';

function App() {
  return (
    <FavoriteUserProvider>
      <div className="min-h-screen bg-gray-900 text-white p-6">
        <div className="max-w-4xl mx-auto border border-gray-700 rounded-xl overflow-hidden">
          <div className="bg-gradient-to-r from-teal-500 to-emerald-500 p-5">
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