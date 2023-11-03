import { useTranslation } from 'react-i18next';
import Tooltip from 'Components/common/tooltip';

// TODO complete the functionality + add tests
const LanguageSettings = () => {
    const { t } = useTranslation();

    return (
        <Tooltip content={t('Language')}>
            <button className='h-9 hover:bg-disabled-100'>
                <img
                    src='/images/languages/ic-flag-es.svg'
                    className='h-4 w-auto border-l border-disabled-100 px-3'
                    alt='test alt'
                />
            </button>
        </Tooltip>
    );
};

export default LanguageSettings;
