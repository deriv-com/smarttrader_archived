import { MouseEvent, useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Tooltip from 'Components/common/tooltip';

const fullScreen = {
    screenChange: ['fullscreenchange', 'webkitfullscreenchange', 'mozfullscreenchange', 'MSFullscreenChange'],
    screenElement: ['fullscreenElement', 'webkitFullscreenElement', 'mozFullScreenElement', 'msFullscreenElement'],
    request: ['requestFullscreen', 'webkitRequestFullscreen', 'mozRequestFullScreen', 'msRequestFullscreen'],
    exit: ['exitFullscreen', 'webkitExitFullscreen', 'mozCancelFullScreen', 'msExitFullscreen'],
};

const FullScreen = () => {
    const { t } = useTranslation();
    const [isFullScreen, setIsFullScreen] = useState(false);
    const { screenChange, screenElement, request, exit } = fullScreen;
    const iconSrc = `/images/pages/footer/${isFullScreen ? 'ic-full-screen-restore.svg' : 'ic-fullscreen.svg'}`;

    const onFullScreen = useCallback(
        () => setIsFullScreen(screenElement.some(element => document[element as keyof Document])),
        [screenElement]
    );

    useEffect(() => {
        screenChange.forEach(event => {
            document.addEventListener(event, onFullScreen, false);
        });
    }, [onFullScreen, screenChange]);

    const toggleFullScreen = (event: MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();

        const exitFullScreen = exit.find(element => document[element as keyof Document]);
        const requestFullScreen = request.find(element => document.documentElement[element as keyof HTMLElement]);

        if (isFullScreen && exitFullScreen) {
            (document[exitFullScreen as keyof Document] as Document['exitFullscreen'])();
        } else if (requestFullScreen) {
            (document.documentElement[requestFullScreen as keyof HTMLElement] as HTMLElement['requestFullscreen'])();
        } else {
            setIsFullScreen(false); // fullscreen API is not enabled
        }
    };

    return (
        <Tooltip className='h-full px-2 hover:bg-disabled-100' onClick={toggleFullScreen} content={t('Full screen')}>
            <img src={iconSrc} alt='Full screen icon' />
        </Tooltip>
    );
};

export default FullScreen;
