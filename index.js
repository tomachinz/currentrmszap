const authentication = require('./authentication');
const organisationUpdateTrigger = require('./triggers/organisation_update.js');
const opportunityUpdateTrigger = require('./triggers/opportunity_update.js');
const createOpportunityCreate = require('./creates/create_opportunity.js');
const createOrganisationCreate = require('./creates/create_organisation.js');
const findOrganisationSearch = require('./searches/find_organisation.js');

module.exports = {
  searches: { [findOrganisationSearch.key]: findOrganisationSearch },
  triggers: {
    [organisationUpdateTrigger.key]: organisationUpdateTrigger,
    [opportunityUpdateTrigger.key]: opportunityUpdateTrigger
  },
  creates: {
    [createOpportunityCreate.key]: createOpportunityCreate,
    [createOrganisationCreate.key]: createOrganisationCreate
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
          'Will create an organisation if none found, and just use existing record if found based on email address, and set tags. Name of organisation will be taken from a WooCommerce field chosen by user.',
        label: 'Find or Create Organisation'
      }
    }
  }
};
