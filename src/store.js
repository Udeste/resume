import { createStore } from 'vuex'

const cv = {
  role: 'Senior frontend engineer',
  contactInfo: {
    name: 'Umberto',
    surname: 'De Stefano',
    location: 'Amsterdam, The Netherlands',
    phone: '',
    email: '',
    links: [
      {
        name: 'GitHub',
        icon: ['fab', 'github'],
        url: ''
      },
      {
        name: 'LinkedIn',
        icon: ['fab', 'linkedin'],
        url: ''
      }
    ]
  },
  summary: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  workExperience: [
    {
      title: 'Front-end Engineer',
      company: {
        name: 'Bright Computing BV',
        url: 'http://www.brightcomputing.com/'
      },
      location: 'Amsterdam, The Netherlands',
      dates: {
        from: 'October 2016',
        to: 'Present'
      },
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`,
      links: [
        {
          name: 'Bright View demo',
          url: 'http://brightview-demo.brightcomputing.com/'
        }
      ],
      techStack: [
        'AngularJS',
        'Angular 7',
        'Bootstrap',
        'BreezeJS',
        'Javascript',
        'Typescript',
        'ES6',
        'NodeJS',
        'HTML5',
        'CSS3',
        'SASS',
        'Gulp',
        'dc.js',
        'd3.js',
        'babylon.js',
        'redux',
        'ngrx',
        'Git',
        'SVG',
        'Chrome console',
        'Jira',
        'Bitbucket'
      ]
    },
    {
      title: 'Front-end/UI Developer',
      company: {
        name: 'Consultant at Walgreens Boots Alliance',
        url: 'http://www.walgreensbootsalliance.com/'
      },
      location: 'Napoli, Italy',
      dates: {
        from: 'May 2016',
        to: 'September 2016'
      },
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`,
      links: [
        {
          name: 'E.M.M. Informatica',
          url: 'http://www.emminformatica.it/'
        }
      ],
      techStack: [
        'AngularJS',
        'Angular-Material',
        'Typescript',
        'Javascript',
        'ES6',
        'NodeJS',
        'HTML5',
        'CSS3',
        'SASS',
        'Gulp',
        'Git',
        'Google material design',
        'Chrome console',
        'Jira',
        'Confluence',
        'Scrum'
      ]
    }
  ],
  education: [
    {
      title: 'Bachelor’s Degree in Computer Science',
      institute: {
        name: 'University of Salerno',
        url: 'https://www.unisa.it/'
      },
      location: 'Salerno, italy',
      dates: {
        from: '2009',
        to: '2015'
      },
      description: `
                  • Programming: C, Java, PHP, Javascript;\n
                  • Network Applications;\n
                  • Web development: HTML,CSS,JS,XML;\n
                  • Algorithms and data structures;\n
                  • Systems Architecture and Security;\n
                  • Database SQL & MySQL\n
                  • Mobile applications development;\n
                  • Statistics & Math.`
    }
  ],
  certifications: [
    {
      title: 'MongoDBx: M101x Introduction to MongoDB using the MEAN Stack',
      institute: { name: 'Edx' },
      dates: {
        from: '08 April 2016'
      },
      certificateId: {
        name: '0a2302b7b5b84976817cc64cf66c8e03',
        url:
          'https://courses.edx.org/certificates/0a2302b7b5b84976817cc64cf66c8e03'
      }
    }
  ],
  hobbies: [],
  languages: [
    {
      language: 'Italian',
      levels: {
        read: 5,
        write: 5,
        speak: 5
      }
    },
    {
      language: 'English',
      levels: {
        write: 5,
        read: 5,
        speak: 4
      }
    }
  ]
}

export default createStore({
  state() {
    return { cv }
  },
  mutations: {},
  actions: {}
});
