/**
 * jira-ticket-helper.js
 * 
 * Simple helper script to create Jira tickets using Jira REST API.
 * Uses Axios for HTTP requests and expects Basic Auth token in env variable.
 */

const axios = require('axios');

/**
 * Creates a Jira ticket.
 * 
 * @param {Object} issueData - Jira issue payload (JSON)
 * @returns {Promise<Object>} Jira API response data
 */
async function createJiraTicket(issueData) {
  try {
    const response = await axios.post(
      'https://your-jira-instance.atlassian.net/rest/api/2/issue',
      issueData,
      {
        headers: {
          'Authorization': `Basic ${process.env.JIRA_AUTH}`,  // Base64 encoded 'email:api_token'
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error creating Jira ticket:', error.response ? error.response.data : error.message);
    throw error;
  }
}

// Example usage: run this file directly with `node jira-ticket-helper.js`
if (require.main === module) {
  const newIssue = {
    fields: {
      project: { key: "YOUR_PROJECT_KEY" },     // Replace with your Jira project key
      summary: "Sample ticket created via helper script",
      description: "This ticket was created using a Node.js script.",
      issuetype: { name: "Task" }               // Change if needed (Bug, Story, etc.)
    }
  };

  createJiraTicket(newIssue)
    .then(data => console.log("Jira issue created with key:", data.key))
    .catch(err => {
      console.error("Failed to create Jira ticket:", err.message);
      process.exit(1);
    });
}

module.exports = { createJiraTicket };
