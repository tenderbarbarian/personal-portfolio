import React from 'react';
import useDarkMode from 'use-dark-mode';
import Toggle from 'react-toggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../utils/fontawesome';
import { faLightbulb, faAdjust } from '@fortawesome/free-solid-svg-icons';
import dmToggleStyles from './darkmodetoggle.module.scss';

const Lightbulb = () => <FontAwesomeIcon icon={faAdjust} />;

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);
  return (
    <div className={dmToggleStyles.toggleContainer}>
      <FontAwesomeIcon
        icon={faLightbulb}
        className={dmToggleStyles.toggleIcon}
      />
      <Toggle
        aria-label="Dark light mode change"
        defaultChecked={darkMode.value}
        // icons={{
        //   checked: <Lightbulb />,
        //   unchecked: <Lightbulb />,
        // }}
        icons={false}
        onChange={darkMode.toggle}
      />
    </div>
  );
};

export default DarkModeToggle;
