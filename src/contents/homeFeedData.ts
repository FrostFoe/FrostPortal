
import type { Tweet } from '@/components/twitter/TweetCard';

export const initialHomeTweets: Tweet[] = [
  {
    id: 'tweet1',
    avatarUrl: 'https://placehold.co/48x48.png?text=PN',
    avatar_data_ai_hint: 'person smiling',
    name: 'Placeholder Name',
    handle: 'placeholderdev',
    timestamp: '2h',
    content: 'Just setting up my twttr clone with @nextjs and #tailwindcss! Excited to see how this turns out. This is a longer tweet to test text wrapping and overall layout to ensure it looks good on mobile screens.',
    replyCount: 28,
    retweetCount: 25,
    likeCount: 21,
    imageAttachmentUrl: 'https://placehold.co/600x400.png',
    data_ai_hint: 'code computer'
  },
  {
    id: 'tweet2',
    avatarUrl: 'https://placehold.co/48x48.png?text=AI',
    avatar_data_ai_hint: 'robot head',
    name: 'AI Enthusiast',
    handle: 'futureisai',
    timestamp: '3h',
    content: 'Exploring the possibilities of generative AI. The future is fascinating! #AI #MachineLearning',
    replyCount: 15,
    retweetCount: 42,
    likeCount: 102,
    data_ai_hint: 'robot brain'
  },
  {
    id: 'tweet3',
    avatarUrl: 'https://placehold.co/48x48.png?text=JS',
    avatar_data_ai_hint: 'js logo',
    name: 'JavaScript Fan',
    handle: 'jslover',
    timestamp: '5h',
    content: 'What are your favorite new ES2023 features? Mine is Array.prototype.toSorted()!',
    replyCount: 5,
    retweetCount: 10,
    likeCount: 30,
    data_ai_hint: 'logo javascript'
  },
];
