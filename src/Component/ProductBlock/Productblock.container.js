import {connect} from 'react-redux';
import { defaultMemoize } from 'reselect';
import { bindActionCreators } from 'redux';
import * as productblockaction from './Productblock.actionHandler';
import _get from 'lodash/get';
import ProductBlock from './ProductBlock';
import { compose } from 'recompose';



const productblockActions = defaultMemoize(dispatch => bindActionCreators({ ...productblockaction }, dispatch));

const mapDispatchToProps = dispatch => ({
    productblockActions: productblockActions(dispatch),
});

const mapStateToProps = ({
    ProductBlockreducer,
}) => ({

    gridData:_get(ProductBlockreducer, 'gridData'),
    gridPoster:_get(ProductBlockreducer, 'gridPoster'),
    storesAndService:_get(ProductBlockreducer, 'storesAndService'),
    selectedProduct:_get(ProductBlockreducer, 'selectedProduct'),
  
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps))(ProductBlock);
