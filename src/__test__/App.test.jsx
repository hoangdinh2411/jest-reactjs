import { render, screen } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom';
import { jest } from '@jest/globals';
describe('test App component', () => {
  const fakeData = [
    {
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: 'quis ut nam facilis et officia qui',
      completed: false,
    },
  ];
  beforeEach(() => {
    global.fetch = jest.fn(() => {
      return Promise.resolve({
        json: () => Promise.resolve(fakeData),
      });
    });
  });

  afterEach(() => {});

  it('should render App component', async () => {
    render(<App />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();

    await screen.findByText(/delectus aut autem/i);
    expect(screen.getByText('delectus aut autem')).toBeInTheDocument();
  });
});
