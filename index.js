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
  searches: { [findOrganisationSearch.key]: findOrganisationSearch },
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
