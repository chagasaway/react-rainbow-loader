import React from 'react';
import ReactDOM from 'react-dom';
import RainbowLoader from '../dist/index';

class App extends React.Component {
	render() {
		return <RainbowLoader visible={true} />;
	}
}

const root = document.querySelector('#root');

ReactDOM.render(<App/>, root);
