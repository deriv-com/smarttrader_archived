import { cn } from 'Utils/cn';

type TTabItemProps = {
    className?: string;
    imageUrl: string;
    label: string;
};

const TabItem = ({ label, imageUrl, className }: TTabItemProps) => {
    return (
        <a
            className={cn(
                'flex h-full cursor-pointer flex-row items-center gap-1.5 px-[0.5rem] hover:bg-disabled-100',
                className
            )}
        >
            <img src={imageUrl} />
            {label}
        </a>
    );
};

const Tab = () => {
    return (
        <div className='mx-2 flex h-full flex-row items-center'>
            <TabItem imageUrl='/images/pages/header/ic-appstore-home.svg' label="Trader's Hub" />
            <TabItem imageUrl='/images/pages/header/ic-reports.svg' label='Reports' />
            <TabItem imageUrl='/images/pages/header/ic-cashier.svg' label='Cashier' />
        </div>
    );
};

export default Tab;
