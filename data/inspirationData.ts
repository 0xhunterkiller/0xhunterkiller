// data/inspirationsData.ts

export interface InspirationItem {
  title: string;
  description: string;
  platform: string; // e.g., YouTube, Medium, Substack
  type: "article" | "video" | "talk";
  link: string;
}

export const inspirations: InspirationItem[] = [
  {
    title: "The Calm Engineer — Incident Response at Scale",
    description:
      "A brilliant talk on blameless postmortems and staying composed during high-stakes outages.",
    platform: "YouTube",
    type: "video",
    link: "https://www.youtube.com/watch?v=0qotVMX-J5s",
  },
  {
    title: "The Mythical Man Month — Lessons That Still Hold True",
    description:
      "Fred Brooks’ timeless essay on the fallacies of software scheduling and coordination.",
    platform: "Medium",
    type: "article",
    link: "https://medium.com/@some-author/the-mythical-man-month-lessons-53e6e5aeb993",
  },
  {
    title: "Google SRE Book — Chapter: Emergency Response",
    description:
      "The canonical source for incident management principles that inspired the SRE movement.",
    platform: "Google SRE Book",
    type: "article",
    link: "https://sre.google/sre-book/handling-emergencies/",
  },
  {
    title: "Brendan Gregg — Thinking About Performance",
    description:
      "A deep dive into the philosophy of performance analysis, flame graphs, and engineering intuition.",
    platform: "YouTube",
    type: "video",
    link: "https://www.youtube.com/watch?v=FJW8nGV4jxY",
  },
  {
    title: "Dan North — Embracing Uncertainty",
    description:
      "A thought-provoking talk about why we should optimize for change, not stability.",
    platform: "InfoQ",
    type: "talk",
    link: "https://www.infoq.com/presentations/embracing-uncertainty/",
  },
  {
    title: "Etsy’s Culture of Observability",
    description:
      "How early observability and DevOps culture shaped Etsy’s engineering DNA.",
    platform: "YouTube",
    type: "video",
    link: "https://www.youtube.com/watch?v=EumXakXyCqY",
  },
  {
    title: "The Systems Thinker’s Guide to Root Cause Analysis",
    description:
      "An exploration of how to find and fix systemic issues, not symptoms.",
    platform: "Substack",
    type: "article",
    link: "https://systems.substack.com/p/root-cause-analysis-guide",
  },
  {
    title: "Charity Majors — Observability Is More Than Monitoring",
    description:
      "An engineer’s reflection on why debugging production is an art of storytelling and curiosity.",
    platform: "Honeycomb Blog",
    type: "article",
    link: "https://www.honeycomb.io/blog/observability-is-more-than-monitoring",
  },
  {
    title: "Netflix Chaos Engineering — The Birth of Chaos Monkey",
    description:
      "The legendary story of how Netflix built resilience through intentional failure.",
    platform: "Netflix Tech Blog",
    type: "article",
    link: "https://netflixtechblog.com/the-netflix-simian-army-16e57fbab116",
  },
  {
    title: "SRECon: The Day Everything Broke",
    description:
      "A hilarious, humbling war story from an SRE who learned the hard way how fragile systems can be.",
    platform: "YouTube",
    type: "talk",
    link: "https://www.youtube.com/watch?v=ztl3gWCtRz8",
  },
  {
    title: "Gremlin — Chaos Engineering Fundamentals",
    description:
      "How to introduce failure testing safely into your environment.",
    platform: "Gremlin Blog",
    type: "article",
    link: "https://www.gremlin.com/community/tutorials/chaos-engineering-fundamentals/",
  },
  {
    title: "GitHub Engineering — How We Handle Deploys",
    description:
      "A peek into GitHub’s internal deployment pipeline and the human factors around it.",
    platform: "GitHub Blog",
    type: "article",
    link: "https://github.blog/engineering/",
  },
  {
    title: "Scaling Culture — The Human Side of Reliability",
    description:
      "A conversation about burnout, on-call empathy, and scaling engineering orgs sanely.",
    platform: "YouTube",
    type: "video",
    link: "https://www.youtube.com/watch?v=3q6FwVbqn-U",
  },
];
