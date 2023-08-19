import { FC } from 'react';
import { Link } from 'react-scroll';

type Props = {
    to: string;
    link: string;
    offset?: number;
}

const NavLink: FC<Props> = ({ link, offset, to }) => {
  return (
    <li className='cursor-pointer md:ml-8 text-xl md:my-0 my-7'>
        <Link className='text-gray-800 hover:text-primary-100 duration-400' offset={offset} smooth to={to.toLowerCase()}>
            {link}
        </Link>
    </li>
  )
}

export default NavLink