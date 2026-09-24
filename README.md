# FitLog - Workout Library

FitLog is a workout library web application where users can explore different workouts, check workout details, save workouts for later, and create a plan for today's workout.

The main goal of this project is to make it easier to find workouts and keep a simple record of the exercises a user wants to complete.

## Live Website

https://fitlog-kohl-beta.vercel.app

## Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS
- DaisyUI
- React Icons
- React Toastify

## Features

- Browse workouts from the workout library
- View detailed information about each workout
- Add workouts to today's plan
- Save workouts for later
- Prevent duplicate workouts from being added
- Maximum 5 workouts can be added to today's plan
- View total exercises, minutes, and calories
- Sort workouts by duration, calories, and rating
- Remove workouts from the plan or saved list
- Mark a workout as done
- Responsive design for mobile, tablet, and desktop
- Custom 404 page
- Loading state while workout data is loading

## Workout Details

Each workout contains information such as:

- Workout name
- Muscle groups
- Equipment
- Difficulty
- Duration
- Calories burned
- Sets and reps
- Rating
- Description
- Instructions

## API

Workout data is fetched from the FitLog API:

https://api.abcz.workers.dev/api/fitlog

Single workout details are fetched using:

https://api.abcz.workers.dev/api/fitlog/:id

## Getting Started

First, install the project dependencies:

```bash
npm install