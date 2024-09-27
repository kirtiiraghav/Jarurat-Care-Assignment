import logo from '../assets/images/logo.svg'

export default function Header() {
    return (
        <header className='p-4' >
            <a href="#">
                <img className="inline-block w-[8rem] sm:w-[10rem]" src={logo} alt="logo" />
            </a>
        </header>
    )
}
