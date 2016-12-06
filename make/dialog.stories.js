import React, { Component } from 'react'
import {  MarkdownPreview  } from 'react-marked-markdown'
import { storiesOf, action } from '@now-design/manager'
import Preview from '@now-design/sandbox/preview'
import ReadMe from '../README.md'

storiesOf('Base 基础组件', module)
  .add('Dialog', () => (
    <div>
        <MarkdownPreview className="markdown-body"  value={ReadMe}/>
        代码演示
        <div style={{
          display: 'flex',
          'flex-glow': '10px'
        }}>
            <Preview name="dialog1"/>
            <Preview name="dialog2"/>
            <Preview name="dialog3"/>
        </div>
    </div>
))
