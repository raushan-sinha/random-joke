

const ThemeButton = () => {

    return (
        <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className='bg-cyan-500 text-black text-base px-3 py-3 rounded-xl border-none'>
            Change Theme
        </button>
    )
}

export default ThemeButton;