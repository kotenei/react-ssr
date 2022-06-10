import React from "react";

const withStyles = (Compt, styles) => {
  class WithStyleComponent extends React.Component {
    constructor(props) {
      super(props);

      if (
        props.staticContext &&
        props.staticContext.css &&
        styles &&
        styles._getCss
      ) {
        props.staticContext.css.push(styles._getCss());
      }
    }

    render() {
      return <Compt {...this.props} />;
    }
  }

  WithStyleComponent.loadData = Compt.loadData;

  return WithStyleComponent;
};

export default withStyles;
