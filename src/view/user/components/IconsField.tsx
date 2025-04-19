import { faTag, faDollarSign, faClipboardList, faCar, faChargingStation, faIndianRupeeSign, faBuilding, faCalendar, faList } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const iconMap = {
    faClipboardList: <FontAwesomeIcon icon={faClipboardList}/>,
    faCar: <FontAwesomeIcon icon={faCar}/>,
    faChargingStation: <FontAwesomeIcon icon={faChargingStation}/>,
    faDollarSign: <FontAwesomeIcon icon={faDollarSign}/>,
    faTag: <FontAwesomeIcon icon={faTag}/>,
    faIndianRupeeSign: <FontAwesomeIcon icon={faIndianRupeeSign}/>,
    faBuilding: <FontAwesomeIcon icon={faBuilding}/>,
    faCalendar: <FontAwesomeIcon icon={faCalendar}/>,
    faList: <FontAwesomeIcon icon={faList}/>,
}

// type IconKey = keyof typeof iconMap;

interface IconInputFields{
    icon:string
}

function IconsField({icon}:IconInputFields) {
    const SelectedIcon = iconMap[icon as keyof typeof iconMap] ?? <span>?</span>; // fallback if icon not found
    return <div className="inline-flex text-blue-700 bg-blue-100 rounded-full p-1">{SelectedIcon}</div>;
}

export default IconsField