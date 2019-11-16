module.exports = {
  operation: {
    perform: {
      body: {
        date: '{{bundle.inputData.date}}',
        items: '{{bundle.inputData.items}}',
        organisation: '{{bundle.inputData.organisation}}',
        subject: '{{bundle.inputData.subject}}'
      },
      url: 'https://api.current-rms.com/api/v1/opportunities',
      removeMissingValuesFrom: {},
      headers: {
        Accept: 'application/json',
        'X-CLIENT-ID': '{{bundle.authData.client_id}}',
        'X-SUBDOMAIN': '{{bundle.authData.subdomain}}',
        'X-CLIENT-SECRET': '{{bundle.authData.client_secret}}',
        'Content-Type': 'application/json',
        Authorization: 'Bearer {{bundle.authData.access_token}}'
      },
      params: {},
      method: 'POST'
    },
    inputFields: [
      {
        default: 'Quote for PA system - Testing Festival',
        required: true,
        list: false,
        label: 'Opportunity Subject',
        helpText: 'Text for the subject line of the new opportunity',
        key: 'subject',
        type: 'string',
        altersDynamicFields: false
      },
      {
        required: false,
        list: false,
        label: 'Start Date',
        helpText: 'The date for the new opportunity',
        key: 'date',
        type: 'datetime',
        altersDynamicFields: false
      },
      {
        default: 'The Festival of Testing',
        required: false,
        list: false,
        label: 'Organisation',
        helpText: 'Name of the new or existing organisation',
        key: 'organisation',
        type: 'string',
        altersDynamicFields: false
      },
      {
        required: true,
        list: false,
        label: 'Quote Items',
        helpText: 'A chunk of text that shows the opportunity',
        key: 'items',
        type: 'text',
        altersDynamicFields: false
      }
    ]
  },
  noun: 'Opportunity',
  display: {
    hidden: false,
    important: true,
    description: 'Creates an draft opportunity in Current RMS',
    label: 'Create Opportunity'
  },
  key: 'create_opportunity'
};
