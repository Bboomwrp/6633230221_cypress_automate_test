import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';

describe('EX04: Login tests using Page Object Model', () => {

  beforeEach(() => {
    LoginPage.visit();
  });

  it('Login with valid user', () => {
    LoginPage.fillUsername('username');
    LoginPage.fillPassword('password');
    LoginPage.submit();
    HomePage.verifyIsLoggedIn();
  });

  it('Login with invalid user', () => {
    LoginPage.fillUsername('wronguser');
    LoginPage.fillPassword('wrongpass');
    LoginPage.submit();
    LoginPage.assertLoginFailed();
  });

});
