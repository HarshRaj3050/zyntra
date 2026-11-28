import FlowingMenu from "./ui/FlowingMenu";

type FlowingProps = {
  className?: string;
};

const Flowing = ({ className }: FlowingProps) => {
  const items = [
    {
      link: "#",
      text: "Meetings",
      image:
        "https://images.unsplash.com/photo-1782977389500-dd7adad33ebe?q=80&w=600&h=400&fit=crop&sat=-100&auto=format",
    },
    {
      link: "#",
      text: "Webinars",
      image:
        "https://images.unsplash.com/photo-1781499455083-6ccc3beb20cd?q=80&w=600&h=400&fit=crop&sat=-100&auto=format",
    },
    {
      link: "#",
      text: "Digital Products",
      image:
        "https://images.unsplash.com/photo-1776394254711-4a0d7345269a?q=80&w=600&h=400&fit=crop&sat=-100&auto=format",
    },
    {
      link: "#",
      text: "Packages",
      image:
        "https://images.unsplash.com/photo-1781242629922-6f39cc3671cd?q=80&w=600&h=400&fit=crop&sat=-100&auto=format",
    },
    {
      link: "#",
      text: "Memberships",
      image:
        "https://images.unsplash.com/photo-1781242629922-6f39cc3671cd?q=80&w=600&h=400&fit=crop&sat=-100&auto=format",
    },
  ];
  return (
    <div className={className} style={{ height: "65dvh", position: "relative" }}>
      <FlowingMenu
        items={items}
        speed={60}
        stretch={0.6}
        magnet={0.25}
        followCursor={0.4}
        textColor="#ffffff"
        bgColor="rgb(20, 71, 230)"
        marqueeBgColor="rgb(59, 130, 246)"
        marqueeTextColor="#120F17"
        direction="left"
        duration={0.5}
        bandInset={0}
        bandRadius={0}
        carryContent={false}
        dividers
        dimInactive={false}
        align="center"
        showIndex={false}
        showArrow={false}
        imageShape="pill"
        intro
      />
    </div>
  );
};

export default Flowing;
