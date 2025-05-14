import React from 'react';
type AppHeaderProps = {
  currentScreen: string;
};
export const AppHeader: React.FC<AppHeaderProps> = ({
  currentScreen
}) => {
  const getTitle = () => {
    switch (currentScreen) {
      case 'swipe':
        return 'Find Dance Partners';
      case 'profile':
        return 'My Profile';
      case 'timeline':
        return 'Dance Timeline';
      case 'chat':
        return 'Messages';
      case 'likes':
        return 'Likes';
      case 'search':
        return 'Search Preferences';
      default:
        return 'Dance Partner Finder';
    }
  };
  return <header className="bg-purple-600 text-white p-4 shadow-md">
      <h1 className="text-xl font-bold text-center">{getTitle()}</h1>
    </header>;
};