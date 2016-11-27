/**
 * Pendinguser model events
 */

'use strict';

import {EventEmitter} from 'events';
import Pendinguser from './pendinguser.model';
var PendinguserEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
PendinguserEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Pendinguser.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    PendinguserEvents.emit(event + ':' + doc._id, doc);
    PendinguserEvents.emit(event, doc);
  }
}

export default PendinguserEvents;
