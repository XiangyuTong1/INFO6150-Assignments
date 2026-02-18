# Part B: Event Stopwatch with Session Logging

## Description
A single-page stopwatch application that allows users to time named events, associate them with specific dates, and maintain a full session history stored in `localStorage`. Built using modern JavaScript features including Async/Await, Promises, and setInterval/clearInterval.

## Features Implemented
- Stopwatch display in `HH:MM:SS` format, updates every second
- Start, Pause/Resume, Stop & Save, and Reset controls
- Date picker defaulting to today's date
- Event name input with full validation
- Date and event name fields are disabled while timer is running
- Sessions saved to `localStorage` and displayed in reverse chronological order
- Filter session history by date
- Statistics panel showing total session count and cumulative total time
- "No sessions recorded yet" message when history is empty
- jQuery validation with specific error messages for each case
- Errors displayed in red below each field, cleared on focus
- Timer logic implemented using Async/Await wrapping Promises around `setInterval`/`clearInterval`
- Corner notification popup on successful session save
- Responsive layout supporting mobile devices

## Technologies Used
- HTML5
- CSS3 (Flexbox, Backdrop Filter, CSS Grid)
- JavaScript ES6+ (Async/Await, Promises, Arrow Functions, `setInterval`, `clearInterval`, Template Literals)
- jQuery 3.7.1

## How to Run
1. Open `stopwatch.html` in any modern browser (no server required).
2. Select a date and enter an event name (minimum 3 characters).
3. Click **Start** to begin timing.
4. Click **Pause** to pause and **Resume** to continue.
5. Click **Stop & Save** to save the session — it will appear in the history below.
6. Click **Reset** to clear the timer without saving.
7. Use the date filter to view sessions from a specific date.