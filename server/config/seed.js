/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';

User.create({
      provider: 'local',
      role: 'admin',
      name: 'Web Admin',
      email: 'admin@chemclave.org',
      password: 'y7uy7uy7u'
    })
    .then(() => {
      console.log('populated database');
    });


