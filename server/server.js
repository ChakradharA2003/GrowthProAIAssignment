const express = require('express');
const cors = require('cors');
const businessRoutes = require('./routes/businessRoutes');

const app = express();
const PORT = 4000;

app.use(cors({
  origin: 'https://growth-pro-ai-assignment.vercel.app', 
  methods: ['GET', 'POST'],
  credentials: true,
}));
app.use(express.json());
app.use('/api', businessRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
