# 🌲 The Wild Oasis

<div align="center">
  <p>A modern, full-stack web application for managing luxury cabin reservations in the Dolomites, Italy.</p>
  <p>
    <a href="#features">Features</a> •
    <a href="#tech-stack">Tech Stack</a> •
    <a href="#getting-started">Getting Started</a> •
    <a href="#project-structure">Structure</a>
  </p>

  <img src="public/bg.png" alt="The Wild Oasis" width="800" height="400" style="border-radius: 8px; margin: 2rem 0;" />

  <p>Built with <a href="https://nextjs.org">Next.js 15</a> • <a href="https://next-auth.js.org">NextAuth.js</a> • <a href="https://tailwindcss.com">Tailwind CSS</a></p>
</div>

## ✨ Features

<div align="center">
  <table>
    <tr>
      <td align="center">🏠 <b>Cabins</b></td>
      <td align="center">📅 <b>Bookings</b></td>
      <td align="center">👤 <b>Users</b></td>
    </tr>
    <tr>
      <td>
        • Dynamic listings<br/>
        • Real-time availability<br/>
        • Detailed cabin views<br/>
        • Capacity management
      </td>
      <td>
        • Date selection<br/>
        • Guest management<br/>
        • Edit reservations<br/>
        • Cancel bookings
      </td>
      <td>
        • NextAuth.js v5<br/>
        • Protected routes<br/>
        • User profiles<br/>
        • Secure sessions
      </td>
    </tr>
  </table>
</div>

## 🛠️ Tech Stack

<div align="center">
  <table>
    <tr>
      <td align="center">🎨 <b>Frontend</b></td>
      <td align="center">⚙️ <b>Backend</b></td>
      <td align="center">🔧 <b>DevTools</b></td>
    </tr>
    <tr>
      <td>
        • Next.js 15<br/>
        • React 19<br/>
        • Tailwind CSS v4<br/>
        • date-fns v4
      </td>
      <td>
        • NextAuth.js v5<br/>
        • React Server Actions<br/>
        • Server Components<br/>
        • Edge Runtime
      </td>
      <td>
        • Turbopack<br/>
        • ESLint v9<br/>
        • Prettier<br/>
        • PostCSS
      </td>
    </tr>
  </table>
</div>

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/yourusername/the-wild-oasis.git

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Start development server with Turbopack
npm run dev
```

Required environment variables:

```env
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
```

## 📁 Project Structure

```
the-wild-oasis/
├── app/
│   ├── _components/     # Shared components
│   │   ├── CabinCard.js
│   │   ├── DateSelector.js
│   │   ├── ReservationForm.js
│   │   └── ... (other components)
│   ├── _lib/           # Utility functions and services
│   │   ├── actions.js
│   │   ├── auth.js
│   │   ├── data-service.js
│   │   └── supabase.js
│   ├── _styles/        # Global styles
│   ├── account/        # User account pages
│   ├── cabins/         # Cabin listing and details
│   ├── login/          # Authentication pages
│   ├── about/          # About page
│   └── layout.js       # Root layout
├── public/             # Static assets
└── starter/           # Starter components
```

## 🎯 Key Features Implementation

### Authentication

- NextAuth.js v5 integration with Google provider
- Protected routes with auth middleware
- User session management
- Secure sign-in/sign-out flow
- Custom authentication pages

### Cabin Management

- Dynamic cabin listings with filtering
- Detailed cabin views with images
- Real-time availability checking
- Cabin capacity management

### Reservation System

- Date selection with availability checking
- Guest count management
- Reservation editing and cancellation
- Real-time updates

### User Experience

- Skeleton loading states for all async operations
- Form validation with error handling
- Smooth transitions and animations
- Context-based state management

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 🙏 Acknowledgments

A special thank you to [Jonas Schmedtmann](https://github.com/jonasschmedtmann) for creating this amazing course and sharing his knowledge. This project is part of his Ultimate React Course, which provides an excellent learning experience for modern web development.

### Course Information

- Course: [Ultimate React Course](https://www.udemy.com/course/the-ultimate-react-course)
- Instructor: Jonas Schmedtmann
- Platform: Udemy

---

Made with ❤️ by Kareem Ahmed
