import React from 'react'
import { connect } from 'react-redux'
import { delMark, swapMarks } from '../../actions'
import PropTypes from 'prop-types'
import { ListElem, ListStyle } from '../../components'

// mb HOC component?

class List extends React.PureComponent {
  state = {
    to:-1
  }
  static propTypes = {
    list: PropTypes.array,
    del: PropTypes.func
  }
  static defaultProps = {
    list: [],
    del: f => f
  }
  construtor(props){
    this.from = -1;
  }
  drag = (e) => this.from = e.target.dataset.id
  drop = (e) => {
    this.props.swap(this.state.to, this.from)
    this.setState({to: -1})
  }
  over = (e) => this.setState({to: e.target.dataset.id})
  render(){
    const {list, del} = this.props
    return ( 
        <ListStyle onDragOver={this.over}>
          {list.map((el, id) => <ListElem 
            active = {id === Number(this.state.to)} 
            onDragStart={this.drag} 
            onDragEnd={this.drop} 
            data-id={id}
            del = {del}
            key= {id}
            id = {id}
          > {el} 
          </ListElem>)}
        </ListStyle>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  swap: (to, from) => dispatch(swapMarks(to, from)),
  del: (i) => dispatch(delMark(i))
})

const DraggableList = connect(null, mapDispatchToProps)(List)

export {
  DraggableList as List,
  List as TestList
}


