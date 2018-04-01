const Nightmare = require('nightmare')
const assert = require('assert')

describe('Load a Page', function () {
  // Recommended: 5s locally, 10s to remote server, 30s from airplane ¯\_(ツ)_/¯
  this.timeout('30s')

  let nightmare = null
  beforeEach(() => {
    nightmare = new Nightmare()
  })

  describe('home', () => {
    it('should load without error', done => {
      nightmare.goto('http://localhost:3000/')
        .end()
        .then(function (result) { done() })
        .catch(done)
    })
  })
  describe('gallery', () => {
    it('should load without error', done => {
      nightmare.goto('http://localhost:3000/puppies')
        .end()
        .then(function (result) { done() })
        .catch(done)
    })
  })
  describe('adopt', () => {
    it('should load without error', done => {
      nightmare.goto('http://localhost:3000/adopt')
        .end()
        .then(function (result) { done() })
        .catch(done)
    })
  })
  describe('form', () => {
    it('should load without error', done => {
      nightmare.goto('http://localhost:3000/shelter')
        .end()
        .then(function (result) { done() })
        .catch(done)
    })
  })
  describe('search and delete', () => {
    it('should load without error', done => {
      nightmare.goto('http://localhost:3000/search')
        .end()
        .then(function (result) { done() })
        .catch(done)
    })
  })
})

describe('User pages', function () {
  this.timeout('60s')

  let nightmare = null
  nightmare = new Nightmare({ show: true })

  describe('find a dog', () => {
    it('should work without timing out', done => {
      nightmare
        .goto('http://localhost:3000/')
        .wait(2000)
        .click('#button1')
        .wait(1000)
        .click('#next')
        .wait(1000)
        .click('#next')
        .wait(1000)
        .click('#previous')
        .wait(1000)
        .click('button')
        .wait(1000)
        .scrollTo(100, 50)
        .wait(2000)
        .end()
        .then(result => { done() })
        .catch(done)
    })
  })
})

describe('User pages', function () {
  this.timeout('60s')

  let nightmare = null
  nightmare = new Nightmare({ show: true })

  describe('shelter page', () => {
    it('should work without timing out', done => {
      nightmare
        .goto('http://localhost:3000/')
        .wait(2000)
        .click('.goToShelter')
        .wait(2000)
      
        // TODO write code to submit form
      
        .end()
        .then(result => { done() })
        .catch(done)
    })
  })
})

// TODO write code to delete entered form data