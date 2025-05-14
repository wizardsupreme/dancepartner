import React, { useState } from 'react';
import { MapPinIcon, FilterIcon } from 'lucide-react';
type DanceStyle = 'Salsa' | 'Bachata' | 'Tango' | 'Ballroom' | 'Hip Hop' | 'Contemporary' | 'Ballet' | 'Jazz' | 'Swing';
type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'Professional';
export const SearchScreen: React.FC = () => {
  const [distance, setDistance] = useState(25);
  const [ageRange, setAgeRange] = useState([18, 45]);
  const [selectedStyles, setSelectedStyles] = useState<DanceStyle[]>(['Salsa', 'Bachata']);
  const [selectedSkillLevels, setSelectedSkillLevels] = useState<SkillLevel[]>(['Intermediate', 'Advanced']);
  const allDanceStyles: DanceStyle[] = ['Salsa', 'Bachata', 'Tango', 'Ballroom', 'Hip Hop', 'Contemporary', 'Ballet', 'Jazz', 'Swing'];
  const allSkillLevels: SkillLevel[] = ['Beginner', 'Intermediate', 'Advanced', 'Professional'];
  const toggleStyle = (style: DanceStyle) => {
    if (selectedStyles.includes(style)) {
      setSelectedStyles(selectedStyles.filter(s => s !== style));
    } else {
      setSelectedStyles([...selectedStyles, style]);
    }
  };
  const toggleSkillLevel = (level: SkillLevel) => {
    if (selectedSkillLevels.includes(level)) {
      setSelectedSkillLevels(selectedSkillLevels.filter(l => l !== level));
    } else {
      setSelectedSkillLevels([...selectedSkillLevels, level]);
    }
  };
  return <div className="h-full overflow-y-auto bg-gray-50 p-4">
      <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-medium flex items-center">
            <MapPinIcon size={18} className="text-purple-600 mr-2" />
            Distance
          </h3>
          <span className="text-sm font-medium">{distance} miles</span>
        </div>
        <input type="range" min="1" max="100" value={distance} onChange={e => setDistance(parseInt(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600" />
      </div>
      <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-medium">Age Range</h3>
          <span className="text-sm font-medium">
            {ageRange[0]} - {ageRange[1]}
          </span>
        </div>
        <div className="relative pt-5">
          <input type="range" min="18" max="80" value={ageRange[0]} onChange={e => setAgeRange([parseInt(e.target.value), ageRange[1]])} className="absolute w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600" />
          <input type="range" min="18" max="80" value={ageRange[1]} onChange={e => setAgeRange([ageRange[0], parseInt(e.target.value)])} className="absolute w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600" />
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
        <h3 className="font-medium flex items-center mb-4">
          <div size={18} className="text-purple-600 mr-2" />
          Dance Styles
        </h3>
        <div className="flex flex-wrap gap-2">
          {allDanceStyles.map(style => <button key={style} onClick={() => toggleStyle(style)} className={`px-3 py-1.5 rounded-full text-sm ${selectedStyles.includes(style) ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-700'}`}>
              {style}
            </button>)}
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
        <h3 className="font-medium flex items-center mb-4">
          <FilterIcon size={18} className="text-purple-600 mr-2" />
          Skill Level
        </h3>
        <div className="flex flex-wrap gap-2">
          {allSkillLevels.map(level => <button key={level} onClick={() => toggleSkillLevel(level)} className={`px-3 py-1.5 rounded-full text-sm ${selectedSkillLevels.includes(level) ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-700'}`}>
              {level}
            </button>)}
        </div>
      </div>
      <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium mt-4">
        Apply Filters
      </button>
    </div>;
};