export const HomeData = {
  navBarData: {
    title: "JJones",
    navItems: [
      { text: "About me", href: "#" },
      { text: "Projects", href: "#" },
      { text: "My Services", href: "#" },
      { text: "Contact Me", href: "#" },

      { text: "Use Cases", href: "#" },
    ],
    onButtonClick: () => {
      /* action */
    },
  },

  mainSectionData: {
    title: "I'm Jane Jones a UX Designer",
    description:
      "An engaging onboarding process is crucial for mobile applications to ensure users understand the value of the app and how to use it. This project focused on creating an intuitive and informative onboarding experience for a mobile application, utilizing best practices in UX design and user psychology to increase retention rates.",
    image: "avatar.png",
    reverse: false,
    onExploreButtonClick: () => {},
    onViewCodeClick: () => {},
  },

  aboutSectionData: {
    projects: 50,
    years: 5,
    satisfaction: 98,
    aboutItems: [
      "Mobile Development: In the realm of mobile development, I've spent years honing my skills to create responsive, user-friendly applications for both Android and iOS platforms. My journey began with mastering native development languages such as Swift for iOS and Kotlin for Android, allowing me to build apps that seamlessly integrate with a device's native features. Over time, I've embraced cross-platform frameworks like Flutter and React Native, enabling me to deliver consistent and efficient user experiences across all devices. My projects range from e-commerce apps that simplify shopping to health and fitness trackers that aid users in their wellness journeys, each crafted with the user's needs at the forefront.",
      "Front-End Development: My passion for front-end development is driven by the desire to create visually appealing and intuitive web applications. I've worked extensively with HTML, CSS, and JavaScript, along with frameworks like React.js and Vue.js, to build interactive and dynamic user interfaces. My focus is on optimizing website performance and ensuring accessibility, aiming for a seamless web presence that engages users across different browsers and devices. From designing responsive layouts to implementing complex web animations, my goal is to craft experiences that captivate and retain users' attention.",
      "Back-End Development: On the back-end side, my expertise lies in building robust, scalable server architectures that can handle high volumes of traffic and data. I'm proficient in working with languages such as Python, Node.js, and Java, and I have a deep understanding of database management systems like MySQL, MongoDB, and PostgreSQL. My work involves developing APIs, managing cloud-based services, and ensuring data security and privacy compliance. Whether it's for a startup or a large corporation, I create back-end systems that are not only powerful but also resilient and easy to maintain.",
      "Artificial Intelligence: Venturing into the field of Artificial Intelligence (AI), I've explored how machine learning (ML) algorithms can enhance and transform traditional applications. My projects include leveraging natural language processing (NLP) for chatbots that provide human-like customer service and using predictive analytics to offer personalized user experiences. By integrating AI into mobile and web applications, I aim to unlock new possibilities, from automating routine tasks to providing insightful data analysis. This journey into AI has not only broadened my technical skill set but also opened up innovative pathways for solving complex problems.",
    ],
    title: "Get to Know Me",
  },

  stackData: [
    {
      title: "Python",
      image: "python.svg",
    },
    {
      title: "React",
      image: "react.svg",
    },
    {
      title: "JavaScript",
      image: "js.svg",
    },
    {
      title: "Swift",
      image: "swift.svg",
    },
    {
      title: "Java",
      image: "java.svg",
    },
    {
      title: "Ai",
      image: "gpt.svg",
    },
  ],

  serviceData: {
    title: "What i do",
    services: [
      {
        image: "webdesign.svg",
        title: "Web Design",
        description:
          "Crafting unique, visually stunning websites that capture your audience's  engagement.",
      },

      {
        image: "coding.svg",
        title: "Web Development",
        description:
          "Building dynamic, robust web solutions tailored to elevate your digital presence and business goals.",
      },

      {
        image: "seo.svg",
        title: "SEO",
        description:
          "Enhancing your online visibility and search rankings through targeted, effective SEO strategies.",
      },

      {
        image: "optimization.svg",
        title: "Website Optimization",
        description:
          "Optimizing site performance for maximum speed, usability, and conversion, ensuring user satisfaction.",
      },

      {
        image: "accesibility.svg",
        title: "Accesibility",
        description:
          "Making your website accessible to all, enhancing user experience with inclusivity at the forefront.",
      },

      {
        image: "planing.svg",
        title: "Planning",
        description:
          "Strategically planning your web projects to align with business objectives, ensuring successful outcomes.",
      },
    ],
  },



  
  otherProjects: {
    title: "My Portfolio",
    projects: [
      { title: "Movie Application", image: "app.png", type: "Mobile App" },
      { title: "Chat App", image: "app3.png", type: "Mobile App" },
      { title: "Onboarding Experience", image: "app5.png", type: "Mobile App" },
      { title: "Restaurant Website", image: "app2.png", type: "Website" },
      {
        title: "Design Template for Websites",
        image: "app4.png",
        type: "Website",
      },
      {
        title: "Design Template for Websites",
        image: "app4.png",
        type: "Website",
      },
    ],
  },

  contactInfo: [
    { label: "Email", info: "info@myemail.com" },
    { label: "Phone", info: "000-000-0000" },
    { label: "Address", info: "Montreal, Canada" },
  ],


blogSection: {
  title: "Insights and Innovations",
  description: "Explore the latest trends and thoughts from our experts.",
  blogPosts: [  // Renamed from blogData to blogPosts
    {
      image: "blog1.png",
      category: "Technology",
      title: "The Future of AI in Design",
      description: "Explore how AI is revolutionizing the design industry by automating creative processes.",
      avatar: "avatar.png",
      author: "Olivia Rhye",
      date: "20 Jan 2024"
    },
    {
      image: "blog2.png",
      category: "Productivity",
      title: "Boosting Team Productivity",
      description: "Effective strategies to enhance your team's productivity and efficiency in remote settings.",
      avatar: "avatar.png",
      author: "Olivia Rhye",
      date: "22 Jan 2024"
    },
    {
      image: "blog3.png",
      category: "User Experience",
      title: "UX Trends for 2024",
      description: "Stay ahead of the curve with these top UX design trends that are shaping the future.",
      avatar: "avatar.png",
      author: "Olivia Rhye",
      date: "25 Jan 2024"
    }
  ]
},

  

    
   footerData:{
    links: [
      { name: "About Me", url: "#" },
      { name: "Services", url: "#" },
      { name: "FAQ", url: "#" },
      { name: "Contact", url: "#" }
    ],
    socialLinks: [
      { name: "Facebook", url: "https://facebook.com", icon: "facebook.svg" },
      { name: "LinkedIn", url: "https://linkedin.com", icon: "linke.svg" },
      { name: "Twitter", url: "https://twitter.com", icon: "twitter.svg" }
    ],
    companyName: "JJones"
  }
};
