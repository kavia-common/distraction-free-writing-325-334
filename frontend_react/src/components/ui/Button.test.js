import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

// Dummy Icon for testing
const DummyIcon = () => <svg role="img" data-testid="icon" height={18}><rect width={18} height={18} fill="green" /></svg>;

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

  it('renders with squared prop (blocky look)', () => {
    render(<Button squared>SquaredButton</Button>);
    const btn = screen.getByRole('button', { name: /squaredbutton/i });
    expect(btn.className).toMatch(/btn--squared/);
  });

  it('renders with block and elevate props', () => {
    render(<Button block elevate>BlockElevate</Button>);
    const btn = screen.getByRole('button', { name: /blockelevate/i });
    expect(btn.className).toMatch(/btn--block/);
    expect(btn.className).toMatch(/btn--elevate/);
  });

  it('renders with left icon', () => {
    render(<Button icon={<DummyIcon />} >LeftIcon</Button>);
    const icon = screen.getByTestId("icon");
    expect(icon).toBeInTheDocument();
    const btn = screen.getByRole('button', { name: /lefticon/i });
    expect(btn.querySelector('.btn__icon')).toBeInTheDocument();
  });

  it('renders with right icon', () => {
    render(<Button iconRight={<DummyIcon />} >RightIcon</Button>);
    const icon = screen.getByTestId("icon");
    expect(icon).toBeInTheDocument();
    const btn = screen.getByRole('button', { name: /righticon/i });
    expect(btn.querySelector('.btn__icon--right')).toBeInTheDocument();
  });

  it('render both icons when icon and iconRight present', () => {
    render(<Button icon={<DummyIcon />} iconRight={<DummyIcon />}>BothIcons</Button>);
    const btn = screen.getByRole('button', { name: /bothicons/i });
    expect(btn.querySelector('.btn__icon')).toBeInTheDocument();
    expect(btn.querySelector('.btn__icon--right')).toBeInTheDocument();
  });
});
