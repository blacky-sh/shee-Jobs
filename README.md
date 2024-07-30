<h1 align="center"> Hi 👋, I'm Sheehab</h1>

<h2 align="center">Here is a simple React project that I made while Learning. It is a a job listing frontend. It demonstrates the basic concepts of React.js such as components, props, state, data fetching, and more.</h2>

<h2> Necessary steps to clone and use this project on your local machine are as follows: </h2>

## Installation

1. First, clone this repository to your local machine:

   ```bash
   git clone https://github.com/blacky-sh/shee-Jobs.git

2. Navigate to the project directory:

    ```bash
    cd shee-Jobs

3. Install necessary dependencies:

    ```bash
     npm install //install necessary node modules
     npm i -D tailwindcss postcss autoprefixer
     npx tailwindcss init -p

     npm i react-icons
     npm i react-router-dom
     npm i --save react-spinners
     npm i react-toastify
     npm i -D json-server

4. After you install, navigate to "package.json" and in the "scripts" object right under "preview": "vite preview", paste this and save:

    ```bash
    "server": "json-server --watch src/jobs.json --port 8000"

5. Run the Project:
- open 2 different terminals and paste this 2 commands and hit Enter:

    ```bash
     npm run server
     npm run dev //ctrl + click on port number to open it.

6.



