import { url } from "inspector"

const works = [
  {
    id: 1,
    url: 'n8n',
    img: '/ai/web_scraping.png',
    title: 'N8N Automation',
    title2: '# N8N Automation',
    title3: 'Amazon Data Capture',
    subTitle: 'Amazon Data Capture',
    description:
      'This project involves building a comprehensive n8n automation platform that captures Amazon marketplace data and competitor intelligence through multiple sources including Amazon Seller Central API, DataDive.tools API, and web scraping, then stores it in a centralized AWS Aurora/Postgres data warehouse. The system provides real-time monitoring and Slack notifications for significant events like competitor price changes, creating a scalable foundational data platform for marketplace analytics and competitive intelligence.',
    tags: [
      { name: 'N8N', icon: '/icons/n8n.jpg' },
      { name: 'Amazon', icon: '/icons/amazon.png' },
    ],
    date: 'Dec 2021 - Aug 2024',
    prints: [
      {
        name: 'PPC Report',
        image: '/ai/ppc_reports.png',
        date: '24th, November 2021',
        description:
          'This workflow diagram illustrates a comprehensive PPC (Pay-Per-Click) data processing system that handles authentication, report generation, and order management across multiple integrated modules. ' 
      },
      {
        name: 'DataDive API',
        image: '/ai/datadive.png',
        date: '26th, January 2022',
        description:
          'This is a comprehensive SEO and competitor analysis workflow that automates keyword research and ranking intelligence through the DataDive API.'
      },
      {
        name: 'Amazon Web Scraping',
        image: '/ai/web_scraping.png',
        date: '26th, January 2022',
        description:
          'This is an Amazon product web scraping automation workflow designed to collect competitor product data from Amazon1.  '
      },
    ]
  },
  // {
  //   id: 2,
  //   url: 'Shelter-Service',
  //   img: '/Volunteering/Bhumi/Bhumi.png',
  //   title: 'Ignite - Kanini',
  //   title2: '#Shelter Care',
  //   title3: 'Bhumi Volunteer',
  //   subTitle: 'Bhumi - Chennai',
  //   description:
  //     'Ignite is a shelter transformation program that aims to improve the quality of education provided to children in shelter homes. The program focuses on the holistic development of the children by providing them with the necessary support and guidance.',
  //   tags: [
  //     { name: 'Bhumi Logo', icon: '/Volunteering/Bhumi/BhumiLogo.png' },
  //     { name: 'Nakshatra Logo', icon: '/Volunteering/Bhumi/Nakshatra.png' },
  //   ],
  //   date: 'Jun 2023 - Present',
  //   prints: [
  //     {
  //       name: 'The Induction Program',
  //       image: '/Volunteering/Bhumi/prep.jpg',
  //       date: '4th, June 2023',
  //       description:
  //         'The day (4/6/2023) when my journey as an Bhumi volunteer commenced. I decided to join the Kanini program as I am passionate about teaching kids about Computer Science.' 
  //     },
  //     {
  //       name: 'Kanini Induction Program',
  //       image: '/Volunteering/Bhumi/Kanini.jpg',
  //       date: '11th, June 2023',
  //       description:
  //         'This Induction Program was conducted by the Kanini team. The program was conducted to give us an overview of the program and also to give us an idea of what we are going to do in the program and in which center we are going to teach.'
  //     },
  //     {
  //       name: 'Bhumi Awards 2023',
  //       image: '/Volunteering/Bhumi/Award.JPG',
  //       date: '16th, July 2023',
  //       description:
  //         'The awards were given to the volunteers who have done a great job in the past year. I was a spectator for the event and I was inspiring to see the volunteers getting the awards.'
  //     },
  //     {
  //       name: 'Nakshatra Arts 2023',
  //       image: '/Volunteering/Bhumi/NakshatraCerti.jpeg',
  //       date: '9th, September 2023',
  //       description:
  //         'The event was conducted to showcase the talents of the kids. The kids performed various activities such as Dance, Singing, Drawing, etc. The kids were very happy and enjoyed the event.'
  //     },
  //     {
  //       name: 'City Con 2023',
  //       image: '/Volunteering/Bhumi/Citycon.jpg',
  //       date: '17th, December 2023',
  //       description:
  //         'City Con 2023 was a meet within the Chennai city volunteers. The meet was conducted to discuss the progress of the program and also to discuss the problems faced by the volunteers. The meet was very useful and I got to know a lot of things about the program.'
  //     },
  //     {
  //       name: 'Seeds of Change',
  //       image: '/Volunteering/Bhumi/Seeds.png',
  //       date: '14th, April 2024',
  //       description:
  //         'Participated in a meaningful tree plantation drive as a Bhumi volunteer conducted by Eco-Champs Team of Bhumi.'
  //     },


      
  //     {
  //       name: 'Bhumi Image Gallery',
  //       image: '/Volunteering/Banners/BhumiJourney.png',
  //       date: '4th, June 2023 - Present',
  //       url: 'https://photos.app.goo.gl/9MBDG7vz87Bczgy19',
  //       urltitle: 'View the images here',
  //       description:
  //         'A collection of images from my Kanini journey at Bhumi, showcasing my participation in various events, competitions, and initiatives.'
  //     },
  //     {
  //       name: 'Bhumi Documentation',
  //       image: '/Volunteering/Banners/BhumiDocumentation.png',
  //       date: '4th, June 2023 - Present',
  //       url: 'https://drive.google.com/drive/folders/14V1WOJlykj97yWppdx2ESnuK1U-yhafC?usp=sharing',
  //       urltitle: 'View the documentation here',
  //       description:
  //         'A comprehensive documentation of my Kanini journey at Bhumi, highlighting my participation in events, competitions, and initiatives.'
  //     },


  //   ]
  // },
  // {
  //   id: 3,
  //   url: 'School-Service',
  //   img: '/Volunteering/School/Govt.png',
  //   title: 'Volunteer',
  //   title2: '#Passion',
  //   title3: 'Teaching Kids',
  //   subTitle: 'Government School - Chennai',
  //   description:
  //     'My strong initiative, exceptional passion, and ability to teach a diverse range of learners allow me to play a crucial role in a teaching environment. Even though I am a college student with academics to follow, I still want to pursue my passion for teaching.',
  //   tags: [
  //     { name: 'Students', icon: '/Volunteering/School/Students.png' },
  //     { name: 'Sessions', icon: '/Volunteering/School/Sessions.png' },
  //   ],
  //   date: 'Apr 2022 - Jan 2023',
  //   prints: [
  //     {
  //       name: 'The Beginning',
  //       image: '/Volunteering/School/1.jpg',
  //       date: '11th, July 2022',
  //       description:
  //         'I have taken spoken English classes to 4t & 5th Grade. Phase 2 started on 11th July and ended on 31st August. Phase 2 had a total of 22 sessions in which the students have taught various important topics and also took part in fun activities.' 
  //     },
  //     {
  //       name: 'Volunteering with Poovaragavan',
  //       image: '/Volunteering/School/Poova.jpg',
  //       date: '13th, July 2022',
  //       description:
  //         'My fellow NSS volunteer, Poovaragavan joined with me for a day to teach Articles to the kids. He taught the kids about the basics of Articles and also gave them a few examples.'
  //     },
  //     {
  //       name: 'Volunteering with Vijay',
  //       image: '/Volunteering/School/Vijay.jpg',
  //       date: '14th, July 2022',
  //       description:
  //         'My friend Vijay joined with me for a day to teach kids verbs. He taught the kids about the basics of verbs and also gave them a few examples. He also taught the kids about the basics of tenses.'
  //     },
  //     {
  //       name: 'Awarness Video in English',
  //       image: '/Volunteering/School/2.jpg',
  //       date: '12th, August 2022',
  //       url: 'https://drive.google.com/file/d/1cdWwjy40xD6y7-vs74b3F8vrTB1WTowh/view?usp=sharing',
  //       urltitle: 'Watch the video here',
  //       description:
  //         'Awareness Video On International Youth Day (12th Aug), An awareness video was created on the topic given by the United Nations Ageism. The 5th Grade students spoke 1 Min about ageism in English. The video was uploaded on Drive and the link was shared below.'
  //     },
  //     {
  //       name: 'Fun with Kids',
  //       image: '/Volunteering/School/Fun.jpg',
  //       date: '28th, August 2022',
  //       description:
  //         'Fun Activities such as Drawings, Origami, Dance and Singing were conducted for the kids. The kids were very happy and enjoyed the activities. The kids also learned a lot from the activities.'
  //     },
  //     {
  //       name: 'Final Exam',
  //       image: '/Volunteering/School/Exam.jpg',
  //       date: '30th, August 2022',
  //       description:
  //       'The final exam was conducted on 30th August. The exam was conducted to test the knowledge of the kids. The exam was conducted for 50 marks and the kids were given 1 hour to complete the exam. In the End Exam, The class average was 42% with 0 failures & 5 absentees.'
  //     },
  //     {
  //       name: 'Visit with my NSS Team',
  //       image: '/Volunteering/School/Visit.jpg',
  //       date: '11th, March 2023',
  //       description:
  //         'My NSS team visited the school to see the progress of the kids. The kids showed us the drawings they made and also showed us the activities they learned. The kids were very happy and they were very excited to show us their work. My team played with the kids and also taught them a few things. The kids were very happy and they enjoyed the visit. ',
  //     },
  //     {
  //       name: 'Volunteering Documentation', 
  //       image: '/Volunteering/Banners/GovtDocumentation.png',
  //       date: '31st, August 2022',
  //       description:"The documentation included the details of the sessions, the topics taught, the activities conducted, and the exam details with corrected papers.",
  //       url: 'https://drive.google.com/drive/folders/1iBqFAWdkygWAuBZxrFDmeg0UeGHf84Lo?usp=sharing',
  //       urltitle: 'View the documentation here'
  //     }
  //   ]
  // },
]

export default works
