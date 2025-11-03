import { Project } from "@/types";


export const projects: Project[] = [
    {
        title: 'Food Ordering App',
        description: 'A Frontend Food ordering platform built with React.js and Tailwind CSS.',
        technologies: ['ReactJS', 'Tailwind CSS'],
        githubLink: 'https://github.com/dev152004/swiggy-clone-React',
        demoLink: 'https://dev-food-ordering.netlify.app/',
        image: '/projects/food-ordering-app.webp',
      },
      {
        title: 'Netflix Clone App',
        description: 'A Frontend Netflix clone platform built with React.js and Tailwind CSS with movie trailer feature',
        technologies: ['ReactJS',"reactYoutube", 'Tailwind CSS'],
        githubLink: 'https://github.com/dev152004/Netflix-clone',
        demoLink: 'https://dev-project-clone-app.netlify.app',
        image: '/projects/netflix-clone-app.webp',
      },
      {
        title: 'Google Clone',
        description: 'A Frontend Google Search clone platform built with React.js and Tailwind CSS',
         technologies: ['ReactJS',"googleSearchAPI", 'Tailwind CSS'],
        githubLink: 'https://github.com/dev152004/google-clone',
        demoLink: 'https://dev-google-clone.netlify.app/',
        image: '/projects/google-clone.webp',
      },
  ];