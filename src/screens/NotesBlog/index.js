import React, { Component } from "react";

// CSS
import "./NotesBlog.css";

// Components
import Input from "../../components/Input";

class NotesBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      noteTitle: "",
      noteContent: "",
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  componentDidMount() {
    let stringNotes = localStorage.getItem("notes");
    if (stringNotes) {
      let parsedNotes = JSON.parse(stringNotes);
      this.setState({
        notes: parsedNotes,
      });
    }
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const { noteTitle, noteContent, notes } = this.state;
    const newNotes = [...notes, { title: noteTitle, content: noteContent }];
    const stringNewNotes = JSON.stringify(newNotes);
    localStorage.setItem("notes", stringNewNotes);
    this.setState({
      notes: newNotes,
      noteTitle: "",
      noteContent: "",
    });
  }

  handleChangeInput(name, value) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { noteTitle, noteContent, notes } = this.state;
    const UINotes = notes.map(({ title, content }, index) => (
      <li key={index} className="List-item">
        <p>
          {title} {content}
        </p>
      </li>
    ));

    return (
      <>
        <div className="Container">
          <ul className="List">{UINotes}</ul>
        </div>
        <div className="Container">
          <form onSubmit={this.handleFormSubmit}>
            <div className="Container">
              <Input
                value={noteTitle}
                name={"noteTitle"}
                label={"Title"}
                callback={this.handleChangeInput}
              />

              <Input
                value={noteContent}
                name={"noteContent"}
                label={"Content"}
                callback={this.handleChangeInput}
              />
              <button type="submit">Add</button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default NotesBlog;
