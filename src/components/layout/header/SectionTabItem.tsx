import { cn } from 'Utils/cn';

type TSectionTabItemProps = {
    alt: string;
    className?: string;
    imageUrl: string;
    label: string;
};

const SectionTabItem = ({ alt, label, imageUrl, className }: TSectionTabItemProps) => (
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
export default SectionTabItem;
