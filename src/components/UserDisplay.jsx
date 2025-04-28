import React, { useContext } from 'react';
import { FavoriteUserContext } from './FavoriteUserContext';

const UserDisplay = () => {
  const { favoriteUser, setFavoriteUser } = useContext(FavoriteUserContext);

  const clearFavoriteUser = () => {
    setFavoriteUser(null);
  };

  return (
    <div className="mb-8 p-6 bg-gray-700 rounded-lg border-l-4 ">
      {favoriteUser ? (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-16 h-16 rounded-full  text-2xl font-bold">
              {favoriteUser.name.charAt(0)}
            </div>
            <div>
              <p className="text-xl font-medium ">
                {favoriteUser.name}
              </p>
              <p className="text-gray-400">{favoriteUser.email}</p>
            </div>
          </div>
          <button
  onClick={clearFavoriteUser}
  className="px-5 py-2 bg-gradient-to-tr from-blue-500 to-green-500 hover:from-blue-400 hover:to-green-400 rounded-md font-medium transition-colors duration-300 focus:outline-none"
>
  Clear Favorite
</button>

        </div>
      ) : (
        <p className="text-center text-gray-400 text-lg">No favorite user Choosed</p>
      )}
    </div>
  );
};

export default UserDisplay;