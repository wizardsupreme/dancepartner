import React from 'react';
import { HomeIcon, UserIcon, PlayIcon, MessageSquareIcon, HeartIcon, SearchIcon } from 'lucide-react';
type NavigationProps = {
  currentScreen: string;
  setCurrentScreen: (screen: string) => void;
};
export const Navigation: React.FC<NavigationProps> = ({
  currentScreen,
  setCurrentScreen
}) => {
  const navItems = [{
    id: 'swipe',
    icon: HomeIcon,
    label: 'Swipe'
  }, {
    id: 'timeline',
    icon: PlayIcon,
    label: 'Timeline'
  }, {
    id: 'likes',
    icon: HeartIcon,
    label: 'Likes'
  }, {
    id: 'chat',
    icon: MessageSquareIcon,
    label: 'Chat'
  }, {
    id: 'profile',
    icon: UserIcon,
    label: 'Profile'
  }];
  return <nav className="bg-white border-t border-gray-200 flex justify-around items-center p-3">
      {navItems.map(item => <button key={item.id} className={`flex flex-col items-center p-2 ${currentScreen === item.id ? 'text-purple-600' : 'text-gray-500'}`} onClick={() => setCurrentScreen(item.id)}>
          <item.icon size={24} />
          <span className="text-xs mt-1">{item.label}</span>
        </button>)}
      <button className={`flex flex-col items-center p-2 ${currentScreen === 'search' ? 'text-purple-600' : 'text-gray-500'}`} onClick={() => setCurrentScreen('search')}>
        <SearchIcon size={24} />
        <span className="text-xs mt-1">Search</span>
      </button>
    </nav>;
};