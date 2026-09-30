import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Stock } from '../src/stock.js';

test('ajouter puis obtenir', () => {
  const s = new Stock();
  s.ajouter('A1', 'Vis', 10, 2);
  assert.equal(s.obtenir('A1').quantite, 10);
  assert.equal(s.obtenir('ZZ'), null);
});

test('retirer diminue la quantité', () => {
  const s = new Stock();
  s.ajouter('A1', 'Vis', 10, 2);
  s.retirer('A1', 4);
  assert.equal(s.obtenir('A1').quantite, 6);
});

test('retirer refuse un stock insuffisant ou un produit inconnu', () => {
  const s = new Stock();
  s.ajouter('A1', 'Vis', 1);
  assert.throws(() => s.retirer('A1', 5), /insuffisant/);
  assert.throws(() => s.retirer('B2', 1), /inconnu/);
});

test('alertes inclut un produit dont la quantité est égale au seuil', () => {
  const s = new Stock();
  s.ajouter('A1', 'Vis', 5, 5);

  const alertes = s.alertes();
  assert.equal(alertes.some((p) => p.ref === 'A1'), true);
});

test('ajouter refuse une quantité invalide', () => {
  assert.throws(() => new Stock().ajouter('A1', 'Vis', -3), /invalide/);
});
