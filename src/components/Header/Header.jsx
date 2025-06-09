import './header.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    const categories = useSelector(s => s.reducer.categories);
    const cartData = useSelector(s => s.reducer.cartData)

    const total = cartData.reduce((total, item) => {
        return total + item.count
    }, 0)

    return (
        <header className='header'>
            <div className="container header-container">
                <h1 className="header-logo">
                    <Link to={'/'}>shop</Link>
                </h1>
                <nav className="header-nav">
                    <Link to={'/'}>home</Link>
                    {
                        categories.map(item => {
                            return <Link to={`/category/${item}`} key={item}>{item}</Link>
                        })
                    }
                    <Link to={'/cart'}>cart <span style={{
                        padding: '3px 10px',
                        backgroundColor: 'red',
                        borderRadius: '50%'
                    }}>{total}</span></Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;
