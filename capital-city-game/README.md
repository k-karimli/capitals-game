# Capital City Game 🌍

A fun and interactive geography quiz game that tests your knowledge of world capital cities. Built with React 19, TypeScript, and Tailwind CSS.

![Capital City Game](https://img.shields.io/badge/React-19-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-blue)

## 🎮 About

Test your geography knowledge by identifying capital cities from a list of five options. The game features:

- **100+ Capital Cities** from countries around the world
- **Real-time Score Tracking** - see how many you can get right
- **Visual Feedback** - green for correct answers, red for wrong ones
- **Game Over Screen** - displays your final score and the correct answer
- **Beautiful UI** - vibrant gradient design with smooth animations

## 🚀 Features

- Clean, modern interface with purple-to-orange gradient background
- Responsive design that works on all devices
- Instant feedback on your answers
- Unlimited replays to improve your score
- No login required - just start playing!

## 🛠️ Tech Stack

- **Frontend Framework:** React 19 with TypeScript
- **Styling:** Tailwind CSS 4 with custom design tokens
- **UI Components:** shadcn/ui component library
- **Routing:** Wouter (lightweight React router)
- **Build Tool:** Vite
- **Font:** Poppins (Google Fonts)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/k-karimli/capital-city-game.git
cd capital-city-game
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

4. Open your browser and navigate to `http://localhost:3000`

## 🎯 How to Play

1. Click **"Start Game"** on the welcome screen
2. You'll see 5 cities - identify which one is a capital city
3. Click your answer
4. If correct, your score increases and you get a new round
5. If wrong, the game ends and shows your final score
6. Click **"Play Again"** to try for a higher score!

## 📁 Project Structure

```
capital-city-game/
├── client/
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components (Home, NotFound)
│   │   ├── lib/            # Utility functions and game data
│   │   ├── contexts/       # React contexts (Theme)
│   │   ├── hooks/          # Custom React hooks
│   │   └── App.tsx         # Main app component with routing
│   └── public/             # Static assets
├── shared/                 # Shared constants
└── server/                 # Server placeholder (static-only template)
```

## 🎨 Design

The game features a vibrant, playful design with:
- **Color Palette:** Purple (#8B5CF6) to Pink (#EC4899) to Orange (#F97316) gradient
- **Typography:** Poppins font family for modern, clean text
- **Animations:** Smooth transitions and hover effects
- **Accessibility:** Proper contrast ratios and keyboard navigation

## 📝 Game Data

The game includes:
- **100+ Capital Cities** with their corresponding countries
- **100+ Non-Capital Cities** from major cities worldwide
- Random selection ensures variety in every game

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**k-karimli**
- GitHub: [@k-karimli](https://github.com/k-karimli)

## 🙏 Acknowledgments

- Built with [Manus AI](https://manus.im)
- UI components from [shadcn/ui](https://ui.shadcn.com)
- Icons from [Lucide React](https://lucide.dev)

---

Enjoy testing your geography knowledge! 🌍✨
