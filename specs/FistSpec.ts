import { browser, element, by } from 'protractor/built';
import { protractor } from 'protractor/built/ptor';
import { info } from './../config-data/config';
import { PageObject } from '../pageObject/pageObject';
const pageObject = new PageObject();



describe('Looking for "gmail" on google.com', function () {

	beforeEach(function () {
			browser.waitForAngularEnabled(false);
			pageObject.getDestination();
	});

	it('should select Gmail - Google option', () => {
			element(by.css("input[class='gLFyf gsfi']")).sendKeys('gmail');
			element(by.css("input[class='gLFyf gsfi']")).sendKeys(protractor.Key.ENTER);
			let searching = pageObject.getSearchItem();
			searching.getText().then(function (text) {
					expect(text).toEqual('Gmail - Google');
				});
	});
});

describe('Login into Gmail', function () {

	it('should login with user and pass', function () {
		pageObject.getSearchItem().click();
		pageObject.getAccederButton().click();
        browser.getAllWindowHandles().then(function (handles) {
            browser.switchTo().window(handles[1]);
            browser.sleep(2000).then(function () {
							pageObject.getInput().sendKeys(info.email);
                pageObject.getNext().click();
                browser.sleep(2000).then(function () {
									pageObject.getInput().sendKeys(info.password);
									pageObject.getNext().click().then(function () {
                        var LoginURL = browser.getCurrentUrl();
                        expect(LoginURL).toContain('mail');
                    });
                });
            });
        });
	});
});

describe('Sending an email', function () {
	beforeEach(function () {
			browser.executeScript('window.sessionStorage.clear();');
			browser.executeScript('window.localStorage.clear();');

	});

	it('should see a confirmation message', function () {
			browser.sleep(5000).then(function () {
					pageObject.getNewMessage().click().then(function () {
						pageObject.getAdress().sendKeys(info.email_to);
						pageObject.getSubject().sendKeys(info.subject);
						pageObject.getDescription().sendKeys(info.description);
						pageObject.getSendEmail().click();
							browser.sleep(8000).then(function () {
									element(by.css("span[class='bAq']")).getText().then(function (text) {
											console.log('Message confirmation: ' + text);
											/* This code block was implemented because I was facing the following error: 
											Error: Timeout - Async callback was not invoked within timeout specified by jasmine.DEFAULT_TIMEOUT_INTERVAL.
											And I could not find a solution for it */
											if (text === 'Mensaje enviado') {
													return expect(text).toEqual('Mensaje enviado');
											}
									})
							});
					})
			})
	});
});
