const AccountSwitcher = () => (
    <div className='flex h-full cursor-pointer flex-row items-center gap-4 px-base text-base font-bold text-success hover:bg-disabled-100'>
        <img src='/images/pages/header/ic-currency-virtual.svg' alt='Currency symbol' />
        10,017.82
        <img src='/images/pages/header/ic-chevron-down.svg' alt='Dropdown icon' />
    </div>
);

export default AccountSwitcher;
