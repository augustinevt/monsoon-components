import React from 'react';
import DevSection from './DisplaySection.dev';
import Table from '../../components/table/Table';
import tableGuide from '../../components/table/guide.md';

import MarkdownRenderer from 'react-markdown-renderer';

const testTableData = {
  'Key_one': 'value_one',
  'key_two': 'value_two',
};

const testTableConfig = {
  keyFormatter: (val) => val,
  valueFormatter: (val) => val,
};

class TableDev extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <DevSection label="Table">
          <Table
            data={testTableData}
            config={testTableConfig}
          />
        </DevSection>
        <MarkdownRenderer markdown={tableGuide} />
      </div>
    );
  }
}

export default TableDev;
