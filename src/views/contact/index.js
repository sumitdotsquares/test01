// material-ui
import { Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import ContactListTable from './ContactListTable';

// ==============================|| SAMPLE PAGE ||============================== //

const ContactList = () => (
  <MainCard title="Contact List">
    <Typography variant="body2">
      <ContactListTable />
    </Typography>
  </MainCard>
);

export default ContactList;
