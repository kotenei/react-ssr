import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getList } from "./actions";
import withStyles from "../../components/withStyle";
import style from "./style.scss";

const prefixCls = "app-list";

const Item = props => {
  const { data } = props;
  return (
    <li className={`${prefixCls}-item`}>
      <Link to={`/detail/${data.id}`}>
        <img src={data.image.medium} />
      </Link>
      <div className={`${prefixCls}-item__info`}>
        <h3>
          <Link to={`/detail/${data.id}`}>
            <span className={`${prefixCls}-item__name`} title={data.name}>
              {data.name}
            </span>
          </Link>
        </h3>
      </div>
    </li>
  );
};

const Home = props => {
  useEffect(() => {
    if (!props.list.length) {
      props.getList();
    }
  }, []);

  const { list } = props;
  const content = list.map(item => {
    return <Item key={item.show.id} data={item.show} />;
  });
  return <ul className={prefixCls}>{content}</ul>;
};

Home.loadData = store => {
  return store.dispatch(getList());
};

const mapStateToProps = state => {
  return {
    list: state.home.list
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getList: () => dispatch(getList())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(Home,style));
