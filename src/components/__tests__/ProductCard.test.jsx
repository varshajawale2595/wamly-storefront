import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

const mockDispatch = jest.fn();
jest.mock('../../context/CartContext', () => ({
  useCart: () => ({ dispatch: mockDispatch })
}));

import ProductCard from '../ProductCard';

describe('ProductCard', () => {
  beforeEach(() => mockDispatch.mockClear());

  it('renders product and calls dispatch on Add', () => {
    const product = { id: 1, title: 'Test Product', price: 9.99 };
    render(<ProductCard product={product} />);

    expect(screen.getByText(/test product/i)).toBeInTheDocument();
    const btn = screen.getByText(/add/i);
    fireEvent.click(btn);
    expect(mockDispatch).toHaveBeenCalledWith({ type: 'ADD', payload: product });
  });
});
