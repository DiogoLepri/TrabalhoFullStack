Cadastro de Pessoas

Cadastro de Pessoas is a full-stack application designed to manage registrations of people. The project allows users to add, view, update, and delete registrations, with a celebratory fireworks animation displayed upon successful registration.
Features

    Add new registrations with name, CPF, and phone number.
    Display a list of registered people.
    Update and delete existing registrations.
    Fireworks animation upon successful registration.
    Modern, responsive user interface.

Technologies Used

    Frontend: HTML, CSS, JavaScript
    Backend: Node.js, Express
    Database: PostgreSQL (or your chosen database)
    Animations: Fireworks-js library

Installation

Follow these steps to set up the project locally.
Prerequisites

Ensure you have the following installed:

    Node.js (https://nodejs.org/)
    npm (comes with Node.js)
    PostgreSQL (or configure with your preferred database)

Steps

    Clone the Repository

    bash

git clone https://github.com/your-username/your-repository-name.git
cd your-repository-name

Install Dependencies

Navigate to the project directory and install the required npm packages:

bash

npm install

Set Up the Database

    Create a PostgreSQL database and update your connection details in the backend configuration (e.g., .env or config.js file).
    Run any migrations or seed data as necessary.

Run the Application

Start the server with:

bash

npm start

Or if using nodemon for development:

bash

    npm run dev

    Access the Application

    Open your browser and go to http://localhost:3000.

Usage

    Fill in the form fields with name, CPF, and phone number to add a new registration.
    A fireworks animation will display upon successful registration.
    Use the interface to view, update, or delete existing registrations.

Contributing

Contributions are welcome! If you would like to contribute, please follow these steps:

    Fork the repository.
    Create a new feature branch (git checkout -b feature-branch).
    Commit your changes (git commit -m 'Add some feature').
    Push to the branch (git push origin feature-branch).
    Open a pull request.
