import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faComment,
  faVideo,
  faDiamond,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Ensure you import the styles

// Add this line to fix the "fontawesome is not defined" issue
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

export const CONTACT_CARD_LIST = [
  {
    type: 'Call',
    number: '021 123 63452',
    action: 'Call now',
    icon: <FontAwesomeIcon icon={faPhone} size="2x" shake />,
  },
  {
    type: 'Chat',
    number: '021 123 63452',
    action: 'Chat now',
    icon: <FontAwesomeIcon icon={faComment} size="2x" flip />,
  },
  {
    type: 'Video Call',
    number: '021 123 63452',
    action: 'Video Call now',
    icon: <FontAwesomeIcon icon={faVideo} size="2x" spin />,
  },
  {
    type: 'Message',
    number: '021 123 63452',
    action: 'Message now',
    icon: <FontAwesomeIcon icon={faEnvelope} size="2x" beat />,
  },
];

export const DIAMOND_ICON = (
  <FontAwesomeIcon icon={faDiamond} size="2x" className="" />
);
