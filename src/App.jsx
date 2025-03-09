import { useState } from 'react'
import './App.css'

const initialHtmlContent = `
<h1>Hello World</h1>
<p>Start typing your HTML here</p>
<a href="about:blank" target="_blank">link</a>
`

function App() {
  const [activeTab, setActiveTab] = useState('html')
  const [htmlContent, setHtmlContent] = useState(initialHtmlContent)

  const handleTabChange = (tab) => {
    setActiveTab(tab)
  }

  const handleHtmlChange = (e) => {
    setHtmlContent(e.target.value)
  }

  // Basic dark theme styling
  const darkThemeCSS = `
    <style>
      body {
        background-color: #1e1e1e;
        color: #e0e0e0;
      }
    </style>
  `;

  return (
    <div className="app-container">
      <div className="tabs">
        <button
          className={`tab ${activeTab === 'html' ? 'active' : ''}`}
          onClick={() => handleTabChange('html')}
        >
          HTML
        </button>
        <button
          className={`tab ${activeTab === 'preview' ? 'active' : ''}`}
          onClick={() => handleTabChange('preview')}
        >
          Preview
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'html' && (
          <div className="html-editor">
            <textarea
              value={htmlContent}
              onChange={handleHtmlChange}
              placeholder="Enter your HTML here"
              rows="20"
            />
          </div>
        )}

        {activeTab === 'preview' && (
          <div className="preview-container">
            <iframe
              title="HTML Preview"
              srcDoc={darkThemeCSS + htmlContent}
              sandbox="allow-scripts"
              width="100%"
              height="500px"
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default App
