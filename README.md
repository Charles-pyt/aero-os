# AeroOS // Mission Control

A custom retro-futuristic web operating system built for the Hack Club WebOS Jam. AeroOS simulates a desktop environment featuring advanced window management, dynamic taskbars, an interactive system log viewer, and real-time satellite telemetry.

##  Core Features

* **Custom Window Manager**: Fully draggable windows with boundary collision detection, dynamic `z-index` layering, and active taskbar integration.
* **Boot Sequence (`BOOT_SEQUENCE`)**: Initial system setup screen capturing the operator's username to initialize personalized sessions.
* **Start Menu (`[ LAUNCH ]`)**: Modular desktop start menu providing quick access to all system applications with dynamic overlay controls.
* **Interactive Terminal (`TERMINAL.EXE`)**: Fully functional command-line interface supporting custom commands (`help`, `date`, `iss`, `whoami`, `clear`) using the current session user.
* **Notepad (`NOTEPAD.EXE`)**: Text editor featuring automatic persistence via browser `localStorage`.
* **Settings & Theme Engine (`SETTINGS.EXE`)**: Dynamic customization tool allowing instant switching between color themes (Space Orange & Cyber Blue) via CSS variables and color mixing.
* **ISS Radar App (`ISS_Radar.exe`)**: Live orbital tracking tool fetching real-time coordinates, altitude, and velocity data of the International Space Station.
* **Modular Architecture**: Clean code separation using modern ES6 JavaScript modules and dedicated stylesheets bundled with Vite.


##  Tech Stack

* **Frontend**: HTML5, CSS3 (Dynamic CSS Custom Properties & Themes).
* **Scripting**: Vanilla JavaScript (ES6+), Asynchronous API fetches (`fetch`), DOM manipulation, Web Storage API (`localStorage`).
* **Tooling & Deployment**: Vite, GitHub Actions, GitHub Pages.


##  Running Locally

To run AeroOS on your local machine for testing or development:

```bash
# Clone the repository
git clone https://github.com/Charles-pyt/aero-os.git

# Navigate to the project folder
cd aero-os

# Install dependencies
npm install

# Start the development server
npm run dev
