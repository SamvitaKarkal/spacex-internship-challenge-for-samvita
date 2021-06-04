import React from "react";

import PropTypes from "prop-types";
const Container = ({ children }) => {
  return (
    <>
      <div className="flex mt-10 container md:ml-5 lg:ml-20 lg:pl-20">
          <div className="mx-auto max-w-4xl">
            {children}
          </div>
        </div>
    </>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;