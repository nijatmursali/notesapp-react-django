import React, { Component, Fragment } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import ListNotes from "../components/ListNotes";
import { fetchNotes, fetchNote, updateNote, addNote } from "../api";
const notes_temp = [
  {
    id: 1,
    title: "This is beautiful",
    content: "The world is so beautiful.",
  },
];

class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      current_note_id: 0,
      is_creating: true,
      is_fetching: true,
    };
    this.handleItemClick = this.handleItemClick.bind(this);
    this.handleAddNote = this.handleAddNote.bind(this);
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    let data = await fetchNotes();
    console.log(data);
    this.setState({ notes: data });
  }

  handleItemClick(id) {
    this.setState((prevState) => {
      return { is_creating: false, current_note_id: id };
    });
  }

  handleAddNote() {
    this.setState((prevState) => {
      return { is_creating: true };
    });
  }

  render() {
    return (
      <Fragment>
        <Container className="mt-4">
          <Row>
            <Col xs="10">
              <h2>Realtime notes</h2>
            </Col>
            <Col xs="2">
              <Button onClick={this.handleAddNote}>Create new</Button>
            </Col>
          </Row>

          <Row>
            <Col xs="4">
              <h5>List</h5>
              <ListNotes
                notes={this.state.notes}
                handleItemClick={(id) => this.handleItemClick(id)}
              />
            </Col>
            <Col xs="8">
              <h5>Content</h5>
              {this.state.is_creating
                ? "Creating new"
                : `Editing ${this.state.current_note_id}`}
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default MainScreen;
