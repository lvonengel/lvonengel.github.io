# Liu von Engelbrechten's Personal Portfolio Website
# https://lvonengel.github.io/

<img src="public/img/imgPersonalPortfolio/Website.png" height="300"/>


Welcome to my personal portfolio website! This site highlights my projects, experiences, and interests across engineering, product development, and creative work. It serves as a central place to explore what I am building, learning, and passionate about, all in an interactive and easy to navigate format.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Usage](#usage)
- [Project Structure](#project-structure)


## Features

### Home Section
- **Moving Marquee:** The homepage features a marquee animation that moves across the about page.
- **Profile Picture:** The profile image animates into the frame and overlays with the marquee.

### Navbar
- **Interactive Navbar:** Includes icons that link to my LinkedIn and GitHub profiles.
- **Smooth Scrolling:** Implements smooth scrolling to different sections of the website.

### Projects Section
- **Project Showcase:** A section dedicated to showcasing my projects with image and name.

### Experience Section
- **Technology Stack Display:** Visual representation of my professional experience using a vertical timeline.

### General Features
- **Responsive Design:** The website is fully responsive and optimized for various screen sizes.
- **Animations:** Various animations throughout the site using React Motion for a more engaging user experience.

## Technologies Used

### Frontend:
- React (v18.2.0)
- Vite (v7.1.2) for fast development and building
- Motion (v12.23.12) for animations
- react-vertical-timeline-component (v3.5.3) for experience timeline
- Three.js (v0.160.0)


## Usage
1. Clone the repository:
    ```bash
    git clone https://github.com/lvonengel/lvonengel.github.io
    cd portfolio
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Run the development server:
    ```bash
    npm run dev
    ```

4. Open your browser and visit `http://localhost:3000` to see the website.

## Project Structure
```plaintext
Personal-Portfolio/
├── public/
│   ├── img
|   ├── models
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── NavigationBar.jsx
│   │   ├── PCBViewer.jsx
│   │   ├── ProjectCard.jsx
│   │   └── ScrollManager.jsx
│   ├── projects/
│   ├── App.jsx
│   ├── Home.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
└── vite.config.js