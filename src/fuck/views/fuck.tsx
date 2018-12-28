import React from 'react'
import { connect } from 'react-redux'
import { State } from '../../types'
import { bindActionCreators } from 'redux'
import { fuck } from '../actions'

export default connect(
  ({ fuck }: State) => ({
    fuck,
  }),
  dispatch => bindActionCreators({ onFuck: fuck }, dispatch),
)(function Fuck ({ fuck, onFuck }: { fuck: number, onFuck (): void }) {
  let ref = React.createRef<HTMLButtonElement>()
  setTimeout(() => {
    console.log(ref)
  }, 1000)
  return (
    <button ref={ref} onClick={onFuck}>Fuck: {fuck}</button>
  )
})
