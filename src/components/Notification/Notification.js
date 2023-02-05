import PropTypes from 'prop-types';
import {Messagep,
} from './Notification.styled' 

const Notification =({ message}) => {
    return <Messagep>{message}</Messagep>
}
Notification.propTypes ={
    message: PropTypes.string,
};

export default Notification;