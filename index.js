
// You'll want to set these with either `CLIENT_ID=abc zapier test` or `zapier env 1.0.0 CLIENT_ID abc`
process.env.BASE_URL =
  process.env.BASE_URL || 'https://auth-json-server.zapier-staging.com';
process.env.CLIENT_ID = process.env.CLIENT_ID || '1234';
process.env.CLIENT_SECRET = process.env.CLIENT_SECRET || 'asdf';

const authentication = require('./authentication');
const organisationUpdateTrigger = require('./triggers/organisation_update.js');
// const opportunityUpdateTrigger = require('./triggers/opportunity_update.js');
// const createOpportunityCreate = require('./creates/create_opportunity.js');

//  creates: {
//    [createOpportunityCreate.key]: createOpportunityCreate,
//    [createOrganisationCreate.key]: createOrganisationCreate
//  },

 // triggers: {
 //   [organisationUpdateTrigger.key]: organisationUpdateTrigger,
 //   [opportunityUpdateTrigger.key]: opportunityUpdateTrigger
 // },

const createOrganisationCreate = require('./creates/create_organisation.js');
const findOrganisationSearch = require('./searches/find_organisation.js');

module.exports = {
  creates: {
    [createOrganisationCreate.key]: createOrganisationCreate
  },
  searches: { 
    [findOrganisationSearch.key]: findOrganisationSearch 
  },
  triggers: {
    [organisationUpdateTrigger.key]: organisationUpdateTrigger
  },
  authentication: authentication,
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,
  searchOrCreates: {
    find_organisation: {
      search: 'find_organisation',
      create: 'create_organisation',
      key: 'find_organisation',
      display: {
        description:
          'Creates an organisation or updates the existing record, based on email address.',
        label: 'Find or Create Organisation'
      }
    }
  }
};
