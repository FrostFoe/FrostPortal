
import type { DetailedTweetType } from '@/components/twitter/DetailedTweetView';
import type { ReplyType } from '@/components/twitter/ReplyCard';

export const mainTweetDetailData: DetailedTweetType = {
  id: "tweet1_detail",
  retweetedBy: "The UX Person",
  user: {
    name: "karennne",
    handle: "karennne",
    avatarUrl: "https://placehold.co/48x48.png?text=K",
    avatar_data_ai_hint: "woman smiling",
  },
  content: "~~ hiring for a UX Lead in Sydney - who should I talk to?",
  detailedTimestamp: "09:28 · 2/21/20",
  source: "Twitter Web App",
  retweetCount: 6,
  likeCount: 15,
};

export const repliesForTweetData: ReplyType[] = [
  {
    id: "reply1",
    user: {
      name: "kiero_d",
      handle: "kiero_d",
      avatarUrl: "https://placehold.co/48x48.png?text=KD",
      avatar_data_ai_hint: "man portrait",
    },
    replyingTo: "@karennne",
    content: "Interesting Nicola that not one reply or tag on this #UX talent shout out in the 24hrs since your tweet here......🤔",
    timestamp: "2d",
    replyCount: 1,
    retweetCount: 0,
    likeCount: 1,
  },
  {
    id: "reply2",
    user: {
      name: "karennne",
      handle: "karennne",
      avatarUrl: "https://placehold.co/48x48.png?text=K",
      avatar_data_ai_hint: "woman smiling",
    },
    replyingTo: "@kiero_d",
    content: "Maybe I forgot the hashtags. #hiringux #designjobs #sydneyux #sydneydesigners #uxjobs",
    timestamp: "2d",
    replyCount: 0,
    retweetCount: 0,
    likeCount: 1,
    isLastReply: false,
  },
];
