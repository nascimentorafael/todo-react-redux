import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  root: {
    backgroundColor: '#f5fcff',
    flex: 1,
  },
  rowContainer: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#e2e2e2',
    marginLeft: 15,
    backgroundColor: 'transparent',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowText: {
    fontSize: 14,
    padding: 20,
    paddingLeft: 10,
    color: '#005068',
  },
  addButton: {
    borderWidth: 1,
    borderColor: '#005068',
    borderRadius: 5,
    marginBottom: 55,
    width: 130,
    alignItems: 'center',
  },
  addText: {
    fontSize: 16,
    padding: 10,
    color: '#005068',
    fontWeight: "100",
  }
});