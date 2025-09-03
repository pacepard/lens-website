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
        label: "Roadmap",
        href: "https://github.com/pacepard/lens.md",
      },
      {
        label: "Contributors",
        href: "https://github.com/pacepard",
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
    heading: "The open-source ML toolkit for policies",
    subheading: "Helping you stop guessing, build and have conversations on facts.",
    badge: "",
    button: {
      id: "01",
      href: "/get-lens",
      text: "Try Private Alpha",
      variant: "default" as const,
    },
  },
  uishowcase: {
    heading: "We’re excited about the future 😍",
    subheading:
        "We are building a mobile app that transforms policies and local information into simple, fact-based conversations. Instead of wading through long documents or confusing posts, you get clarity through engaging dialogue formats. ",
    image: {
      src: "/og-image.png",
      alt: "innovation image",
      width: 1248,
      height: 765,
    },
    button: {
      id: "01",
      text: "Start now",
      href: "https://github.com/pacepard",
      variant: "default" as const,
    },
  },
  footer: {
    description: "Lens - Conversations on Facts",
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
      group: "Resources",
      items: [
        { href: "/roadmap", label: "Roadmap" },
        { href: "/privacy", label: "Privacy policy" },
        { href: "/terms", label: "Terms of use" },
      ],
    },
    items2: {
      group: "Product",
      items: [
        { href: "/contributors", label: "Company" },
        { href: "/about", label: "About" },
      ],
    },
  },
};
