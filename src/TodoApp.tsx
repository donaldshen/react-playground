import React from 'react'
import { view as Todos } from './todos'
import { view as Filter } from './filter'
import { view as Fuck } from './fuck'

export default function TodoApp () {
  return (
    <div>
      <Todos />
      <Filter />
      <Fuck />
    </div>
  )
}
