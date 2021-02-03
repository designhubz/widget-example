# widget-example

This project highlights the usage of the designhubz web SDK.

## Setup

1. Clone project to your desktop and open command prompt in root project folder
2. Install libraries by running the following command:

  ```bash
  npm install
  ```

3. Run the project:
  
  ```bash
  npm run start
  ```
  
## Main files Description

1. Index.html: shows how you can add a reference for our SDK (via the script tag). Also, you can see the container with defined dimensions where the widget (iFrame will be injected).
2. /src/index.ts: this is the main script of the application. It highlights the way you can interact with the SDK. In the provided example, we are fetching a specific product and creating a widget for it.
3. /designhubz-widget/dist: contains the API of the SDK we've built along with documentation. (We will generate docs for it soon)