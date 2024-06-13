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
    ```sh
   npm install bcrypt
    ```
    ```sh
    npm install dotenv bcrypt express body-parser firebase-admin
    ```


4. **Setup Firebase**:
    - Go to the [Firebase Console](https://console.firebase.google.com/).
    - Click on "Add Project" and follow the steps to create a new Firebase project.

5. **Register your web app in Firebase**:
    - In the Firebase console, click on the "Web" icon to add Firebase to your web app.
    - Register the app and copy the Firebase configuration object.
    - Replace the placeholders in `public/scripts/firebase_config.js` with your actual Firebase config values.

6. **Enable Firebase services**:
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

7. **Create a Firebase service account**:
    - Go to the [Firebase Console Service Accounts page](https://console.firebase.google.com/u/0/project/_/settings/serviceaccounts/adminsdk).
    - Click "Generate New Private Key" and download the JSON file.
    - Move the downloaded JSON file to your project directory and rename it to `serviceAccountKey.json`.

8. **Configure environment variables**:
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

```plaintext
project-root/
├── public/
│   ├── create_password.html        # Page to create password for new users
│   ├── index.html                  # Login page
│   ├── register.html               # Registration page
│   ├── user_details.html           # User details page
│   ├── scripts/                    # JavaScript files for frontend functionality
│   │   ├── firebase_config.js      # Firebase configuration
│   │   ├── auth.js                 # Authentication logic
│   │   ├── register.js             # Registration logic
│   │   ├── password.js             # Password creation logic
│   │   ├── user_details.js         # User details fetching logic
│   └── styles/                     # CSS files for styling
│       └── main.css                # Main stylesheet
├── server/                         # Node.js server-side code
│   ├── app.js                      # Main application file
│   ├── routes/                     # API routes
│   │   ├── auth.js                 # Authentication routes
│   │   └── user.js                 # User routes
├── .env                            # Environment variables
├── package.json                    # Node.js dependencies and scripts
└── package-lock.json               # Exact versions of Node.js dependencies
```

## 1. Create a Firebase Project

- Go to the [Firebase Console](https://console.firebase.google.com/).
- Click on "Add Project" and follow the steps to create a new Firebase project.

## 2. Register your Web App in Firebase

- In the Firebase console, click on the "Web" icon to add Firebase to your web app.
- Register the app and copy the Firebase configuration object provided.

## 3. Enable Firebase Authentication

- In the Firebase console, select "Authentication" from the left-hand menu.
- Click on "Sign-in method" and enable "Email/Password" authentication.
- Optionally, enable other sign-in providers like Google, Facebook, etc.

## 4. Set Up Firestore Database

- In the Firebase console, select "Firestore Database" from the left-hand menu.
- Click "Create Database" and follow the steps to set up Firestore in test mode.
- Firestore will be used to store user details and passwords.

## 5. Set Up Firebase Storage

- In the Firebase console, select "Storage" from the left-hand menu.
- Click "Get Started" and follow the steps to set up Firebase Storage.
- Firebase Storage will be used to store user profile photos.

## Firestore Database Structure

You'll need to create a Firestore database structure to store user details and passwords. Below is an example structure:

### Collections and Documents

- **users** (Collection)
  - *user_id* (Document)
    - email (String)
    - name (String)
    - age (Number)
    - dob (String)
    - gender (String)
    - occupation (String)
    - address (String)
    - place (String)
    - photoUrl (String) - URL of the uploaded photo
    - username (String)

- **passwords** (Collection)
  - *username* (Document)
    - password (String)

