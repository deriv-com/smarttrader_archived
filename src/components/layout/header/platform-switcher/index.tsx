const PlatformSwitcher = () => (
    <div className='flex cursor-pointer flex-row items-center gap-2 px-[1rem] hover:bg-disabled-100'>
        <img src='/images/pages/header/logo_smart_trader.svg' />
        <div className='text-fontSize-base font-bold'>SmartTrader</div>
        <img src='/images/pages/header/ic-chevron-down.svg' />
    </div>
);

export default PlatformSwitcher;
