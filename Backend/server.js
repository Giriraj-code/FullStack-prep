import express from "express";
const app = express();
// app.use(express.static("dist"));
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const jokes = [
  {
    id: 1,
    setup: "Why don't scientists trust atoms?",
    punchline: "Because they make up everything!",
  },
  {
    id: 2,
    setup: "Why did the scarecrow win an award?",
    punchline: "Because he was outstanding in his field.",
  },
  { id: 3, setup: "What do you call a fake noodle?", punchline: "An impasta." },
  {
    id: 4,
    setup: "Why do we tell actors to 'break a leg'?",
    punchline: "Because every play has a cast.",
  },
  {
    id: 5,
    setup: "What do you call cheese that isn't yours?",
    punchline: "Nacho cheese!",
  },
  {
    id: 6,
    setup: "What did the zero say to the eight?",
    punchline: "Nice belt!",
  },
  {
    id: 7,
    setup: "Why did the bicycle fall over?",
    punchline: "Because it was two-tired.",
  },
  {
    id: 8,
    setup: "What do you call a bear with no teeth?",
    punchline: "A gummy bear!",
  },
  {
    id: 9,
    setup: "Why do the French eat snails?",
    punchline: "They don't like fast food.",
  },
  {
    id: 10,
    setup: "How do you organize a space party?",
    punchline: "You planet.",
  },
];

app.get("/api/jokes", (req,res) => {
    res.send(jokes);
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
