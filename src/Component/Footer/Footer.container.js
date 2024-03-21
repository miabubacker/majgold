import {connect} from 'react-redux';
import { defaultMemoize } from 'reselect';
import { bindActionCreators } from 'redux';
import * as FooterActions from './Footer.actionHandler';
import _get from 'lodash/get';
import { compose } from 'recompose';
import Footer from './Footer';



const FooterDetailsActions = defaultMemoize(dispatch => bindActionCreators({ ...FooterActions }, dispatch));

const mapDispatchToProps = dispatch => ({
    FooterPageActions: FooterDetailsActions(dispatch),
});

const mapStateToProps = ({
    FooterPageReducer,
}) => ({
    contract: _get(FooterPageReducer, 'contract'),
    
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps))(Footer);
