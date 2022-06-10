import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getDetail } from "./actions";
import withStyles from "../../components/withStyle";
import style from "./style.scss";

const prefixCls = "app-detail";

const Detail = props => {
  const { match, getDetail } = props;
  useEffect(() => {
    const { params } = match;
    if (!props.detail || props.detail.id !== Number(params.id)) {
      getDetail({ id: params.id });
    }
  }, []);

  const { detail } = props;
  const image = detail.image || {};
  const network = detail.network || {};

  if (Object.keys(detail).length === 0) {
    return null;
  }

  return (
    <div className={prefixCls}>
      <div className={`${prefixCls}__img`}>
        <img src={`${image.medium}`} />
      </div>
      <div className={`${prefixCls}__info`}>
        <h3 className={`${prefixCls}__name`}>
          {detail.name}
          <span className={`${prefixCls}__source`}>({network.name})</span>
        </h3>
        <div
          className={`${prefixCls}__content`}
          dangerouslySetInnerHTML={{ __html: detail.summary }}
        ></div>
      </div>
    </div>
  );
};

Detail.loadData = (store, query) => {
  return store.dispatch(getDetail({ id: query.id }));
};

const mapStateToProps = state => {
  return {
    detail: state.detail.info
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getDetail: params => dispatch(getDetail(params))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(Detail, style));
