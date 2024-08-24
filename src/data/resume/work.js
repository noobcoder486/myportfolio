/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'New Era IT CONSULTANCY(WORKSCAN)',
    position: 'Full Stack Software Developer',
    startDate: '2022-10-01',
    summary: `My job involves developing and maintaining CRM software for clients
    including major brands like Maple, iPlanet, and Reliance. 
    I specialize in using the Angular framework to create solutions that meet the specific needs.
    I work closely with clients to ensure that the software meets their requirements and deliver
    ongoing support and maintenance. My work is crucial in helping companies manage customer interactions,
    streamline processes, and improve their overall business operations.`,
    highlights: [
      'Integrated PineLabs and Jiopay payment systems.',
      'Integrated ERP systems, SAP to sync with the software',
      'Developed APIs using Dot Net Core',
    ],
  },
  {
    name: 'Yodaplus Technology',
    position: 'Django Developer',
    startDate: '2022-04-04',
    endDate: '2022-06-30',
    summary: `Got an Hands on experience in Python viz creating APIs and working on a small Quiz App Project,
    also got to know about modern MVT architecture of Django and functionality of ORM enabling efficient data communication,
    from databases`,
    highlights: [
      'Developed APIs using Django',
    ],
  },
  {
    name: 'Brackets Infinity Pvt. Ltd',
    position: 'Software Engineer',
    startDate: '2021-07-26',
    endDate: '2022-03-31',
    summary: `Transformed user experiences by developing dynamic client-side web applications
    with Angular frameworks. Expertly integrated SQL databases for streamlined data management. 
    Collaborated within cross-functional teams to analyze requirements, co-design innovative solutions, 
    and deliver impactful projects. Thrived in solving intricate problems and optimizing performance
    in a dynamic development environment`,
    highlights: [
      'Developed Websites',
    ],
  },
];

export default work;
