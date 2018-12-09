class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            messageIsActive: false
        }
        this.handleMessageButton = this.handleMessageButton.bind(this)
    }

    handleMessageButton() {
        this.setState({
            messageIsActive: !this.state.messageIsActive
        });
    }

    render() {
        console.log(this.state.messageIsActive);
        const text = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam nemo sint eligendi illum, odit quia! Odit quas, commodi veritatis laudantium aut aperiam dolorum sint illum distinctio quis voluptas, laboriosam amet adipisci perferendis doloribus sequi! Accusamus molestias quaerat facere animi ex, blanditiis rem, hic et laudantium quas, exercitationem consequuntur consequatur ipsa? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolore porro consequuntur itaque tempore, repellendus quis qui voluptas aliquam omnis eum, corrupti ratione! Cumque accusantium eius consequatur ex quo facilis porro qui, sit quibusdam illo iste explicabo, eaque quod officiis, tempora quidem! Illo alias perspiciatis, nesciunt omnis ab quo voluptatibus.`


        return(
            <>
            <button onClick={this.handleMessageButton}>{this.state.messageIsActive ? `Ukryj`:`Pokaż`}
            </button>
            <p>{this.state.messageIsActive && text}</p>
            </>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'))