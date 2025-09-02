import {
  InstagramIcon,
  LinkedInIcon,
  XIcon,
  YouTubeIcon,
} from "@/components/shared/social-icons";

export const LandingPageData = {
  navigation: {
    logo: "/lens-logo",
    items: [
      {
        label: "Blog",
        href: "/blog",
      },
      {
        label: "Contributors",
        href: "/contributors",
      },
    ],
      button: {
      id: "01",
      href: "/get-lens",
      text: "Try Private Alpha",
      variant: "default" as const,
    },
  },
  hero: {
    heading: "Lens - a simple way to share hyper-local information",
    subheading: "",
    badge: "",
    button: {
      id: "01",
      href: "/get-lens",
      text: "Try Private Alpha",
      variant: "default" as const,
    },
  },
  uishowcase: {},
  footer: {
    description: "",
    buitBy: "Made with ❤️ by Pacepard",
    copyright: ". All rights reserved.",
    ownedBy: "Pacepard",
    socialLinks: [
      {
        href: "https://github.com/pacepard",
        label: "Github",
        icon: "",
      },
      {
        href: "https://www.linkedin.com/company/pacepard",
        label: "LinkedIn",
        icon: LinkedInIcon,
      },
      {
        href: "https://x.com/pacepard",
        label: "X",
        icon: XIcon,
      },
      {
        href: "https://www.youtube.com/pacepard",
        label: "YouTube",
        icon: YouTubeIcon,
      },
      {
        href: "https://www.instagram.com/lagosinnovates",
        label: "Instagram",
        icon: InstagramIcon,
      },
    ],
    items: {
      group: "resources",
      items: [
        { href: "/roadmap", label: "Roadmap" },
        { href: "/privacy", label: "Privacy policy" },
        { href: "/terms", label: "Terms of use" },
      ],
    },
    items2: {
      group: "company",
      items: [
        { href: "/contributors", label: "Company" },
        { href: "/about", label: "About" },
      ],
    },
  },
};
