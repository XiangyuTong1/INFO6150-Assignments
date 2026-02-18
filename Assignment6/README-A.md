# Part A: Calculator with User Login

## Description
A two-page web application built with jQuery and modern JavaScript. Users must log in with a valid Northeastern University email before accessing the calculator. Sessions are managed through `sessionStorage` or `localStorage` depending on the "Remember Me" option.

## Features Implemented
- Login page with real-time form validation using jQuery (`keyup` and `blur` events)
- Email validation enforcing `@northeastern.edu` domain
- Password validation with minimum 8 character requirement
- Login button disabled until all fields pass validation
- Error messages displayed below each field in red, no pop-up alerts
- Session stored in `sessionStorage` (or `localStorage` if Remember Me is checked)
- Success animation and auto-redirect to calculator after 2 seconds
- Calculator page checks for valid session on load, redirects to login if none found
- Single arrow function `calculate(num1, num2, operation)` handles all four arithmetic operations
- Division by zero edge case handled
- Numeric input validation (supports decimals and negative numbers)
- jQuery chaining used for UI updates
- Logout with `fadeOut` animation and session cleanup
- Responsive layout supporting mobile devices

## Technologies Used
- HTML5
- CSS3 (Flexbox, CSS Grid)
- JavaScript ES6+ (Arrow Functions, Template Literals, Destructuring)
- jQuery 3.7.1

## How to Run
1. Place `login.html` and `calculator.html` in the same folder.
2. Open `login.html` in any modern browser (no server required).
3. Log in using one of the pre-defined accounts:

| Email | Password |
|-------|----------|
| alice@northeastern.edu | alice1234 |
| bob@northeastern.edu | bobpass99 |
| xiangyu@northeastern.edu | xiangyu1 |

4. After successful login, you will be redirected to `calculator.html`.
5. Enter two numbers and click an operation button to calculate.
6. Click **Logout** to end the session and return to the login page.