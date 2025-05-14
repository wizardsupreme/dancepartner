import React from 'react';
import { UserIcon, StarIcon, MapPinIcon, MusicIcon } from 'lucide-react';
export const ProfileScreen: React.FC = () => {
  return <div className="h-full overflow-y-auto bg-white">
      <div className="relative h-64">
        <img src="https://images.unsplash.com/photo-1547153760-18fc86324498?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Profile cover" className="w-full h-full object-cover" />
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
          <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
      <div className="mt-20 px-6">
        <h1 className="text-2xl font-bold text-center">Sophia Johnson, 29</h1>
        <div className="flex justify-center mt-2">
          <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
            Pro Member
          </span>
        </div>
        <div className="mt-6 space-y-4">
          <div className="flex items-center">
            <MusicIcon size={20} className="text-purple-600 mr-3" />
            <div>
              <h3 className="font-medium">Dance Styles</h3>
              <div className="flex flex-wrap gap-2 mt-1">
                <span className="px-2 py-1 bg-purple-100 rounded-full text-xs text-purple-800">
                  Salsa
                </span>
                <span className="px-2 py-1 bg-purple-100 rounded-full text-xs text-purple-800">
                  Bachata
                </span>
                <span className="px-2 py-1 bg-purple-100 rounded-full text-xs text-purple-800">
                  Contemporary
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <StarIcon size={20} className="text-purple-600 mr-3" />
            <div>
              <h3 className="font-medium">Skill Level</h3>
              <p className="text-sm text-gray-600">
                Advanced - Dancing for 7 years
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <MapPinIcon size={20} className="text-purple-600 mr-3" />
            <div>
              <h3 className="font-medium">Location</h3>
              <p className="text-sm text-gray-600">New York, NY</p>
            </div>
          </div>
          <div className="pt-2">
            <h3 className="font-medium">About Me</h3>
            <p className="text-sm text-gray-600 mt-1">
              Professional dancer specializing in Latin styles. Looking for a
              committed partner for upcoming competitions. I practice 4 times a
              week and have performed in over 20 showcases.
            </p>
          </div>
        </div>
        <div className="mt-8 pb-8">
          <h3 className="font-medium mb-3">Dance Portfolio</h3>
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3, 4, 5, 6].map(item => <div key={item} className="aspect-square bg-gray-200 rounded-md overflow-hidden">
                <img src={`https://images.unsplash.com/photo-${1550026593 + item * 1000}-cfw9n1c8vq0?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80`} alt={`Portfolio item ${item}`} className="w-full h-full object-cover" />
              </div>)}
          </div>
        </div>
      </div>
    </div>;
};