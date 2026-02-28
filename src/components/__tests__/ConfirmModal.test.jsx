import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ConfirmModal from '../ConfirmModal';

describe('ConfirmModal', () => {
  it('renders when open and calls callbacks', () => {
    const onConfirm = jest.fn();
    const onCancel = jest.fn();
    render(<ConfirmModal isOpen={true} message="Are you sure?" onConfirm={onConfirm} onCancel={onCancel} />);

    expect(screen.getByText(/are you sure/i)).toBeInTheDocument();
    const cancel = screen.getByText(/cancel/i);
    const remove = screen.getByText(/remove/i);
    fireEvent.click(cancel);
    expect(onCancel).toHaveBeenCalled();
    fireEvent.click(remove);
    expect(onConfirm).toHaveBeenCalled();
  });
});
