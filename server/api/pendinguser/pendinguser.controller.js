/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/pendingusers              ->  index
 * POST    /api/pendingusers              ->  create
 * GET     /api/pendingusers/:id          ->  show
 * PUT     /api/pendingusers/:id          ->  update
 * DELETE  /api/pendingusers/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Pendinguser from './pendinguser.model';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.save()
      .then(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.remove()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Pendingusers
export function index(req, res) {
  return Pendinguser.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Pendinguser from the DB
export function show(req, res) {
  return Pendinguser.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Pendinguser in the DB
export function create(req, res) {
  return Pendinguser.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Pendinguser in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return Pendinguser.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Pendinguser from the DB
export function destroy(req, res) {
  return Pendinguser.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
