import { connect } from 'react-redux';

// Selectors
import { processDataSelector } from 'selectors/processDataSelector';

// Components
import { CSVExport } from 'components/CSVExport/CSVExport';

const mapStateToProps = state => {
  return {
    data: processDataSelector(state),
  };
};

export const CSVExportContainer = connect(mapStateToProps)(CSVExport);
