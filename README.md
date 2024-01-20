# Uno To Do App

This is a training application built using React, Redux, Hooks, an external library (react-calendar), styled with styled-components and powered by Vite, local development and building tool.
The app allows users to add, edit, and delete tasks, as well as mark them as completed or important.
Live demo of the project is available here: [https://voidaugust.github.io/uno-to-do-app/].

## Learning objectives

- Using React documentation.
- Using React components.
- Connecting React and Redux.
- Using custom styles in a React app.
- Using styled-components.
- Using Hooks.
- Using Vite.
- Connecting external libraries to the project.
- Applying React best practices and language style guides in code.

## Technologies Used

- **React**: A JavaScript library for building applications.
- **Redux**: A predictable state container for managing the application's state.
- **React Hooks**: Utilized for functional components to manage state and side effects.
- **react-calendar**: A simple calendar library that provides the ability to pick days, months, etc.
- **styled-components**: A popular CSS-in-JS library for styling React components.
- **Vite**: A local development server and app buidling tool.

## Features

**Task Management:** 
- Create, edit, and delete tasks and task lists effortlessly.
- Add due dates, notes or important/completed marks to each task.
- Filter visible tasks to see all tasks from all lists.
- Filter visible tasks to see only important or completed tasks.
- Search tasks by title.

**Mode Switching:**
- Easily toggle between light and dark modes for comfortable day and night usage.

## Installing

Clone the repository to your local machine using the following command:

### `git clone https://github.com/voidaugust/uno-to-do-app.git`

Navigate to the project directory:

### `cd uno-to-do-app`

Install the dependencies:

### `npm install`

Use the following command to run the app on your desktop:

### `npm run dev`

The app will automatically open in your default web browser.

## Usage 

**Get Started:**

Press the "Get Started" button to open the app.

**Left Sidebar:**

To create a new task list, navigate to the right sidebar and click on the "New List" button.
To view a list, click on the list name that appears in the sidebar.
Filter visible tasks by selecting the desired filter option. Choose from "Tasks" to view all tasks from all lists or "Important" for important tasks.
Search for tasks by title using the search bar. Type the task title, and relevant tasks will be displayed.
To cancel the search, click on the cross button.
For Settings, click on the username displayed at the top of the sidebar.
Customize the app's appearance by accessing the "Settings" modal.
Choose a color palette, language, or mode to personalize your experience.
To sign out, click on the "Sign Out" button.

**Task List:**

To delete or rename a task list, find the delete and edit icons near the list title.
While the list is open, you can add a new task to that list by clicking on the "Add a task" button.
Mark tasks as important or completed by clicking on the star for important or the square checkbox for completed tasks.

**Task Editing Panel:**

To open the task edit panel, click on the task.
In the edit panel, you can edit the task title by tapping on the task name and making the necessary changes.
Delete a task by pressing on the rubbish bin icon at the bottom.
To close the edit panel, click on the chevron button at the bottom.

**Due Dates:**

Assign a due date to a task by clicking on the calendar icon and selecting an option in the modal. To view the calendar, choose the "Pick a Date" option.
Delete the due date by clicking on the cross icon.

**Calendar:**

Choose the desired date by clicking and pressing "OK" to save your choice and close the calendar.
Navigate to the next or previous month with the chevron buttons or pick any month of the year with the selector.

**Note:**

Add a note to a task by typing something in the "Add Note" section.