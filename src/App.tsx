import React, { useState } from 'react';
import { SwipeScreen } from './components/SwipeScreen';
import { ProfileScreen } from './components/ProfileScreen';
import { TimelineScreen } from './components/TimelineScreen';
import { ChatScreen } from './components/ChatScreen';
import { LikesScreen } from './components/LikesScreen';
import { SearchScreen } from './components/SearchScreen';
import { Navigation } from './components/Navigation';
import { AppHeader } from './components/AppHeader';
export function App() {
  const [currentScreen, setCurrentScreen] = useState('swipe');
  const renderScreen = () => {
    switch (currentScreen) {
      case 'swipe':
        return <SwipeScreen />;
      case 'profile':
        return <ProfileScreen />;
      case 'timeline':
        return <TimelineScreen />;
      case 'chat':
        return <ChatScreen />;
      case 'likes':
        return <LikesScreen />;
      case 'search':
        return <SearchScreen />;
      default:
        return <SwipeScreen />;
    }
  };
  return <div className="flex flex-col h-screen w-full bg-gray-100 max-w-md mx-auto overflow-hidden">
      <AppHeader currentScreen={currentScreen} />
      <div className="flex-1 overflow-hidden">{renderScreen()}</div>
      <Navigation currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />
    </div>;
}