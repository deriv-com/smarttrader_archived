import { Button } from 'Components/ui/button';

const LoggedOutState = () => {
    return (
        <div className='mx-[1rem] flex'>
            <Button className=' text-fontSize-xxl mr-1.5 border-none bg-white px-[1rem] text-primary hover:bg-red-50'>
                <a>Log in</a>
            </Button>
            <Button variant='contained' className='rounded px-[1rem]'>
                <a href={'https://deriv.com/signup'}>Sign up</a>
            </Button>
        </div>
    );
};

export default LoggedOutState;
