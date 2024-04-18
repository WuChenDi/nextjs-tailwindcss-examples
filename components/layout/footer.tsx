import Link from 'next/link'

export default function Footer() {
  const footerText = 'Copyright (c) 2022-PRESENT |'

  return (
    <footer className='flex justify-center gap-2 py-10 <md:py-4 text-[#fff]'>
      {footerText}
      <Link
        href='https://github.com/WuChenDi'
        className='text-[#4493f8]'
        target='_blank'
        rel='noreferrer'
      >
        wudi
      </Link>
    </footer>
  )
}
