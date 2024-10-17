import test from 'node:test';
import assert from 'node:assert';
import { func } from '../src/index.js';

test('string', () => {
    assert.strictEqual(func('string'), 'Hello, World!');
});

test('number', () => {
    assert.strictEqual(func('number'), 100);
});

test('boolean', () => {
    assert.strictEqual(func('boolean'), true);
});

