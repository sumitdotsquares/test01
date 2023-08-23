// material-ui
import { Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
// import AddForm from './addFo rm';
import SingleFileUploader from './SingleFileUploader';


// ==============================|| SAMPLE PAGE ||============================== //

const ContactUpload = () => (
    <MainCard title="Upload contact">
        <Typography variant="body2">
            <SingleFileUploader />
        </Typography>
    </MainCard>
);

export default ContactUpload;
