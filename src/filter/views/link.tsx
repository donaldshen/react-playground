import React from 'react'
import { connect } from 'react-redux'
import { setFilter } from '../actions'
import { Filter, State } from '../../types'

export default connect(
  ({ filter }: State, ownProps: { filter: Filter }) => ({
    active: filter === ownProps.filter,
  }),
  (dispatch, ownProps) => ({
    onClick: (event: React.MouseEvent) => {
      event.preventDefault()
      dispatch(setFilter(ownProps.filter))
    },
  }),
)(function Link ({ active, children, onClick }: {
  active: boolean
  children: React.ReactNode
  onClick (event: React.MouseEvent): void
}) {
  if (active) {
    return <b className='filter selected'>{children}</b>
  } else {
    return (
      <a href='#' className='filter not-selected' onClick={onClick}>
        {children}
      </a>
    )
  }
})
