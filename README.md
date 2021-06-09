# Project Template: React/Rails API

## Description

This project is scaffolded so that you can build a React frontend
and Rails backend together, and easily deploy them to Heroku.

## Requirements

- Ruby 2.7.3
- NodeJS (v14 or higher), and npm
- Heroku CLI
- Postgresql

See [Environment Setup](#environment-setup) for instructions on installing these
tools if you don't already have them.

## Setup

**Fork and clone this repository**.

Then run:

```sh
bundle install
rails db:create
npm install --prefix client
```

You can use the following commands to run the application:

- `rails s`: run the backend on [http://localhost:3000](http://localhost:3000)
- `npm start --prefix client`: run the frontend on
  [http://localhost:4000](http://localhost:4000)
- `rails start`: run the frontend and backend together with one command

Make sure to also update this README to include documentation about
your project. Here's a list of some [awesome readmes][] for inspiration.

## Deploying

This application has all the starter code needed to help you deploy your
application to Heroku. It's recommended to deploy your project early and push up
changes often to ensure that your code works equally well in production and
development environments.

To deploy, first login to your Heroku account using the Heroku CLI:

```sh
heroku login
```

Create new Heroku app:

```sh
heroku create my-app-name
```

Add build for Heroku to run Rails app on Ruby and build the React app on Node:

```sh
heroku buildpacks:add heroku/nodejs --index 1
heroku buildpacks:add heroku/ruby --index 2
```

To deploy, commit your code and push the changes to Heroku:

```sh
git add .
git commit -m 'Commit message'
git push heroku main
```

> Note: depending on your Git configuration, your default branch might be named
> `master` or `main`. You can verify which by running
> `git branch --show-current`. If it's `master`, you'll need to run
> `git push heroku master` instead.

Any time you have changes to deploy, just make sure your changes are committed
on the main branch of your repo, and push those changes to Heroku to deploy
them.

You can view your deployed app with:

```sh
heroku open
```

## Environment Setup

### Ruby

Ensure you are running the
[latest Ruby release supported by Heroku][heroku ruby]. At the time of writing,
that's `2.7.3`. You can verify with:

```sh
ruby -v
```

If you don't see `2.7.3`, you can install it and set it as the default version:

```sh
rvm install 2.7.3
rvm --default use 2.7.3
```

You should also install the latest version of `bundler` and `rails`:

```sh
gem install bundler
gem install rails
```

[heroku ruby]: https://devcenter.heroku.com/articles/ruby-support#supported-runtimes

### Install NodeJS

Verify you are running a recent version of Node with:

```sh
node -v
```

If your Node version is less than 14, update it with:

```sh
nvm install node
```

You can also update your npm version with:

```sh
npm i -g npm
```

### Install the Heroku CLI

Follow this guide to install Heroku CLI (if you don't already have it):

- [https://devcenter.heroku.com/articles/heroku-cli#download-and-install](https://devcenter.heroku.com/articles/heroku-cli#download-and-install)

### Install Postgresql

Heroku requires that you use Postgresql for your database instead of SQLite.
Postgresql (or just Postgres for short) is an advanced database management
system with more features than SQLite. If you don't already have it installed,
you'll need to set it up.

To install Postgres for WSL, follow this guide:

- [https://docs.microsoft.com/en-us/windows/wsl/tutorials/wsl-database#install-postgresql][postgresql wsl]

To install Postgres for OSX, you can use Homebrew:

```sh
brew install postgresql
```

[postgresql wsl]: https://docs.microsoft.com/en-us/windows/wsl/tutorials/wsl-database#install-postgresql
