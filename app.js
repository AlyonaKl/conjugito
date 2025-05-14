
const tenses = {
  present: ['hablar', 'comer', 'vivir'],
  preterite: ['hablé', 'comí', 'viví'],
  perfect: ['he hablado', 'he comido', 'he vivido'],
  future: ['hablaré', 'comeré', 'viviré'],
};

document.getElementById('form').addEventListener('submit', function(e) {
  e.preventDefault();

  const tense1 = document.getElementById('tense1').value;
  const tense2 = document.getElementById('tense2').value;
  const verb1 = tenses[tense1];
  const verb2 = tenses[tense2];

  let resultHTML = `<h3>Training Results:</h3>`;
  resultHTML += `<p>Tense 1 (${tense1}): ${verb1.join(', ')}</p>`;
  resultHTML += `<p>Tense 2 (${tense2}): ${verb2.join(', ')}</p>`;

  document.getElementById('result').innerHTML = resultHTML;
});
