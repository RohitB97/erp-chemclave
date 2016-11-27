'use strict';

import mongoose from 'mongoose';

var PendinguserSchema = new mongoose.Schema({
  name: String,
  department: String,
  role: String,
  email: String,
  password: String
});

export default mongoose.model('Pendinguser', PendinguserSchema);
