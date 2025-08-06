# JustGeTech Backend Server

## Environment Variables

### MongoDB Configuration

Create a `.env` file in the server directory with the following variables:

```env
# MongoDB Configuration
# For local development, you can use:
# - Local MongoDB: mongodb://127.0.0.1:27017/getech
# - MongoDB Atlas: mongodb+srv://username:password@cluster.mongodb.net/getech
# - Leave empty to use mock database

MONGODB_URI=mongodb://127.0.0.1:27017/getech

# Server Configuration
PORT=5000
NODE_ENV=development
```

### For Production (Render)

Set these environment variables in your Render dashboard:

- `MONGODB_URI`: Your MongoDB Atlas connection string
- `NODE_ENV`: `production`
- `PORT`: `10000` (or let Render set it automatically)

## Setup Instructions

1. **Local Development:**
   ```bash
   npm install
   # Create .env file with your MongoDB URI
   npm run dev
   ```

2. **Production (Render):**
   - Set environment variables in Render dashboard
   - Deploy automatically from GitHub

## API Endpoints

- `GET /api/health` - Health check
- `POST /api/contact` - Contact form submission
- `GET /api/contact` - Get all contact submissions

## Mock Database

If no MongoDB URI is provided, the server will use an in-memory mock database for development purposes. 