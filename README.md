# JustGeTech.com

A modern, responsive website for JustGeTech Solutions - AI-powered software development company.

## 🚀 Features

- **Modern UI/UX**: Beautiful, responsive design with smooth animations
- **Contact Form**: Fully functional contact form with MongoDB integration
- **AI Chatbot**: Interactive AI-powered chatbot for customer support
- **Multi-page Website**: Home, About, Services, Team, Careers, and Case Studies
- **Full-stack Application**: React frontend with Node.js/Express backend

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Hook Form** with Zod validation
- **TanStack Query** for data fetching

### Backend
- **Node.js** with Express
- **TypeScript** for type safety
- **MongoDB** for database
- **Zod** for schema validation
- **CORS** enabled for cross-origin requests

## 📁 Project Structure

```
GeTechPage/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/         # Page components
│   │   ├── lib/           # Utilities and API
│   │   └── hooks/         # Custom hooks
│   └── package.json
├── server/                # Node.js backend
│   ├── routes.ts          # API routes
│   ├── database.ts        # MongoDB connection
│   ├── storage.ts         # Data storage layer
│   └── package.json
└── shared/                # Shared schemas and types
    └── schema.ts
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or Atlas)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone git@github.com:justgetechsolutions/justgetech.com.git
   cd justgetech.com
   ```

2. **Install dependencies**
   ```bash
   # Install frontend dependencies
   cd client
   npm install
   
   # Install backend dependencies
   cd ../server
   npm install
   
   # Install shared dependencies
   cd ../shared
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # In server directory, create .env file
   MONGODB_URI=mongodb://localhost:27017/getech
   PORT=5000
   ```

4. **Start the development servers**
   ```bash
   # Start backend server (from server directory)
   npm run dev
   
   # Start frontend server (from client directory)
   npm run dev
   ```

5. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000
   - Health Check: http://localhost:5000/api/health

## 📝 API Endpoints

### Contact Form
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contact submissions

### Health Check
- `GET /api/health` - Server health status

## 🎯 Features

### Contact Form
- ✅ Form validation with Zod
- ✅ MongoDB integration
- ✅ CORS handling
- ✅ Error handling
- ✅ Success notifications

### Website Sections
- ✅ Hero section with call-to-action
- ✅ Services showcase
- ✅ Industries served
- ✅ Team members
- ✅ Testimonials
- ✅ Contact information

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

- **Email**: justgetechsolutions@gmail.com
- **Website**: https://justgetech.com
- **Founder**: Dhruvil Chauhan

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**JustGeTech Solutions** - Transforming businesses with AI-powered software solutions. 