import React from 'react';
import { HeartIcon, MessageSquareIcon, ShareIcon } from 'lucide-react';
type VideoPost = {
  id: string;
  username: string;
  avatar: string;
  videoUrl: string;
  caption: string;
  likes: number;
  comments: number;
};
const sampleVideos: VideoPost[] = [{
  id: '1',
  username: 'dance_pro',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
  videoUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  caption: 'Practicing new salsa routine! #DanceLife',
  likes: 342,
  comments: 28
}, {
  id: '2',
  username: 'tango_master',
  avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
  videoUrl: 'https://images.unsplash.com/photo-1504609813442-a8924e83f76e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  caption: 'Competition highlights from last weekend',
  likes: 589,
  comments: 45
}];
export const TimelineScreen: React.FC = () => {
  return <div className="h-full overflow-y-auto bg-black">
      {sampleVideos.map(video => <div key={video.id} className="relative h-full min-h-[calc(100vh-140px)]">
          <div className="absolute inset-0">
            {/* This would be a video in a real app */}
            <img src={video.videoUrl} alt="Video thumbnail" className="w-full h-full object-cover" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <div className="flex items-center">
              <img src={video.avatar} alt={video.username} className="w-10 h-10 rounded-full border-2 border-white" />
              <span className="ml-2 text-white font-medium">
                {video.username}
              </span>
            </div>
            <p className="text-white mt-2">{video.caption}</p>
          </div>
          <div className="absolute right-4 bottom-20 flex flex-col items-center space-y-6">
            <button className="flex flex-col items-center">
              <div className="w-10 h-10 bg-black/50 rounded-full flex items-center justify-center">
                <HeartIcon size={24} className="text-white" />
              </div>
              <span className="text-white text-xs mt-1">{video.likes}</span>
            </button>
            <button className="flex flex-col items-center">
              <div className="w-10 h-10 bg-black/50 rounded-full flex items-center justify-center">
                <MessageSquareIcon size={24} className="text-white" />
              </div>
              <span className="text-white text-xs mt-1">{video.comments}</span>
            </button>
            <button className="flex flex-col items-center">
              <div className="w-10 h-10 bg-black/50 rounded-full flex items-center justify-center">
                <ShareIcon size={24} className="text-white" />
              </div>
              <span className="text-white text-xs mt-1">Share</span>
            </button>
          </div>
        </div>)}
    </div>;
};