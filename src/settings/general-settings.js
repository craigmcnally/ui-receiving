import React from 'react';
import PropTypes from 'prop-types';
import Pane from '@folio/stripes-components/lib/Pane';
import { FormattedMessage } from 'react-intl';

export default class GeneralSettings extends React.Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
  };

  render() {
    return (
      <Pane defaultWidth="fill" fluidContentWidth paneTitle={this.props.label}>
        <div id="stripes-new-app-settings-message"><FormattedMessage id="ui-receiving.settings.general.message" /></div>
      </Pane>
    );
  }
}
