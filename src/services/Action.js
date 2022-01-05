import EmailSuccess from '../pages/Auth/EmailSuccess';
import SetNewPassword from '../pages/Auth/SetNewPassword';
import { useLocation } from 'react-router';
import { useMemo } from 'react';

function Action() {
  const useQuery = () => {
    const { search } = useLocation();

    return useMemo(() => new URLSearchParams(search), [search]);
  };

  const query = useQuery();

  // Get the action to complete.
  const mode = query.get('mode');
  // Get the one-time code from the query parameter.
  const actionCode = query.get('oobCode');

  // Handle the user management action.
  switch (mode) {
    case 'verifyEmail':
      // Display email verification handler and UI.
      return <EmailSuccess actionCode={actionCode} />;
    case 'resetPassword':
      // Display email recovery handler and UI.
      return <SetNewPassword actionCode={actionCode} />;
    default:
      // Error: invalid mode.
      return (
        <div className='Action'>
          <h1>Error encountered</h1>
          <p>The selected page mode is invalid.</p>
        </div>
      );
  }
}

export default Action;
