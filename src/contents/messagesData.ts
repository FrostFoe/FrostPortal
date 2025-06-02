
export interface Message {
  id: number;
  name: string;
  handle: string;
  avatar: string;
  avatar_data_ai_hint?: string;
  lastMessage: string;
  time: string;
  unread: boolean;
}

export const directMessagesData: Message[] = [
  { id: 1, name: "Dev Helper", handle: "devhelp", avatar: "https://placehold.co/48x48.png?text=DH", avatar_data_ai_hint: "user avatar", lastMessage: "Sure, I can help with that!", time: "2m", unread: true },
  { id: 2, name: "Design Team", handle: "designers", avatar: "https://placehold.co/48x48.png?text=DT", avatar_data_ai_hint: "user avatar", lastMessage: "Check out the new mockups.", time: "1h", unread: false },
  { id: 3, name: "Support Bot", handle: "supportbot", avatar: "https://placehold.co/48x48.png?text=SB", avatar_data_ai_hint: "user avatar", lastMessage: "How can I assist you today?", time: "5h", unread: false },
];
