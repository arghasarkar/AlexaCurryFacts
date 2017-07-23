/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

"use strict";

const Alexa = require("alexa-sdk");

const APP_ID = undefined;

const languageStrings = {
    "en-GB": {
        translation: {
            FACTS: [
                "The biggest biryani ever made was 13 tonne and was made in New Delhi in 2008.",
                "The UK is home to around 10000 curry houses and restaurants.",
                "The tallest poppadum stack in the world stands at a massive 282 poppadoms. The record was set by a chef from the Jali Indian Restaurant in Blackpool.",
                "Chilli is the most popular spice in the world and can help combat heart attacks and strokes and extends blood coagulation times preventing harmful blood clots.",
                "Chicken tikka masala is the country’s most popular restaurant dish with one in seven curries sold in the UK being chicken tikka masala.",
                "More than 250 million pounds is being spent on Indian food every year in the U.K.",
                "Beer is the best thing to drink with curry.",
                "The word 'balti' means bucket in Hindi and Bengali.",
                "The word 'masala' means spice mix.",
            ],
            SKILL_NAME: "Curry facts",
        },
    }
};

const handlers = {
    "LaunchRequest": function () {
        this.emit("GetCurryFact");
    },
    "GetCurryFact": function () {
        // Get a random space fact from the space facts list
        // Use this.t() to get corresponding language data
        const factArr = this.t("FACTS");
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];

        // Create speech output
        const speechOutput = randomFact;
        this.emit(":tellWithCard", speechOutput, this.t("SKILL_NAME"), randomFact);
    },
    "AMAZON.HelpIntent": function () {
        const speechOutput = this.t("HELP_MESSAGE");
        const reprompt = this.t("HELP_MESSAGE");
        this.emit(":ask", speechOutput, reprompt);
    },
    "AMAZON.CancelIntent": function () {
        this.emit(":tell", this.t("STOP_MESSAGE"));
    },
    "AMAZON.StopIntent": function () {
        this.emit(":tell", this.t("STOP_MESSAGE"));
    },
};

exports.handler = function (event, context) {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
