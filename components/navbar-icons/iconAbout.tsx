import Image from "next/image";
import about from "../../data/navicons/about.svg"

export const navItems2 = [
  {
    title: "About",
    icon: <Image src={about} alt="About" width={60} height={60} className="text-[#10132E]" />, // Apply Tailwind class for color
    href: "#about",
  },
  { title: "Projects", icon: <Image src={about} alt="About" width={60} height={60} className="text-[#10132E]" />, href: "#projects" },
  { title: "Testimonials", icon: <Image src={about} alt="About" width={60} height={60} className="text-[#10132E]" />, href: "#testimonials" },
  { title: "Contact", icon: <Image src={about} alt="About" width={60} height={60} className="text-[#10132E]" />, href: "#contact" },
];
