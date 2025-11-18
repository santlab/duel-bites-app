# Duel Bites App

Duel Bites is a multiplayer game application where players can choose between three unique classes: Torta, Bolo, and Churrasco. Engage in thrilling duels with friends, utilizing basic animations and health management to emerge victorious!

## Features

- **Class Selection**: Choose between Torta, Bolo, and Churrasco.
- **Duel Mechanics**: Engage in battles with real-time damage calculations and health management.
- **Victory Tracking**: Each class's victories are tracked and displayed, e.g., "Torta (10 wins)".
- **Random Maps**: Each duel takes place on a randomly selected map with unique background images.
- **Real-time Multiplayer**: Play with friends in real-time using Socket.IO for seamless interactions.

## Project Structure

The project is organized into several packages:

- **Server**: Contains the backend logic, including API routes, battle logic, and database management.
- **Web**: The frontend application for web browsers, featuring character selection and battle interfaces.
- **Mobile**: The mobile application for iOS and Android devices, providing a similar experience to the web version.
- **Shared**: Contains shared types and utilities used across different packages.

## Installation

To get started with the Duel Bites app, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   cd duel-bites-app
   ```

2. Install dependencies:
   ```
   pnpm install
   ```

3. Set up the environment variables:
   - Copy `.env.example` to `.env` and configure your settings.

4. Run the server:
   ```
   cd packages/server
   pnpm start
   ```

5. Run the web application:
   ```
   cd packages/web
   pnpm start
   ```

6. For mobile, follow the specific instructions in the `packages/mobile` directory.

## Usage

- Access the web application at `http://localhost:3000`.
- Connect with a friend to select your classes and start battling!

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
