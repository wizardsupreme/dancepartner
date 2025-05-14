import React from 'react';
type DanceStyle = 'Salsa' | 'Bachata' | 'Tango' | 'Ballroom' | 'Hip Hop' | 'Contemporary';
type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'Professional';
export type DancerProfile = {
  id: string;
  name: string;
  age: number;
  image: string;
  styles: DanceStyle[];
  skillLevel: SkillLevel;
  location: string;
  bio: string;
};
type ProfileCardProps = {
  profile: DancerProfile;
};
export const ProfileCard: React.FC<ProfileCardProps> = ({
  profile
}) => {
  return <div className="relative w-full h-full rounded-xl overflow-hidden shadow-xl bg-white">
      <div className="absolute inset-0">
        <img src={profile.image} alt={profile.name} className="w-full h-full object-cover" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
        <div className="text-white">
          <h2 className="text-2xl font-bold">
            {profile.name}, {profile.age}
          </h2>
          <div className="flex flex-wrap gap-2 mt-2">
            {profile.styles.map(style => <span key={style} className="px-2 py-1 bg-purple-500 rounded-full text-xs">
                {style}
              </span>)}
          </div>
          <div className="mt-2 flex items-center">
            <span className="px-2 py-1 bg-blue-500 rounded-full text-xs mr-2">
              {profile.skillLevel}
            </span>
            <span className="text-sm">{profile.location}</span>
          </div>
          <p className="mt-2 text-sm line-clamp-2">{profile.bio}</p>
        </div>
      </div>
    </div>;
};