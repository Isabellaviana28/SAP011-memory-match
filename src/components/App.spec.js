import App from './App.js';

describe('testes da funções do main js', () => {
  it('should render without crashing', () => {
    const el = App();
    expect(el instanceof HTMLElement).toBe(true);
  });
});
