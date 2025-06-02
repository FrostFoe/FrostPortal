import type { NotificationItem } from "@/components/twitter/NotificationItemCard";

export const initialNotificationsData: NotificationItem[] = [
  {
    id: "1",
    avatarUrl: "https://placehold.co/48x48.png",
    userName: "Saad Drusteer",
    isVerified: true,
    timestamp: "1h",
    mainText:
      "and **others** liked your article: @@Migrating from Sketch to Figma@@ ##smashingdrusteer.com/2020/01/migrat…",
    iconType: "like",
    data_ai_hint: "profile avatar",
  },
  {
    id: "2",
    avatarUrl: "https://placehold.co/48x48.png",
    userName: "AI News",
    timestamp: "2h",
    mainText:
      "New advancements in **LLM performance** announced! Read more: @@example.com/ainews@@ #AI #Tech",
    iconType: "mention",
    data_ai_hint: "tech logo",
  },
  {
    id: "3",
    avatarUrl: "https://placehold.co/48x48.png",
    userName: "Twitter Team",
    isVerified: true,
    timestamp: "3h",
    mainText: "You have new followers including **Jane Doe**.",
    iconType: "follow",
    data_ai_hint: "team logo",
  },
];
