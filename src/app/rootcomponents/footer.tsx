export default function Footer() {

  const links = [
    {
      group: "Top Destinations",
      items: [
        {
          title: "Diani",
          href: "#",
        },
        {
          title: "Nairobi",
          href: "#",
        },
        {
          title: "Arusha",
          href: "#",
        },
        {
          title: "Masai Mara",
          href: "#",
        },
        {
          title: "Mombasa",
          href: "#",
        },
        {
          title: "Doha",
          href: "#",
        },
      ],
    },
    // {
    //   group: "Solution",
    //   items: [
    //     {
    //       title: "Startup",
    //       href: "#",
    //     },
    //     {
    //       title: "Freelancers",
    //       href: "#",
    //     },
    //     {
    //       title: "Organizations",
    //       href: "#",
    //     },
    //     {
    //       title: "Students",
    //       href: "#",
    //     },
    //     {
    //       title: "Collaboration",
    //       href: "#",
    //     },
    //     {
    //       title: "Design",
    //       href: "#",
    //     },
    //     {
    //       title: "Management",
    //       href: "#",
    //     },
    //   ],
    // },
    {
      group: "Company",
      items: [
        {
          title: "About",
          href: "#",
        },
        {
          title: "Careers",
          href: "#",
        },
        {
          title: "Blog",
          href: "#",
        },
        {
          title: "Contact",
          href: "#",
        },
        {
          title: "Help",
          href: "#",
        },
      ],
    },
    {
      group: "Legal",
      items: [
        {
          title: "Licence",
          href: "#",
        },
        {
          title: "Privacy",
          href: "#",
        },
        {
          title: "Terms & Conditions",
          href: "#",
        },
      ],
    },
  ];

  return (
    <footer className="border-b bg-lightmode-footer-bg-color pt-20 dark:bg-darkmode-footer-bg-color"></footer>
  );
}
