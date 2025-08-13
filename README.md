# DevOps Automation Workflow

This repository contains the full automation workflow combining **Microsoft Logic Apps**, **self-hosted n8n**, **Zapier**, and **Make.com** to streamline DevOps and support operations.

---

## Overview

- **n8n (self-hosted):** Listens to GitHub commits and auto-creates Jira tickets  
- **Logic Apps:** Coordinates conditional workflows with Azure connectors  
- **Zapier:** Sends real-time Slack notifications for ticket updates  
- **Make.com:** Archives logs, syncs data, and updates Google Drive dashboards  

The workflow runs in a hybrid local + cloud environment, designed to reduce manual effort and improve incident response times.

---

## Setup Instructions

1. Import the n8n workflows from `n8n-workflows/` into your local n8n instance.  
2. Deploy Logic Apps using the JSON definitions in `logic-apps/`.  
3. Configure Zapier Zaps as described in `zapier/slack-notifications.md`.  
4. Set up Make.com scenarios as per `makecom/log-archiving.md`.  

---

## Results

- 60% reduction in manual ticket handling  
- Real-time cross-platform updates and alerts  
- Improved traceability and response speed  
- Scalable and modular architecture  

---

## Contributing

Contributions and feedback are welcome. Feel free to open issues or submit pull requests.

---

## License

This project is licensed under the MIT License. See `LICENSE` for details.

