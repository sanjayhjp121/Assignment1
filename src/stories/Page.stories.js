import { within, fireEvent, expect } from '@storybook/test'; // Adjusted import to fireEvent
import { Page } from './Page';

export default {
  title: 'Example/Page',
  component: Page,
  parameters: {
    layout: 'fullscreen',
  },
};

export const LoggedOut = {};

export const LoggedIn = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = canvas.getByRole('button', { name: /Log in/I });
    expect(loginButton).toBeInTheDocument();
    fireEvent.click(loginButton);
    expect(loginButton).not.toBeInTheDocument();

    const logoutButton = canvas.getByRole('button', { name: /Log out/I });
    expect(logoutButton).toBeInTheDocument();
  },
};