import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
const NavIcon = ({ items }) => {
  const [Icon, setIcon] = useState(null);
  console.log(items);

  useEffect(() => {
    if (items.iconType) {
      setIcon(() => items.iconType); // Set Icon as a component reference
    }
  }, [items.iconType]);

  let navIcons = null;
  if (items.icon) {
    navIcons = (
      <span className="pcoded-micon">
        <i className={items.icon} />
      </span>
    );
  } else if (Icon) {
    navIcons = (
      <span className="pcoded-micon">
        <Icon />
      </span>
    );
  }

  return <>{navIcons}</>;
};

NavIcon.propTypes = {
  items: PropTypes.shape({
    icon: PropTypes.string, // icon should be inside items
    iconType: PropTypes.oneOfType([PropTypes.elementType, PropTypes.func])
  })
};

export default NavIcon;
