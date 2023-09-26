import { FiUser } from 'react-icons/fi';
import { IoExitOutline } from 'react-icons/io5';
import SearchBar from '../components/styledInputs/SearchBar/SearchBar';
import { BsBookmark, BsFillBookmarkFill } from 'react-icons/bs';

function useMockData() {
  const AuthorsInstagram = [
    'https://www.instagram.com',
    'https://www.instagram.com',
    'https://www.instagram.com',
    'https://www.instagram.com',
    'https://www.instagram.com',
    'https://www.instagram.com',
    'https://www.instagram.com',
    'https://www.instagram.com',
    'https://www.instagram.com',
  ];

  const comments = [
    { author: 'comentator', text: 'hi my name is coment i am important' },
    {
      author: 'Andrew Johnson',
      text: 'hi my name is coment i am important not copired comment',
    },
    {
      author: 'Real Comentator',
      text: 'hi my name is coment i am important not copired comment 100% original',
    },
    {
      author: 'Andrew Piterson',
      text: 'sheeeesh',
    },
  ];
  const dropDowns = [
    { href: '/profile', icon: <FiUser size={24} />, text: 'Profile' },
    { href: '/profile/marked', icon: <BsBookmark size={24} />, text: 'Marked' },
    {
      href: '/api/auth/signout',
      icon: <IoExitOutline size={24} />,
      text: 'Exit',
    },
  ];
  const urls = [
    { href: '/', text: 'News Pulse' },
    { href: '/contact-us', text: 'Contact us' },
    { href: '/about-us', text: 'About us' },
  ];

  const categories = [
    'Food',
    'Animal',
    'Car',
    'Sport',
    'Music',
    'Technology',
    'Abstract',
    'Nature',
  ];
  const markedOptions = [
    { title: 'marked', href: '/profile/marked' },
    { title: 'send post', href: '/profile/post' },
    { title: 'posts', href: '/profile/posts' },
  ];
  return {
    comments,
    AuthorsInstagram,
    dropDowns,
    urls,
    categories,
    markedOptions,
  };
}

export default useMockData;
