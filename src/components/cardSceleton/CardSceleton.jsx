import React from 'react';
import ContentLoader from 'react-content-loader';

const CardSceleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={480}
    viewBox="0 0 280 480"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <circle cx="120" cy="120" r="120" />
    <rect x="0" y="276" rx="20" ry="20" width="280" height="23" />
    <rect x="0" y="315" rx="15" ry="15" width="280" height="88" />
    <rect x="0" y="426" rx="10" ry="10" width="95" height="27" />
    <rect x="157" y="423" rx="19" ry="19" width="122" height="32" />
  </ContentLoader>
);

export default CardSceleton;
