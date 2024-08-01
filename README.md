
# My Blog Website

## Overview

My Blog Website is a fully functional and scalable blog platform built using React and Vite. It features user authentication, CRUD operations for blog posts, and enhanced security measures. The backend is powered by Appwrite.

You can check out the live demo of the project [here](https://anmolgoyal-blog.netlify.app/).

## Features

- **User Authentication**: Secure login and signup functionalities.
- **Blog Management**: Create, read, update, and delete blog posts.
- **Rich Text Editing**: Integrated TinyMCE for rich text editing.
- **Responsive Design**: Styled with TailwindCSS for a responsive and user-friendly interface.
- **Form Handling**: Utilizes React Hook Form for efficient form validation and management.
- **Routing**: Implemented using React Router DOM for seamless navigation.
- **State Management**: Managed with Redux Toolkit for predictable state management.
- **Security**: Enhanced security features to protect user data.

## Technologies Used

- **Frontend**: React, Vite
- **State Management**: Redux Toolkit
- **Rich Text Editor**: TinyMCE React
- **Backend**: Appwrite
- **Form Handling**: React Hook Form
- **Routing**: React Router DOM
- **Styling**: TailwindCSS
- **Content Parsing**: HTML React Parser

## Project Setup

1. **Clone the repository**:
   ```sh
   git clone https://github.com/AnmolGoyal01/Mega-Blog-Application
   ```
2. **Navigate to the project directory**:
   ```sh
   cd Mega-Blog-Application
   ```
3. **Install dependencies**:
   ```sh
   npm install
   ```
4. **Create a _redirects file**:
- In the root of your project, create a file named _redirects with the following content:
   ```sh
   /* /index.html 200
   ```
5. **Configure Vite**:
- Ensure your vite.config.js is set up to copy the _redirects file:
   ```sh
   import { defineConfig } from 'vite';
   import react from '@vitejs/plugin-react';
   import { viteStaticCopy } from 'vite-plugin-static-copy';

   export default defineConfig({
   plugins: [
      react(),
      viteStaticCopy({
         targets: [
         {
            src: '_redirects',
            dest: ''
         }
         ]
      })
   ]
   });
   ```
   
6. **Run the development server**:
   ```sh
   npm run dev
   ```

# Environment Variables

This project requires specific environment variables to be configured for proper operation. Please follow the instructions below to set up your environment variables.

## Required Environment Variables

Create a `.env` file in the root directory of your project if it doesn't already exist. Add the following variables to your `.env` file:

```env
# Appwrite Configuration
VITE_APPWRITE_URL= your_appwrite_endpoint
VITE_APPWRITE_PROJECT_ID= your_appwrite_project_id
VITE_APPWRITE_DATABASE_ID= your_appwrite_database_id
VITE_APPWRITE_COLLECTION_ID= your_appwrite_collection_id
VITE_APPWRITE_BUCKET_ID= your_appwrite_bucket_id

# Tiny-MCE Api Key
VITE_TINY_MCE_API_KEY= your_tiny-mce_api_key
```
## Contributing

Contributions are welcome! 
Please fork the repository and create a pull request with your changes.
## Author

- **Anmol Goyal:** [GitHub](https://github.com/Anmolgoyal01)

## Contact

- **GitHub:** [Anmolgoyal01](https://github.com/anmolgoyal01)
- **Email:** anmolgoyaldtu@gmail.com

## Demo

Insert gif or link to demo

