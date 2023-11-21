import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import "./style.css"

type TNotificationProps = {
    notifications: object[]
}

const Notifications = ({ notifications }: TNotificationProps) => {


    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <button className="IconButton" aria-label="Customise options">
                    <div className='flex'>
                        <img
                            src='/images/pages/header/ic-bell.svg'
                            alt='Notifications'
                            height={25}
                            width={25}
                            className='cursor-pointer'
                        />
                    </div>
                </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
                <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
                    <div className="flex items-center justify-center">
                        <p>Notifications</p>
                    </div>
                    <hr className="h-1 border-0 dark:bg-gray-700"></hr>
                    <DropdownMenu.Separator className="DropdownMenuSeparator" />
                    {
                        notifications.length > 0 && (
                            notifications.map((notification: any) => {
                                return (
                                    <>
                                        <DropdownMenu.Item className="DropdownMenuItem">
                                            {notification.message}
                                        </DropdownMenu.Item>
                                        <DropdownMenu.Separator className="DropdownMenuSeparator" />
                                    </>
                                )
                            })
                        )
                    }
                    <hr className="h-1 border-0 dark:bg-gray-700"></hr>
                    <div className="text-right">
                        <button  aria-label="Customise options">
                            <p>Clear All</p>
                        </button>
                    </div>
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
};

export default Notifications;
