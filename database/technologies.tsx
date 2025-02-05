import BlockchainIcon from "@/assets/icons/blockchain";
// import FlutterIcon from "@/assets/icons/flutter";
import GoLangIcon from "@/assets/icons/golang";
import JavaIcon from "@/assets/icons/java";
import NextJSIcon from "@/assets/icons/nextjs";
import PythonIcon from "@/assets/icons/python";
import ReactJSIcon from "@/assets/icons/reactjs";

export const technologiesDatabase = [
  { title: "NextJS", icon: <NextJSIcon /> },
  {
    title: "GoLang",
    icon: <GoLangIcon />,
  },
  {
    title: "Python",
    icon: <PythonIcon />,
  },
  {
    title: "ReactJS",
    icon: <ReactJSIcon />,
  },
  {
    title: "Java",
    icon: <JavaIcon />,
  },
  {
    title: "Blockchain",
    icon: <BlockchainIcon />,
  },
  // {
  //   title: "Flutter",
  //   icon: <FlutterIcon />,
  // },
];

export const categorisedTechnologiesDatabase = [
  {
    title: "Mobile Apps",
    categories: [
      {
        title: "iOS",
        technologies: [
          {
            title: "Swift",
          },
          {
            title: "UI Kit",
          },
          {
            title: "RxSwift",
          },
          {
            title: "Core Data",
          },
        ],
      },
      {
        title: "Android",
        technologies: [
          {
            title: "Kotlin",
          },
          {
            title: "Java",
          },
          {
            title: "RxJava",
          },
          {
            title: "Jetpack",
          },
        ],
      },
    ],
  },
  {
    title: "Web Platforms",
    categories: [
      {
        title: "Frontend",
        technologies: [
          {
            title: "React js",
          },
          {
            title: "Next.Js",
          },
          {
            title: "Vue",
          },
          {
            title: "Typescript",
          },
          {
            title: "HTML5",
          },
          {
            title: "CSS",
          },
          {
            title: "Javascript",
          },
          {
            title: "Material UI",
          },
          {
            title: "Rest API",
          },
        ],
      },
      {
        title: "Backend",
        technologies: [
          {
            title: "Node.js",
          },
          {
            title: "Python",
          },
          {
            title: "Java",
          },
          {
            title: "Golang",
          },
          {
            title: "Rust",
          },
        ],
      },
    ],
  },
  {
    title: "Cross Platforms",
    categories: [
      {
        title: "React",
        technologies: [
          {
            title: "Redux",
          },
          {
            title: "Redux Thunk",
          },
          {
            title: "Zustand",
          },
        ],
      },
      {
        title: "Flutter",
        technologies: [
          {
            title: "Bloc",
          },
          {
            title: "Dart",
          },
          {
            title: "Rx Dart",
          },
        ],
      },
    ],
  },
  {
    title: "Database",
    categories: [
      {
        title: "Database",
        technologies: [
          {
            title: "MongoDB",
          },
          {
            title: "MySQL",
          },
          {
            title: "PostgreSQL",
          },
        ],
      },
    ],
  },
  {
    title: "Cloud & DevOps",
    categories: [
      {
        title: "DevOps",
        technologies: [
          {
            title: "Nginx",
          },
          {
            title: "Docker",
          },
          {
            title: "Kubernetes",
          },
        ],
      },
      {
        title: "Cloud",
        technologies: [
          {
            title: "Aws",
          },
          {
            title: "Azure",
          },
          {
            title: "Firebase",
          },
          {
            title: "Supabase",
          },
        ],
      },
    ],
  },
];
