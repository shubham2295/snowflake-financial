import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Welcome from '../pages/Welcome';

describe('Welcome page', () => {

  test('renders hero text', () => {

    render(<Welcome />);
    const heroTextEle = screen.getByTestId('hero-txt');
    expect(heroTextEle).toHaveTextContent(/Put moneywhere your heart is/i);

  });

  test('renders hero image', () => {

    render(<Welcome />);
    const heroImgEle = screen.queryAllByAltText('hero')[0];
    expect(heroImgEle).toBeInTheDocument();

  });

});