import { 
    faImage, 
    faTrash, 
    faSignOutAlt, 
    faEdit, 
    faSpinner, 
    faCirclePlus, 
    faLocationDot, 
    faPhone, 
    faEnvelope,
    faLock
    // faLinkedin,
    // faGithub 
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

const Icons = () => {
    return library.add(
        faImage, 
        faTrash, 
        faSignOutAlt, 
        faEdit, 
        faSpinner, 
        faCirclePlus, 
        faLocationDot, 
        faPhone, 
        faEnvelope,
        faLock
        // faLinkedin,
        // faGithub
    );
}

export default Icons;