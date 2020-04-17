import { connect } from 'react-redux';

// Selectors
import { csvDataSelector } from 'selectors/csvDataSelector';

// Components
import { CSVExport } from 'components/CSVExport/CSVExport';

const mapStateToProps = state => {
  return {
    csvData: csvDataSelector(state),
  };
};

export const CSVExportContainer = connect(mapStateToProps)(CSVExport);
