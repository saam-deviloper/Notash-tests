import { render, screen } from '@testing-library/react';
import App from './App';
import Login from './Components/Shared/Login';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
describe('login form',()=>{
  test('inputs must be valid',async()=>{
    const handleSubmit = jest.fn();
    const formComponent = render(<Login onSubmit={handleSubmit} />);

    const priceEmail = formComponent.getByTestId('priceEmail');
    const priceAgreement = formComponent.getByTestId('priceAgreement');
    const submitButton = formComponent.getByTestId('companyFormSubmitButton');

    userEvent.type(priceName, formTestConstants.testName);
    userEvent.type(pricePhone, formTestConstants.testPhone);
    userEvent.type(priceEmail, formTestConstants.testEmail);
    userEvent.click(priceAgreement);
    userEvent.click(submitButton);
    await waitFor(() =>
      expect(handleSubmit).toHaveBeenCalledWith({
        agreement: formTestConstants.testAgreement,
        email: formTestConstants.testEmail,
      }),
      expect(emailError.textContent).toMatch(
        formTestConstants.errorMessageForEmail,
      )
    );

  })
})