# Deep Drop

![Deep Drop start page](./read-me-images/mockup/mockup.png)

## Description

**Deep Drop** is an immersive, turn-based dungeon crawler game where players are challenged to survive the depths of a mysterious well. By battling through 20 progressively difficult levels of monsters, collecting valuable items, and upgrading their characters, players must strategize their way to victory against a formidable final boss. The game features three distinct character classes, numerous rewards, and tactical gameplay mechanics that test players' decision-making skills. With a captivating medieval aesthetic, **Deep Drop** is designed to offer both challenge and excitement.

## Live Demo

Experience the game firsthand: [Play Deep Drop here!](https://fairytaib.github.io/Deep-Drop/)

![Deep Drop start page](./read-me-images/general-images/start-view.png)

![Deep Drop tutorial view](./read-me-images/general-images/tutorial-view.png)

![Deep Drop hero selection](./read-me-images/general-images/hero-selection.png)

![Deep Drop fighting sequenz](./read-me-images/general-images/fighting-view.png)

![Deep Drop reward sequenz](./read-me-images/general-images/reward-view.png)

![Deep Drop continue sequenz](./read-me-images/general-images/continue-view.png)

![Deep Drop item view](./read-me-images/general-images/items-view.png)

![Deep Drop skill view](./read-me-images/general-images/skills-view.png)

![Deep Drop attack pattern view](./read-me-images/general-images/attack-pattern-view.png)

![Deep Drop attribute view](./read-me-images/general-images/attributes-view.png)

![Deep Drop restart view](./read-me-images/general-images/restart-view.png)

## Features

### Core Gameplay Mechanics

- **Character Selection**:

  - Choose from three unique classes:

    ![Deep Drop hero selection](./read-me-images/general-images/hero-selection.png)

    - **Knight**: A resilient warrior with high defense and moderate attack power.
    - **Ranger**: A swift and versatile archer, balancing agility and offensive skills.
    - **Assassin**: A stealthy fighter specializing in high damage and critical hits.
  - Each class is designed with specific strengths, weaknesses, and unique abilities, encouraging diverse strategies.

- **Turn-Based Combat**:

  ![Deep Drop fighting sequenz](./read-me-images/general-images/fighting-view.png)

  - Players face a variety of monsters in automatic battles where stats, equipped items, and selected fighting styles determine outcomes.

- **Reward System**:

  ![Deep Drop reward sequenz](./read-me-images/general-images/reward-view.png)

  - After each victorious battle, choose between:
    - **Items**: Equip gear like weapons, armor, and accessories to enhance your stats.
    - **Skills**: Gain abilities that provide passive bonuses or combat advantages.
    - **Healing Potions**: Restore health to prepare for upcoming challenges.

- **Monsters**:
  - Encounter a diverse lineup of foes, ranging from simple slimes to challenging elemental creatures and a menacing final boss.

### User Interface and Experience

- **Dynamic Menus**:

![Deep Drop reward sequenz](./read-me-images/specific-images/player-menu-buttons.png)

  - Access intuitive interfaces for managing character stats, equipping items, and selecting fighting styles.

- **Tutorial Mode and restart button**:

![Deep Drop reward sequenz](./read-me-images/general-images/tutorial-view.png)

![Deep Drop reward sequenz](./read-me-images/specific-images/header-menu-buttons.png)

  - A comprehensive step-by-step guide introduces players to gameplay mechanics, ensuring a smooth onboarding experience next to a reset button to start over if needed.

- **Loading Screens**:

![Deep Drop reward sequenz](./read-me-images/specific-images/loading-screen.png)

  - Seamlessly transition between game phases with immersive loading visuals.

- **Responsive Design**:
  - The game is optimized for desktops, tablets, and mobile devices, ensuring accessibility for all players.

  ## How to Play

1. Enter your character's name to start.
2. Select your preferred class (Knight, Ranger, or Assassin) to define your playstyle.
3. Engage in battles against increasingly challenging monsters.
4. After each battle, choose rewards to enhance your character:
   - Equip powerful items.
   - Learn new skills.
   - Heal to prepare for the next fight.
5. Progress through all 10 levels and defeat the final boss to complete the game.

## Key Features in Depth

### Classes and Customization
- **Knight**:
  - High durability and defensive capabilities.
  - Ideal for players who prefer a steady and methodical approach.

- **Ranger**:
  - Balanced stats with a focus on agility.
  - Offers flexibility in both offensive and defensive strategies.

- **Assassin**:
  - High damage output with critical strike potential.
  - Excels in fast-paced and aggressive gameplay.

### Restart Option

The player has the option to reset his game and start over if he doesn't like his run.
His decision has to be confirmed within another Screen

![Restart Button inner view](./read-me-images/specific-images/restart-button.png)

![Restart Button inner view](./read-me-images/general-images/restart-view.png)

### Tutorial
A tutorial is integrated for better understanding at the start of the game and during the game

![How to play Button ](./read-me-images/specific-images/how-to-play-button.png)

When the player starts a run the icon below is always clickable to let the user reread the rules

![How to play Button ](./read-me-images/specific-images/how-to-play-button-icon.png)

He can manouver through the slides by clicking on the buttons marked with an arrow.

![How to play Button ](./read-me-images/general-images/tutorial-view.png)

### Tooltip
Users can inspect a Skill, Item or Fighting Skill by hovering or clicking the name of it

![Tooltip view ](./read-me-images/specific-images/filled-skill-menu.png)

![Tooltip view ](./read-me-images/specific-images/hover-skill-description.png)

### Rewards and Progression
- Items and skills provide meaningful choices after every battle.
- Strategic planning is crucial for managing health and resources.

### Monsters and Challenges
- Each monster has different strengthes, requiring a solid strategie.

## Wireframe

I started the project with wireframes to visualize for myself the project i wanted to make

## Dieser Baum den ich gemacht habe !!!!!!!!!!!!!!!!!!!!!

I constructed to basic layout with pseudo-code and visualized it with a graph


### Visual Design

- **Medieval Aesthetic**:

![Deep Drop reward sequenz](./read-me-images/fonts/font-im-fell-english.png)

![Deep Drop reward sequenz](./read-me-images/fonts/font-medieval-sharp.png)


  - Styled with custom fonts (MedievalSharp and IM Fell English) to create a classic and immersive atmosphere.

  - **simple colors**:

  ![color palette](./read-me-images/color-palette/color-palette.png)

  - A carefully chosen dark color palette with vibrant highlights emphasizes the medieval theme contrasting the reward and character images.


- **Animation Effects**:
  - Hover effects, button transitions, and visual feedback enhance interactivity and player engagement.

### Accessibility Features

- **Keyboard and Mouse Support**:
  - Simple controls ensure an enjoyable experience for all players.

- **Input Validation**:

  ![alt text](./read-me-images/specific-images/invalid-name-short.png)
  
  ![alt text](./read-me-images/specific-images/invalid-name-invalid.png)


  - Player name inputs are validated to prevent errors and enhance usability.

## Technologies Used

- **HTML**: Provides the structural framework for the game.
- **CSS**: Styles the game with a medieval theme and ensures responsiveness.
- **JavaScript**:
  - Implements game logic, including character management, combat mechanics, and reward distribution.
  - Utilizes modular design for maintainable and scalable code.

## Project Structure

```plaintext
├── index.html         # Main HTML file
├── assets
│   ├── css
│   │   └── style.css  # Stylesheet for the game
│   ├── javascript
│   │   ├── dom-manipulation.js  # Dynamic DOM updates
│   │   └── class-list.js        # Classes for characters, items, and skills
│   └── images
│       ├── monsters             # Monster images
│       ├── items                # Item images
│       └── background           # Background images
└── README.md         # Project documentation
```

## Getting Started

### Prerequisites

To run **Deep Drop** locally, ensure you have:

- A modern web browser (e.g., Chrome, Firefox, Edge).
- A text editor or IDE (e.g., Visual Studio Code) for code exploration or modifications.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/deep-drop.git
   ```

2. Navigate to the project folder:

   ```bash
   cd deep-drop
   ```

3. Open `index.html` in your preferred web browser to start playing.

### Deployment

To deploy the project via GitHub Pages:

1. Push the repository to your GitHub account.
2. Go to the repository’s settings and navigate to the **Pages** section.
3. Select the `main` branch and save changes.
4. Your game will be live at `https://<your-github-username>.github.io/deep-drop`.

## Testing and Validation

### Functional Testing

- Validated user inputs, ensuring appropriate length and character restrictions for player names.
- Ensured smooth transitions between gameplay phases, such as battles, rewards, and tutorials.

### Browser Compatibility

Tested on:

- Google Chrome
- Mozilla Firefox
- Microsoft Edge

### Responsiveness

- Verified consistent performance on a range of devices and screen sizes, including mobile.

## Future Plans

- Add more character classes, monsters, and items to enrich gameplay.
- Introduce a story mode with narrative elements and quests.
- Implement sound effects and background music for greater immersion.


## Credits

**Images and Media**
- **DALL-E**: Image creation powered by [DALL-E](https://openai.com/dall-e).

**Design and Functionality**
- **Google Fonts**: Fonts used from [Google Fonts](https://fonts.google.com/).

**Content and Tutorials**
- **Stack Overflow**: All kinds of different questions and anwsers from [Stack Overflow](https://stackoverflow.com/).

**Code Validation and Development Tools**
- **W3C**: Code validation conducted using [W3C](https://www.w3.org/).
- **Git**: Version control handled with [Git](https://git-scm.com/).
- **GitHub**: Cloud-based platform for storing and sharing code via [GitHub](https://github.com/).
- **Gitpod**: Online IDE for coding provided by [Gitpod](https://gitpod.io/).

**Mentoring and Guidance**
- **Iuliia Konovalova**: Mentoring and guidance by [Iuliia Konovalova](https://github.com/IuliiaKonovalova).

- **Code Institute Student Support**: Helping me debugg specific difficultys



---

Dive into the adventure of **Deep Drop** and conquer the depths of the well!
