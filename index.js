const express = require('express');
const dialogflow = require('@google-cloud/dialogflow');
const uuid = require('uuid');

const app = express();
const port = 3001;

app.use(express.json());

// A unique identifier for the session
const sessionId = uuid.v4();

// IMPORTANT: Replace with your Google Cloud Project ID and ensure Dialogflow API is enabled.
// You also need to set up authentication (e.g., via GOOGLE_APPLICATION_CREDENTIALS environment variable)
const projectId = 'YOUR_GOOGLE_CLOUD_PROJECT_ID'; // e.g., 'my-dialogflow-project-12345'

// Create a new session client for Dialogflow
const sessionClient = new dialogflow.SessionsClient();

async function detectIntent(query, languageCode = 'en-US') {
    const sessionPath = sessionClient.projectAgentSessionPath(projectId, sessionId);

    // The text query request.
    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                text: query,
                languageCode: languageCode,
            },
        },
    };

    try {
        const responses = await sessionClient.detectIntent(request);
        const result = responses[0].queryResult;
        console.log(`Query: ${result.queryText}`);
        console.log(`Response: ${result.fulfillmentText}`);
        if (result.intent) {
            console.log(`Intent: ${result.intent.displayName}`);
        } else {
            console.log(`No intent matched.`);
        }
        return result.fulfillmentText;
    } catch (error) {
        console.error('ERROR:', error);
        return 'Sorry, something went wrong. Please try again later.';
    }
}

app.post('/message', async (req, res) => {
    const userMessage = req.body.message;
    if (!userMessage) {
        return res.status(400).send('Message is required');
    }

    const botResponse = await detectIntent(userMessage);
    res.json({ reply: botResponse });
});

app.listen(port, () => {
    console.log(`Customer Chatbot listening at http://localhost:${port}`);
    console.log('To use this, you need to set up a Dialogflow agent and configure your Google Cloud Project ID and authentication.');
    console.log('Try sending a POST request to /message with a JSON body like: { "message": "Hello" }');
});

console.log('Customer Chatbot project setup complete. Remember to configure Dialogflow and Google Cloud credentials.');

