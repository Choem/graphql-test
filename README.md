# GraphQL Test - @Choem

I wanted to see if I could setup a project with microservices and GraphQL.
Seems like it works pretty well. The npm packages used for this project are pretty interesting.
Have a look at it yourself.

## Deployments

Deployments are located in the deployments folder, I still need to rewrite them for configuration on production environments

## Services

There are two different services for now, one being the UI which contains a React application (Typescript) and the other one being the middleware were all the logic is located.

## Scripts

There are different scripts to setup the minikube cluster and check its dependencies on start up.
You can run these scripts from the root of the project directory.

Run the start script for starting a new or existing kubernetes cluster on local minikube instance.
The start script calls these other scripts:
- dependencies
- build
-- build_image
- deploy

`./scripts/start`

Run the skaffold script if you have deployed everything and you want to sync your changes to the cluster for easy development.
`./scripts/skaffold`