import logoImg from "public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { LiaGamepadSolid } from "react-icons/lia";

const Header: React.FC = () => {
  return (
    <nav className='w-full h-28 bg-slate-100 text-black px-2'>
      <div className='max-w-screen-xl mx-auto flex justify-center items-center h-28 sm:justify-between'>
        <nav className='flex justify-center items-center gap-4'>
          <Link href='/'>
            <Image
              src={logoImg}
              alt='logotype'
              quality={100}
              priority={true}
              className='w-full'
            />
          </Link>
          <Link href='/games'>Games</Link>
          <Link href='/profile'>Profile</Link>
        </nav>
        <div className='hidden sm:flex justify-center items-center'>
          <Link href='/profile'>
            <LiaGamepadSolid size={34} color='#475569' />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
