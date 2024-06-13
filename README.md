# Firebase Authentication and User Management Application

## Overview

This application allows users to register, create a password, log in, and view their profile details. It utilizes Firebase for authentication, Firestore for data storage, and Firebase Storage for image uploads.

## Prerequisites

- Node.js (v12 or higher)
- Firebase account
- Firebase CLI

## Installation

1. **Clone the repository**:
    ```sh
    git clone https://github.com/your-repo-url.git
    cd your-repo-url
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Setup Firebase**:
    - Go to the [Firebase Console](https://console.firebase.google.com/).
    - Click on "Add Project" and follow the steps to create a new Firebase project.

4. **Register your web app in Firebase**:
    - In the Firebase console, click on the "Web" icon to add Firebase to your web app.
    - Register the app and copy the Firebase configuration object.
    - Replace the placeholders in `public/scripts/firebase_config.js` with your actual Firebase config values.

5. **Enable Firebase services**:
    - **Authentication**:
        - Go to the Firebase console.
        - Select "Authentication" from the left-hand menu.
        - Click on "Sign-in method" and enable "Email/Password" authentication.
    - **Firestore Database**:
        - Go to the Firebase console.
        - Select "Firestore Database" from the left-hand menu.
        - Click "Create Database" and follow the steps to set up Firestore in test mode.
    - **Firebase Storage**:
        - Go to the Firebase console.
        - Select "Storage" from the left-hand menu.
        - Click "Get Started" and follow the steps to set up Firebase Storage.

6. **Create a Firebase service account**:
    - Go to the [Firebase Console Service Accounts page](https://console.firebase.google.com/u/0/project/_/settings/serviceaccounts/adminsdk).
    - Click "Generate New Private Key" and download the JSON file.
    - Move the downloaded JSON file to your project directory and rename it to `serviceAccountKey.json`.

7. **Configure environment variables**:
    - Create a `.env` file in the root directory of your project.
    - Add your Firebase configuration and service account path to the `.env` file:
      ```plaintext
      FIREBASE_API_KEY=your_firebase_api_key
      FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
      FIREBASE_PROJECT_ID=your_project_id
      FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
      FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
      FIREBASE_APP_ID=your_app_id
      SERVICE_ACCOUNT_PATH=./serviceAccountKey.json
      ```

## Running the Application

1. **Start the Node.js server**:
    ```sh
    node server/app.js
    ```

2. **Open the application in your browser**:
    - Navigate to `http://localhost:3000`.

## Project Structure


## Scripts

### `public/scripts/firebase_config.js`

Configure Firebase SDK.

### `public/scripts/auth.js`

Handle login functionality.

### `public/scripts/register.js`

Handle user registration and image upload.

### `public/scripts/password.js`

Handle password creation.

### `public/scripts/user_details.js`

Fetch and display user details.

## API Endpoints

### POST `/user/register`

Register a new user.

### POST `/auth/create-password`

Create a password for a registered user.

### GET `/user/details/:username`

Fetch user details by username.

## Notes

- Ensure you never expose your Firebase credentials or service account key in public repositories.
- Always use environment variables to manage sensitive data.
- Follow Firebase's best practices for security and data management.

## Troubleshooting

If you encounter issues:

- Check the console for error messages.
- Ensure all Firebase services (Authentication, Firestore, Storage) are properly configured.
- Verify that your `.env` file contains the correct information.
- Ensure the service account key file is correctly placed and referenced.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

