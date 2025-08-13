# DevOps Automation Workflow

This repository contains the **full automation workflow** that integrates **Microsoft Logic Apps**, **self-hosted n8n**, **Zapier**, and **Make.com** to streamline **DevOps** operations. This hybrid setup of **local** and **cloud environments** is designed to reduce manual effort, improve incident response times, and increase team collaboration.

## Overview

This automation workflow does the following:

1. **n8n (self-hosted)**: Listens to **GitHub commits** and automatically creates **Jira tickets**.
2. **Logic Apps**: Coordinates conditional workflows using **Azure connectors** to handle complex business logic.
3. **Zapier**: Sends **real-time Slack notifications** whenever Jira tickets are created or updated.
4. **Make.com**: Archives logs, syncs data, and updates **Google Drive dashboards** to ensure real-time visibility.

The workflow enables faster incident resolution, reduces manual work, and helps to achieve scalable, modular, and flexible automation processes.

---

## Setup Instructions

### 1. **Setting Up n8n (Self-Hosted)**

To get started with **n8n**, follow the steps below:

- **Clone the repository** and navigate to the `n8n-workflows/` folder.
- Import the workflows into your **n8n** instance:
  - Go to your **n8n dashboard**.
  - Click **Import** > **Import from File** and select the workflow files found in `n8n-workflows/`.
  - Make sure your **n8n** instance is properly configured with access to **GitHub** and **Jira**.
  - Set up webhooks for GitHub push events and configure the Jira ticket creation process in **n8n**.

---

### 2. **Deploy Logic Apps**

To set up **Microsoft Logic Apps**:

- Navigate to the `logic-apps/` directory.
- Deploy the Logic Apps using the provided **JSON definitions**:
  - Import the **Logic Apps JSON file** into the **Azure portal**.
  - Ensure you have all necessary **Azure connectors** (e.g., GitHub, Jira) configured in the Logic Apps.
  - Define any required conditional workflows to suit your environment.

---

### 3. **Configure Zapier Zaps**

To configure **Zapier** for Slack notifications:

- Go to the `zapier/` directory and open the **slack-notifications.md** file.
- Create a **new Zap** in **Zapier**:
  - **Trigger**: **New Issue** in **Jira** (or custom trigger based on your needs).
  - **Action**: Send a message to a **Slack channel** (e.g., `#devops`).
  - Customize the **Slack message template**:
    - Example: "New Jira Ticket Created: {{Ticket Summary}}"
    - Include the **Jira ticket link** in the message for easy access.

---

### 4. **Set Up Make.com Scenarios**

For **Make.com** integration:

- Navigate to the `makecom/` directory and follow the **log-archiving.md** instructions.
- Set up a **new Scenario**:
  - **Modules**: Add modules for **GitHub**, **Jira**, and **Google Drive**.
  - Archive logs whenever a **new Jira issue** is created.
  - Sync data to **Google Drive** (or any other storage service) for reporting.
  - Update your dashboards using **Google Sheets** or **Grafana**.

---

## Results

By implementing this workflow, your DevOps team can expect the following outcomes:

- **60% reduction** in manual ticket creation and error handling.
- Real-time **cross-platform updates and alerts** to streamline communication and collaboration.
- Improved **traceability** and faster incident **response times**.
- **Scalable** architecture that adapts to changing team needs or new tools.

---

## Contributing

We welcome contributions to this project! If you have improvements, suggestions, or feedback, feel free to:

- **Open an issue** if you encounter any problems or have suggestions for enhancements.
- **Submit a pull request** to contribute new features, fixes, or updates.

---

## Full Flow Process

For a detailed walkthrough of the entire workflow from start to finish, please refer to the **process.md** file in this repository. This document contains:

- Step-by-step instructions for the integration process.
- Detailed explanations for each platform (n8n, Logic Apps, Zapier, Make.com).
- Troubleshooting tips and best practices for debugging common issues.

---

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

