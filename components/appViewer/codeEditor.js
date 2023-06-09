"use client"
import React, { useState } from 'react';
import styles from './codeEditor.module.css';
import Window from '../window/window';

const CodeEditor = () => {
  const [htmlCode, setHtmlCode] = useState('');
  const [cssCode, setCssCode] = useState('');
  const [jsCode, setJsCode] = useState('');
  const [fontSize, setFontSize] = useState(13);

  const handleHtmlCodeChange = (event) => {
    setHtmlCode(event.target.value);
  };

  const handleCssCodeChange = (event) => {
    setCssCode(event.target.value);
  };

  const handleJsCodeChange = (event) => {
    setJsCode(event.target.value);
  };

  const handleFontSizeChange = (event) => {
    setFontSize(event.target.value);
  };

  const previewStyle = {
    fontSize: `${fontSize}px`,
  };

  return (
    <div className={styles.container}>
      <div className={styles.codeEditor}>
        <div>
          <h1 className={styles.header}>Code Editor</h1>
        </div>

        <div className={styles.codeBox}>
          <div className={styles.HTMLcontainer}>
            <h2 className={styles.htmlHeader}>HTML</h2>
            <div className={styles.codeBoxHtml}>
              <div className={styles.editBoxBG}>
                <div className={styles.textBoxEditor}>
                  <div className={styles.lineNumbers}>
                    {htmlCode.split('\n').map((_, index) => (
                      <div key={index}>{index + 1}</div>
                    ))}
                  </div>
                  <textarea
                    value={htmlCode}
                    onChange={handleHtmlCodeChange}
                    rows="10"
                    className={`${styles.htmlTxt} ${styles.noResize}`}
                    onScroll={(e) => {
                      const textarea = e.target;
                      const lineNumbers = textarea.previousElementSibling;
                      lineNumbers.scrollTop = textarea.scrollTop;
                    }}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.CSScontainer}>
            <h2 className={styles.cssHeader}>CSS</h2>
            <div className={styles.codeBoxHtml}>
              <div className={styles.editBoxBG}>
                <div className={styles.textBoxEditor}>
                  <div className={styles.lineNumbers}>
                    {cssCode.split('\n').map((_, index) => (
                      <div key={index}>{index + 1}</div>
                    ))}
                  </div>
                  <textarea
                    value={cssCode}
                    onChange={handleCssCodeChange}
                    rows="10"
                    className={`${styles.cssTxt} ${styles.noResize}`}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.JScontainer}>
            <h2 className={styles.jsHeader}>JavaScript</h2>
            <div className={styles.codeBoxHtml}>
              <div className={styles.editBoxBG}>
                <div className={styles.textBoxEditor}>
                  <div className={styles.lineNumbers}>
                    {jsCode.split('\n').map((_, index) => (
                      <div key={index}>{index + 1}</div>
                    ))}
                  </div>
                  <textarea
                    value={jsCode}
                    onChange={handleJsCodeChange}
                    rows="10"
                    className={`${styles.jsTxt} ${styles.noResize}`}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.editorViewer}>
        <div className={styles.previewContainer}>
          <div className={styles.browserFrame}>
            <div className={styles.browserContent}>
              <iframe
                title="Preview"
                className={styles.previewIframe}
                srcDoc={`<html><head><style>${cssCode}</style></head><body><div style="font-size: ${fontSize}px">${htmlCode}<script>${jsCode}</script></div></body></html>`}
              ></iframe>
            </div>
          </div>
        </div>

        <Window className={styles.browserBG} />
      </div>
    </div>
  );
};

export default CodeEditor;
