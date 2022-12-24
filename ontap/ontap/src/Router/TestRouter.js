import { Link, Outlet } from 'react-router-dom';

function TestRouter() {
    return (
        <div>
            <nav className='nav'>
                <ul>
                    <li>
                        <Link to='/'> Home </Link>
                    </li>
                    <li>
                        <Link to='/Praram'> Praram </Link>
                    </li>
                    <li>
                        <Link to='/Context'> Context </Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
}
export default TestRouter;
