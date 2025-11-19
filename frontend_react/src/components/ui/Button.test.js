import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

// PUBLIC_INTERFACE
describe('Button', () => {
  it('renders with default (primary) variant and medium size', () => {
    render(<Button>Primary</Button>);
    const btn = screen.getByRole('button', { name: /primary/i });
    expect(btn).toBeInTheDocument();
    expect(btn.className).toMatch(/btn--primary/);
    expect(btn.className).toMatch(/btn--md/);
  });

  it('renders other variants and sizes', () => {
    render(<Button variant="secondary" size="lg">Secondary Large</Button>);
    const btn = screen.getByRole('button', { name: /secondary large/i });
    expect(btn.className).toMatch(/btn--secondary/);
    expect(btn.className).toMatch(/btn--lg/);

    render(<Button variant="ghost" size="sm">Ghost Small</Button>);
    const btn2 = screen.getByRole('button', { name: /ghost small/i });
    expect(btn2.className).toMatch(/btn--ghost/);
    expect(btn2.className).toMatch(/btn--sm/);
  });

  it('renders disabled and loading states, disables click', () => {
    const onClick = jest.fn();
    render(<Button disabled loading onClick={onClick}>Loading</Button>);
    const btn = screen.getByRole('button', { name: /loading/i });
    expect(btn).toBeDisabled();
    expect(btn).toHaveAttribute('aria-disabled', 'true');
    expect(btn).toHaveAttribute('aria-busy', 'true');
    fireEvent.click(btn);
    expect(onClick).not.toHaveBeenCalled();
    expect(screen.getByText('Loading')).toBeInTheDocument();
    const spinner = btn.querySelector('.btn__spinner');
    expect(spinner).toBeInTheDocument();
  });

  it('calls onClick when enabled', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Test Click</Button>);
    const btn = screen.getByRole('button', { name: /test click/i });
    fireEvent.click(btn);
    expect(onClick).toHaveBeenCalled();
  });

  it('is accessible via aria-label', () => {
    render(<Button ariaLabel="Custom Label">X</Button>);
    const btn = screen.getByRole('button', { name: "Custom Label" });
    expect(btn).toBeInTheDocument();
  });
});
