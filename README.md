# Razorpay Landing Page Clone

This project is a modern, polished landing page inspired by Razorpay's design aesthetics, built with React, Vite, and Tailwind CSS. It focuses on delivering a responsive, accessible, and visually appealing user interface with smooth micro-interactions.

## Design Rationale

The design aims for a sleek, dark-themed interface utilizing a sophisticated color palette of deep indigos, accents of cyan, and subtle gradients. Typography is handled with the "Inter" font for optimal readability. The layout is mobile-first, ensuring a seamless experience across all devices with carefully implemented Tailwind CSS breakpoints. Micro-interactions and subtle animations are integrated to enhance user engagement and provide a dynamic feel. Accessibility has been a core consideration, with semantic HTML, `alt` texts, keyboard focus states, and `aria` attributes for interactive elements.

## Tech Stack

-   **React**: For building the user interface with functional components.
-   **Vite**: As a fast development build tool.
-   **Tailwind CSS**: For utility-first styling and responsive design.
-   **Plain JavaScript**: No TypeScript used.
-   **Google Font Inter**: Imported via `globals.css` for typography.
-   **Inline SVGs**: For icons to ensure crispness and easy styling.

## Setup Steps

To get this project up and running locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd razorpay-landing
    ```
    (Replace `<repository-url>` with the actual URL if this were a GitHub repo).

2.  **Install dependencies:**
    Navigate to the project root directory in your terminal and run:
    ```bash
    npm install
    ```
    This will install all the necessary React, Vite, Tailwind CSS, PostCSS, and Autoprefixer packages.

3.  **Run the development server:**
    Once the dependencies are installed, start the development server:
    ```bash
    npm run dev
    ```
    This will typically start the application on `http://localhost:5173` (or another available port). Open this URL in your browser to see the landing page.

## Available Scripts

In the project directory, you can run:

-   `npm run dev`: Starts the development server with hot-reloading.
-   `npm run build`: Builds the app for production to the `dist` folder.
-   `npm run preview`: Serves the `dist` folder locally for production preview.

## Deployment Tips

This project can be easily deployed to various static site hosting services.

### Vercel

1.  Sign up for a Vercel account (if you don't have one).
2.  Install the Vercel CLI: `npm i -g vercel`
3.  From your project directory, run `vercel`.
4.  Follow the prompts to link your project and deploy. Vercel will automatically detect Vite and configure the build process.

### Netlify

1.  Sign up for a Netlify account (if you don't have one).
2.  Connect your Git repository (GitHub, GitLab, Bitbucket) to Netlify.
3.  Configure your build settings:
    -   **Build command**: `npm run build`
    -   **Publish directory**: `dist`
4.  Netlify will automatically build and deploy your site.
