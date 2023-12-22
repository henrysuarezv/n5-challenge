# Microfrontend Sample Project

This project is a demonstration of a microfrontend architecture using single-spa, React, and Webpack.

## Table of Contents

- [Introduction](#introduction)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Running the Application](#running-the-application)
- [Contributing](#contributing)
- [Questions](#questions)

## Introduction

This project showcases a microfrontend architecture where multiple independent frontend applications (microfrontends) are integrated into a single application. The project consists of three main parts:

1. **Host Application (`host-app`):** The main container that hosts and integrates the microfrontends.

2. **Microfrontend 1 (`mf1`):** Provides button functionality and handles user interactions and events.

3. **Microfrontend 2 (`mf2`):** Fetches data and renders information.

Microfrontends communicate seamlessly through custom events.

## Project Structure

```plaintext
microfrontend-sample/
|-- host-app/
|   |-- src/
|   |-- webpack.config.js
|-- mf1/
|   |-- src/
|   |-- webpack.config.js
|-- mf2/
|   |-- src/
|   |-- webpack.config.js
```

## Getting Started

1. **Clone the repository:**

```bash
   git clone https://github.com/your-username/microfrontend-sample.git
```

2. **Install dependencies for each project:**
```bash
    cd microfrontend-sample/host-app
    npm install

    cd ../mf1
    npm install

    cd ../mf2
    npm install
```

3. **Build the projects:**
```bash
    cd microfrontend-sample/host-app
    npm run build

    cd ../mf1
    npm run build

    cd ../mf2
    npm run build
```

## Running the Application

1. **Start the host application:**
```bash
   cd microfrontend-sample/mf1
   npm start
```
The host application will be available at http://localhost:9000.

2. **Open a new terminal window and start microfrontend 1:**
```bash
   cd microfrontend-sample/mf1
   npm start
```
Microfrontend 1 will be available at http://localhost:9994.

3. **Open another terminal window and start microfrontend 2:**
```bash
   cd microfrontend-sample/mf2
    npm start
```
Microfrontend 1 will be available at http://localhost:9995.

Visit the host application URL (http://localhost:9000) in your browser to see the integrated microfrontends.

## Contributing

Contributions are welcome! If you find a bug or have suggestions for improvement, please open an issue or submit a pull request.

## Questions
1. **What is accessibility? How do you achieve it?:**
Accessibility is making websites and apps easy to use for everyone, including people with disabilities. To achieve accessibility, developers use good code, provide descriptions for images, make sure things work with a keyboard, and test with tools that help people with disabilities.

summary:
- Use semantic HTML elements.
- Provide alternative text for images.
- Ensure keyboard navigation is functional.
- Implement proper focus management.
- Use ARIA (Accessible Rich Internet Applications) attributes.
- Test with screen readers and other assistive technologies.

2. **What is the difference between session storage, local storage, and cookies?:**
- Session Storage: It's like a temporary storage that goes away when you close a website.
- Local Storage: It's like a more long-term storage that sticks around even if you close the browser.
- Cookies: Tiny bits of information that websites can store on your computer.

3. **Explain the javascript event loop (also may explain how promises or async await work in js these are basically all the same question/answer):**
- Event Loop: A way JavaScript handles many things happening at the same time, even though it's technically single-threaded.
- Promises and Async/Await: They're tools in JavaScript that help deal with things happening in the background without making your code messy and more readable.

4. **If you are getting too many API calls being made from your hooks, what can you do to prevent this?:**
- Use useEffect properly to control when the API calls are made.
- Consider using debounce or throttle techniques to limit the frequency of calls.
- Cancel ongoing requests when a component unmounts.
- Utilize state to track the loading state and prevent unnecessary calls.

5. **How do you manage the global state? And why in that way?:**
- Options include using React Context API, Redux, or a global state management library.
- The choice depends on the size and complexity of the application.
- Redux is suitable for larger applications with complex state management needs.
- Context API might be sufficient for smaller applications.
6. **What is progressive rendering?:**
Progressive rendering is an optimization strategy where a web page is initially delivered with a basic layout and content, and more advanced features and content are loaded progressively as the user interacts with the page.
Advantages:
- Faster initial load times.
- Improved perceived performance for users.
- Better user experience, especially on slower network connections.
