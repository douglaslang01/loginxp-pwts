import { test, expect } from '@playwright/test';
import { Login, Account } from './support/actons/login';

let login: Login;

test.beforeEach(({ page }) => {
  login = new Login(page);
});

test('deve logar com credenciais válidas', async ({ page }) => {
  const account: Account = {
    username: 'qa',
    password: 'xperience'
  };

  await login.submit(account);
  await expect(
    await login.getPopupContent()
  ).toContainText('Suas credenciais são válidas :)');
});

test('não deve logar com senha inválida', async ({ page }) => {
  const account: Account = {
    username: 'qa',
    password: 'abc123'
  };

  await login.submit(account);
  await login.assertToast('Oops! Credenciais inválidas :(');
});

test('não deve logar quando os campos não são preenchidos', async ({ page }) => {
  const account: Account = {
    username: '',
    password: ''
  };

  await login.submit(account);
  await login.assertToast('Informe o seu nome de usuário!');
});

test('não deve logar quando a senha não é informada', async ({ page }) => {
  const account: Account = {
    username: 'qa',
    password: ''
  };

  await login.submit(account);
  await login.assertToast('Informe a sua senha secreta!');
});

test('não deve logar quando o usuário não é informado', async ({ page }) => {
  const account: Account = {
    username: '',
    password: 'abc123'
  };

  await login.submit(account);
  await login.assertToast('Informe o seu nome de usuário!');
});