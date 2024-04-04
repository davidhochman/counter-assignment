import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
    render(<Counter />);
});

test('renders counter message', () => {
    expect(screen.getByText(/Counter/i)).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
    expect(screen.getByTestId('count')).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
    const Button1 = screen.getByRole('button', { name: /\+/i });
    fireEvent.click(Button1);
    expect(screen.getByTestId('count')).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
    const Button2 = screen.getByRole('button', { name: /-/i });
    fireEvent.click(Button2);
    expect(screen.getByTestId('count')).toHaveTextContent('-1');
});

