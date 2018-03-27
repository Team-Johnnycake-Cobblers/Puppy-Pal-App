// TODO set up routing to back end

var db = require("../models");

module.exports = {
    findAllPuppies: function (req, res) {
        db.puppies.findAll({})
            .then(function (dbpuppies) {
                res.json(dbpuppies);
            });
    },
    findOnePuppy: function (req, res) {
        db.puppies.findOne({
            where: {
                id: req.params.id
            }
        })
            .then(function (dbpuppies) {
                res.json(dbpuppies);
            });
    },
    postPuppy: function (req, res) {
        console.log(req.body);
        db.puppies.create({
            // Insert model info here
        })
            .then(function (dbpuppies) {
                res.json(dbpuppies);
            });
    },
    deletePuppy: function (req, res) {
        db.puppies.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(function (dbpuppies) {
                res.json(dbpuppies);
            });
    },
    changePuppy: function (req, res) {
        db.puppies.update(req.body,
            {
                where: {
                    id: req.body.id
                }
            })
            .then(function (dbpuppies) {
                res.json(dbpuppies);
            });
    }
};