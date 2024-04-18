import Link from 'next/link'
import Image from 'next/image'
import { prefix } from '@/utils/prefix'

interface NavigationType {
  name: string
  label: string
  href: string
}

function Navigation({ data }: { data: NavigationType[] }) {
  return (
    <nav className='flex items-center justify-center text-[#fff]'>
      {data.map((item) => (
        <NavigationItem key={item.name} {...item} />
      ))}
    </nav>
  )
}
function NavigationItem(props: NavigationType) {
  return (
    <div className='group relative flex justify-center'>
      {props.href ? (
        <Link
          href={props.href}
          passHref
          className='relative cursor-pointer py-2 px-4 text-center text-sm text-[#fff] transition-all hover:text-opacity-90'
        >
          {props.label}
        </Link>
      ) : (
        <div className='relative cursor-pointer py-2 px-4 text-center text-sm text-[#fff] transition-all hover:text-opacity-90'>
          {props.label}
        </div>
      )}
    </div>
  )
}

export default function Header() {
  const navigation: NavigationType[] = [
    {
      name: 'ssr',
      label: 'SSR',
      href: '/ssr',
    },
  ]
  return (
    <div className='relative z-40 flex items-center justify-between gap-2 py-4'>
      <div className='flex flex-none items-center lg:flex-1'>
        <Link href='/'>
          <span className='font-black text-xl flex items-center'>
            <span className='mr-2 transform hover:rotate-360 hover:scale-75 transition-transform duration-500'>
              <Image
                src={`${prefix}/favicon.ico`}
                alt='Logo'
                height={30}
                width={30}
                loading='eager'
                draggable={false}
                unoptimized={true}
                quality={100}
              />
            </span>
            {'nextjs-tailwindcss'.split('').map((letter, index) => {
              return (
                <span
                  key={index}
                  className='hover:text-fun-pink hover:-mt-2 transition-all duration-500 hover:duration-100 click:goodbyeLetterAnim text-[#fff]'
                >
                  {letter}
                </span>
              )
            })}
          </span>
        </Link>
      </div>
      <div>
        <Navigation data={navigation} />
      </div>
      <div className='flex w-full items-center justify-end gap-2 lg:flex-1 text-[#fff]'>
        <Link href='https://github.com/WuChenDi/nextjs-tailwindcss-examples' passHref>
          GitHub
        </Link>
      </div>
    </div>
  )
}
