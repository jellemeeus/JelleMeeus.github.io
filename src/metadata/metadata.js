module.exports = {
  pdfLocation_EN:  `https://github.com/jellemeeus/resume-CV-pdf/raw/main/EN.pdf`,
  pdfLocation_NL:  `https://github.com/jellemeeus/resume-CV-pdf/raw/main/NL.pdf`,
  name: 'Ing. Jelle Meeus',
  title: 'Software Developer',
  pdfName: 'jelle-meeus.software-developer.pdf',
  facts: {
    'Location': '2580 Putte',
    'Email': '<a href="mailto:jelle.meeus@hotmail.com">jelle.meeus@hotmail.com</a>',
    'Language': 'Dutch (native), English (fluent), French (intermediate)',
    'Driver\'s license': 'B',
  },
  skills: [
    ['Python', '+++'],
    ['Git', '+++'],
    ['Javascript', '++'],
    // ['Bash', '++'],
    ['VIM', '++'],
    ['Linux', '++'],
    ['Java', '++'],
    ['CI/CD', '++'],
    ['C/C++', '++'],
    ['PL/SQL', '++'],
    ['8051 ASM', '++'],
    // ['Verilog', '++'],
    ['C#', '+'],
    // ['Perforce', '+'],
    ['Docker', '+'],
    // ['Jira', '+'],
  ],
  showintro: true,
  intro: `I graduated as
    Master in de industriële wetenschappen elektronica-ICT
    from the
    Katholieke Universiteit Leuven - Campus De Nayer - Sint-Katelijne-Waver.

    My studies include
    Machine Learning, ASM 8051 library, Web development

    Work includes
    build/release system, version control sytems, automatic testing`,
  education: {
    'Title' : 'Master in de industriële wetenschappen, elektronica-ICT',
    'Date' : '2018',
    'Location' :  'Katholieke Universiteit Leuven - Campus De Nayer - Sint-Katelijne-Waver'
  },
  plays: [
    {
      title: 'Machine learning algorithms student',
      company: 'OneSpan',
      written: '4 weeks summer 2017',
      link: 'https://www.onespan.com/',
      badges: ['Python', 'Java', 'Android'],
      contents: `
      Developed a demo allowing recording and analysis of gait data on an Android wearable device
`
    },
    {
      title: 'Junior Software Engineer Consultant',
      company: 'Sioux Embedded Systems',
      link: 'https://www.sioux.eu/',
      written: 'Nov 18 - Feb 19',
      badges: ['Python', 'Git', 'Perforce', 'Docker'],
      contents: `
      I was part of a customer’s internal R&D team migrating Version Control Systems (VCS) from Perforce to Git. A large part of my project was to write tools with existing and new features using Python and Gitlab API. Using the same API, I setup a R&D Internal website to provide an overview of projects that updates nightly. I did smaller IT related tasks, such as setting up automated backups of firewall settings and Jenkins configurations. Also, I wrote some automated tests in an in-house testing framework. 
`
    },
  ],
  experience: [
    {
      interactive: false,
      header: 'Discord weather bot',
      source: 'https://github.com/Jelle-M/personal-discord-weatherbot',
      skills: ['Python', 'CI'],
      contents: `
      Receive automated weather updates through discord. Allows for lookup of weather forecast at a location with Dark Sky API and OpenWeatherMap API. The pipeline consists of Travis CI, flake8 and pytest.
`
    },
    {
      header: 'Bomberman',
      source: 'https://github.com/Jelle-M/unity-bomberman',
      skills: ['C#', 'unity'],
      contents: `
      Simple example of the 2D Classic Bomberman game made with unity. 

`,
      interactive: true,
      interactive_link: 'https://jellemeeus.github.io/unity-bomberman/',
      interactive_button: 'play here',
    }
  ]
};
