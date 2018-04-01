# React Github Finder

This application allows user to search for a user's Github profile and repositories by keying in a username

* [Link to Application](https://mighty-sierra-74080.herokuapp.com/)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installing

Following commands to get a development env running

1. `git clone https://github.com/yaminmhd/github-react-finder.git`
2. `yarn install` to get all the dependencies and packages
3. `yarn start` to start application on `localhost:3000`

######LandingPage Component
* Github icon on the right links to the repo page
* The React Github Finder link on the top left will bring user back to this `LandingPage` component
* Click on the `View Application` button

![alt text](/public/screenshots/img1.png "Landing Page")

######GitHubApp Component
* Key in a letter of the required user in the `SearchBar` component

![alt text](/public/screenshots/img2.png "Main Application Component")

######Result Component
* `SearchBar` component will automatically fetch the data from Github Api and display result in the `ProfileSection` && `RepoSection` components

![alt text](/public/screenshots/img3.png "Result Component")


* `RepoSection` component comprises of `RepoItem` components
* Each `RepoItem` component contains the name, description, badges displaying the status and a link to the repo

![alt text](/public/screenshots/img4.png "RepoSection Component")

######ErrorPage Component
* Invalid users will result in the `ErrorPage` component to appear

![alt text](/public/screenshots/img5.png "Error Component")

## Running the tests

1. `yarn test` to begin unit testing
2. `yarn test --coverage` to look at coverage of unit testing

## Deployment

The deployment steps will involve setups with heroku and travis for CI. Have both heroku and travis account ready

1. Create a buildpack `heroku create -b https://github.com/mars/create-react-app-buildpack.git`
2. Create a `travis.yml` file with the follwing contents (Identation matters)
```
language: node_js
node_js:
- '9'
cache:
  directories:
  - node_modules
script:
- yarn test
- yarn build
deploy:
  provider: heroku
  app: mighty-sierra-74080
  on:
    repo: yaminmhd/github-react-finder
```
3. Commit and push file
* `git add.`
* `git commit -m 'Added travis.yml file'`
* `git push`

4. Create encrypted key
* `cd` in to project directory
* Type `travis encrypt $(heroku auth:token) --add deploy.api_key`
* This will add an encrpyed key to the `travis.yml` file in your project directory

5. Enable the repo in travis CI
* The CI will run everytime you push to Github

![alt text](/public/screenshots/img6.png "travis")

6. Enable automatic deployment once CI passes
* Under the deployment tab in your heroku dashboard
* Connect your heroku application to your github repo
* Check the `Wait for CI to pass before deploy`
* Finally click on the `Enable Automatic Deploys`

![alt text](/public/screenshots/img7.png "heroku")

## Built With

* [create-react-app](https://github.com/facebook/create-react-app) - The web framework used
* [bootstrap](https://github.com/twbs/bootstrap) - For overall application styling
* [bootswatch](https://github.com/thomaspark/bootswatch/) - Bootstrap theme
* [reactstrap](https://github.com/reactstrap/reactstrap) - Usage of reactstrap for the purpose of navbar
* [font-awesome](https://github.com/FortAwesome/Font-Awesome) - Usage of fonts

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

* **Yamin** - *Initial work*

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details