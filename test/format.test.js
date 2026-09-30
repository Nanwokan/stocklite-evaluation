import { test } from 'node:test';
import assert from 'node:assert/strict';
import { formaterLigne } from '../src/format.js';

test('formaterLigne', () => {
  assert.equal(formaterLigne({ ref: 'A1', nom: 'Ouattara', quantite: 4, seuil: 1 }), 'A1 — Ouattara : 4, seuil : 1');
});
