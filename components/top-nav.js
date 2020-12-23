import React from 'react'

const TopNav = () => {
  return (
    <>
      <div className="containernav">
        <div className="container1">
          <div className="container2">
            <a href="/">
            <img src="/images/volkl-logo.webp" className="thqImage image" />
            </a>
          </div>
          <div className="container3">
            <div className="container4">
              <a
                href="/products/skis"
                rel="noreferrer noopener"
                className="thqLink text"
              >
                Skis
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thqLink text1"
              >
                Link
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thqLink text2"
              >
                Link
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thqLink text3"
              >
                Link
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thqLink text4"
              >
                Link
              </a>
            </div>
            <div className="container5">
              <input type="text" className="thqTextInput" />
              <button className="thqButton button">Button</button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .containernav {
            width: 100%;
            height: 100px;
            display: flex;
            overflow: auto;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .container1 {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .container2 {
            display: flex;
            position: static;
            flex-wrap: nowrap;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .image {
            width: 163px;
            margin: 15px;
            align-self: center;
            object-fit: cover;
          }
          .container3 {
            width: 870px;
            height: 100px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .container4 {
            
            height: 100px;
            display: flex;
            padding: 10px;
            flex-wrap: wrap;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .text {
            padding: 15px;
          }
          .text1 {
            padding: 15px;
          }
          .text2 {
            padding: 15px;
          }
          .text3 {
            padding: 15px;
          }
          .text4 {
            padding: 15px;
          }
          .container5 {
            width: 262px;
            height: 100px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .button {
            margin: 5px;
            padding: 5px;
            border-color: #ffeb3b;
            background-color: #ffeb3b;
          }
        `}
      </style>
    </>
  )
}

export default TopNav
