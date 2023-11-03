import { HTMLAttributes, PropsWithChildren } from 'react';
import { getStaticUrl, setUrlLanguage } from 'Constants/urls';
import { getLanguage } from 'Constants/translations';

type TStaticUrl = HTMLAttributes<HTMLAnchorElement> & {
    href: string;
};

const StaticUrl = ({ href, children, ...props }: PropsWithChildren<TStaticUrl>) => {
    const getHref = () => {
        setUrlLanguage(getLanguage());
        return getStaticUrl(href);
    };

    return (
        <a href={getHref()} rel='noopener noreferrer' target='_blank' {...props}>
            {children}
        </a>
    );
};

export default StaticUrl;
