import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }

  getInputPercentage() {
    return element(by.name('percentage'));
  }

  getButtonEnviar() {
    return element(by.id('btnSubmit'));
  }
}
