const experience = [
  // {
  //   id: 4,
  //   img: '/experience/kuubiik.png',
  //   title: {
  //     en: 'Kuubiik',
  //     ta: 'NIWE',
  //   },
  //   subTitle: {
  //     en: 'SENIOR SOFTWARE ENGINEER ',
  //     ta: 'தேசிய காற்றால் மின்சக்தி நிறுவனத்தினர்',
  //   },
  //   office: {
  //     en: 'Singapore',
  //     ta: 'இணை (WRA பிரிவு)',
  //   },
  //   description: {
  //     en: '✯Spearheaded the development of 5+ applications using React (with Hooks and Redux), Node.js, Gin, Go, and Spring Boot, improving user engagement by 35%. \n\n✯Designed state management solutions with Redux, enhancing application performance by 30%. \n\n✯Utilized React Hooks for functional components, optimizing rerendering processes and improving app performance by 20%. \n\n✯Architected and integrated 15+ RESTful and SOAP APIs, streamlining data interaction and enhancing application efficiency by 40%. \n\n✯Developed microservices in Go using Gin, increasing system performance by 20%. \n\n✯Leveraged Docker and Kubernetes for containerization, achieving 99.9% uptime across AWS and Azure cloud deployments. \n\n✯Implemented Git workflows with JIRA, reducing deployment time by 20% through agile methodologies. \n\n✯Collaborated with cross-functional teams, resulting in 30% faster feature rollouts.',
  //     ta: '✯செயல்பாட்டு திறனை மேம்படுத்தும் .dat முதல் .csv மாற்றி மற்றும் NIWE டாஷ்போர்டு போன்ற பல்வேறு மென்பொருள் கருவிகளை உருவாக்கினேன்.\n\n✯ஆராய்ச்சி முடிவுகளை மேம்படுத்த முன்னேற்றமான தரவுப்பயன்பாட்டு தொழில்நுட்பங்களைப் பயன்படுத்தினேன்.\n\n✯தகுதியான, தொழில்முறை மற்றும் திறமையான தொடர்புகள் மூலம் நேர்மறை குழு இயங்கலை ஊக்குவித்தேன்.\n\n✯தகவல் பகிர்வை எளிமைப்படுத்தும் வகையில் விரிவான ஆவணங்களை பராமரித்தேன்.\n\n✯தொடர்ச்சியான கற்றல் மற்றும் தொழில்முறை திறமைகளுக்கான ஆற்றலை வெளிப்படுத்தினேன், புதிய சவால்களை சமாளிக்க தயாராக உள்ளேன்.',
  //   },
  //   tags: [
  //     { name: 'React', icon: '/icons/react.png' },
  //     { name: 'NodeJS', icon: '/icons/node.png' },
  //     { name: 'Spring Boot', icon: '/icons/springboot.png' },
  //     { name: 'Go & Gin ', icon: '/icons/go.png' },
  //     { name: 'AWS', icon: '/icons/aws.png' },
  //     { name: 'Docker', icon: '/icons/docker.png' },
  //     { name: 'Kubernetes', icon: '/icons/kubernets.png' },
  //     { name: 'Git', icon: '/icons/git.png' },
  //     { name: 'JIRA', icon: '/icons/jira.png' },
  //   ],
  //   date: ' May 2021 – April 2024',
  //   link: 'https://drive.google.com/file/d/1b7GSsGtZvycOhRV-JGZXC2gvwYH-9nKj/view?usp=sharing',
  //   link2: 'https://niwe.res.in/',
  //   certificate: 'https://drive.google.com/file/d/1at_R9nQVm3805JuvF-xBaeQqRrT9LYeS/view?usp=sharing',
  // },
  // {
  //   id: 3,
  //   img: '/experience/moiboo.jpg',
  //   title: {
  //     en: 'Moiboo',
  //     ta: 'BARC',
  //   },
  //   subTitle: {
  //     en: 'LEAD SOFTWARE ENGINEER',
  //     ta: 'பாபா அணு ஆராய்ச்சி மையம்',
  //   },
  //   office: {
  //     en: 'Singapore',
  //     ta: 'திட்ட பயிற்சியாளர் (எலக்ட்ரானிக்ஸ் பிரிவு, ECIL)',
  //   },
  //   description: {
  //     en: '✯Delivered 50% increase in user satisfaction by developing innovative features for a SaaS application implementing a range of technologies, including Vue.js, Ruby on Rails, Gin, Go, and PostgreSQL. \n\n✯Streamlined CI/CD processes using Jenkins, achieving a 50% reduction in integration errors and accelerating release cycles by 30%. \n\n✯Designed and implemented 10+ microservices in Go using the Gin framework, resulting in a 45% enhancement in response times and improved application scalability. \n\n✯Managed cloud environments on AWS and Azure, ensuring robust, secure, and scalable applications that handled up to 10,000 concurrent users through effective deployment strategies. \n\n✯Established comprehensive testing standards using Jest and Mocha, achieving a 90% code coverage and significantly decreasing production bugs.',
  //     ta: '✯பைதான் மற்றும் PyQt5 களை பயன்படுத்தி விரிவான மூன் தடம் மறுசீரமைப்பு மென்பொருளை உருவாக்கினேன், 100+ உருட்டு குழாய்களை ஒரே நேரத்தில் முன்னர் சோதனை செய்ய அனுமதித்தது. \n\n✯விரிவான குழாயின் தொகுப்புகள், வரிசைகள், நெடுஞ்சாலைகளுடன் கூடிய மூன் தொடர்புகளின் நேர்முக சோதனைகள் மற்றும் தானாகவே சீரமைப்பு செய்யப்பட்டது. \n\n✯உள்ளடக்கங்களுக்காக 99.99% குறைந்த சதவிகித பிழை குறைக்கும் தானாகவே சீரமைப்புக் குறிப்பை உருவாக்கினேன். \n\n✯தரவை பகுப்பாய்வு திறன்களை மேம்படுத்தும் 6 பிழை கையாளுதல் விருப்பங்களை உள்ளடக்கிய இடைமுகத்தை வடிவமைத்தேன். \n\n✯சீரிய சோதனை விஷயங்களை காட்டுவதற்கு Flask API ஐ இணைத்தேன், முழு-ஸ்டாக் மேம்பாட்டு திறன்களை வெளிப்படுத்துகிறது மற்றும் பயனர் ஈடுபாட்டை மேம்படுத்துகிறது.',
  //   },
  //   tags: [
  //     { name: 'VueJS', icon: '/icons/vue.png' },
  //     { name: 'Ruby', icon: '/icons/ruby0.png' },
  //     { name: 'Ruby on Rails', icon: '/icons/ruby.png' },
  //     { name: 'Go & Gin', icon: '/icons/go.png' },
  //     { name: 'AWS', icon: '/icons/aws.png' },
  //     { name: 'Azure', icon: '/icons/azure.jpg' },
  //   ],
  //   date: 'March 2018 - May 2021',
  //   link: 'https://drive.google.com/file/d/1YJ7BeX5BpPyxI_3cpHKylPA5uMWApt2B/view?usp=sharing',
  //   link2: 'https://www.barc.gov.in/',
  //   certificate: 'https://drive.google.com/file/d/14ycBaF9U54wz3Jb1mJRyiRAl5fE7TpLS/view?usp=sharing',
  // },
  {
    id: 2,
    img: '/experience/upwork.png',
    title: {
      en: 'Freelance ',
      ta: 'NIWE',
    },
    subTitle: {
      en: 'Senior AI/ML Automation Engineer',
      ta: 'தேசிய காற்றால் மின்சக்தி நிறுவனத்தினர்',
    },
    office: {
      en: 'Contract/Remote',
      ta: 'இணை (WRA பிரிவு)',
    },
    description: {
      en: '✯ Integrated GPT-4 & Claude into CRMs for replies, scoring, enrichment. \n\n✯ Developed custom eCommerce APIs for platforms like Shopify and WooCommerce, handling real-time order tracking, inventory sync, and customer segmentation. \n\n✯ Automated lead funnels and email workflows using n8n/Zapier connected to Stripe, Calendly, and third-party apps. \n\n✯ Made backend portals & dashboards using FastAPI and PostgreSQL. \n\n✯ Created bots to sync CRM data, cutting manual effort by 70%.                                                                     ',
      ta: '✯செயல்பாட்டு திறனை மேம்படுத்தும் .dat முதல் .csv மாற்றி மற்றும் NIWE டாஷ்போர்டு போன்ற பல்வேறு மென்பொருள் கருவிகளை உருவாக்கினேன்.\n\n✯ஆராய்ச்சி முடிவுகளை மேம்படுத்த முன்னேற்றமான தரவுப்பயன்பாட்டு தொழில்நுட்பங்களைப் பயன்படுத்தினேன்.\n\n✯தகுதியான, தொழில்முறை மற்றும் திறமையான தொடர்புகள் மூலம் நேர்மறை குழு இயங்கலை ஊக்குவித்தேன்.\n\n✯தகவல் பகிர்வை எளிமைப்படுத்தும் வகையில் விரிவான ஆவணங்களை பராமரித்தேன்.\n\n✯தொடர்ச்சியான கற்றல் மற்றும் தொழில்முறை திறமைகளுக்கான ஆற்றலை வெளிப்படுத்தினேன், புதிய சவால்களை சமாளிக்க தயாராக உள்ளேன்.',
    },
    tags: [
      { name: 'C#', icon: '/icons/Cs.png' },
      { name: 'Angular', icon: '/icons/angular.png' },
      { name: 'AWS', icon: '/icons/aws.png' },
      { name: 'MySQL', icon: '/icons/mysql.png' },

    ],
    date: ' 2020 - 2025',
    link: 'https://drive.google.com/file/d/1b7GSsGtZvycOhRV-JGZXC2gvwYH-9nKj/view?usp=sharing',
    link2: 'https://niwe.res.in/',
    certificate: 'https://drive.google.com/file/d/1at_R9nQVm3805JuvF-xBaeQqRrT9LYeS/view?usp=sharing',
  },
  {
    id: 1,
    img: '/experience/freelancer.jpg',
    title: {
      en: 'Freelance ',
      ta: 'TANGEDCO',
    },
    subTitle: {
      en: 'Backend & eCommerce Engineer ',
      ta: 'வட சென்னை வெப்ப மின்நிலையம்',
    },
    office: {
      en: 'Contract/Remote',
      ta: 'உற்பத்தி பயிற்சியாளர்',
    },
    description: {
      en: '✯  Led backend for eCom site with 50k+ monthly users. \n\n✯ Built APIs for payments, discounts, and user accounts. \n\n✯ Linked HubSpot CRM to sales and marketing workflows. \n\n✯ Set up order triggers and webhooks for email updates.',
      ta: '✯பராமரிப்பு, கருவி அமைப்பு, செயல்திறன் மற்றும் தொடர்பு பொறியியல் பிரிவுகளில் NCTPS-2ல் ஒரு வார உற்பத்தி பயிற்சியை முடித்தேன். \n\n✯சாதனங்களின் ஆய்வு, பிழைத்திருத்தம் மற்றும் வழக்கமான பராமரிப்பு நடவடிக்கைகளில் பங்கேற்று வெப்ப மின் உற்பத்தி குறித்த அறிவு பெற்றேன். \n\n✯மின் உற்பத்தி கணக்கீடுகளை மேற்கொண்டு பாதுகாப்பு மற்றும் முன்கூட்டியே கற்றல் மீது கவனம் செலுத்தினேன். \n\n✯வாழ்க்கைப் பாவனைக் கிடங்கில் தொழில்நுட்ப திறன்கள், சிக்கல் தீர்க்கும் திறன்கள் மற்றும் குழு வேலை திறன்களை மேம்படுத்தினேன்.',
    },
    tags: [
      { name: 'HTML', icon: '/icons/HTML.png' },
      { name: 'CSS', icon: '/icons/CSS.png' },
      { name: 'JS', icon: '/icons/JS.png' },
      { name: 'Python', icon: '/icons/python.png' },
      { name: 'WordPress', icon: '/icons/wordpress.png' },
      { name: 'Shopify', icon: '/icons/shopify.png' },
      { name: 'MySQL', icon: '/icons/mysql.png' },
      { name: 'MongoDB', icon: '/icons/mongodb.png' },

    ],
    date: '2017 - 2020',
    link: 'https://drive.google.com/file/d/10u-LsiLDjEdVlTQFXGOE5teaOflUBECz/view?usp=sharing',
    link2: 'https://www.tangedco.gov.in/',
    certificate: 'https://drive.google.com/file/d/1V8mbI67LRc6mE2qsPo_bCUT7nKqqdATC/view?usp=sharing',
  }
];

export default experience
