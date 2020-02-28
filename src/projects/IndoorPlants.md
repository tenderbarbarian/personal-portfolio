---
layout: page
title: 'IndoorPlants App'
demo: 'https://indoorplants.herokuapp.com/'
code: 'https://github.com/tenderbarbarian/indoorplants'
description: 'REST-ful CRUD hosted on Heroku. Stores data in MongoDB hosted by MongoLab'
tech: [ "Javascript", "Express", "NodeJS", "MongoDB", "Bootstrap"]
date: '2019-10-15'
featuredImage: "./indoorplants.jpg"
---
 <!-- iframe: 'https://www.youtube.com/embed/dQw4w9WgXcQ' -->

__Table of content:__
<!-- TOC -->

- [What is it?](#what-is-it)
- [Core technologies](#core-technologies)
- [Main features](#main-features)
    - [API Endpoints](#api-endpoints)
- [Backend](#backend)

<!-- /TOC -->
![IndoorPlants](./indoorplants.jpg)

## What is it?

IndoorPlants is a web app for plants enthusiasts, to keep track and discuss their favourite species. It has typical CRUD functionality and follows REST-ful convention.

## Core technologies
<p>
    <img src="https://img.shields.io/badge/backend-NodeJS-bluegreen?style=flat&logo=Nodejs" />
    <img src="https://img.shields.io/badge/server-Express-green?style=flat&logo=Express" />
    <img src="https://img.shields.io/badge/database-MongoDB-darkgreen?style=flat&logo=MongoDB" />
    <img src="https://img.shields.io/badge/package--manager-Npm-darkred?style=flat&logo=npm" />
    <img src="https://img.shields.io/badge/styling-Bootstrap-navy?style=flat&logo=Bootstrap" />
    <img src="https://img.shields.io/badge/deployment-Heroku-lightblue?style=flat&logo=Heroku" />
    <img src="https://img.shields.io/badge/versioning-Git-red?style=flat&logo=Git" />
</p>

## Main features

* Responsive design with __Bootstrap 4__
* __Authentication__: only logged in users can create a new plant and leave a comment
* __Authorization__: only the user that created a comment can edit & delete it; only the user that created a given plant can edit or delete it
* Editable __comments__ (CRUD: create, edit and delete a comment)
* __CRUD__: create, list(read), update and delete a plant post
* Follows REST-ful convention

### API Endpoints
Endpoints | Functionality
------------ | -------------
POST /register | Register a new user
POST /login | Sign in a user
GET /plants | Fetch all plants
GET /plants/new | Create a new plant
GET /plants/`<Id>`/edit| Fetch individual plant
PUT /plants/`<Id>` | Modify a plant
DELETE /plants/`<Id>` | Delete a plant
GET /plants/`<Id>`/comments/`<CommentID>`/edit | Modify a comment on a plant
GET /plants/`<Id>`/comments/`<CommentID>`/new | Create a new comment on a plant
DELETE /plants/`<Id>`/comments/`<CommentID>` | Remove a comment

## Backend

- `PassportJS` for authentication
- `MongoDB` for storing data
- `Node.js` and `ejs` view engine for SSR
- `Express.js` for routing and flash messages and sessions
- own middleware for authorisation
- `Git` & `GitHub` for version control
- `Heroku` for deployment


<!-- ![IndoorPlants](./indoorplants2.jpg)
![IndoorPlants](./indoorplants3.jpg)
![IndoorPlants](./indoorplants4.jpg)
![IndoorPlants](./indoorplants5.jpg)
![IndoorPlants](./indoorplants6.jpg)
![IndoorPlants](./indoorplants7.jpg) -->

And we are done!
