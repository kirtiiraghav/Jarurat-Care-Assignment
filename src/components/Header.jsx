import logo from '../assets/images/logo.svg'

export default function Header() {
    return (
        <header className='p-4 shadow sticky top-0 z-10 bg-white' >
            <a href="#">
                <img className="inline-block w-[8rem] sm:w-[10rem]" src={logo} alt="logo" />
            </a>
        </header>
    )
}
