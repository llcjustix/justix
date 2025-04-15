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
    id: "mobile-apps",
    categories: [
      {
        title: "iOS",
        id: "ios",
        technologies: [
          {
            title: "Swift",
            id: "swift",
          },
          {
            title: "UI Kit",
            id: "ui-kit",
          },
          {
            title: "RxSwift",
            id: "rxswift",
          },
          {
            title: "Core Data",
            id: "core-data",
          },
        ],
      },
      {
        title: "Android",
        id: "android",
        technologies: [
          {
            title: "Kotlin",
            id: "kotlin",
          },
          {
            title: "Java",
            id: "java",
          },
          {
            title: "RxJava",
            id: "rxjava",
          },
          {
            title: "Jetpack",
            id: "jetpack",
          },
        ],
      },
      {
        title: "Hybrid Frameworks",
        id: "hybrid-frameworks",
        technologies: [
          {
            title: "React Native",
            id: "react-native",
          },
          {
            title: "Flutter",
            id: "flutter",
          },
        ],
      },
    ],
  },
  {
    title: "Web Platforms",
    id: "web-platforms",
    categories: [
      {
        title: "Frontend",
        id: "frontend",
        technologies: [
          {
            title: "React js",
            id: "react-js",
          },
          {
            title: "Next.Js",
            id: "next-js",
          },
          {
            title: "Vue",
            id: "vue",
          },
          {
            title: "Typescript",
            id: "typescript",
          },
          {
            title: "HTML5",
            id: "html5",
          },
          {
            title: "CSS",
            id: "css",
          },
          {
            title: "Javascript",
            id: "javascript",
          },
          {
            title: "Material UI",
            id: "material-ui",
          },
          {
            title: "Rest API",
            id: "rest-api",
          },
        ],
      },
      {
        title: "Backend",
        id: "backend",
        technologies: [
          {
            title: "Node.js",
            id: "node-js",
          },
          {
            title: "Python",
            id: "python",
          },
          {
            title: "Java",
            id: "java",
          },
          {
            title: "Golang",
            id: "golang",
          },
          {
            title: "Rust",
            id: "rust",
          },
        ],
      },
    ],
  },
  {
    title: "Cross Platforms",
    id: "cross-platforms",
    categories: [
      {
        title: "React",
        id: "react",
        technologies: [
          {
            title: "Redux",
            id: "redux",
          },
          {
            title: "Redux Thunk",
            id: "redux-thunk",
          },
          {
            title: "Zustand",
            id: "zustand",
          },
        ],
      },
      {
        title: "Flutter",
        id: "flutter",
        technologies: [
          {
            title: "Bloc",
            id: "bloc",
          },
          {
            title: "Dart",
            id: "dart",
          },
          {
            title: "Rx Dart",
            id: "rx-dart",
          },
        ],
      },
    ],
  },
  {
    title: "Database",
    id: "database",
    categories: [
      {
        title: "Database",
        id: "database",
        technologies: [
          {
            title: "MongoDB",
            id: "mongodb",
          },
          {
            title: "MySQL",
            id: "mysql",
          },
          {
            title: "PostgreSQL",
            id: "postgresql",
          },
        ],
      },
    ],
  },
  {
    title: "Cloud & DevOps",
    id: "cloud-devops",
    categories: [
      {
        title: "DevOps",
        id: "devops",
        technologies: [
          {
            title: "Nginx",
            id: "nginx",
          },
          {
            title: "Docker",
            id: "docker",
          },
          {
            title: "Kubernetes",
            id: "kubernetes",
          },
        ],
      },
      {
        title: "Cloud",
        id: "cloud",
        technologies: [
          {
            title: "Aws",
            id: "aws",
          },
          {
            title: "Azure",
            id: "azure",
          },
          {
            title: "Firebase",
            id: "firebase",
          },
          {
            title: "Supabase",
            id: "supabase",
          },
        ],
      },
    ],
  },
];
