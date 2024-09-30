// app/layout.js
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/globals.css';

export const metadata = {
    title: 'HYF Login Page',
    description: '로그인 페이지',
};

const Layout = ({ children }) => (
    <html lang="ko">
        <body>
            <Header />
            {children}
            <Footer />
        </body>
    </html>
);

export default Layout;
