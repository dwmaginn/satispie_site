// Test setup file for Vitest
import { beforeAll } from 'vitest';

beforeAll(() => {
  // Set up any global test configuration here
  // For example, mock fetch if needed
  global.fetch = vi.fn();
}); 