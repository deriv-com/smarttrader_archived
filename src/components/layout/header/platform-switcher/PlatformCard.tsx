import { useTranslation } from 'react-i18next';
import { TPlatformCard } from './Data';

const PlatformCard = ({ src, title, alt, path }: TPlatformCard) => {
    const { t } = useTranslation();

    return (
        <a href={path} className='mx-5 my-12 hover:cursor-pointer'>
            <div className='flex min-h-[130px] flex-col gap-5 rounded-md p-5 hover:bg-disabled-100'>
                <img className='w-36' src={src} alt={t(alt)} />
                <span className='text-[14px] font-light'>{t(title)}</span>
            </div>
        </a>
    );
};

export default PlatformCard;
