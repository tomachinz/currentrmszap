const perform = (z, bundle) => {
  const options = {
    url: `https://api.current-rms.com/api/v1/members?q[emails_address_eq]=${
      bundle.inputData.email
    }`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${bundle.authData.access_token}`,
      'X-SUBDOMAIN': bundle.authData.subdomain,
      'X-APIKEY': bundle.authData.apikey
    },
    body: {}
  };

  return z.request(options).then(response => {
    response.throwForStatus();
    const results = z.JSON.parse(response.content);

    // You can do any parsing you need for results here before returning them

    return results.channels;
  });
};

module.exports = {
  operation: {
    perform: perform,
    inputFields: [
      {
        default: 'email',
        required: true,
        list: false,
        label: 'Email',
        helpText:
          'You should leave this set as "email" for this step. This is the field containing the email which the Zap will use to search Current RMS',
        key: 'email',
        type: 'string',
        altersDynamicFields: false
      }
    ],
    sample: {
      meta: { total_row_count: 3, row_count: 3, page: 1, per_page: 20 },
      members: [
        {
          addresses: [],
          links: [],
          locale: 'en-GB',
          phones: [
            {
              number: '0212345678',
              phone_type_name: 'Work',
              id: 187100,
              type_id: 6001
            }
          ],
          purchase_tax_class_name: 'Default',
          updated_at: '2019-08-23T04:41:29.908Z',
          sale_tax_class_name: 'Default',
          child_members: [],
          lawful_basis_type_id: 11006,
          id: 205100,
          custom_fields: {},
          bookable: false,
          'icon_exists?': false,
          uuid: '12a27ed0-a68e-0135-c973-125cc0dc331b',
          location_type: 1,
          service_stock_levels: [],
          hour_cost: '0.0',
          membership_type: 'Organisation',
          description: '',
          lawful_basis_type_name: 'Unknown',
          membership: {
            rating: 0,
            price_category_id: null,
            invoice_term: null,
            discount_category_id: null,
            invoice_term_length: 0,
            cash: false,
            tax_class_id: 1,
            number: '',
            on_stop: false,
            owned_by: 1,
            tax_number: '',
            id: 205000
          },
          flat_rate_cost: '0.0',
          active: true,
          emails: [
            {
              email_type_name: 'Work',
              address: 'testarosa@testing-festival.co.nz',
              id: 148900,
              type_id: 4001
            }
          ],
          identity: null,
          icon: null,
          name: 'The Festival Of Testing',
          distance_cost: '0.0',
          day_cost: '0.0',
          purchase_tax_class_id: 1,
          membership_id: 205000,
          sale_tax_class_id: 1,
          parent_members: [],
          primary_address: {
            city: '',
            name: 'Rosa Testa',
            type_id: 3001,
            country: {
              eu_member: false,
              code: 'NZ',
              name: 'New Zealand',
              created_at: '2014-06-03T08:30:48.778Z',
              updated_at: '2014-06-03T08:30:48.778Z',
              has_state_tax: false,
              id: 16700,
              currency_code: 'NZD'
            },
            created_at: '2017-11-08T08:38:09.401Z',
            country_id: 16700,
            updated_at: '2017-11-08T08:38:09.401Z',
            county: '',
            street: '',
            postcode: '',
            country_name: 'New Zealand',
            id: 205200,
            address_type_name: 'Primary'
          },
          tag_list: [],
          created_at: '2017-11-08T08:38:09.397Z'
        },
        {
          addresses: [],
          links: [],
          locale: 'en-GB',
          phones: [
            {
              number: '0212345678',
              phone_type_name: 'Work',
              id: 141900,
              type_id: 6001
            }
          ],
          purchase_tax_class_name: 'Default',
          updated_at: '2017-11-08T08:38:19.974Z',
          sale_tax_class_name: 'Default',
          child_members: [
            {
              related_type: 'Member',
              related_id: 291900,
              related_membership_type: 'Contact',
              relatable_membership_type: 'Organisation',
              relatable_type: 'Member',
              related_name: 'Rosa Testa',
              relatable_name: 'The Festival of Testing',
              relatable_id: 262500,
              id: 2300
            }
          ],
          lawful_basis_type_id: 11006,
          id: 262500,
          custom_fields: {},
          bookable: false,
          'icon_exists?': false,
          uuid: '18f0ebe0-a68e-0135-e975-125cc0dc331b',
          location_type: 1,
          service_stock_levels: [],
          hour_cost: '0.0',
          membership_type: 'Organisation',
          description: '',
          lawful_basis_type_name: 'Unknown',
          membership: {
            rating: 0,
            price_category_id: null,
            invoice_term: null,
            discount_category_id: null,
            invoice_term_length: 0,
            cash: false,
            tax_class_id: 1,
            number: '',
            on_stop: false,
            owned_by: 1,
            tax_number: '',
            id: 262400
          },
          flat_rate_cost: '0.0',
          active: true,
          emails: [
            {
              email_type_name: 'Work',
              address: 'test@testing-festival.co.nz',
              id: 193700,
              type_id: 400100
            }
          ],
          identity: null,
          icon: null,
          name: 'The Festival of Testing',
          distance_cost: '0.0',
          day_cost: '0.0',
          purchase_tax_class_id: 1,
          membership_id: 2624,
          sale_tax_class_id: 1,
          parent_members: [],
          primary_address: {
            city: '',
            name: 'The Festival of Testing',
            type_id: 3001,
            country: {
              eu_member: false,
              code: 'NZ',
              name: 'New Zealand',
              created_at: '2014-06-03T08:30:48.778Z',
              updated_at: '2014-06-03T08:30:48.778Z',
              has_state_tax: false,
              id: 16700,
              currency_code: 'NZD'
            },
            created_at: '2017-11-08T08:38:19.976Z',
            country_id: 167,
            updated_at: '2017-11-08T08:38:19.976Z',
            county: '',
            street: '',
            postcode: '',
            country_name: 'New Zealand',
            id: 262600,
            address_type_name: 'Primary'
          },
          tag_list: [],
          created_at: '2017-11-08T08:38:19.974Z'
        },
        {
          addresses: [],
          links: [
            {
              link_type_name: 'Website',
              address: 'testing-festival.co.nz/',
              id: 4700,
              type_id: 5001
            }
          ],
          locale: 'en-GB',
          phones: [
            {
              number: '+64 21 234 56798',
              phone_type_name: 'Work',
              id: 234000,
              type_id: 6001
            }
          ],
          purchase_tax_class_name: 'Default',
          updated_at: '2019-01-21T23:31:36.924Z',
          sale_tax_class_name: 'Default',
          child_members: [
            {
              related_type: 'Member',
              related_id: 403700,
              related_membership_type: 'Contact',
              relatable_membership_type: 'Organisation',
              relatable_type: 'Member',
              related_name: 'Manu Testing',
              relatable_name: '450rpm Tests',
              relatable_id: 403800,
              id: 69400
            }
          ],
          lawful_basis_type_id: 11001,
          id: 403800,
          custom_fields: {},
          bookable: false,
          'icon_exists?': false,
          uuid: '9e89ddd0-0002-0137-ddda-0a9ca217e95b',
          location_type: 1,
          service_stock_levels: [],
          hour_cost: '0.0',
          membership_type: 'Organisation',
          description: '',
          lawful_basis_type_name: 'Legitimate interest - prospect/lead',
          membership: {
            rating: 0,
            price_category_id: null,
            invoice_term: null,
            discount_category_id: null,
            invoice_term_length: 0,
            cash: false,
            tax_class_id: 1,
            number: '',
            on_stop: false,
            owned_by: 1,
            tax_number: '',
            id: 351500
          },
          flat_rate_cost: '0.0',
          active: true,
          emails: [
            {
              email_type_name: 'Work',
              address: 'manu@testing-festival.co.nz',
              id: 315100,
              type_id: 4001
            }
          ],
          identity: null,
          icon: null,
          name: '450rpm Tests',
          distance_cost: '0.0',
          day_cost: '0.0',
          purchase_tax_class_id: 1,
          membership_id: 351500,
          sale_tax_class_id: 1,
          parent_members: [],
          primary_address: {
            city: '',
            name: '450rpm Tests',
            type_id: 3001,
            country: {
              eu_member: false,
              code: 'NZ',
              name: 'New Zealand',
              created_at: '2014-06-03T08:30:48.778Z',
              updated_at: '2014-06-03T08:30:48.778Z',
              has_state_tax: false,
              id: 16700,
              currency_code: 'NZD'
            },
            created_at: '2019-01-21T23:31:36.929Z',
            country_id: 167,
            updated_at: '2019-01-21T23:31:36.929Z',
            county: 'AUK',
            street: '',
            postcode: '',
            country_name: 'New Zealand',
            id: 403800,
            address_type_name: 'Primary'
          },
          tag_list: [],
          created_at: '2019-01-21T23:31:36.924Z'
        }
      ]
    },
    outputFields: [
      { key: 'meta__total_row_count' },
      { key: 'meta__row_count' },
      { key: 'meta__page' },
      { key: 'meta__per_page' },
      { key: 'members[]locale' },
      { key: 'members[]phones[]type_id' },
      { key: 'members[]phones[]phone_type_name' },
      { key: 'members[]phones[]id' },
      { key: 'members[]phones[]number', label: 'Phone Number' },
      { key: 'members[]purchase_tax_class_name' },
      { key: 'members[]updated_at' },
      { key: 'members[]sale_tax_class_name' },
      { key: 'members[]lawful_basis_type_id' },
      { key: 'members[]id', label: 'ID' },
      { key: 'members[]bookable' },
      { key: 'members[]icon_exists?' },
      { key: 'members[]uuid' },
      { key: 'members[]emails[]email_type_name' },
      { key: 'members[]emails[]type_id' },
      { key: 'members[]emails[]id' },
      { key: 'members[]emails[]address', label: 'Email Address' },
      { key: 'members[]hour_cost' },
      { key: 'members[]membership_type', label: 'Membership Type' },
      { key: 'members[]description', label: 'Description' },
      { key: 'members[]lawful_basis_type_name' },
      { key: 'members[]membership__rating' },
      { key: 'members[]membership__tax_number' },
      { key: 'members[]membership__invoice_term' },
      { key: 'members[]membership__discount_category_id' },
      { key: 'members[]membership__invoice_term_length' },
      { key: 'members[]membership__cash' },
      { key: 'members[]membership__tax_class_id' },
      { key: 'members[]membership__number' },
      { key: 'members[]membership__owned_by' },
      { key: 'members[]membership__on_stop' },
      { key: 'members[]membership__price_category_id' },
      { key: 'members[]membership__id' },
      { key: 'members[]flat_rate_cost' },
      { key: 'members[]active' },
      { key: 'members[]location_type' },
      { key: 'members[]identity' },
      { key: 'members[]icon' },
      { key: 'members[]name', label: 'Name' },
      { key: 'members[]distance_cost' },
      { key: 'members[]day_cost' },
      { key: 'members[]purchase_tax_class_id' },
      { key: 'members[]membership_id' },
      { key: 'members[]sale_tax_class_id' },
      { key: 'members[]primary_address__city', label: 'City' },
      { key: 'members[]primary_address__name' },
      { key: 'members[]primary_address__type_id' },
      { key: 'members[]primary_address__country__eu_member' },
      { key: 'members[]primary_address__country__code' },
      { key: 'members[]primary_address__country__name' },
      { key: 'members[]primary_address__country__created_at' },
      { key: 'members[]primary_address__country__updated_at' },
      { key: 'members[]primary_address__country__has_state_tax' },
      { key: 'members[]primary_address__country__id' },
      { key: 'members[]primary_address__country__currency_code' },
      { key: 'members[]primary_address__created_at' },
      { key: 'members[]primary_address__country_id' },
      { key: 'members[]primary_address__updated_at' },
      { key: 'members[]primary_address__county' },
      { key: 'members[]primary_address__street', label: 'Street' },
      { key: 'members[]primary_address__postcode', label: 'Postcode' },
      { key: 'members[]primary_address__country_name' },
      { key: 'members[]primary_address__id' },
      { key: 'members[]primary_address__address_type_name' },
      { key: 'members[]created_at' },
      { key: 'members[]child_members[]related_type' },
      { key: 'members[]child_members[]related_id' },
      { key: 'members[]child_members[]relatable_id' },
      { key: 'members[]child_members[]related_membership_type' },
      { key: 'members[]child_members[]relatable_membership_type' },
      { key: 'members[]child_members[]relatable_type' },
      { key: 'members[]child_members[]related_name' },
      { key: 'members[]child_members[]relatable_name' },
      { key: 'members[]child_members[]id' },
      { key: 'members[]links[]link_type_name' },
      { key: 'members[]links[]type_id' },
      { key: 'members[]links[]id' },
      { key: 'members[]links[]address' }
    ]
  },
  noun: 'Organisation',
  display: {
    hidden: false,
    important: true,
    description:
      'Will create an organisation if none found, and just use existing record if found based on email address, and set tags. Name of organisation will be taken from a WooCommerce field chosen by user.',
    label: 'Find or Create Organisation'
  },
  key: 'find_organisation'
};
