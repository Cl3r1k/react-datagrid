import React from 'react';

import './SettingQueryString.scss';

const SettingQueryString = () => {
  return (
    <div>
      <a href="?filterEnums=Mentor&globalSearchValue=Man">
        QueryString Example (click me)
      </a>
    </div>
  );
};

export default SettingQueryString;
