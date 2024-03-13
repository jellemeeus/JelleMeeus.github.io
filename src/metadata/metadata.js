module.exports = {
  pdfLocation_EN:  `https://github.com/jellemeeus/resume-CV-pdf/raw/main/CV_Jelle_Meeus_EN.pdf`,
  pdfLocation_NL:  `https://github.com/jellemeeus/resume-CV-pdf/raw/main/CV_Jelle_Meeus_NL.pdf`,
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
    build/release system, version control systems, automatic testing`,
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
I researched a gait-based authentication method amidst growing interest in non-explicit user input.
I enhanced an existing barebone implementation, featuring an Android wearable app for data
recording and a Python server app for offline processing. I integrated human activity and gait recognition
systems, employing traditional machine learning models and a novel, fast, and accurate feature extraction
technique. The outcome is a seamless, continuous gait-based authentication system, enabling offline data
capture, server-based training, and real-time evaluation on a wearable.
`
    },
    {
      source:  true,
      title: `8051 microcontroller instruction set IEEE754 32bit Floating-Point Library`,
      link: 'https://github.com/jellemeeus/8051FloatingPointLibrary32c',
      written: '',
      badges: ['ASM', `8051`, 'aduc832', 'IEEE754'],
      contents: `
Implementation of an IEEE754 Floating-Point library for aduc832 system platform for 8-bit 8052 based systems.
This library allows for accurate and fast calculations of the four basic operations
(+, -, *, /) for two numbers in IEEE754 32-bit floating-point format without using MUL/DIV instructions
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
      title: 'Software Engineer Consultant',
      company: 'Sioux Embedded Systems',
      link: 'https://www.sioux.eu/',
      written: 'Nov 18 - Feb 19',
      badges: ['Python', 'Git', 'Perforce', 'Docker'],
      contents: `
      I wrote tools accommodating a customer's migration from a Perforce Version
      Control System (VCS) to Git. I implemented existing and
      new features using Python and Gitlab API to meet
      developer demands. I setup a R&D Internal website
      (Bootstrap) to provide an overview of projects that updates
      nightly. I did smaller IT related tasks, such as
      setting up automated backups of firewall settings and Jenkins
      configurations. Also, I wrote some automated tests in an in-house testing
      framework
`
    },
  ],
  opensource: [
    {
      header: 'Azerothcore',
      website: 'https://www.azerothcore.org',
      source: 'https://github.com/azerothcore/azerothcore-wotlk',
      pr: `https://github.com/azerothcore/azerothcore-wotlk/pulls?q=+is%3Apr+author%3Ajellemeeus+`,
      skills: ['C++', 'SQL', 'mmorpg', 'emulator', 'game'],
      contents: `
Contributed to Azerothcore project, a Complete Open Source and Modular solution for MMOs, by actively submitting pull requests addressing bugs in their Core (C++) and database (SQL). Includes debugging, troubleshooting by identifying and resolving issues in the codebase. Additionally, aided in quality assurance by testing and providing feedback on PRs from other contributors.
`
// Fixes to CORE, DB, cpp. Testing PR. 
    },
  ],

  experience: [
    {
      interactive: true,
      header: 'Drawing Cards',
      source: 'https://github.com/jellemeeus/cards',
      interactive_link: 'https://jellemeeus.github.io/cards/',
      interactive_button: 'Demo Here',
      skills: ['React', 'Javascript'],
      contents: `
A card drawing web app created with React hosted on github pages.
Create and interact with a deck of French-suited SVG rendered cards.
You can draw one or multiple cards, shuffle, flip over the deck.
All neatly displayed through React
with a status bar, menu bar and mouse over interaction
`
    },
    {
      header: 'Bomberman',
      source: 'https://github.com/jellemeeus/bomberman-godot',
      skills: ['C#', 'Godot'],
      contents: `
      Example of a 2D Classic Bomberman game made with godot.
      You can play as a bomb laying bunny and walk around a maze to reach a
      carrot and try not to blow yourself up in the process

`,
      interactive: true,
      interactive_link: 'https://jellemeeus.github.io/bomberman-godot/',
      interactive_button: 'Play Here',
    },
    {
      interactive: false,
      header: 'Twitch Compilations From Cluster Data',
      source: 'https://github.com/jellemeeus/twitch-compilation-from-cluster',
      skills: ['Python', 'Javascript', 'React', 'ElectronJS', 'Twitch API', 'Youtube API'],
      contents: `
      Create Twitch compilations and upload to Youtube with ease. Find clips by
      creators, clip ids, clip urls, game ids, category name, or a cluster based
      on Twitch Atlas
`
    },
    {
      interactive: false,
      header: 'Automated local and cloud backups with cronjobs',
      source: 'https://github.com/jellemeeus/cronjobs-rsync-rclone-backups',
      skills: ['crontab', 'GNU/Linux', 'rsync', 'rclone'],
      contents: `
Easy automated backups to local and remote drives with cronjobs, rsync and rclone.

We can specify which files to upload with filters (*.txt) and easily upload to multiple cloud drives with variable data cap limits
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
    {
      interactive: false,
      header: 'Words vocabulary + pronunciation + definition',
      source: 'https://github.com/jellemeeus/words',
      skills: ['Python', 'Jupyter Notebook', 'CI/CD', 'Document Generation'],
      contents: `
Easy-to-read and printable vocabulary lists for commonly used English words. The
lists cover spelling, meaning, example usage, and lexical spelling. The formatted
lists are ordered alphabetically, by CEFR rating, and randomly. They are
accessible in pdf and html formats.
`
    },
    {
      interactive: false,
      header: 'Server status monitor with alerts',
      source: `https://github.com/jellemeeus/flame-unlock-pinger`,
      skills: ['Python', 'Discord bot', 'Blizzard API'],
      contents: `
Continuous Discord bot, written in Python, utilizing the Blizzard API to monitor server status and triggering ping alerts in a designated channel upon unlock status
`
    },
    {
      interactive: false,
      header: 'Loot addon',
      source: `https://github.com/jellemeeus/floot`,
      skills: ['Lua', 'WoW API'],
      contents: `
loot distribution addon that allows for parallel auctioning
`
    },
    {
      interactive: false,
      header: 'Auction',
      source: `https://github.com/jellemeeus/auction`,
      skills: ['Vue', 'Typescript', 'Javascript', 'dotnet', 'C#', 'Lua', 'MongoDB', 'WoW API'],
      contents: `
web app were you can create a room, invite others and bid on auctions simultaneously in real time. Export and import ingame auctions with FLoot addon
`
    },
  ]
};
