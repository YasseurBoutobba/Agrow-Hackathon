import feed from "../../assets/nav/feed.svg";
import account from "../../assets/nav/profile.svg";
import projects from "../../assets/nav/projects.svg";
import post from "../../assets/nav/publish.svg";
import settings from "../../assets/nav/settings.svg";

import acfeed from "../../assets/active nav/feed.svg";
import acprofile from "../../assets/active nav/profile.svg";
import acpost from "../../assets/active nav/publish.svg";
import acsettings from "../../assets/active nav/settings.svg";
import acprojects from "../../assets/active nav/projects.svg";

export const navItems = [
  ["Feed", feed, acfeed],
  ["Account", account, acprofile],
  ["Projects", projects, acprojects],
  ["Post", post, acpost],
  ["Settings", settings, acsettings],
];
