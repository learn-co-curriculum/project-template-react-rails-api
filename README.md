# Reserve, Set, Play
## A project by Lucy, Allie, and Nicola

## Requirements
  - Use a Rails API backend with a React frontend.
  - Have at least three models on the backend, that include:
      -at least one one-to-many relationship
      -at least one many-to-many relationship
      -full CRUD actions for at least one resource
  - Have at least three different client-side routes using React Router. Be sure to include a nav bar or other UI element that allows users to navigate between routes.
  - Implement authentication/authorization, including password protection. A user should be able to log in to the site with a secure password and stay logged in via user ID in the session hash.

## Problem statement
 - People want to play sports (pickleball, and others), but it can be hard to find a place to play! We would like to connect recreation centers with players so that everyone can have a good time and stay active!

## User stories
As a player, I can:
  - view availability at rec centers by day, so that I can make plans to play!
  - find a rec center, where I could play in t he future
  - sign up to Reserve, Set, Play, so that I can use their services for booking at rec centers
  - log in to Reserve, Set, Play, so that I can manage my existing reservations
  - book an available timeslot, so that I have a reserved spot to play
  - view my existing reservations, so I know when I'm next playing!
  - cancel an existing reservation, so that the rec center knows I don't plan to attend and someone else can take my spot
  - change an existing reservation, so that I can play another time and release the spot I previously held
  - logout, so that no one else can make reservations from my account 😈

As an admin, I can:
  - login to Reserve, Set, Play, so that I can manage bookings at my rec centers
  - view a calendar of availability per rec center that I manage
  - add new resources (courts, fields etc) to the rec centers that I manage
  - remove existing resources so that they can't be booked in the future
  - close availability on specific resources, so that they can't be booked at set times (eg. closing a specific court for maintenance) 
  - open availability on specific resources, so that if they're available again players can book them
  - logout, so that no one else can make changes to the rec centers that I manage 😈

## Wireframes
<iframe width="768" height="432" src="https://miro.com/app/live-embed/uXjVOx-l11w=/?moveToViewport=-4273,-643,4055,2151&embedId=734974391965" frameborder="0" scrolling="no" allowfullscreen></iframe>