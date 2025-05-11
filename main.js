function generateFact() {
  const facts = [
    'Cristiano Ronaldo can jump higher than the average NBA player.',
    'Lionel Messi was diagnosed with a growth hormone disorder as a child.',
    'The fastest red card in football history was just 2 seconds after kickoff.',
    'Goalkeepers were allowed to pick up back-passes until 1992.',
    'The World Cup trophy has been stolen — and found — twice!',
    'Levent is a noob at Fifa',
    'There is a new sheriff in town called Roland Vasarhelyi',
  ];

  const randomIndex = Math.floor(Math.random() * facts.length);

  document.getElementById('fact').innerText = facts[randomIndex];
}

showFact();
