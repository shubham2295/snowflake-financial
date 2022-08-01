import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Welcome from '../pages/Welcome';

const setup = () => render(<Welcome />);

describe('Welcome page', () => {

  test('renders title text', () => {

    setup();
    const heroTextEle = screen.getByTestId('hero-txt');
    expect(heroTextEle).toHaveTextContent(/Put moneywhere your heart is/i);

  });

  test('renders hero image', () => {

    setup();
    const heroImgEle = screen.queryByAltText('hero');
    expect(heroImgEle).toBeInTheDocument();

  });

});