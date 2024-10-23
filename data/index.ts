import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "I prioritize client engagement and maintain open communication to ensure collaborative project success. ",
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
    title:
      "Technology-driven developer committed to creating impactful and user-centered solutions.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a vuejs-vuetify-flight-dashboard-chartjs",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/currently.png",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Am I your new employee?",
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
    title: "Todo List application",
    des: "This is a simple Todo List application built using Vue.js and Axios for handling HTTP requests. The app allows users to create, view, edit, check, and delete todo items, with a focus on a clean and straightforward UI.",
    img: "/todo.svg",
    iconLists: ["/vue.svg", "/axios.svg", "/js.svg", "/scss.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Larg Project - Client at Alsra AB",
    des: "Conmplex project with a lot of features and a lot of pages, using the latest tech stack.",
    img: "/wtw.png",
    iconLists: ["/vue.svg", "/axios.svg", "/ts.svg", "/azure.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "Explore foods from around the globe",
    des: "The project's frontend is built in React, the backend in Node.js and MySQL.",
    img: "/FeadmeApp-screenshot.png",
    iconLists: ["/re.svg", "/scss.svg", "/js.svg", "/node.svg", "/mysql.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
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
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];
export const workExperience = [
  {
    id: 1,
    title: "Frontend Developer",
    desc: "Currently enhancing user-facing features at Alstra AB using Vue.js, TypeScript, and Node.js while managing the project lifecycle and engaging in client meetings for UX/UI improvements.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "E-Commerce Manager",
    desc: "Spearheaded daily operations of Twoangels AB's e-commerce platform, optimizing user experience through WordPress and ensuring high-quality product presentation and customer service.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Personal Projects in Web and App Development",
    desc: "Created a variety of personal projects utilizing a robust tech stack, including Vue.js, React, TypeScript, Node.js, HTML, CSS, and databases like MySQL and MongoDB. Focused on responsive design, user feedback integration, and employing tools such as Docker and GitHub for efficient project management.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Intern - Frontend Developer",
    desc: "Gained hands-on experience in web technologies during my studies, specializing in JavaScript, HTML, CSS, and responsive design for diverse platforms.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Antonia-91",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile",
  },
];
