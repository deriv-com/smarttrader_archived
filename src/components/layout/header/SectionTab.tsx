import { cn } from 'Utils/cn';
import { useTranslation } from 'react-i18next';

type TSectionTabItemProps = {
    alt: string;
    className?: string;
    imageUrl: string;
    label: string;
};

const SectionTabItem = ({ alt, label, imageUrl, className }: TSectionTabItemProps) => {
    return (
        <a
            className={cn(
                'flex h-full cursor-pointer flex-row items-center gap-1.5 px-[0.5rem] hover:bg-disabled-100',
                className
            )}
        >
            <img src={imageUrl} alt={alt} />
            {label}
        </a>
    );
};

const SectionTab = () => {
    const { t } = useTranslation();
    return (
        <div className='mx-2 flex h-full flex-row items-center'>
            <SectionTabItem
                imageUrl='/images/pages/header/ic-appstore-home.svg'
                label={t("Trader's Hub")}
                alt='Traders Hub'
            />
            <SectionTabItem imageUrl='/images/pages/header/ic-reports.svg' label={t('Reports')} alt='Reports' />
            <SectionTabItem imageUrl='/images/pages/header/ic-cashier.svg' label={t('Cashier')} alt='Cashier' />
        </div>
    );
};

export default SectionTab;
