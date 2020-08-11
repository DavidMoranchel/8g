import React, { Component } from "react";

// Material UI
import {
  Button,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  TextField,
} from "@material-ui/core";

// CSS
import "./NotesBlog.css";

// Components
import CustomTextField from "../../components/CustomTextField";

class NotesBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      noteTitle: "",
      noteContent: "",
      test: "",
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleTest = this.handleTest.bind(this);
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
      test: "",
    });
  }

  handleChangeInput({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  handleTest(name, value) {
    console.log("Handle test", name, value);
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { noteTitle, noteContent, notes, test } = this.state;

    const UINotes = notes.map(({ title, content }, index) => (
      <ListItem key={index} className="List-item">
        <ListItemText primary={title} secondary={content} />
      </ListItem>
    ));

    return (
      <>
        <Container maxWidth="md">
          <List dense={true}>{UINotes}</List>
        </Container>
        <Container maxWidth="md">
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <form onSubmit={this.handleFormSubmit}>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
              >
                <CustomTextField
                  value={test}
                  name={"test"}
                  label={"Test input"}
                  callback={this.handleTest}
                />

                <TextField
                  className="input"
                  value={noteTitle}
                  onChange={this.handleChangeInput}
                  name="noteTitle"
                  label="Titulo"
                  variant="outlined"
                />
                <TextField
                  className="input"
                  value={noteContent}
                  onChange={this.handleChangeInput}
                  name="noteContent"
                  label="Contenido"
                  variant="outlined"
                />
                <Button type="submit" variant="contained" color="primary">
                  Add
                </Button>
              </Grid>
            </form>
          </Grid>
        </Container>
      </>
    );
  }
}

export default NotesBlog;
// Components
// import TextInput from "../../components/TextInput";
// this.test = this.test.bind(this);
// test(name, value) {
//   console.log(name, value);
//   this.setState({
//     [name]: value,
//   });
// }
/* <TextInput
  value={test}
  name={"test"}
  label={"Test"}
  callback={this.test}
  variant="outlined"
/> */
