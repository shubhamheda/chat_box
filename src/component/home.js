import React from 'react';

class Home extends React.Component {
    render() {
        return(
            <div className={"content"}>
                <article className={"message is-link"}>
                    <div className={"message-body"}>
                        Welcome to the <strong>CHAT BOX</strong>
                    </div>
                </article>
                <h1 className={"title is-2"}>CHAT BOX</h1>
                <div className="field is-grouped is-grouped-multiline">
                    <div className="control">
                        <div className="tags has-addons">
                            <span className="tag is-dark">Python</span>
                            <span className="tag is-info">3.7</span>
                        </div>
                    </div>
                    <div className="control">
                        <div className="tags has-addons">
                            <span className="tag is-dark">Django</span>
                            <span className="tag is-info">2.1.4</span>
                        </div>
                    </div>
                    <div className="control">
                        <div className="tags has-addons">
                            <span className="tag is-dark">Build</span>
                            <span className="tag is-success">passing</span>
                        </div>
                    </div>
                </div>

                <div>
                    <p>This is Chatting box made up over the Python and Django and uses Kafka Technology</p>
                    <p>You can use Chat between peoples and just you have give either username or email id to chat</p>
                </div>

            </div>
        );
    }
}

export default Home;