import React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

type Prop = { onAdd (text: string): void }
class AddTodo extends React.Component<Prop> {

  state = {
    value: '',
  }

  constructor (props: Prop, context: any) {
    super(props, context)

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange (event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: event.target.value })
  }

  onSubmit (ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault()

    const text = this.state.value.trim()
    if (!text) return

    this.props.onAdd(text)
    this.setState({ value: '' })
  }

  render () {
    return (
      <div className='add-todo'>
        <form onSubmit={this.onSubmit}>
          <input className='new-todo' value={this.state.value} onChange={this.onChange} />
          <button className='add-btn' type='submit'>
            添加
          </button>
        </form>
      </div>
    )
  }
}

export default connect(
  undefined,
  (dispatch: Dispatch) => ({
    onAdd (text: string) {
      dispatch(addTodo(text))
    },
  }),
)(AddTodo)
