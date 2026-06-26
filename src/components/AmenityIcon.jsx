import { MdPool, MdSpa, MdRestaurant, MdFitnessCenter, MdLandscape, MdLocalParking, MdWifi, MdFreeBreakfast } from 'react-icons/md';

const map = {
    pool: MdPool,
    spa: MdSpa,
    restaurant: MdRestaurant,
    gym: MdFitnessCenter,
    view: MdLandscape,
    parking: MdLocalParking,
    wifi: MdWifi,
    breakfast: MdFreeBreakfast,
};

export default function AmenityIcon({ name, size = 26 }) {
    const Cmp = map[name] || MdPool;
    return <Cmp size={size} aria-hidden='true' />;
}
