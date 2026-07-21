# AeroOS // Mission Control

A custom retro-futuristic web operating system built for the Hack Club WebOS Jam. AeroOS simulates a desktop environment featuring advanced window management, dynamic taskbars, an interactive system log viewer, and real-time satellite telemetry.


##  Core Features

* **Custom Window Manager**: Fully draggable windows with boundary collision detection (stays constrained within the screen), dynamic `z-index` layering, and active taskbar integration.
* **Log Archive App (`Log_Archive.exe`)**: An interactive application displaying structured mission logs, hardware specifications, and system telemetry.
* **ISS Radar App (`ISS_Radar.exe`)**: A live orbital tracking tool that fetches real-time coordinates, altitude, and velocity data of the International Space Station via public APIs.
* **Modular Architecture**: Clean separation of code using modern JavaScript modules and dedicated stylesheets bundled with Vite.


##  Tech Stack

* **Frontend**: HTML5, CSS3 (Custom Mission Control theme with tactical orange accents).
* **Scripting**: Vanilla JavaScript (ES6+), Asynchronous API fetches (`fetch`), DOM manipulation.
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
