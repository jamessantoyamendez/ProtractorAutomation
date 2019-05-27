import { element, by} from 'protractor/built';
import { browser } from 'protractor';
export class PageObject {

  getSearchItem() {
    return element(by.css("h3[class='LC20lb']"));
  }
  getDestination() {
    return browser.get('https://www.google.com/');
  }
  getAccederButton() {
    return element(by.linkText("Acceder"));
	}
	getInput() {
		return element(by.css("input[class='whsOnd zHQkBf']"));
	}

	getNext() {
    return element(by.css("content[class='CwaK9']"));
	}

	getAdress(){
		return element(by.css("textarea[class='vO']"));
	}

	getSubject(){
		return element(by.css("input[class='aoT']"));
	}
	
	getDescription(){
		return element(by.css("div[class='Am Al editable LW-avf']"));
	}

	getNewMessage(){
		return element(by.css("div[class='T-I J-J5-Ji T-I-KE L3']"));
	}

	getSendEmail(){
	return element(by.css("div[class='T-I J-J5-Ji aoO v7 T-I-atl L3']"));
	}
}