import { accountSettingsURL } from 'Constants/urls';

const AccountSettings = () => (
    <a href={accountSettingsURL}>
        <img src='/images/pages/header/ic-user-outline.svg' height={20} width={20} alt='Account settings' />
    </a>
);

export default AccountSettings;
