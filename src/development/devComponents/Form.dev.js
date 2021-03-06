import React from 'react';
import DevSection from './DisplaySection.dev';
import Form from '../../components/form/Form';
import formGuide from '../../components/form/guide.md';
import MarkdownRenderer from 'react-markdown-renderer';

class FormDev extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const inputsConfig = [
        {
          name: 'productIdentifier',
          defaultValue: '',
          suffix: '',
          placeholder: 'Enter an ASIN',
          characterLimit: 10,
          optional: false,
          submitOnEnter: true,
          tests: [],
        },
        {
          name: 'email',
          defaultValue: '',
          suffix: '',
          placeholder: 'email',
          characterLimit: 10,
          optional: false,
          submitOnEnter: true,
          tests: [],
        },
        {
          name: 'name',
          defaultValue: '',
          suffix: '',
          placeholder: 'name',
          characterLimit: 10,
          optional: false,
          submitOnEnter: true,
          tests: [],
        }
      ];

      const buttonsConfig = [
        {
          name: 'submit',
          type: 'icon',
          label: 'submit',
          action: 'submit'
        },
      ];

    return(

      <div>
        <DevSection label="Default Form">
          <Form inputsConfig={inputsConfig} buttonsConfig={buttonsConfig} onSubmit={this.onSubmit} />
        </DevSection>

        <div className="markdown-body">
          <MarkdownRenderer markdown={formGuide} />
        </div>
      </div>

    );
  }
}

export default FormDev;
