# Paws&Claws Pet Rescue- Flatiron Phase 5 Full Stack Project

# User Stories
As an unregistered user, I should be able to:
- see the landing page and all of the adoptable animals
- apply to adopt a pet after I create a user account

As an Applicant, I should be able to:
- apply to adopt a pet (CREATE)
- see the status of my pet adoption application (READ)
- apply to adopt more than 1 pet (CREATE)
  *bonus*
  - see scheduled meetups with fosters or rescue admins (READ)

As a Foster, I should be able to:
- edit a pet's profile (UPDATE)
- foster many pets
  *bonus*
  - add/see scheduled meetups with applicants or rescue admins (CREATE/READ)

As a Rescue Admin, I should be able to:
- add/edit/delete a pet, foster, applicant, and applications (CREATE/READ/UPDATE/DELETE)
- add a pet to a foster's profile (UPDATE)
  *bonus*
  - add scheduled meetups with fosters or applicants and see all meetups (CREATE/READ)

*Bonus Deliverable*
- dark mode
- mobile compatibility
- document management
- volunteer management

# Backend - ERD
<img width="824" alt="PawsClawsERD" src="https://user-images.githubusercontent.com/46327683/151859468-6030a28a-6ae3-4378-a73e-ab92d7b57853.png">


# Frontend - Wireframe
## Non-registered User
- Landing page
<img width="555" alt="NonRegUser_Landing" src="https://user-images.githubusercontent.com/46327683/151857214-0ebf115c-5ec1-4214-9d86-af3aace14f00.png">

- Adoptable page
<img width="555" alt="NonRegUser_Adopables" src="https://user-images.githubusercontent.com/46327683/151857295-f6784432-7977-46ab-9803-b84a6c92ad12.png">

- User registration page
<img width="555" alt="NonRegUser_Register" src="https://user-images.githubusercontent.com/46327683/151857433-8512126a-889e-4009-9860-6ddf3e2140d1.png">


## Applicant
- Landing page
<img width="555" alt="Applicant_Landing" src="https://user-images.githubusercontent.com/46327683/151857662-d4f3fffb-2908-430d-ad90-f8990c0680da.png">

- Application status page
<img width="555" alt="Applicant_AppStatus" src="https://user-images.githubusercontent.com/46327683/151857728-244361b1-91d0-4c7b-8ba4-28185ebcbe0a.png">

- Meetup view page
<img width="555" alt="Applicant_meetups" src="https://user-images.githubusercontent.com/46327683/151857814-f102c8b3-236d-4188-a1e0-c65e281f4b77.png">

## Foster
- Foster dashboard page
<img width="555" alt="Foster_Dashboard" src="https://user-images.githubusercontent.com/46327683/151858405-f9244ea3-1b2b-40fc-8896-ac083732f3eb.png">

- Foster pet profile edit page
<img width="493" alt="Foster_EditPet" src="https://user-images.githubusercontent.com/46327683/151859187-94a84613-1982-4c3c-8476-2bc23aeee4c0.png">

- Foster meetup form page
<img width="555" alt="Foster_MeetupForm" src="https://user-images.githubusercontent.com/46327683/151859718-702b1c2c-2f02-49b5-886d-e92d43dcf21a.png">


## Rescue Admin
- Admin dashboard page
<img width="555" alt="Admin_Dashboard" src="https://user-images.githubusercontent.com/46327683/151867414-6269fba6-6e2c-4ea1-a254-15e0a807c7aa.png">


# Phase 5 Project Guidelines

It is time. Your final project for this course. This is the capstone project
that you'll be showing off to demonstrate all the things that you've learned so
far. This is awesome.

Before we dive into what your project is going to be about, we need to establish
some ground rules.

## Final Project

This is the time to dive into React libraries you've gotten interested in, or
play with APIs that would have taken too long to figure out during a shorter
project week. This is the time to make the app that you've always wanted but
never had, write up a bunch of custom CSS, and really put your skills on
display.

Because we're asking you to show off a specific set of skills, we have some
requirements. It should be obvious that one of the requirements is that you need
to use the things that you learned during this course. This isn't the time to
build a game with Unity or explore the MEAN stack or try and whip up a React
Native app. You've done a ton of learning already — it's time to apply all of
that knowledge.

## Project Requirements

The listed requirements below are guidelines that should help you to determine
what the complexity of your project should be. They are not hard and fast rules,
and final project approval is up to your leads and SECs, who will be acting as
project managers.

### Backend

Your project must use a non-trivial Rails backend. Consult the following list
for examples of things to include. You do not need to include all of these
things, and the final decision of what must be included will be up to your
project managers.

- [ ] Auth
- [ ] Tests
- [ ] Multiple has_many_through relationships
- [ ] Seeds from a complex data set
- [ ] Custom routes
- [ ] Custom controller/model methods
- [ ] Basic database query optimizations
- [ ] Background jobs for slow actions
- [ ] Sockets or email integration
- [ ] One significant refactor
- [ ] Validation

### Frontend

Your product must use a React based frontend. Consult the following list for
examples of things to include. You do not need to include all of these things,
and the final decision of what must be included will be up to your project
manager (your instructor).

- [ ] Auth
- [ ] Tests
- [ ] Interacting with a complex API
- [ ] Redux
- [ ] Custom CSS
- [ ] One significant refactor

## Helpful Tools

### Organization

- **Kanban/Scrum Board**: Because this will be the most complex project you've
made during this course, you'll need something to keep you organized. We
recommend Trello or a Github Project Board. Use this to track what you're doing
and what you need to work on. It's also a great idea to keep track of bugs that
you're not going to immediately fix.

- **Pomodoro Timer**: If you don't take breaks, you'll end up hurting your eyes,
getting RSI (repetitive strain injury) or burning yourself out. The Pomodoro
Timer method lets you put in solid chunks of work while also giving you regular
breaks. We like Marinara Timer, since it's nicely customizable.

## Resources

- [Google Fonts](https://fonts.google.com/) — An amazing resource for fonts of all types
- [Grid Garden](https://cssgridgarden.com/) / [Flexbox Froggy](https://flexboxfroggy.com/) — Great for getting familiar with Grid and Flexbox
- [CSS Tricks](https://css-tricks.com/) — Learn yourself some sweet CSS
- [Semantic UI React](https://react.semantic-ui.com/) / [ReactStrap](https://reactstrap.github.io/) — CSS styling using React components
- [Postman](https://www.getpostman.com/) — Test your backend without having to build out a frontend
- [Heroku](https://www.heroku.com/) — Simple, free hosting for your site
- [App Ideas](https://medium.com/better-programming/https-medium-com-sylwiavargas-37-app-ideas-for-bootcamp-students-code-newbies-5000f4b6dba9?) — some ideas for non-standard apps
- How to hide API keys in
  [Javascript](https://geodoo.work/hide-secure-api-keys-created-app-create-react-app/)
  /
  [Ruby](https://blog.arkency.com/2017/07/how-to-safely-store-api-keys-in-rails-apps/)
  | [option 2](https://github.com/laserlemon/figaro)
