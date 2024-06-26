import { faker } from "@faker-js/faker";
import {
  ChatCircleDots,
  Gear,
  GearSix,
  Phone,
  SignOut,
  User,
  Users,
} from "phosphor-react";

const Profile_Menu = [
  {
    title: "Profile",
    icon: <User />,
    path: "/profile",
    id: 1,
  },
  {
    title: "Settings",
    icon: <Gear />,
    path: "/settings",
    id: 2,
  },
  {
    title: "Logout",
    icon: <SignOut />,
    path: "/auth/login",
    id: 3,
  },
];

const Nav_Buttons = [
  {
    index: 0,
    icon: <ChatCircleDots />,
    path: "/app",
  },
  {
    index: 1,
    icon: <Users />,
    path: "/group",
  },
  {
    index: 2,
    icon: <Phone />,
    path: "/call",
  },
];

const Nav_Setting = [
  {
    index: 3,
    icon: <GearSix />,
  },
];

const MembersList = [
  {
    id: 0,
    img: faker.image.avatar(),
    name: faker.name.fullName(),
    online: true,
  },
  {
    id: 1,
    img: faker.image.avatar(),
    name: faker.name.fullName(),
    online: false,
  },
  {
    id: 2,
    img: faker.image.avatar(),
    name: faker.name.fullName(),
    online: true,
  },
  {
    id: 3,
    img: faker.image.avatar(),
    name: faker.name.fullName(),
    online: true,
  },
  {
    id: 4,
    img: faker.image.avatar(),
    name: faker.name.fullName(),
    online: false,
  },
];

const callLogs = [
  {
    id: 0,
    img: faker.image.avatar(),
    name: faker.name.fullName(),
    missed: true,
    incoming: false,
  },
  {
    id: 1,
    img: faker.image.avatar(),
    name: faker.name.fullName(),
    missed: false,
    incoming: true,
  },
  {
    id: 2,
    img: faker.image.avatar(),
    name: faker.name.fullName(),
    missed: true,
    incoming: true,
  },
  {
    id: 3,
    img: faker.image.avatar(),
    name: faker.name.fullName(),
    missed: false,
    incoming: false,
  },
  {
    id: 4,
    img: faker.image.avatar(),
    name: faker.name.fullName(),
    missed: false,
    incoming: true,
  },
];

const ChatList = [
  {
    id: 0,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "9:36",
    unread: 0,
    pinned: true,
    online: true,
  },
  {
    id: 1,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "12:02",
    unread: 2,
    pinned: true,
    online: false,
  },
  {
    id: 2,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "10:35",
    unread: 3,
    pinned: false,
    online: true,
  },
  {
    id: 3,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "04:00",
    unread: 0,
    pinned: false,
    online: true,
  },
  {
    id: 4,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "08:42",
    unread: 0,
    pinned: false,
    online: false,
  },
  {
    id: 5,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "08:42",
    unread: 0,
    pinned: false,
    online: false,
  },
  {
    id: 6,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "08:42",
    unread: 0,
    pinned: false,
    online: false,
  },
  {
    id: 7,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "08:42",
    unread: 0,
    pinned: false,
    online: false,
  },
];

const Chat_History = [
  {
    type: "msg",
    message: "Hi 👋🏻, How are ya ?",
    incoming: true,
    outgoing: false,
  },
  {
    type: "divider",
    text: "Today",
  },
  {
    type: "msg",
    message: "Hi 👋 Panda, not bad, u ?",
    incoming: false,
    outgoing: true,
  },
  {
    type: "msg",
    message: "Can you send me an abstarct image?",
    incoming: false,
    outgoing: true,
  },
  {
    type: "msg",
    message: "Ya sure, sending you a pic",
    incoming: true,
    outgoing: false,
  },

  {
    type: "msg",
    subtype: "img",
    message: "Here You Go",
    img: faker.image.abstract(),
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    message: "Can you please send this in file format?",
    incoming: false,
    outgoing: true,
  },
  {
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "link",
    preview: faker.image.cats(),
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "reply",
    reply: "This is a reply",
    message: "Yep, I can also do that",
    incoming: false,
    outgoing: true,
  },
];

const Message_options = [
  {
    id: 1,
    title: "Reply",
  },
  {
    id: 2,
    title: "React to message",
  },
  {
    id: 3,
    title: "Forward message",
  },
  {
    id: 4,
    title: "Star message",
  },
  {
    id: 5,
    title: "Report",
  },
  {
    id: 6,
    title: "Delete Message",
  },
];

const SHARED_DOCS = [
  {
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "doc",
    message: "Reports",
    incoming: false,
    outgoing: true,
  },
  {
    type: "msg",
    subtype: "doc",
    message: "Results",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "doc",
    message: "Homework",
    incoming: false,
    outgoing: true,
  },
];
const SHARED_LINK = [
  {
    type: "msg",
    subtype: "link",
    preview: faker.image.cats(),
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "link",
    preview: faker.image.animals(),
    message: "animal",
    incoming: false,
    outgoing: true,
  },
  {
    type: "msg",
    subtype: "link",
    preview: faker.image.city(),
    message: "let's go her",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "link",
    preview: faker.image.fashion(),
    message: "fashion",
    incoming: false,
    outgoing: true,
  },
];

export {
  Profile_Menu,
  Nav_Setting,
  Nav_Buttons,
  ChatList,
  Chat_History,
  Message_options,
  SHARED_DOCS,
  SHARED_LINK,
  callLogs,
  MembersList,
};
