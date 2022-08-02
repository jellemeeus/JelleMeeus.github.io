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
    'Website': '<a href="https://jellemeeus.github.io">https://jellemeeus.github.io</a>'
  },
  skills: [
    ['Python', '+++'],
    ['Git', '+++'],
    ['Javascript', '++'],
    // ['Bash', '++'],
    ['VIM', '++'],
    //['GNU/Linux', '++'],
    ['Java', '++'],
    ['CI/CD', '++'],
    ['C/C++', '++'],
    ['PL/SQL', '++'],
    ['8051 ASM', '++'],
    // ['Verilog', '++'],
    ['React', '++'],
    ['C#', '++'],
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
      company2: 'Text',
      link2: './thesis_text.pdf',
      link: './thesis_slides.pdf',
      written: '',
      badges: ['Machine Learning', `Biometrics`, 'AI', 'Python', 'Java', 'Android'],
      contents: `
In recent years, much research has been done to find new authentication methods
that try to avoid explicit input from a user. This teChniques use patterns and
biometrics from a user to recognize machine learning models. One of these
biometrics is the way a person walks. It can be captured by sensors on a
smartwatch or smartphone, easily and unobtrusively.

      I researched a new feature-extraction technique to allow traditional machine learning models to recognize
      walking activity and recognize gait in a fast and accurate way. I developed a server application (Python)
      to process gait data and train models. I implemented a wearable application (Android) to record data
      and run inference of said trained models in real-time.

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
      I wrote tools accommodating a customer's migration from a Perforce Version
      Control System (VCS) to Git. I implemented existing and
      new features using Python and Gitlab API to meet
      in-house developer demands. I setup a R&D Internal website
      (Bootstrap) to provide an overview of projects that updates
      nightly. I did smaller IT related tasks, such as
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
      interactive_button: 'Demo Here',
      skills: ['React', 'Javascript'],
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
      source: 'https://github.com/SoglaHash/bomberman-godot',
      skills: ['C#', 'Godot'],
      contents: `
      Example of a 2D Classic Bomberman game made with godot.
      You can play as a bomb laying bunny and walk around a maze to reach a
      carrot and try not to blow yourself up in the process.

`,
      interactive: true,
      interactive_link: 'https://soglahash.github.io/bomberman-godot/',
      interactive_button: 'Play Here',
    },
    {
      interactive: false,
      header: 'Twitch Compilations From Cluster Data',
      source: 'https://github.com/SoglaHash/twitch-compilation-from-cluster',
      skills: ['Python', 'Javascript', 'React', 'ElectronJS', 'Twitch API', 'Youtube API'],
      contents: `
      Create Twitch compilations and upload to Youtube with ease. Find clips by creators, clip ids, clip urls, game ids, category name, or a cluster based off Twitch Atlas.
`
    },
    {
      interactive: false,
      header: 'Automated local and cloud backups with cronjobs',
      source: 'https://github.com/jellemeeus/cronjobs-rsync-rclone-backups',
      skills: ['crontab', 'GNU/Linux', 'rsync', 'rclone'],
      contents: `
Easy automated backups to local and remote drives with cronjobs, rsync and rclone.

We can specify which files to upload with filters (*.txt) and easily upload to multiple cloud drives with variable data cap limits.
`
    },
    {
      interactive: false,
      header: 'Home Media Server',
      source: 'https://github.com/jellemeeus/home-media-server',
      skills: ['Docker'],
      contents: `
docker-compose.yml for a Home Media Server stack including: transmission (+ openvpn), jackett, radarr, sonarr, lidarr, calibre, calibre-web, plex, soulseekqt
`
    },
  ]
};
