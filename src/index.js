import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
//import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import registerServiceWorker from './registerServiceWorker';

import Layout from './components/layout';
// import BasicInfo from './components/basicinfo';
// import Experience from './components/experience';
// import NavBar from './components/navbar';

import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import 'antd/lib/card/style/css';
import 'antd/lib/input/style/css';
import 'antd/lib/form/style/css';
import 'antd/lib/button/style/css';
import 'antd/lib/menu/style/css';
import 'antd/lib/layout/style/css';
import 'antd/lib/icon/style/css';

import './grid.css';
import './index.css';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<LocaleProvider locale={enUS}>
			<BrowserRouter>
				<Layout />
			</BrowserRouter>
		</LocaleProvider>
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();
