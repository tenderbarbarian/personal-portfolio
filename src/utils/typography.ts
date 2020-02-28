import Typography from 'typography';
import myTheme from 'typography-theme-lincoln';

const typography = new Typography(myTheme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') typography.injectStyles();

export default typography;
