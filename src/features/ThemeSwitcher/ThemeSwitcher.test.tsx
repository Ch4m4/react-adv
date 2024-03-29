import { fireEvent, screen } from '@testing-library/react';
import { Theme } from '@/shared/constants/themes';
import { renderComponent } from '@/shared/lib/tests/renderComponent';
import { ThemeSwitcher } from './ThemeSwitcher';

describe('ThemeSwitcher', () => {
  let btn: HTMLElement;

  beforeEach(() => {
    renderComponent(<ThemeSwitcher />, {
      theme: Theme.Light,
    });
    btn = screen.getByTestId('ThemeSwitcher');
  });

  test('render', () => {
    expect(btn).toBeInTheDocument();
  });

  test('switch', () => {
    expect(btn.getAttribute('data-testval')).toBe(Theme.Light);
    fireEvent.click(btn);
    expect(btn.getAttribute('data-testval')).toBe(Theme.Dark);
  });
});
