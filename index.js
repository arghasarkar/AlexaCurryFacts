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
                "People got really annoyed with me when I farted in the Apple store yesterday. I am sorry but have any windows",
                "Why is C a better womaniser compared to Java? C doesn't treat them like objects",
                "I don't see women as objects. I consider each to be in a class of her own.",
                "What's the difference between a computer and a woman? A computer will accept a 3 and a half inch floppy.",
                "What is the definition of a programmer? Programmers are machines that turn coffee into code.",
                "Why did Microsoft name their new search engine bing? Because It's Not Google.",
                "Your mum is so fat that entering her weight into my 64 bit register caused a buffer overflow.",
                "Eight bytes walk into a bar. The bartender asks, can I get you anything? 'Yeah', replies the bytes. Make us a double.",
                "Two bytes meet. The first byte asks, 'are you ill?'. The second byte replies, 'No, just feeling a bit off'",
                "99 little bugs in the code. 99 little bugs in the code. Take one down, patch it around, 117 little bugs in the code.",
                "What's the object oriented way to become wealthy? Answer: Inheritance.",
                "A S.Q.L query goes into the bar, walks up to two tables and asks, 'Can I join you?'",
                "Why are assembly programmers always soaking wet? Because they work below the sea level.",
                "I like my women how I like my file systems. Fat and 32.",
                "What can you hear when you're near an unix shell? The Sea."
            ],
            SKILL_NAME: "Programming jokes.",
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
