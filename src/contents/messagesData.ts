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
  {
    id: 1,
    name: "FrostFoe",
    handle: "FrostFoe",
    avatar: "https://miro.medium.com/v2/resize:fill:200:200/1*NB4yMzOmlsxstlSZYRHong.png",
    avatar_data_ai_hint: "user avatar",
    lastMessage: "I run on ice and sarcasm. Mostly sarcasm. 🥶",
    time: "2m",
    unread: true,
  },
  {
    id: 2,
    name: "Elon Mask",
    handle: "eMask",
    avatar: "https://imgcdn.stablediffusionweb.com/2024/11/28/203c2c6b-98fb-45c8-a4f5-58c80fd896f4.jpg",
    avatar_data_ai_hint: "user avatar",
    lastMessage: "Stop copying my eX nigggaFoe. 🤬",
    time: "1h",
    unread: false,
  },
  {
    id: 3,
    name: " Mark Zuckerberg",
    handle: "markZ",
    avatar: "https://i.pinimg.com/736x/c9/78/3b/c9783bb2f8fb2cec0dc3df01bf3a5710.jpg",
    avatar_data_ai_hint: "user avatar",
    lastMessage: "Meta just bought your message. You're welcome. 💸",
    time: "5h",
    unread: false,
  },
];