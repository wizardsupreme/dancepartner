import React, { useState } from 'react';
import { ProfileCard, DancerProfile } from './ProfileCard';
import { XIcon, HeartIcon } from 'lucide-react';
const sampleProfiles: DancerProfile[] = [{
  id: '1',
  name: 'Sofia',
  age: 28,
  image: 'https://images.unsplash.com/photo-1534339480783-6816b68be76c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  styles: ['Salsa', 'Bachata'],
  skillLevel: 'Advanced',
  location: 'New York, NY',
  bio: 'Professional salsa dancer looking for a partner for upcoming competitions. I practice 4 times a week and have 8 years of experience.'
}, {
  id: '2',
  name: 'Marco',
  age: 32,
  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  styles: ['Tango', 'Ballroom'],
  skillLevel: 'Professional',
  location: 'Los Angeles, CA',
  bio: 'Tango instructor looking for a partner to practice new choreography. Available weekends and evenings.'
}, {
  id: '3',
  name: 'Alicia',
  age: 25,
  image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  styles: ['Hip Hop', 'Contemporary'],
  skillLevel: 'Intermediate',
  location: 'Chicago, IL',
  bio: 'Dance enthusiast with 3 years of experience. Looking for someone to practice with twice a week.'
}];
export const SwipeScreen: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null);
  const handleSwipe = (direction: 'left' | 'right') => {
    setSwipeDirection(direction);
    // Simulate card animation before moving to next profile
    setTimeout(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % sampleProfiles.length);
      setSwipeDirection(null);
    }, 300);
  };
  const currentProfile = sampleProfiles[currentIndex];
  return <div className="relative h-full w-full flex flex-col">
      <div className="flex-1 p-4 relative">
        <div className={`absolute inset-0 m-4 transition-all duration-300 ${swipeDirection === 'left' ? 'transform -translate-x-full rotate-[-20deg] opacity-0' : swipeDirection === 'right' ? 'transform translate-x-full rotate-[20deg] opacity-0' : ''}`}>
          <ProfileCard profile={currentProfile} />
        </div>
      </div>
      <div className="p-6 flex justify-center space-x-8">
        <button onClick={() => handleSwipe('left')} className="w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-lg border border-red-500 text-red-500">
          <XIcon size={30} />
        </button>
        <button onClick={() => handleSwipe('right')} className="w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-lg border border-green-500 text-green-500">
          <HeartIcon size={30} fill="currentColor" />
        </button>
      </div>
    </div>;
};