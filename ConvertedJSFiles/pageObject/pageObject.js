"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var built_1 = require("protractor/built");
var protractor_1 = require("protractor");
var PageObject = /** @class */ (function () {
    function PageObject() {
    }
    PageObject.prototype.getSearchItem = function () {
        return built_1.element(built_1.by.css("h3[class='LC20lb']"));
    };
    PageObject.prototype.getDestination = function () {
        return protractor_1.browser.get('https://www.google.com/');
    };
    PageObject.prototype.getAccederButton = function () {
        return built_1.element(built_1.by.linkText("Acceder"));
    };
    PageObject.prototype.getInput = function () {
        return built_1.element(built_1.by.css("input[class='whsOnd zHQkBf']"));
    };
    PageObject.prototype.getNext = function () {
        return built_1.element(built_1.by.css("content[class='CwaK9']"));
    };
    PageObject.prototype.getAdress = function () {
        return built_1.element(built_1.by.css("textarea[class='vO']"));
    };
    PageObject.prototype.getSubject = function () {
        return built_1.element(built_1.by.css("input[class='aoT']"));
    };
    PageObject.prototype.getDescription = function () {
        return built_1.element(built_1.by.css("div[class='Am Al editable LW-avf']"));
    };
    PageObject.prototype.getNewMessage = function () {
        return built_1.element(built_1.by.css("div[class='T-I J-J5-Ji T-I-KE L3']"));
    };
    PageObject.prototype.getSendEmail = function () {
        return built_1.element(built_1.by.css("div[class='T-I J-J5-Ji aoO v7 T-I-atl L3']"));
    };
    return PageObject;
}());
exports.PageObject = PageObject;
