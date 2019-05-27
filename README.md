# ProtractorAutomation

# Ambient typings

Protractor also uses ambient types including jasmine, jasminewd2, and node. These are brought in via the tsconfig.json file, which uses npm module resolution to get types from node_modules/@types.

If you are using the jasmine framework for your tests, make sure to do:

* npm install --save-dev @types/jasmine @types/jasminewd2
* npm install -g typescript
* npm install protractor

# How to Run?
Selenium Server
* webdriver-manager start

Open new CommandPrompt/Terminal and navigate to your project location and run the below command to run the tests. *
* npm test
