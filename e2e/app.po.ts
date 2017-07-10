import { browser, element, by } from 'protractor';

export class KnigopisAng2Page {
    navigateTo() {
        return browser.get('/');
    }

    getParagraphText() {
        return element(by.css('k-root h1')).getText();
    }
}
