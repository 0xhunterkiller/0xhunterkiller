// data/inspirationsData.ts

export interface InspirationItem {
  title: string;
  description: string;
  platform: string;
  type: "article" | "video" | "talk";
  link: string;
  author?: string;
}

export interface InspirationFolder {
  name: string;
  description: string;
  items: InspirationItem[];
}

export const inspirationFolders: InspirationFolder[] = [
  {
    name: "Videos",
    description:
      "Engineering stories, failures, and lessons that reveal how systems—and people—behave under pressure.",
    items: [
      {
        title: "Case Of The Sabotaged Trains | Prime Reacts",
        description:
          "A case study of how vendor lock-in is a serious problem and how one train manufacturer gave expiry dates to his trains!!",
        platform: "YouTube",
        type: "video",
        author: "Primeagen",
        link: "https://youtu.be/sKtNJljJlmo",
      },
      {
        title: "Dev Deletes Entire Production Database, Chaos Ensues",
        description:
          "A Junior Engineer deletes the prod db, nothing much, just another day at Gitlab.",
        platform: "YouTube",
        author: "Kevin Fang",
        type: "video",
        link: "https://youtu.be/tLdRBsuvVKc",
      },
      {
        title: '"a$$word" LITERALLY SAVED PayPal | Prime Reacts',
        description:
          "Shamir Secret Sharing, POSIX C, Encryption at Rest and how PayPal almost did not exist.",
        platform: "YouTube",
        type: "video",
        author: "Primeagen",
        link: "https://youtu.be/MzescXc5SW0",
      },
      {
        title: "History's Worst Software Error",
        description:
          'A case study of how a "mere" software bug cost the lives of 6 people.',
        platform: "YouTube",
        type: "video",
        author: "Kyle Hill",
        link: "https://youtu.be/Ap0orGCiou8",
      },
      {
        title: "The Most Amazing Software Ever Created | ThePrimeTime",
        description:
          "JSON-As-Code?? SVN Checkouts for each function call?? Tom is a genius btw.",
        platform: "YouTube",
        type: "video",
        author: "Primeagen",
        link: "https://youtu.be/QwUPs5N9I6I",
      },
      {
        title: "Cloudflare Deploys Really Slow Code, Takes Down Entire Company",
        description:
          "bAD Reg*x fa1ls at 5cale!! A production outage caused by a single regex gone rogue.",
        platform: "YouTube",
        author: "Kevin Fang",
        type: "video",
        link: "https://youtu.be/DDe-S3uef2w",
      },
    ],
  },
  {
    name: "Articles",
    description:
      "Written retrospectives and postmortems that explore the human side of engineering failures and breakthroughs.",
    items: [
      {
        title: "Copy and Paste: The Story of Ariane 5 Flight V88",
        description:
          "A classic story of 'it worked fine on dev', and one of the most expensive software bugs in history.",
        platform: "Medium",
        type: "article",
        author: "Ashwin Barama",
        link: "https://ashwinbarama810.medium.com/copy-and-paste-the-story-of-ariane-flight-v88-914a5f0424ed",
      },
    ],
  },
];
