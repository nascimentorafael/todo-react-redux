import React, { Component } from 'react';
import {
  Text,
  ListView,
  View,
  Button,
  TouchableOpacity,
  AlertIOS,
} from 'react-native';
import { connect } from 'react-redux';
import { addTodo, removeTodo } from '../Redux/actions/actions';
import Swipeout from 'react-native-swipeout';
import s from '../Style/TodoList';

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2,
});

class TodoList extends Component {
  renderRow (row) {
    const doneButton = [{
      text: 'Done',
      backgroundColor: 'powderblue',
      onPress: () => { this.props.removeTodo(row.id) },
    }];

    return (
      <Swipeout
        right={doneButton}
        autoClose
        backgroundColor='powderblue'
        rowID={row.id}
        backgroundColor= 'transparent'>
        <View style={s.rowContainer}>
          <Text style={s.rowText}>
            {row.title}
          </Text>
        </View>
      </Swipeout>
    )
  }

  render() {
    const dataSource = ds.cloneWithRows(this.props.todos);
    return (
      <View style={s.root}>
        <ListView
          dataSource={dataSource}
          renderRow={this.renderRow.bind(this)}
          style={{ backgroundColor: 'transparent' }}
        />
        <TouchableOpacity
          onPress={() => {
            AlertIOS.prompt(
              'Enter your todo',
              null,
              text => this.props.addTodo(text),
            );
          }}
          style={{ alignItems: 'center' }}
        >
          <View style={s.addButton}>
            <Text style={s.addText}>
              ADD TO DO
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = {
  addTodo,
  removeTodo,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
