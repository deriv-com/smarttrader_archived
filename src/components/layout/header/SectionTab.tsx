import { useTranslation } from 'react-i18next';
import SectionTabItem from './SectionTabItem';

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
