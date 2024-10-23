import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='flex justify-center items-center flex-col bg-neutral-950'>
        <p className='text-center text-xl'>
        123 Willow Lane<br/>
        Sunnyvale, TX 75001<br />
        (555) 987-6543
        </p>

        <p className="social flex gap-10">
            <Image src="/social1.svg" alt="Facebook icon" width={30} height={30} className='icon-image cursor-pointer'/>
            <Image src="/social2.svg" alt="Facebook icon" width={30} height={30} className='icon-image cursor-pointer'/>
            <Image src="/social3.svg" alt="Facebook icon" width={30} height={30} className='icon-image cursor-pointer'/>
        </p>
    </footer>
  )
}

export default Footer