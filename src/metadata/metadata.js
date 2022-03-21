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
    ['React', '+'],
    ['C#', '+'],
    // ['Perforce', '+'],
    ['Docker', '+'],
    // ['Jira', '+'],
  ],
  showintro: false,
  // Needs editing
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
  educationprojects: [
    {
      interactive: true,
      title: `Thesis - Continuous unobtrusive user authentication using gait for wearable devices,
utilising machine learning algorithms`,
      company: 'Powerpoint Slides',
      link: './cv_thesis.pdf',
      written: '',
      badges: ['Machine Learning', `Biometrics`, 'AI', 'Python', 'Java', 'Android'],
      contents: `
In recent years, much research has been done to find new authentication methods
that try to avoid explicit input from a user. This techniques use patterns and
biometrics from a user to recognize machine learning models. One of these
biometrics is the way a person walks. It can be captured by sensors on a
smartwatch or smartphone, easily and unobtrusively.

The aim of this thesis is to develop a method that is based on an existing
barebone implementation. This application consists of a wearable application to
record data and a server application to process this data offline.
With a study of state-of-the-art recognition of human activity and gait
recognition, this implementation was studied, expanded and improved.
In this project, a human activity recognition system was placed in cascade with
a gait recognition system to design a continuous gait-based authentication
model. These systems are traditional machine learning models and use a new
feature-extraction technique that is fast and accurate. The new implementation
allows data to be captured, to be trained offline on the server and for
new data to be evaluated on the wearable. We have explored deep learning, but
the traditional approach with manually designed functions performs better.

`
    },
    {
      source:  true,
      title: `8051 microcontroller instruction set IEEE754 32bit Floating-Point Library`,
      link: 'https://github.com/jellemeeus/8051FloatingPointLibrary32c',
      written: '',
      badges: ['ASM', `8051`, 'aduc832', 'IEEE754'],
      contents: `
Implementation of a IEEE754 Floating-Point library on the aduc832 system
platform for 8bit 8052 based systems.
The library allows for correct and fast calculation of the 4 basic operations
(+,-,*,/) for two numbers in IEEE754 32b without using MUL/DIV instructions.
`
    },
  ],
  plays: [
    {
      title: 'Machine learning algorithms student',
      company: 'OneSpan',
      written: '4 weeks summer 2017',
      link: 'https://www.onespan.com/',
      badges: ['Machine Learning', `Biometrics`, 'AI', 'Python', 'Java', 'Android'],
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
      I was part of a customer’s internal R&D team migrating Version Control
      Systems (VCS) from Perforce to Git. A large part of my project was to
      write tools with existing and new features using Python and Gitlab API.
      Using the same API, I setup a R&D Internal website to provide an overview
      of projects that updates nightly. I did smaller IT related tasks, such as
      setting up automated backups of firewall settings and Jenkins
      configurations. Also, I wrote some automated tests in an in-house testing
      framework. 
`
    },
  ],
  experience: [
    {
      interactive: true,
      header: 'Drawing Cards',
      source: 'https://github.com/SoglaHash/cards',
      interactive_link: 'https://soglahash.github.io/cards/',
      interactive_button: 'demo here',
      skills: ['React', 'javascript'],
      contents: `
A card drawing web app created with React hosted in github pages.
Create and interact with a deck of French-suited SVG rendered cards.
You can draw one or multiple cards, shuffle, flip over the deck.
All neatly displayed through React
with a status bar, menu bar and mouse over interaction.
`
    },
    {
      header: 'Bomberman',
      source: 'https://github.com/Jelle-M/unity-bomberman',
      skills: ['C#', 'unity'],
      contents: `
      Example of a 2D Classic Bomberman game made with unity.
      You can play as a bomb laying bunny and walk around a maze to reach a
      carrot and try not blow yourself up in the process.

`,
      interactive: true,
      interactive_link: 'https://jellemeeus.github.io/unity-bomberman/',
      interactive_button: 'play here',
    },
    {
      interactive: false,
      header: 'Discord weather bot',
      source: 'https://github.com/Jelle-M/personal-discord-weatherbot',
      skills: ['Python', 'API', 'CI'],
      contents: `
      Receive automated weather updates through discord. Allows for lookup of
      weather forecast at a location with Dark Sky API and OpenWeatherMap API.
      The pipeline consists of Travis CI, flake8 and pytest.
`
    },
  ]
};
