class Clock extends React.Component {
	
	constructor(props) {
		
		super(props)
		
		this.state = {
			time: new Date()
		}
		
	}
	
	componentDidMount() {
		
		setInterval(this.update, 1000)
		
	}
	
	update = () => {
		
		this.setState({
			time: new Date()
		})
		
	};
	
	render() {
		
		const h = this.state.time.getHours()
		const m = this.state.time.getMinutes()
		const s = this.state.time.getSeconds()
		
		return (
		
			<h1>{h % 12}:{(m < 10 ? '0' + m : m)}:{(s < 10 ? '0' + s : s)} {h < 12 ? 'am' : 'pm'}</h1>
		
		)
		
	}
	
}

ReactDOM.render(<Clock />, document.getElementById('mount'))

{/*
https://codepen.io/Lance-Jernigan/pen/EZdxQO
https://github.com/handsontable/react-handsontable
https://reactjsexample.com/official-wrapper-of-handsontable-data-grid-for-react/
https://github.com/wojtekmaj/react-clock
https://github.com/wojtekmaj/react-clock
https://www.runoob.com/try/try.php?filename=try_react_state
https://www.runoob.com/try/try.php?filename=try_react_state4  10 Clocks
*/}