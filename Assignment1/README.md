# Digital Wellness Hub Website

## Project Overview
This is an educational website focused on digital wellness and technology balance. The website helps users understand how to maintain physical and mental health in the digital age, manage screen time, and find balance between technology and real life.

**Theme**: Digital Wellness & Screen Time Management  
**Purpose**: Educational and informational website promoting healthy digital habits

---

## HTML/HTML5 Tags Used

### 1. Favicon
**Tag**: `<link rel="icon">`  
**Location**: `<head>` section  
**Description**: Adds a small icon that appears in the browser tab, bookmarks, and browser history. Enhances brand recognition and professionalism.

**Code Example**:
```html
<link rel="icon" type="image/x-icon" href="favicon.ico">
```

---

### 2. Semantic Elements

#### a. `<header>`
**Location**: Top of the page  
**Description**: Contains the website's main navigation and branding. Represents the introductory content of the page.

**Code Example**:
```html
<header>
    <nav>
        <h1>🧘 Digital Wellness Hub</h1>
        <ul>
            <li><a href="#home">Home</a></li>
        </ul>
    </nav>
</header>
```

#### b. `<section>`
**Location**: Multiple sections throughout the page  
**Description**: Groups related content together. Used for hero area, main content, and contact form. Each section represents a thematic grouping of content.

**Code Example**:
```html
<section id="home" class="hero">
    <h2>Balance Your Digital Life</h2>
</section>
```

#### c. `<article>`
**Location**: Inside main content section  
**Description**: Represents self-contained content that could be distributed independently. Contains articles about digital wellness, screen time recommendations, and tips.

**Code Example**:
```html
<article>
    <h2>Why Digital Wellness Matters</h2>
    <p>Content about digital wellness...</p>
</article>
```

#### d. `<aside>`
**Location**: Sidebar area  
**Description**: Contains content tangentially related to the main content. Used for displaying recommended tools and resources.

**Code Example**:
```html
<aside id="resources">
    <h2>Recommended Tools & Apps</h2>
    <div class="tool-card">...</div>
</aside>
```

#### e. `<footer>`
**Location**: Bottom of the page  
**Description**: Contains footer information including about section, quick links, and social media links.

**Code Example**:
```html
<footer>
    <div class="footer-content">
        <div class="footer-section">...</div>
    </div>
</footer>
```

---

### 3. Table
**Tag**: `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>`  
**Location**: Benefits section  
**Description**: Displays structured data about screen time recommendations for different age groups. Includes header row and data rows.

**Code Example**:
```html
<table>
    <thead>
        <tr>
            <th>Age Group</th>
            <th>Recommended Screen Time</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Children (2-5 years)</td>
            <td>Max 1 hour</td>
        </tr>
    </tbody>
</table>
```

---

### 4. Form Elements

#### a. Text Input
**Tag**: `<input type="text">`  
**Location**: Contact form  
**Description**: Allows users to enter their full name.

**Code Example**:
```html
<input type="text" id="name" name="name" required placeholder="Enter your full name">
```

#### b. Email Input
**Tag**: `<input type="email">`  
**Location**: Contact form  
**Description**: Collects email address with built-in validation for email format.

**Code Example**:
```html
<input type="email" id="email" name="email" required placeholder="your.email@example.com">
```

#### c. Password Input
**Tag**: `<input type="password">`  
**Location**: Contact form  
**Description**: Allows users to create a password (characters are masked for security).

**Code Example**:
```html
<input type="password" id="password" name="password" required placeholder="At least 8 characters">
```

#### d. Datalist
**Tag**: `<datalist>` with `<option>`  
**Location**: Contact form  
**Description**: Provides a list of predefined options for the "Areas of Interest" field. Users can select from the list or type their own.

**Code Example**:
```html
<input list="topics" id="interest" name="interest">
<datalist id="topics">
    <option value="Sleep Health">
    <option value="Eye Care">
    <option value="Mental Health">
</datalist>
```

---

### 5. Images

#### a. Figure and Figcaption
**Tag**: `<figure>` and `<figcaption>`  
**Location**: Multiple locations (hero section, aside)  
**Description**: Semantic container for images with captions. Improves accessibility and provides context for images.

**Code Example**:
```html
<figure>
    <img src="image.jpg" alt="Person meditating" width="800" height="400">
    <figcaption>Finding balance between digital and real life</figcaption>
</figure>
```

---

### 6. Hyperlink
**Tag**: `<a>`  
**Location**: Throughout the page  
**Description**: Creates clickable links for navigation (internal anchors), external websites, phone calls, and email.

**Code Examples**:
```html
<!-- Internal navigation -->
<a href="#home">Home</a>

<!-- External link -->
<a href="https://www.forestapp.cc/" target="_blank">Learn More</a>

<!-- Tel link -->
<a href="tel:+15551234567">+1 (555) 123-4567</a>

<!-- Mailto link -->
<a href="mailto:hello@digitalwellness.com">hello@digitalwellness.com</a>
```

---

### 7. Button
**Tag**: `<button>`  
**Location**: Hero section and form  
**Description**: Interactive buttons for smooth scrolling navigation and form submission.

**Code Example**:
```html
<button onclick="scrollToSection('benefits')">Start Your Journey</button>
<button type="submit">Subscribe Now</button>
```

---

### 8. Audio
**Tag**: `<audio>` with `<source>`  
**Location**: Benefits section  
**Description**: Embeds audio player for meditation audio. Includes multiple format support for browser compatibility.

**Code Example**:
```html
<audio controls>
    <source src="meditation.mp3" type="audio/mpeg">
    <source src="meditation.ogg" type="audio/ogg">
    Your browser does not support the audio element.
</audio>
```

---

### 9. Video
**Tag**: `<video>` with `<source>`  
**Location**: Benefits section  
**Description**: Embeds video player about digital detox. Includes poster image and multiple format support.

**Code Example**:
```html
<video controls width="100%" poster="poster.jpg">
    <source src="digital-wellness.mp4" type="video/mp4">
    <source src="digital-wellness.webm" type="video/webm">
    Your browser does not support the video tag.
</video>
```

---

### 10. Details and Summary
**Tag**: `<details>` and `<summary>`  
**Location**: Benefits section  
**Description**: Creates expandable/collapsible content sections for wellness tips. Improves content organization and user experience without JavaScript.

**Code Example**:
```html
<details>
    <summary>💡 The 20-20-20 Rule</summary>
    <p>Every 20 minutes of screen use, look at something 20 feet away for 20 seconds...</p>
</details>
```

---

### 11. Tel and Mailto Properties
**Tag**: `<a href="tel:">` and `<a href="mailto:">`  
**Location**: Contact section  
**Description**: Creates clickable links that open phone dialer or email client on devices. Improves user experience on mobile devices.

**Code Example**:
```html
<!-- Telephone link -->
<a href="tel:+15551234567">+1 (555) 123-4567</a>

<!-- Email link -->
<a href="mailto:hello@digitalwellness.com">hello@digitalwellness.com</a>
```

---

## Additional HTML Elements Used

### Navigation
**Tag**: `<nav>`  
**Description**: Contains navigation links, part of the header.

### Lists
**Tags**: `<ul>`, `<li>`  
**Description**: Unordered lists for navigation menu, symptoms list, and footer links.

### Form Structure
**Tags**: `<form>`, `<label>`, `<div>`  
**Description**: Form container, labels for inputs, and grouping divs for form organization.

### Headings
**Tags**: `<h1>`, `<h2>`, `<h3>`  
**Description**: Hierarchical headings for content structure and SEO.

### Paragraphs
**Tag**: `<p>`  
**Description**: Text content throughout the website.

### Main
**Tag**: `<main>`  
**Description**: Contains the main content of the page, excluding header and footer.

---

## Project Structure
```
digital-wellness-hub/
│
├── index.html          # Main HTML file
├── styles.css          # External CSS stylesheet
├── README.md           # This documentation file
├
│
└── media/              # Media files (optional)
    ├── digital-wellness.mp4
    └── digital-wellness.webm
   
 
```

---

## CSS Styling

All styling is done through an external CSS file (`styles.css`) as required. No inline styles or internal style tags are used.

**Key CSS Features**:
- Modern gradient backgrounds
- Responsive design with media queries
- Flexbox and Grid layouts
- Hover effects and transitions
- Custom form styling
- Mobile-first approach

---

## Features

### Content Features
- Comprehensive digital wellness information
- Practical tips using expandable details elements
- Screen time recommendations table
- Tool and resource recommendations
- Newsletter subscription form

### Technical Features
- Semantic HTML5 structure
- External CSS file only
- Responsive design (mobile, tablet, desktop)
- Smooth scrolling navigation
- Form validation
- Accessible markup with alt text and labels

### Design Features
- Clean, modern interface
- Purple and blue gradient color scheme
- Card-based layout
- Interactive hover effects
- Professional typography

---

## Browser Compatibility
- Google Chrome (latest)
- Mozilla Firefox (latest)
- Safari (latest)
- Microsoft Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## How to Run

1. Open the project folder
2. Double-click `index.html` to open in default browser
3. Or right-click `index.html` → Open With → Choose browser
4. Website will display in the browser

---

## Git Commit Strategy

This project was developed using incremental commits with small changes:
```bash
# Initial structure
git commit -m "Add initial HTML structure with doctype and head"
git commit -m "Add header and navigation elements"
git commit -m "Add hero section with semantic elements"

# Main content
git commit -m "Add articles with wellness content"
git commit -m "Add table with screen time recommendations"
git commit -m "Add details and summary elements"

# Additional sections
git commit -m "Add aside section with tools"
git commit -m "Add contact form with all input types"
git commit -m "Add footer with contact info"

# Styling
git commit -m "Create external CSS file"
git commit -m "Add header and navigation styles"
git commit -m "Add responsive design media queries"

# Documentation
git commit -m "Add README documentation"
```

---

## Notes

- **Images**: Using Unsplash CDN for placeholder images. Requires internet connection.
- **Media Files**: Audio and video files need to be added separately or paths updated.
- **Favicon**: Create or download a favicon.ico file for the website icon.
- **External Links**: All external links open in new tabs for better user experience.

---

## Author Information

**Project**: Digital Wellness Hub  
**Course**: Web Development  
**Assignment**: Assignment 1  
**Date**: January 2024  
**Version**: 1.0

"# INFO6150-Assignments" 
