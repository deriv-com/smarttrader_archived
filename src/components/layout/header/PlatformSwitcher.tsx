import { useTranslation } from 'react-i18next';

const PlatformSwitcher = () => {
    const { t } = useTranslation();
    return (
        <div className='flex cursor-pointer flex-row items-center gap-2 px-base hover:bg-disabled-100'>
            <img src='/images/pages/header/logo_smart_trader.svg' alt='Smarttrader logo' />
            <div className='text-base font-bold'>{t('SmartTrader')}</div>
            <img src='/images/pages/header/ic-chevron-down.svg' alt='Down arrow' />
        </div>
    );
};
export default PlatformSwitcher;
