const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('I&U Backend is Live - Where Two Hearts Meet in One World');
});

app.post('/api/chat', (req, res) => {
  const msg = (req.body.message || '').toLowerCase();
  let reply = "I'm here for you both. Tell me more about how you both are feeling today?";
  if (msg.includes('hi') || msg.includes('hello') || msg.includes('hey')) reply = "Heyy! Welcome to I&U. How are you both doing today?";
  if (msg.includes('fight') || msg.includes('angry') || msg.includes('sad')) reply = "It's okay to fight sometimes. Real love is not about never fighting, it's about never giving up.";
  if (msg.includes('love')) reply = "Love is beautiful when you choose each other every single day.";
  if (msg.includes('miss')) reply = "Missing someone means they live in your heart. Send them a cute message right now!";
  res.json({ reply });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('I&U Server running on ' + PORT));
