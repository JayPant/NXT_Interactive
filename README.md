
# **Multiplayer Space Odyssey**

![Multiplayer Space Odyssey](assets/banner.jpg)  
*An immersive multiplayer space experience built with PlayCanvas and powered by Colyseus for real-time synchronization.*

## **Overview**
Multiplayer Space Odyssey is a 3D multiplayer game where two players control avatars in a shared space environment. Players can explore, interact with objects, and compete for in-game rewards. The project showcases real-time movement synchronization using **Colyseus** for the server-side networking, and **PlayCanvas** for the client-side game engine.

## **Features**
- **Real-time multiplayer** using the Colyseus framework for smooth player synchronization.
- **Two interactive avatars** (Ready Player Me avatars or custom 3D models) that move around the environment in sync.
- **Dynamic camera system** with a third-person perspective that follows the player’s movements.
- **Environmental interactions**, including teleporters and power-ups that modify player abilities (e.g., speed boost).
- **Smoothing of player movement** via interpolation to reduce lag and improve gameplay experience.
- **Visually immersive 3D space environment** with customized models and lighting effects.
- **Server-side processing** to maintain consistency and prevent cheating.

## **Table of Contents**
1. [Features](#features)
2. [Project Structure](#project-structure)
3. [How to Run](#how-to-run)
   - [Running the Server](#running-the-server)
   - [Running the Client](#running-the-client)
4. [Deployment](#deployment)
5. [Challenges and Solutions](#challenges-and-solutions)
6. [Playable Weblink](#playable-weblink)
7. [Credits](#credits)

---

## **Project Structure**
```plaintext
space-odyssey-multiplayer/
│
├── client/                           # PlayCanvas Client
│   ├── assets/                       # Models, textures, and other assets
│   ├── scripts/                      # Game scripts (multiplayer, movement)
│   └── index.html                    # Embedded PlayCanvas game if hosted separately
│
├── server/                           # Colyseus Server
│   ├── MyRoom.js                     # Colyseus room logic for multiplayer synchronization
│   ├── index.js                      # Main server entry point
│   ├── package.json                  # Server dependencies
│   └── README.md                     # Server-specific instructions
│
├── README.md                         # Main README for the project
└── LICENSE                           # License information
```

---

## **How to Run**

### **Running the Server**
The server is built using **Node.js** and **Colyseus** to handle real-time player synchronization.

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/space-odyssey-multiplayer.git
   cd space-odyssey-multiplayer/server
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the server**:
   ```bash
   npm start
   ```

The server will run locally on `http://localhost:2567`.

### **Running the Client**
The client is hosted on **PlayCanvas**. To run the game:
1. Open the **PlayCanvas** project and run it in your browser.
2. Ensure the server is running and accessible.

For development purposes, if you want to embed the PlayCanvas game:
- Add the `index.html` file to a web server, and link it to your PlayCanvas build.

---

## **Deployment**
To deploy the project, you will need:
1. **Client Deployment**: Host the PlayCanvas game. You can publish the game on PlayCanvas and share the link directly.
2. **Server Deployment**: You can deploy the Colyseus server on platforms like Heroku, AWS, or DigitalOcean. Ensure the server URL is properly updated in the PlayCanvas script (`multiplayer.js`).

### Example Deployment on Heroku:
1. Create a Heroku app and push your server code.
2. Set the environment variables and run the app:
   ```bash
   git push heroku main
   ```

---

## **Challenges and Solutions**
1. **Real-time synchronization issues**: We used interpolation to smooth out the players' movements and reduce the effects of network latency.
2. **Environment interactions**: Designing dynamic interactions (e.g., teleporters and power-ups) required adding collision detection and timed events.
3. **Server performance**: The server is optimized for handling multiple players using **Colyseus**, with a focus on minimizing lag.

---


## **Credits**
- **Game Engine**: [PlayCanvas](https://playcanvas.com/)
- **Multiplayer Framework**: [Colyseus](https://colyseus.io/)
- **Avatars**: [Ready Player Me](https://readyplayer.me/)
- **Models & Assets**: Custom-designed assets and textures.


---

