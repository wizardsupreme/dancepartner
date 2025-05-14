import React, { useState } from 'react';
import { SendIcon } from 'lucide-react';
type ChatMessage = {
  id: string;
  sender: 'user' | 'other';
  text: string;
  timestamp: string;
};
type ChatConversation = {
  id: string;
  name: string;
  avatar: string;
  lastActive: string;
  messages: ChatMessage[];
};
const sampleConversations: ChatConversation[] = [{
  id: '1',
  name: 'Marco',
  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
  lastActive: '2 min ago',
  messages: [{
    id: '1',
    sender: 'other',
    text: 'Hi there! I saw your profile and I think we would make great dance partners.',
    timestamp: '10:30 AM'
  }, {
    id: '2',
    sender: 'user',
    text: 'Hey Marco! Thanks for reaching out. What dance styles are you interested in?',
    timestamp: '10:32 AM'
  }, {
    id: '3',
    sender: 'other',
    text: 'I specialize in tango, but I also enjoy salsa. What about you?',
    timestamp: '10:33 AM'
  }]
}, {
  id: '2',
  name: 'Alicia',
  avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
  lastActive: '1 hour ago',
  messages: [{
    id: '1',
    sender: 'user',
    text: 'Hi Alicia! Would you be interested in practicing together this weekend?',
    timestamp: '9:15 AM'
  }, {
    id: '2',
    sender: 'other',
    text: 'Hi! That sounds great. What time works for you?',
    timestamp: '9:20 AM'
  }]
}];
export const ChatScreen: React.FC = () => {
  const [selectedChat, setSelectedChat] = useState<ChatConversation | null>(null);
  if (selectedChat) {
    return <div className="h-full flex flex-col bg-gray-100">
        <div className="bg-white p-3 flex items-center shadow-sm">
          <button onClick={() => setSelectedChat(null)} className="text-purple-600 mr-3">
            Back
          </button>
          <img src={selectedChat.avatar} alt={selectedChat.name} className="w-8 h-8 rounded-full" />
          <div className="ml-2">
            <h3 className="font-medium">{selectedChat.name}</h3>
            <p className="text-xs text-gray-500">{selectedChat.lastActive}</p>
          </div>
        </div>
        <div className="flex-1 p-4 overflow-y-auto">
          {selectedChat.messages.map(message => <div key={message.id} className={`mb-3 max-w-[80%] ${message.sender === 'user' ? 'ml-auto' : 'mr-auto'}`}>
              <div className={`p-3 rounded-lg ${message.sender === 'user' ? 'bg-purple-600 text-white rounded-br-none' : 'bg-white text-gray-800 rounded-bl-none'}`}>
                {message.text}
              </div>
              <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-right' : ''}`}>
                {message.timestamp}
              </p>
            </div>)}
        </div>
        <div className="p-3 bg-white border-t">
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
            <input type="text" placeholder="Type a message..." className="flex-1 bg-transparent outline-none" />
            <button className="ml-2 text-purple-600">
              <SendIcon size={20} />
            </button>
          </div>
        </div>
      </div>;
  }
  return <div className="h-full overflow-y-auto bg-gray-50">
      {sampleConversations.map(chat => <button key={chat.id} className="w-full p-4 flex items-center border-b border-gray-200 bg-white" onClick={() => setSelectedChat(chat)}>
          <img src={chat.avatar} alt={chat.name} className="w-12 h-12 rounded-full" />
          <div className="ml-3 text-left">
            <h3 className="font-medium">{chat.name}</h3>
            <p className="text-sm text-gray-500 line-clamp-1">
              {chat.messages[chat.messages.length - 1].text}
            </p>
          </div>
          <div className="ml-auto text-xs text-gray-500">
            {chat.messages[chat.messages.length - 1].timestamp}
          </div>
        </button>)}
    </div>;
};