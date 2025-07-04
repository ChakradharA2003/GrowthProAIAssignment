const { businessData, headlineTemplates } = require('../data/staticData');

// Utility to generate a headline from templates
function generateHeadline(name, location) {
  const template = headlineTemplates[Math.floor(Math.random() * headlineTemplates.length)];
  return template.replace('{name}', name).replace('{location}', location);
}

// Controller: POST /business-data
const getBusinessData = (req, res) => {
  const { name, location } = req.body;

  const match = businessData.find(
    (b) =>
      b.name.toLowerCase() === name.toLowerCase() &&
      b.location.toLowerCase() === location.toLowerCase()
  );

  if (match) {
    return res.json(match);
  }

  const newEntry = {
    name,
    location,
    rating: +(Math.random() * (5 - 3.5) + 3.5).toFixed(1),
    reviews: Math.floor(Math.random() * 300 + 50),
    headline: generateHeadline(name, location),
  };

  businessData.push(newEntry); // Simulate saving
  res.json(newEntry);
};

// Controller: GET /regenerate-headline
const regenerateHeadline = (req, res) => {
  const { name, location } = req.query;

  if (!name || !location) {
    return res.status(400).json({ error: 'Missing query parameters' });
  }

  const newHeadline = generateHeadline(name, location);
  res.json({ headline: newHeadline });
};

module.exports = {
  getBusinessData,
  regenerateHeadline,
};
