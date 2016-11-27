'use strict';

import mongoose from 'mongoose';

var EventSchema = new mongoose.Schema({
  name: String,
  problem_statement: String,
  event_info: String,
  registrations: Array,
  active: {
  	type: Boolean,
  	default: false
  }
});

export default mongoose.model('Event', EventSchema);
