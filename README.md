# AI Challenge
Cypress tests for Bing AI chat


# How to run the tests

First of all, clone this repository on your computer. 

Secondly, run the command `npm install` to download all the needed dependencies. 

Lastly, you have two options to run the test cases: 

1- Headless mode: Use the `npx cypress run` command to run the test cases in headless mode, and once it's complete, you can check the results on the auto-generated report in the folder `/cypress/results`.

<img width="698" alt="image" src="https://github.com/ivanlepeskevicius/AI_Challenge/assets/41808652/4769d2ab-1d2a-43d0-a6da-9a7eab39f4a5">


2- Visual mode: Use the command `npx cypress open`, this will open Cypress UI for you, from this window you can choose which browser you want to use and run the tests individually. 

<img width="1184" alt="image" src="https://github.com/ivanlepeskevicius/AI_Challenge/assets/41808652/43ee422b-7038-49c5-bc4f-fe91712b59b8">


# Notes

You may notice some flakyness on the Image Recognition test cases, this may happen due to two different factors: 

1- The AI model fails to correctly identify the object in the image. 

2- The AI response takes too long to be generated. This tends to happen more often if the test are run many times, in some cases, the AI refuses to answer the same question over and over. 

Given these factors, these tests might not be the ideal candidates for automation testing, but I wanted to show case these type of scenarios. 
