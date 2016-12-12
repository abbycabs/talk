import React from 'react';
import {Button} from 'coral-ui';

export default ({status, handleStatusChange}) => (
  status === 'open' ? (
    <div className="close-comments-intro-wrapper">
      <p>
        This comment stream is currently open. By closing this comment stream,
        no new comments may be submitted and all previous comments will still
        be displayed.
      </p>
      <Button onClick={handleStatusChange}>Close Stream</Button>
    </div>
  ) : (
    <div className="close-comments-intro-wrapper">
      <p>
        This comment stream is currently closed. By opening this comment stream,
        new comments may be submitted and displayed
      </p>
      <Button onClick={handleStatusChange}>Open Stream</Button>
    </div>
  )
);
