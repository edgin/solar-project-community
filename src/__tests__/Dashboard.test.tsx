import { render, screen } from '@testing-library/react';
import Dashboard from '../components/Dashboard'; // adjust path as needed
import * as api from '../services/api';
import { act } from 'react';

jest.mock('../services/api');

test('shows loading spinner while data is being fetched', async () => {
  // Mock fetchProjects to simulate never-resolving promise
  const mockFetch = jest.spyOn(api, 'fetchProjects').mockImplementation(() => new Promise(() => {}));

  await act(async () => {
    render(<Dashboard />);
  });

  expect(screen.getByRole('status')).toBeInTheDocument();

  mockFetch.mockRestore();
});
