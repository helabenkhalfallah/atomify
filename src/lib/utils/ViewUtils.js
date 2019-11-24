
const renderSubViews = (children) => {
  if (children) {
    if (Array.isArray(children)) {
      return children;
    }
    return [children];
  }
  return null;
};

const ViewUtils = {
  renderSubViews,
};

export default ViewUtils;
