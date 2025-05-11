function generateFact() {
  const facts = [
    'Cristiano Ronaldo can jump higher than the average NBA player.',
    'Lionel Messi was diagnosed with a growth hormone disorder as a child.',
    'The fastest red card in football history was just 2 seconds after kickoff.',
    'Goalkeepers were allowed to pick up back-passes until 1992.',
    'The World Cup trophy has been stolen — and found — twice!',
    'Levent is a pro at FC24 corners.',
    'There is a new sheriff in town called Levent Suzgun',
    'Roland can win against Older Suzgun.',
  ];

  const randomIndex = Math.floor(Math.random() * facts.length);

  document.getElementById('fact').innerText = facts[randomIndex];
}

showFact();
