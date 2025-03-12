export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  // { name: "Experiences", link: "#experiences" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "Open communication is fostered to transform client visions into reality.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Anticipating needs, crafting perfect solutions.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 text-[8px]",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "w-full h-full",
    titleClassName: "justify-start",
    img: "",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently workong on a Blockchain arbitrage project.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Cannamint",
    short: "Cannamint | Blockchain Dapp",
    des: "The Fastest & Most Secure Token Creator on Base. CannaMint is the ultimate no-code solution for launching ERC-20 tokens on the Base blockchain. Built for speed, security, and simplicity, it empowers users to mint tokens instantly using audited Solidity contract libraries, eliminating technical barriers.",
    img: "/cannamint.png",
    iconLists: [
      "/skills/nextjs.png",
      "/reown.png",
      "/skills/ts.svg",
      "/base.png",
      "/skills/solidity.png",
      "/tailwindcss.svg",
    ],
    link: "https://cannamint.app",
    github: "https://github.com/yourusername/cannamint",
    category: "web3",
    tags: ["Token Creator", "Base Network"]
  },
  {
    id: 2,
    title: "Wormhole",
    short: "Wormhole | Blockchain Bridge",
    des: "A decentralized platform enables seamless asset transfers between multiple blockchain networks, enhancing liquidity and accessibility for users. With a user-friendly interface and robust security measures, the bridge allows users to easily swap tokens across different ecosystems.",
    img: "/wormhole.png",
    iconLists: [
      "/skills/nextjs.png",
      "/skills/solidity.png",
      "/wormhole-logo.png",
      "/skills/ts.svg",
      "/tailwindcss.svg",
    ],
    link: "https://wormhole-test.vercel.app/",
    github: "https://github.com/yourusername/wormhole",
    category: "web3",
    tags: ["Bridge", "Multi-chain"]
  },
  {
    id: 3,
    title: "Guessing Game",
    short: "Guessing Game | Multi Blockchain Dapp",
    des: "The Blockchain Guessing Game is a multi-chain dApp deployed on Sepolia and Arbitrum Sepolia, where players guess a number to win ERC20 token rewards. Built with Solidity, Hardhat, Foundry, Next.js, and TypeScript.",
    img: "/guessinggame.png",
    iconLists: [
      "/re.svg",
      "/skills/eth.svg",
      "/skills/ts.svg",
      "/erc20.png",
      "/tailwindcss.svg",
    ],
    link: "https://blockchain-game-kohl.vercel.app/",
    github: "https://github.com/yourusername/guessing-game",
    category: "gamefi",
    tags: ["Game", "Multi-chain"]
  },
  {
    id: 4,
    title: "NumericSol",
    short: "NumericSol | Solana Dapp",
    des: "Numeric Sol makes blockchain accessible by allowing anyone to create, list, and manage custom tokens on the Solana blockchain without deep technical knowledge.",
    img: "/projects/numericsol.png",
    iconLists: ["/skills/solana.png", "/skills/nextjs.png", "/skills/pinatacloud.png", "/skills/ts.svg"],
    link: "https://numericsol.xyz/",
    github: "https://github.com/yourusername/numericsol",
    category: "web3",
    tags: ["Solana", "Token Creator"]
  },
  {
    id: 5,
    title: "Flair",
    short: "Flair | ECommerce Store",
    des: "An ecommerce app with payment system integrated, built with Next.js, TypeScript, Redux for state management, and styled with TailwindCSS for a responsive user experience.",
    img: "/flair.png",
    iconLists: ["/skills/nextjs.png", "/skills/ts.svg", "/redux.png", "/tailwindcss.svg"],
    link: "https://estore-five-xi.vercel.app/",
    github: "https://github.com/yourusername/flair",
    category: "web",
    tags: ["E-commerce", "Next.js"]
  },
  {
    id: 6,
    title: "Journal",
    short: "Journal | Solana-dapp",
    des: "A complete CRUD decentralized application (DApp) using the Anchor framework on the Solana blockchain, paired with a Next.js frontend.",
    img: "/solana-journal.png",
    iconLists: ["/skills/nextjs.png", "/skills/ts.svg", "/skills/solana.png", "/anchor.png"],
    link: "https://solana-journal-crud-zeta.vercel.app/",
    github: "https://github.com/yourusername/solana-journal",
    category: "web3",
    tags: ["Solana", "Anchor"]
  },
  {
    id: 7,
    title: "Telegram Bot",
    short: "Telegram App | Burger King",
    des: "A Telegram Bot Web App, designed for food ordering, built with React.js and integrated with Telegram. Allows users to browse available food items, add or remove them from a shopping cart, and proceed to checkout seamlessly within the Telegram interface.",
    img: "/burger-king.jpeg",
    iconLists: [
      "/skills/nextjs.png",
      "/telegram.png",
      "/skills/ts.svg",
      "/fastapi.png",
      "/python.png",
    ],
    link: "https://t.me/burger22zone_bot/burger",
    github: "https://github.com/yourusername/burger-king-bot",
    category: "bot",
    tags: ["Telegram", "Food Ordering"]
  },
  {
    id: 8,
    title: "Crowdfunding",
    short: "Crowdfunding | Blockchain Dapp",
    des: "A blockchain-based crowdfunding platform allowing users to create, contribute to, and track fundraising campaigns with full transparency and security provided by smart contracts.",
    img: "/crowdfunding.png",
    iconLists: [
      "/re.svg",
      "/tailwindcss.svg",
      "/wagmi.png",
      "/viem.png",
      "/reown.png",
    ],
    link: "https://crowdfunding-eight-zeta.vercel.app/",
    github: "https://github.com/yourusername/crowdfunding",
    category: "web3",
    tags: ["Fundraising", "Smart Contracts"]
  },
  {
    id: 9,
    title: "DEX",
    short: "Simple DEX | Decentralized Exchange",
    des: "A Decentralized Exchange (DEX) for LMNG Token on the Ethereum Sepolia Testnet, allowing users to swap ETH for LMNG tokens and vice versa.",
    img: "/projects/dex.png",
    iconLists: [
      "/skills/solidity.png",
      "/skills/thirdweb.png",
      "/tailwindcss.svg",
      "/skills/ts.svg",
    ],
    link: "https://dex-nsins.vercel.app/",
    github: "https://github.com/yourusername/simple-dex",
    category: "defi",
    tags: ["DEX", "Token Swap"]
  },
  {
    id: 10,
    title: "Reap",
    short: "Reap | Blockchain Dapp",
    des: "A secure and private encrypted storage platform for cryptocurrency wallet seed phrases. Developed to safeguard sensitive information, REAP provides users with an intuitive and robust solution for managing seed phrases, ensuring data protection and accessibility for crypto wallet recovery.",
    img: "/reap.png",
    iconLists: ["/re.svg", "/april.png", "/skills/thirdweb.png", "/skills/ts.svg"],
    link: "https://reap-testapp.vercel.app/",
    github: "https://github.com/yourusername/reap",
    category: "security",
    tags: ["Encryption", "Wallet Security"]
  },
];

export const testimonials = [
  {
    quote:
      "We hired Sohail to develop a smart contract for our DeFi platform, and he exceeded our expectations. His Solidity expertise and attention to security were top-notch. Highly recommended!",
    name: "akiato",
    title: "Fiverr Client",
    img: "/akiato.png",
  },
  {
    quote:
      "Sohail played a crucial role in integrating Ethers.js and Web3 into our Next.js app. His insights and best practices helped us deliver a seamless user experience for our crypto platform.",
    name: "earnwithtodd",
    title: "Product Manager at Cannamint",
    img: "/todd.png",
  },
  {
    quote:
      "Sohail’s deep understanding of EVM-compatible blockchains and smart contract security helped us prevent critical vulnerabilities in our project. His ability to audit and optimize Solidity code is exceptional.",
    name: "atrain622",
    title: "Blockchain Security Lead at SecureChain Labs",
    img: "/atrain622.png",
  },
  {
    quote:
      "We brought in Sohail to help us bridge Ethereum with Layer 2 scaling solutions. His knowledge of rollups, zk-SNARKs, and cross-chain interoperability was invaluable to our development process.",
    name: "Usama Javaid",
    title: "Upwork Client",
    img: "/usama.png",
  },
  {
    quote:
      "Sohail helped us integrate Web3 wallets and smart contract functionalities into our NFT marketplace. His ability to solve complex blockchain challenges while maintaining a smooth UX was truly impressive.",
    name: "estanis",
    title: "Client",
    img: "/estanis.png",
  },
  {
    quote:
      "We needed a stablecoin mechanism for our DeFi protocol, and Sohail’s expertise in algorithmic stablecoins and collateralized assets was key to making it work. His deep knowledge of financial smart contracts set him apart.",
    name: "tcitoaugustofar",
    title: "DeFi Architect at St ableX",
    img: "/tcitoaugustofar.png",
  },
  {
    quote:
      "Working with Sohail was a game-changer for our project. His deep expertise in blockchain and cloud technologies helped us scale efficiently. His problem-solving skills and commitment to excellence are unmatched.",
    name: "kherolake",
    title: "Upwork Client",
    img: "/kherolake.png",
  },
  {
    quote:
      "Sohail's ability to architect robust cloud infrastructures with Kubernetes and Docker was instrumental in optimizing our DevOps workflow. His strategic approach saved us time and resources.",
    name: "joelfreland",
    title: "Lead DevOps Engineer at CloudSphere",
    img: "/joelfreland.png",
  },
  {
    quote:
      "Sohail was instrumental in deploying our DAO governance smart contracts. His understanding of Solidity, governance frameworks, and gas optimization ensured a smooth and cost-effective launch.",
    name: "bigdataguy",
    title: "Governance Lead at DecentraDAO",
    img: "/bigdataguy.png",
  },
  {
    quote:
      "From Kubernetes deployments to blockchain architecture, Sohail has been an invaluable asset to our team. His ability to troubleshoot complex issues and provide innovative solutions makes him a top-tier engineer.",
    name: "monafallata",
    title: "Fiverr Client",
    img: "/monafallata.png",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/companies/dock.svg",
    nameImg: "/companies/dockerName.svg",
  },
  // {
  //   id: 6,
  //   name: "april",
  //   img: "/companies/april.png",
  //   nameImg: "/companies/AprilToken.svg",
  // },
];

export const workExperience = [
  {
    id: 1,
    title: "Blockchain & Smart Contract Developer",
    desc: "Developed and deployed secure, scalable smart contracts on EVM-compatible chains and Solana, focusing on DeFi, stablecoins, and Web3 integrations.",
    className: "md:col-span-2",
    thumbnail: "/exp1.png",
  },
  {
    id: 2,
    title: "Web3 & Smart Contract Integration",
    desc: "Integrated blockchain solutions using Ethers.js, Viem, and Wagmi, enhancing dApps with seamless wallet connectivity and on-chain interactions.",
    className: "md:col-span-2", 
    thumbnail: "/exp2.png",
  },
  {
    id: 3,
    title: "Cloud & DevOps Engineer",
    desc: "Designed and managed scalable cloud infrastructure using Docker, Kubernetes, AWS, and GCP, optimizing CI/CD pipelines for deployment automation.",
    className: "md:col-span-2",
    thumbnail: "/exp3.png",
  },
  {
    id: 4,
    title: "Full-Stack Web Developer",
    desc: "Built and optimized modern web applications using React, Next.js, and TailwindCSS, ensuring high performance and user-friendly experiences.",
    className: "md:col-span-2",
    thumbnail: "/exp4.png",
  },
  {
    id: 5,
    title: "AI & Machine Learning Engineer",
    desc: "Implemented AI-powered solutions using Python, FastAPI, and machine learning models to enhance automation and predictive analytics.",
    className: "md:col-span-2",
    thumbnail: "/exp5.png",
  },
  {
    id: 6,
    title: "FastAPI & Backend Developer",
    desc: "Developed high-performance APIs and microservices using FastAPI, improving efficiency and scalability for AI, blockchain, and cloud-based applications.",
    className: "md:col-span-2",
    thumbnail: "/exp6.png",
  },
];


export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/t9fiction",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/t9fiction",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/sohail-ishaque/",
  },
];
