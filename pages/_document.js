import Document, { Head, Main, NextScript } from 'next/document'
import React from 'react'

import flush from 'styled-jsx/server'

import { basicBodyStyle } from '../config/constants'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }

  render () {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="stylesheet"
            href="https://unpkg.com/tachyons@4.12.0/css/tachyons.min.css"
          />
        </Head>
        <body className={basicBodyStyle}>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
