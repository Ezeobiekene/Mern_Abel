import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

const courses = [
  {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props',
        exercises: 7,
        id: 2
      },
      {
        name: 'Using states',
        exercises: 14,
        id: 3
      }
    ]
  },
  {
    name: 'Node.js',
    id: 2,
    parts: [
      {
        name: 'Routing',
        exercises: 3,
        id: 1
      },
      {
        name: 'Middlewares',
        exercises: 7,
        id: 2
      }
    ]
  },
  {
    name: 'Python',
    id: 3,
    parts: [
      {
        name: 'Flask',
        exercises: 10,
        id: 1
      },
      {
        name: 'Django',
        exercises: 5,
        id: 2
      },
    ]
  }
]

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App courses={courses} />
  </StrictMode>
);
