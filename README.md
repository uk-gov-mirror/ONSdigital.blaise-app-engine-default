# blaise-app-engine-default
Blank Express App to set as the default App Engine service in a Google Cloud Project.
This is a simple Node.js Express server then returns a 200 message.

**NOTE:** Once created the default service cannnot be deleted in your poject

## Setup

In your GCP Project you need to enable App Engine and setup the Application.

### To deploy straight to App engine 

In the project root, run:
```.shell
gcloud app deploy
```

### To deploy using cloudbuild
To use this option you will need to give cloudbuild access to appengine which can be done in the cloudbuild setting in the Google Console.

This will use the `cloudbuild.yaml` in the project.

In the project root, run:
```.shell
gcloud builds submit
```
The cloudbuild output will be visiable in the terminal

## Running locally

In mean if you want to run the node.js application locally then you can run:

```.shell
yarn install
```

Then:
```.shell
yarn start
```
