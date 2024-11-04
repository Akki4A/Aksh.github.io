# Personal Portfolio Website

A modern, responsive portfolio website showcasing my skills, projects, and experience as a Software Developer.

## Features

- Responsive Design
- Dark/Light Theme Toggle
- Smooth Scrolling Navigation
- Interactive Project Cards
- Contact Form with Validation
- Skills Showcase
- Animated Section Transitions

## Technologies Used

- HTML5
- CSS3 (Custom Properties, Flexbox, Grid)
- JavaScript (ES6+)
- Form Handling
- Responsive Design
- CSS Animations

## Setup Instructions

1. Clone the repository
```bash
git clone https://github.com/yourusername/portfolio-website.git
```

2. Navigate to the project directory
```bash
cd portfolio-website
```

3. Open index.html in your browser or use a local server
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve
```

4. Visit http://localhost:8000 in your browser

## Structure

```
portfolio-website/
├── index.html          # Main HTML file
├── styles/            # CSS styles
│   ├── main.css      # Main styles
│   └── theme.css     # Theme-specific styles
├── js/               # JavaScript files
│   ├── navigation.js # Navigation functionality
│   ├── form.js       # Form handling
│   └── theme.js      # Theme switching
└── images/           # Image assets
```

## Contact Form Setup

1. Create an account at [Formspree](https://formspree.io/)
2. Create a new form and get your form endpoint
3. Replace the form action URL in index.html with your endpoint
```html
<form action="https://formspree.io/f/your-form-id" method="POST">
```

## Customization

1. Update personal information in index.html
2. Replace images in the images/ directory
3. Modify color schemes in theme.css
4. Add/remove sections as needed
5. Update project details in the Projects section

## License

MIT License - feel free to use this template for your own portfolio!
