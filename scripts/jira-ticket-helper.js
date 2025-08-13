// Example helper script for Jira API interaction

const axios = require('axios');

async function createJiraTicket(issueData) {
  try {
    const response = await axios.post('https://your-jira-instance/rest/api/2/issue', issueData, {
      headers: { 'Authorization': `Basic ${process.env.JIRA_AUTH}` }
    });
    return response.data;
  } catch (error) {
    console.error('Error creating Jira ticket:', error);
    throw error;
  }
}

module.exports = { createJiraTicket };
