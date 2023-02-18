'use strict';

class UserForm {
  constructor(apiConnector) {
    this.apiConnector = apiConnector;
    this.loginFormCallback = this.loginFormCallback.bind(this);
    this.registerFormCallback = this.registerFormCallback.bind(this);
    this.loginForm = document.getElementById('loginForm');
    this.registerForm = document.getElementById('registerForm');
    this.loginForm.addEventListener('submit', this.loginFormCallback);
    this.registerForm.addEventListener('submit', this.registerFormCallback);
  }

  loginFormCallback(data) {
    this.apiConnector.login(data, (response) => {
      if (response.success) {
        location.reload();
      } else {
        showError(response.data);
      }
    });
  }

  registerFormCallback(data) {
    this.apiConnector.register(data, (response) => {
      if (response.success) {
        location.reload();
      } else {
        showError(response.data);
      }
    });
  }
}

function showError(errorMessage) {
  const errorWindow = document.getElementById('error');
  errorWindow.textContent = errorMessage;
  errorWindow.style.display = 'block';
}

const apiConnector = new ApiConnector();
const userForm = new UserForm(apiConnector);
