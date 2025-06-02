import type { Tweet } from "@/components/twitter/TweetCard";

export const userProfileData = {
  name: "Pixsellz",
  handle: "pixsellz",
  avatarUrl: "https://placehold.co/80x80.png?text=P",
  avatar_data_ai_hint: "company logo",
  bio: "Digital Goodies Team - Web & Mobile UI/UX development; Graphics; Illustrations",
  website: "pixsellz.io",
  joinedDate: "Joined September 2018",
  followingCount: 217,
  followersCount: 118,
  headerImageUrl: "https://placehold.co/600x200.png",
  header_data_ai_hint: "abstract background",
};

export const profileTweetsData: Tweet[] = [
  {
    id: "profile_tweet1",
    avatarUrl: "https://placehold.co/48x48.png?text=P",
    avatar_data_ai_hint: "company logo",
    name: "Pixsellz",
    handle: "pixsellz",
    timestamp: "2/14/20",
    content:
      "Must have icon collections. The Best Free Icon Packs Everyone Must Download i... graphicmama.com",
    replyCount: 0,
    retweetCount: 1,
    likeCount: 1,
    imageAttachmentUrl: "https://placehold.co/500x281.png",
    data_ai_hint: "icon collection",
  },
  {
    id: "profile_tweet2",
    avatarUrl: "https://placehold.co/48x48.png?text=KK",
    avatar_data_ai_hint: "man profile",
    name: "Komol Kuchkarov",
    handle: "kkuchka...",
    timestamp: "2/13/20",
    content:
      "Quickly create a low-fi wireframe version of your web projects with ready-to-use layouts of Scheme Constructor. Get it now on 👉 constructor.pixsellz.io",
    replyCount: 0,
    retweetCount: 0,
    likeCount: 1,
    imageAttachmentUrl: "https://placehold.co/500x281.png",
    data_ai_hint: "website screenshot",
  },
];
