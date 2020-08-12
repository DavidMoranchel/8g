import React, { Component } from "react";

// Material UI
import {
  Button,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";

// CSS
import "./NotesBlog.css";

// Components
import CustomTextField from "../../components/CustomTextField";
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
                <Input
                  value={noteTitle}
                  name={"noteTitle"}
                  label={"Title"}
                  callback={this.handleChangeInput}
                />

                <CustomTextField
                  value={noteContent}
                  name={"noteContent"}
                  label={"Content"}
                  callback={this.handleChangeInput}
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
