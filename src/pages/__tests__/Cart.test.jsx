import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';

const mockDispatch = jest.fn();
const mockCart = [{ id: 1, title: 'Test Item', price: 5, qty: 1 }];
jest.mock('../../context/CartContext', () => ({
  useCart: () => ({ cart: mockCart, dispatch: mockDispatch })
}));

import Cart from '../Cart';

describe('Cart page', () => {
  beforeEach(() => mockDispatch.mockClear());

  it('opens confirmation modal and removes item on confirm', () => {
    render(<Cart />);
    const removeBtn = screen.getByText('Remove');
    fireEvent.click(removeBtn);
    const dialog = screen.getByRole('dialog');
    expect(within(dialog).getByText(/remove "test item" from cart\?/i)).toBeInTheDocument();
    const modalRemove = within(dialog).getByText('Remove');
    fireEvent.click(modalRemove);
    expect(mockDispatch).toHaveBeenCalledWith({ type: 'REMOVE', payload: 1 });
  });
});
