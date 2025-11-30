export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
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
    title: "Currently building a JS Animation library",
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
    title: "Cannamint - Token Creator on Base",
    short: "Cannamint | Blockchain Dapp",
    des: "The Fastest & Most Secure Token Creator on Base. CannaMint is the ultimate no-code solution for launching ERC-20 tokens on the Base blockchain. Built for speed, security, and simplicity, it empowers users to mint tokens instantly using audited Solidity contract libraries, eliminating technical barriers.",
    img: "/projects/cannamint.png",
    iconLists: [
      "/skills/reown.png",
      "/skills/wagmi.png",
      "/skills/viem.png",
      "/skills/nextjs.png",
      "/skills/tailwindcss.svg",
    ],
    link: "https://cannamint.vercel.app/",
    github: "https://github.com/t9fiction/cannamint",
  },
  {
    id: 2,
    title: "StableCoin - Decentralized Stablecoin Protocol",
    short: "StableCoin | Blockchain Dapp",
    des: "A decentralized, overcollateralized, algorithmic stablecoin protocol pegged to the US Dollar. Built using Foundry and Solidity, this project supports multi-collateral (wETH & wBTC), uses Chainlink oracles for price feeds, and includes robust liquidation mechanics.",
    img: "/projects/stablecoin.jpg",
    iconLists: [
      "/skills/solidity.png",
      "/skills/foundry.png",
      "/skills/chainlink.jpg",
      "/skills/openzeppelin.png",
      "/skills/eth.svg",
    ],
    link: "https://github.com/t9fiction/cyfrin-defi-stablecoin",
    github: "https://github.com/t9fiction/cyfrin-defi-stablecoin",
  },
  {
    id: 3,
    title: "NFT Marketplace - Decentralized NFT Trading Platform",
    short: "NFT Marketplace | Blockchain Dapp",
    des: "A decentralized NFT marketplace built on the Ethereum Sepolia Testnet, allowing users to mint, buy, and sell NFTs. The platform features a user-friendly interface, secure transactions, and supports various NFT standards.",
    img: "/projects/nft-marketplace.png",
    iconLists: [
      "/skills/nextjs.png",
      "/skills/solidity.png",
      "/skills/eth.svg",
      "/skills/tailwindcss.svg",
      "/skills/thirdweb.png",
    ],
    link: "https://nft-marketplace-omega-nine.vercel.app/",
    github: "https://github.com/t9fiction/nft-marketplace",
  },
  {
    id: 4,
    title: "ChainCraft - DeFi Platform on Core DAO",
    short: "ChainCraft | Token Manager",
    des: "A secure DeFi platform on Core DAO for verified token creation, Sushiswap trading, token locking, and community governance, ensuring trust and transparency.",
    img: "/projects/ChainCraft.png",
    iconLists: [
      "/skills/solidity.png",
      "/skills/nextjs.png",
      "/skills/wagmi.png",
      "/skills/tailwindcss.svg",
      "/skills/reown.png",
    ],
    link: "https://memegator.vercel.app/",
    github: "https://github.com/t9fiction/core-hackathon",
  },
  {
    id: 5,
    title: "NumericSol - Solana Token Manager",
    short: "NumericSol | Solana Dapp",
    des: "Numeric Sol makes blockchain accessible by allowing anyone to create, list, and manage custom tokens on the Solana blockchain without deep technical knowledge.",
    img: "/projects/numericsol.png",
    iconLists: [
      "/skills/solana.png",
      "/skills/anchor.png",
      "/skills/nextjs.png",
      "/skills/tailwindcss.svg",
      "/skills/ts.svg",
    ],
    link: "https://numericsol.xyz/",
    github: "https://github.com/t9fiction/Solana-Token-Creator-Dapp",
  },
  {
    id: 6,
    title: "Flair - Modern E-commerce Platform",
    short: "Flair | ECommerce Store",
    des: "An ecommerce app with payment system integrated, built with Next.js, TypeScript, Redux for state management, and styled with TailwindCSS for a responsive user experience.",
    img: "/projects/flair.png",
    iconLists: [
      "/skills/nextjs.png",
      "/skills/ts.svg",
      "/skills/redux.png",
      "/skills/tailwindcss.svg",
      "/skills/re.svg",
    ],
    link: "https://estore-five-xi.vercel.app/",
    github: "https://github.com/t9fiction/ecommerce-store",
  },
  {
    id: 7,
    title: "Solana Journal - Decentralized Journaling App",
    short: "Journal | Solana-dapp",
    des: "A complete CRUD decentralized application (DApp) using the Anchor framework on the Solana blockchain, paired with a Next.js frontend.",
    img: "/projects/solana-journal.png",
    iconLists: [
      "/skills/nextjs.png",
      "/skills/solana.png",
      "/skills/anchor.png",
      "/skills/tailwindcss.svg",
      "/skills/ts.svg",
    ],
    link: "https://solana-journal-crud-zeta.vercel.app/",
    github: "https://github.com/t9fiction/Solana-Crud",
  },
  {
    id: 8,
    title: "Burger King Telegram Bot - Food Ordering App",
    short: "Telegram App | Burger King",
    des: "A Telegram Bot Web App, designed for food ordering, built with React.js and integrated with Telegram. Allows users to browse available food items, add or remove them from a shopping cart, and proceed to checkout seamlessly within the Telegram interface.",
    img: "/projects/burger-king.jpeg",
    iconLists: [
      "/skills/nextjs.png",
      "/skills/re.svg",
      "/skills/telegram.png",
      "/skills/tailwindcss.svg",
      "/skills/ts.svg",
    ],
    link: "https://burger-king-bot.vercel.app/",
    github: "https://github.com/t9fiction/Burger-King---Bot/tree/main",
  },
  {
    id: 9,
    title: "Crowdfunding Platform - Blockchain-based Fundraising",
    short: "Crowdfunding | Blockchain Dapp",
    des: "A blockchain-based crowdfunding platform allowing users to create, contribute to, and track fundraising campaigns with full transparency and security provided by smart contracts.",
    img: "/projects/crowdfunding.png",
    iconLists: [
      "/skills/re.svg",
      "/skills/solidity.png",
      "/skills/eth.svg",
      "/skills/tailwindcss.svg",
      "/skills/thirdweb.png",
    ],
    link: "https://crowdfunding-eight-zeta.vercel.app/",
    github: "https://github.com/t9fiction/crowdfudning-dapp",
  },
  {
    id: 10,
    title: "Simple DEX - Decentralized Exchange",
    short: "Simple DEX | Decentralized Exchange",
    des: "A Decentralized Exchange (DEX) for LMNG Token on the Ethereum Sepolia Testnet, allowing users to swap ETH for LMNG tokens and vice versa.",
    img: "/projects/dex.png",
    iconLists: [
      "/skills/solidity.png",
      "/skills/nextjs.png",
      "/skills/eth.svg",
      "/skills/tailwindcss.svg",
      "/skills/wagmi.png",
    ],
    link: "https://dex-nsins.vercel.app/",
    github: "https://github.com/t9fiction/DEX",
  },
  {
    id: 11,
    title: "REAP - Encrypted Seed Phrase Storage",
    short: "Reap | Blockchain Dapp",
    des: "A secure and private encrypted storage platform for cryptocurrency wallet seed phrases. Developed to safeguard sensitive information, REAP provides users with an intuitive and robust solution for managing seed phrases, ensuring data protection and accessibility for crypto wallet recovery.",
    img: "/projects/reap.png",
    iconLists: [
      "/skills/re.svg",
      "/skills/nextjs.png",
      "/skills/tailwindcss.svg",
      "/skills/ts.svg",
      "/skills/python.png",
    ],
    link: "https://reap-site.vercel.app/",
    github: "https://github.com/t9fiction/ReapSite",
  },
  {
    id: 12,
    title: "Blockchain Guessing Game - Multi-Chain DApp",
    short: "Guessing Game | Multi Blockchain Dapp",
    des: "The Blockchain Guessing Game is a multi-chain dApp deployed on Sepolia and Arbitrum Sepolia, where players guess a number to win ERC20 token rewards. Built with Solidity, Hardhat, Foundry, Next.js, and TypeScript.",
    img: "/projects/guessinggame.png",
    iconLists: [
      "/skills/re.svg",
      "/skills/solidity.png",
      "/skills/nextjs.png",
      "/skills/foundry.png",
      "/skills/eth.svg",
    ],
    link: "https://blockchain-game-kohl.vercel.app/",
    github: "https://github.com/t9fiction/blockchain-game",
  },
  {
    id: 13,
    title: "Wormhole Bridge - Cross-Chain Asset Transfer",
    short: "Wormhole | Blockchain Bridge",
    des: "A decentralized platform enables seamless asset transfers between multiple blockchain networks, enhancing liquidity and accessibility for users. With a user-friendly interface and robust security measures, the bridge allows users to easily swap tokens across different ecosystems.",
    img: "/projects/wormhole.png",
    iconLists: [
      "/skills/nextjs.png",
      "/skills/solidity.png",
      "/skills/wormhole-logo.png",
      "/skills/tailwindcss.svg",
      "/skills/ts.svg",
    ],
    link: "https://wormhole-bridge-t9fiction.vercel.app/",
    github: "https://github.com/t9fiction/wormhole-bridge",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Sohail was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Sohail's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Sohail is the ideal partner.",
    name: "akiato",
    title: "Fiverr Client",
    img: "/clients/akiato.png",
  },
  {
    quote:
      "Collaborating with Sohail was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Sohail's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Sohail is the ideal partner.",
    name: "earnwithtodd",
    title: "Product Manager at Cannamint",
    img: "/clients/todd.png",
  },
  {
    quote:
      "Collaborating with Sohail was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Sohail's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Sohail is the ideal partner.",
    name: "atrain622",
    title: "Blockchain Security Lead at SecureChain Labs",
    img: "/clients/atrain622.png",
  },
  {
    quote:
      "Collaborating with Sohail was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Sohail's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Sohail is the ideal partner.",
    name: "Usama Javaid",
    title: "Upwork Client",
    img: "/clients/usama.png",
  },
  {
    quote:
      "Collaborating with Sohail was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Sohail's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Sohail is the ideal partner.",
    name: "estanis",
    title: "Client",
    img: "/clients/estanis.png",
  },
  {
    quote:
      "Collaborating with Sohail was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Sohail's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Sohail is the ideal partner.",
    name: "tcitoaugustofar",
    title: "DeFi Architect at St ableX",
    img: "/clients/tcitoaugustofar.png",
  },
  {
    quote:
      "Collaborating with Sohail was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Sohail's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Sohail is the ideal partner.",
    name: "kherolake",
    title: "Upwork Client",
    img: "/clients/kherolake.png",
  },
  {
    quote:
      "Collaborating with Sohail was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Sohail's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Sohail is the ideal partner.",
    name: "joelfreland",
    title: "Lead DevOps Engineer at CloudSphere",
    img: "/clients/joelfreland.png",
  },
  {
    quote:
      "Collaborating with Sohail was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Sohail's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Sohail is the ideal partner.",
    name: "bigdataguy",
    title: "Governance Lead at DecentraDAO",
    img: "/clients/bigdataguy.png",
  },
  {
    quote:
      "Collaborating with Sohail was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Sohail's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Sohail is the ideal partner.",
    name: "monafallata",
    title: "Fiverr Client",
    img: "/clients/monafallata.png",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/icons/cloud.svg",
    nameImg: "/icons/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/icons/app.svg",
    nameImg: "/icons/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/icons/host.svg",
    nameImg: "/icons/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/icons/s.svg",
    nameImg: "/icons/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/companies/dock.svg",
    nameImg: "/companies/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/experience/exp1.png",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/experience/exp2.png",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/experience/exp3.png",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/experience/exp4.png",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/icons/git.svg",
    link: "https://github.com/t9fiction",
  },
  {
    id: 2,
    img: "/icons/twit.svg",
    link: "https://x.com/t9fiction",
  },
  {
    id: 3,
    img: "/icons/link.svg",
    link: "https://www.linkedin.com/in/sohail-ishaque/",
  },
];
