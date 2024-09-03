
## README

### Project Overview

This project is a web application that analyzes the sentiment of a given article URL using the MeaningCloud API. The app is built with a modern front-end stack, using Webpack for bundling, SCSS for styling, and Express.js for the back-end server.

### Key Features

- **Sentiment Analysis**: The app sends the provided URL to the MeaningCloud API to retrieve sentiment analysis data, which is then displayed on the UI.
- **Responsive Design**: The application is styled using SCSS and features a responsive design suitable for various devices.
- **Error Handling**: The app includes robust error handling to manage invalid URLs and other API-related errors.

### Project Structure

- **Client**:
  - `index.js`: Entry point for the client-side application, handling imports and exports.
  - `handleSubmit.js`: Handles form submission and interacts with the back-end server.
  - `checkName.js`: Validates the URL before submission.
  - `styles.scss`: SCSS file for styling the application.

- **Server**:
  - `index.js`: Main server file using Express.js, responsible for handling API requests and serving static files.
  - `analyze.js`: Handles the interaction with the MeaningCloud API, processing and returning the sentiment analysis data.

- **Configuration**:
  - `webpack.dev.js`: Webpack configuration for development mode.
  - `webpack.prod.js`: Webpack configuration for production mode, including optimizations like minification.
  - `.babelrc`: Babel configuration for transpiling JavaScript.
  - `.env`: Stores environment variables such as the MeaningCloud API key.

### Installation and Setup

1. **Clone the Repository**:
   ```bash
   git clone <repository_url>
   cd <project_directory>
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory and add your MeaningCloud API key:
   ```plaintext
   API_KEY=your_meaningcloud_api_key
   ```

4. **Run the Application**:
   - For development mode:
     ```bash
     npm run dev
     ```
   - For production mode:
     ```bash
     npm run build
     npm start
     ```

5. **Testing**:
   The project includes basic unit tests using Jest:
   ```bash
   npm test
   ```

### Usage

After starting the server, open your browser and navigate to `http://localhost:8000/`. Enter an article URL and click "Analyze" to see the sentiment analysis results.

### Additional Notes

- The project uses Webpack for bundling, ensuring that all assets are optimized for production.
- SCSS is used for styling, with variables and mixins defined for easy customization.
- Jest is used for unit testing, focusing on URL validation and form submission logic.