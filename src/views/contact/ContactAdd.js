// material-ui
import { Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import AddForm from './addForm';


// ==============================|| SAMPLE PAGE ||============================== //

const ContactAdd = () => (
    <MainCard title="Add contact">
        <Typography variant="body2">
            <AddForm />
        </Typography>
    </MainCard>
);

export default ContactAdd;
