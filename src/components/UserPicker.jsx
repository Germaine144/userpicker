import React, { useContext, useState, useEffect } from 'react';
import { FavoriteUserContext } from './FavoriteUserContext';

const UserPicker = () => {
  const { setFavoriteUser, favoriteUser } = useContext(FavoriteUserContext);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUsers(data);
        setError(null);
      } catch (error) {
        console.error('Error fetching users:', error);
        setError('Failed to load users. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const handleUserClick = (user) => {
    setFavoriteUser({ name: user.name, email: user.email });
  };

  if (loading) {
    return (
      <div style={styles.loaderContainer}>
        <div style={styles.loader}></div>
    
      </div>
    );
  }

  if (error) {
    return <div style={styles.errorBox}>{error}</div>;
  }

  return (
    <div>
      <h2 style={styles.title} > </h2>
      <div style={styles.userGrid}>
        {users.map((user) => {
          const isSelected = favoriteUser && favoriteUser.email === user.email;
          return (
            <div
              key={user.id}
              onClick={() => handleUserClick(user)}
              style={isSelected ? styles.selectedUserCard : styles.userCard}
            >
              <div style={styles.userInfo}>
                <div style={isSelected ? styles.selectedAvatar : styles.avatar}>
                  {user.name.charAt(0)}{user.name.split(' ')[1]?.charAt(0) || ''}
                </div>
                <div style={styles.userDetails}>
                  <p style={isSelected ? styles.selectedName : styles.name}>
                    {user.name}
                  </p>
                  <p style={styles.email}>{user.email}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const styles = {
  loaderContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '16px',
  },
  loader: {
    width: '50px',
    height: '50px',
    border: '4px solid #00bfae',
    borderTop: '4px solid transparent',
    borderRadius: '50%',
  },
  loadingText: {
    color: '',
    fontSize: '18px',
    fontWeight: '500',
    marginTop: '8px',
  },
  errorBox: {
    padding: '16px',
    backgroundColor: '#f87171',
    color: '#ffffff',
    borderLeft: '4px solid #ef4444',
    borderRadius: '8px',
    marginTop: '20px',
  },
  title: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#00bfae',
    marginBottom: '24px',
  },
  userGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '16px',
    '@media (min-width: 768px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
  },
  userCard: {
    backgroundColor: '#374151',
    padding: '16px',
    borderRadius: '8px',
    cursor: 'pointer',
    border: '1px solid #4b5563',
    transition: 'background-color 0.3s',
  },
  selectedUserCard: {
    backgroundColor: '#1f2937',
    padding: '16px',
    borderRadius: '8px',
    cursor: 'pointer',
    border: '1px solid #3b82f6',
  },
  userInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  avatar: {
    width: '40px',
    height: '40px',
    backgroundColor: '#6b7280',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8px',
    color: '#ffffff',
    fontWeight: 'bold',
  },
  selectedAvatar: {
    width: '40px',
    height: '40px',
    backgroundColor: '#3b82f6',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8px',
    color: '#ffffff',
    fontWeight: 'bold',
  },
  userDetails: {
    flex: 1,
  },
  name: {
    fontWeight: '500',
    color: '#ffffff',
  },
  selectedName: {
    fontWeight: '500',
    color: '#00bfae',
  },
  email: {
    fontSize: '12px',
    color: '#9ca3af',
  },
  checkmark: {
    color: '#00bfae',
    fontSize: '24px',
  },
};

export default UserPicker;
