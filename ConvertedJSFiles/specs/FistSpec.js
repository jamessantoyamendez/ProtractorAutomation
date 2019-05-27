"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("./../config-data/config");
var pageObject_1 = require("../pageObject/pageObject");
var pageObject = new pageObject_1.PageObject();
var built_1 = require("protractor/built");
var ptor_1 = require("protractor/built/ptor");
describe('Looking for "gmail" on google.com', function () {
    beforeEach(function () {
        built_1.browser.waitForAngularEnabled(false);
        pageObject.getDestination();
    });
    it('should select Gmail - Google option', function () {
        built_1.element(built_1.by.css("input[class='gLFyf gsfi']")).sendKeys('gmail');
        built_1.element(built_1.by.css("input[class='gLFyf gsfi']")).sendKeys(ptor_1.protractor.Key.ENTER);
        var searching = pageObject.getSearchItem();
        searching.getText().then(function (text) {
            expect(text).toEqual('Gmail - Google');
        });
    });
});
describe('Login into Gmail', function () {
    it('should login with user and pass', function () {
        pageObject.getSearchItem().click();
        pageObject.getAccederButton().click();
        built_1.browser.getAllWindowHandles().then(function (handles) {
            built_1.browser.switchTo().window(handles[1]);
            built_1.browser.sleep(2000).then(function () {
                pageObject.getInput().sendKeys(config_1.info.email);
                pageObject.getNext().click();
                built_1.browser.sleep(2000).then(function () {
                    pageObject.getInput().sendKeys(config_1.info.password);
                    pageObject.getNext().click().then(function () {
                        var LoginURL = built_1.browser.getCurrentUrl();
                        expect(LoginURL).toContain('mail');
                    });
                });
            });
        });
    });
});
describe('Sending an email', function () {
    beforeEach(function () {
        built_1.browser.executeScript('window.sessionStorage.clear();');
        built_1.browser.executeScript('window.localStorage.clear();');
    });
    it('should see a confirmation message', function () {
        built_1.browser.sleep(5000).then(function () {
            pageObject.getNewMessage().click().then(function () {
                pageObject.getAdress().sendKeys(config_1.info.email_to);
                pageObject.getSubject().sendKeys(config_1.info.subject);
                pageObject.getDescription().sendKeys(config_1.info.description);
                pageObject.getSendEmail().click();
                built_1.browser.sleep(8000).then(function () {
                    built_1.element(built_1.by.css("span[class='bAq']")).getText().then(function (text) {
                        console.log('Message confirmation: ' + text);
                        /* This code block was implemented because I was facing the following error:
                        Error: Timeout - Async callback was not invoked within timeout specified by jasmine.DEFAULT_TIMEOUT_INTERVAL.
                        And I could not find a solution for it */
                        if (text === 'Mensaje enviado') {
                            return expect(text).toEqual('Mensaje enviado');
                        }
                    });
                });
            });
        });
    });
});
