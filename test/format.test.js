import { test } from 'node:test';
import assert from 'node:assert/strict';
import { formaterLigne } from '../src/format.js';

test('formaterLigne ajoute une alerte quand la quantité est inférieure ou égale au seuil', () => {
  assert.equal(
    formaterLigne({ ref: 'A1', nom: 'Vis', quantite: 3, seuil: 5 }),
    'A1 — Vis : 3 u ⚠'
  );
});

test('formaterLigne n’ajoute pas d’alerte quand la quantité dépasse le seuil', () => {
  assert.equal(
    formaterLigne({ ref: 'A1', nom: 'Vis', quantite: 10, seuil: 5 }),
    'A1 — Vis : 10 u'
  );
});
