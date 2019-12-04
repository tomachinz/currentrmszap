module.exports = {
  test: {
    url: 'https://api.current-rms.com/api/v1/members',
    removeMissingValuesFrom: {},
    params: {
      client_secret: '{{bundle.authData.client_secret}}',
      apikey: '{{bundle.authData.api_key}}',
      subdomain: '{{bundle.authData.subdomain}}'
    },
    method: 'GET',
    headers: {
      'X-AUTH-TOKEN': 'Bearer {{bundle.authData.access_token}}',
      'X-API-KEY': '{{bundle.authData.api_key}}',
      'X-CLIENT-ID': '{{bundle.authData.client_id}}',
      'X-SUBDOMAIN': '{{bundle.authData.subdomain}}',
      'X-CLIENT-SECRET': '{{bundle.authData.client_secret}}',
      Authorization: 'Bearer {{bundle.authData.access_token}}'
    }
  },
  fields: [
    {
      computed: false,
      default: 'YOUR_SUBDOMAIN',
      required: true,
      label: 'Current RMS Subdomain',
      helpText:
        'Your Current RMS sub-domain is the first part of the domain you use to login to Current RMS. [How to login to Current RMS](https://app.current-rms.com/forgotten_domain)',
      key: 'subdomain',
      type: 'string'
    },
    {
      computed: false,
      default: 'CURRENT_CLIENT_ID',
      required: true,
      label: 'Current Client ID',
      helpText:
        'To use OAuth2 authentication you will first need to create a Custom Application to generate a Client ID and Secret. You can manage your Custom OAuth2 Applications from within the API Integration setup of Current RMS by clicking through System Setup > Integrations > API > Create Custom Application.  [How to login to Current RMS](https://app.current-rms.com/forgotten_domain) ',
      key: 'client_id',
      type: 'string'
    },
    {
      computed: false,
      default: 'YOUR_CLIENT_SECRET',
      required: true,
      label: 'Current Client Secret',
      helpText: 'Your Client Secret from Current RMS, found alongside Client ID in system integrations. [How to login to Current RMS](https://app.current-rms.com/forgotten_domain)',
      key: 'client_secret',
      type: 'string'
    }
  ],
  oauth2Config: {
    authorizeUrl: {
      source:
        'const url = `https://${bundle.inputData.subdomain}.current-rms.com/oauth2/authorize`;\n\nreturn url;'
    },
    refreshAccessToken: {
      source:
        "const options = {\n  url: `https://${bundle.inputData.subdomain}.current-rms.com/oauth2/token`,\n  method: 'POST',\n  headers: {\n    'CLIENT_SECRET': process.env.CLIENT_SECRET,\n    'content-type': 'application/x-www-form-urlencoded',\n    'accept': 'application/json',\n    'CLIENT_ID': process.env.CLIENT_ID\n  },\n  body: {\n    'grant_type': 'refresh_token',\n    'refresh_token': bundle.authData.refresh_token\n  }\n}\n\nreturn z.request(options)\n  .then((response) => {\n    response.throwForStatus();\n    const results = z.JSON.parse(response.content);\n\n    // You can do any parsing you need for results here before returning them\n\n    return results;\n  });"
    },
    scope: '',
    autoRefresh: true,
    getAccessToken: {
      source:
        "const options = {\n  url: `https://${bundle.inputData.subdomain}.current-rms.com/oauth2/token`,\n  method: 'POST',\n  headers: {\n    'CLIENT_SECRET': process.env.CLIENT_SECRET,\n    'content-type': 'application/x-www-form-urlencoded',\n    'CLIENT_ID': process.env.CLIENT_ID,\n    'accept': 'application/json',\n  },\n  body: {\n    'redirect_uri': bundle.inputData.redirect_uri,\n    'client_secret': process.env.CLIENT_SECRET,\n    'code': bundle.inputData.code,\n    'client_id': process.env.CLIENT_ID,\n    'grant_type': 'authorization_code'\n  }\n}\n\nreturn z.request(options)\n  .then((response) => {\n    response.throwForStatus();\n    const results = z.JSON.parse(response.content);\n\n    // You can do any parsing you need for results here before returning them\n\n    return results;\n  });"
    }
  },
  type: 'oauth2',
  connectionLabel: '{{bundle.authData.subdomain}} Extra-Friendly connection'
};
