import assert from 'node:assert/strict';
import { quizQuestions, dragonProfiles, getQuizResult, isValidQuizAnswers, scoreQuizAnswers } from '../lib/quiz.ts';
const empty = Array(quizQuestions.length).fill(null);
assert.equal(getQuizResult(empty), null);
assert.equal(isValidQuizAnswers(Array(quizQuestions.length)), false);
assert.equal(isValidQuizAnswers(['invalid', ...empty.slice(1)]), false);
assert.equal(getQuizResult(quizQuestions.map(q => q.options[0].id))?.id, getQuizResult(quizQuestions.map(q => q.options[0].id))?.id);
const reachable = new Set<string>();
const combinations = quizQuestions.reduce((total, question) => total * question.options.length, 1);
for (let i = 0; i < combinations; i++) {
  let remainder = i;
  const answers = quizQuestions.map(question => { const answer = question.options[remainder % question.options.length].id; remainder = Math.floor(remainder / question.options.length); return answer; });
  const result = getQuizResult(answers);
  assert.ok(result);
  assert.equal(result.id, getQuizResult([...answers])?.id);
  assert.equal(Object.values(scoreQuizAnswers(answers)).reduce((total, value) => total + value, 0), 24);
  reachable.add(result.id);
}
assert.equal(reachable.size, dragonProfiles.length, 'Every advertised result must be reachable');
console.log(`Quiz checks passed: ${combinations} complete combinations; all ${reachable.size} affinities reachable; invalid and incomplete answers rejected.`);
