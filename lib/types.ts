// Define the Project interface based on your data structure
export interface Project {
    id: number;
    title: string;
    short: string;
    des: string;
    img: string;
    iconLists: string[];
    link: string;
    github?: string; // Optional property (some projects might not have GitHub links)
    category: string;
    tags: string[];
  }