// Define the Project interface based on your data structure
export interface Project {
    id: number;
    title: string;
    short: string;
    des: string;
    img: string;
    iconLists: string[];
    link: string;
    github: string;
}

export interface NavItem {
  name: string;
  link: string;
  icon?: React.ReactNode;
}

export interface GridItem {
  id: number;
  title: string;
  description: string;
  className: string;
  imgClassName: string;
  titleClassName: string;
  img: string;
  spareImg: string;
}

export interface WorkExperience {
  id: number;
  title: string;
  desc: string;
  className: string;
  thumbnail: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  img: string;
}

export interface Company {
  id: number;
  name: string;
  img: string;
  nameImg: string;
}

export interface SocialMedia {
  id: number;
  img: string;
  link: string;
}

export interface AnimationProps {
  initial?: object;
  animate?: object;
  transition?: object;
  whileHover?: object;
  whileTap?: object;
}

export interface MotionComponentProps extends AnimationProps {
  children: React.ReactNode;
  className?: string;
}
