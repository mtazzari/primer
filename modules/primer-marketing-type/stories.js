import React from 'react'
import { storiesOf } from '@storybook/react'
import storiesFromMarkdown from '../../tools/stories-from-markdown'

const stories = storiesOf('Marketing type', module)

storiesFromMarkdown(require.context('.', true, /\.md$/))
  .forEach(({title, story}) => {
    stories.add(title, story)
  })
