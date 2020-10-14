import React from 'react';
import Landing from './Landing';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/Index.scss';
import 'react-image-lightbox/style.css';
import { Helmet } from 'react-helmet';

const App = () => (
    <React.Fragment>
        <Helmet>
            <script async src='https://www.googletagmanager.com/gtag/js?id=UA-71639378-1' />
            <script>
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'UA-71639378-1');
                `}
            </script>
        </Helmet>
        <Landing />
    </React.Fragment>
);

export default App;
