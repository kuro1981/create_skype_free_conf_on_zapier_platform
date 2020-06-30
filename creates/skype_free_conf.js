const createConfRequest = async (z, bundle) => {
  const httpOptions = {
    method: 'POST',
    url: 'https://api.join.skype.com/v1/meetnow/createjoinlinkguest',
    body: JSON.stringify({title: "{{bundle.inputData.title}}"}),
    headers: {
      'Content-Type': 'application/json'
    },
  };
  const response = await z.request(httpOptions);
  return [z.JSON.parse(response.content)];
};


App = {
    key: 'create_skype_conference',
    noun: 'conference',
    display: {
      label: 'Create Skype free Conference.',
      description: 'Create Skype free Conference using api'
    },
    operation: {
        inputFields : [
            {
                key: 'title',
                required: true,
                label: 'Title of Conference',
                // helpText: '',
            }

        ],
        perform: createConfRequest,
    },
  }

module.exports = App