import React, { useState } from 'react';
import { UserIcon } from 'lucide-react';
type Like = {
  id: string;
  name: string;
  age: number;
  image: string;
  styles: string[];
  matchPercentage: number;
};
const sampleLikes: Like[] = [{
  id: '1',
  name: 'David',
  age: 31,
  image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
  styles: ['Salsa', 'Bachata'],
  matchPercentage: 92
}, {
  id: '2',
  name: 'Emma',
  age: 27,
  image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
  styles: ['Contemporary', 'Hip Hop'],
  matchPercentage: 85
}, {
  id: '3',
  name: 'Michael',
  age: 29,
  image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
  styles: ['Tango', 'Ballroom'],
  matchPercentage: 78
}];
export const LikesScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'likes' | 'matches'>('likes');
  return <div className="h-full bg-white flex flex-col">
      <div className="flex border-b border-gray-200">
        <button className={`flex-1 py-3 text-center font-medium ${activeTab === 'likes' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500'}`} onClick={() => setActiveTab('likes')}>
          People Who Liked You
        </button>
        <button className={`flex-1 py-3 text-center font-medium ${activeTab === 'matches' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500'}`} onClick={() => setActiveTab('matches')}>
          Matches
        </button>
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        {activeTab === 'likes' ? <div className="grid grid-cols-2 gap-4">
            {sampleLikes.map(like => <div key={like.id} className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
                <div className="relative aspect-square">
                  <img src={like.image} alt={like.name} className="w-full h-full object-cover" />
                  <div className="absolute top-2 right-2 bg-purple-600 text-white rounded-full px-2 py-1 text-xs font-bold">
                    {like.matchPercentage}%
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="font-medium">
                    {like.name}, {like.age}
                  </h3>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {like.styles.map(style => <span key={style} className="px-2 py-0.5 bg-purple-100 text-purple-800 rounded-full text-xs">
                        {style}
                      </span>)}
                  </div>
                </div>
              </div>)}
          </div> : <div className="h-full flex flex-col items-center justify-center text-center p-6">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <UserIcon size={32} className="text-purple-600" />
            </div>
            <h3 className="text-lg font-medium">No matches yet</h3>
            <p className="text-gray-500 mt-2">
              Start swiping to find your perfect dance partner!
            </p>
          </div>}
      </div>
    </div>;
};