# widget-example

This project highlights the usage of the designhubz web SDK.

## Setup

1. Clone project and open command prompt in root project folder
2. Install libraries by running the following command:

  ```bash
  npm install
  ```

3. Run the project:
  
  ```bash
  npm run start
  ```
  
## Main files Description

1. This project uses our web SDK as a local dependency: package `designhubz-widget` (We will generate docs for it soon, but interfaces/types are included).
2. *index.html* : shows an `HTMLDivElement` where the widget (iFrame) will be contained.
3. *src/index.ts* : In this example, we are fetching a specific product, creating and interacting with a widget.
