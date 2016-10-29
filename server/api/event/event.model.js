'use strict';

import mongoose from 'mongoose';

var EventSchema = new mongoose.Schema({
  name: String,
  problem_statement: String,
  event_info: String,
  registrations: Array,
  active: Boolean
});

export default mongoose.model('Event', EventSchema);
