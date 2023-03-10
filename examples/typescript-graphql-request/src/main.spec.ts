import { execSync } from 'child_process';

describe('TypeScript GraphQL Request tests', () => {
  it('works', () => {
    const result = execSync('node dist/main.js', { stdio: 'pipe' }).toString();
    expect(result).toContain('Luke Skywalker');
  });
});
