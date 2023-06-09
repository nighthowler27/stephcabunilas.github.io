"use client"
import React from 'react'
import styles from './modal.module.css';
import { AiFillGithub } from 'react-icons/ai';
import { GoLinkExternal } from 'react-icons/go';
import Contributor from '../contributors/capstonecontributor';



const Modal = ({ open, onClose }) => {
    return (
      <>
        {open && (
          <div className={styles.modalOverlay}>
            <div className={styles.modal}>
              <div className={styles.modalBanner}>
                <p>Banner Image</p>
              </div>

              <div className={styles.modalContent}>
                <div className={styles.modalLeft}>
                  <h1>Project: School Website</h1>
                  <h2>Group Name: Team M.E.R.S.</h2>
                  <h2>Date Started: DD/MM/YYYY</h2>
                  <h2>Date Completed: DD/MM/YYYY</h2>
                  <h2>Contributors/Members:</h2>
                  
                  <Contributor />
                </div>
                <div className={styles.modalRight}>
                    <div className="modalRightContent">
                        <div className="RigthTitle">
                            <h2>Description</h2>
                            <p>Lorem</p>
                        </div>
                    </div>
                </div>
              </div>
  
              <div className={styles.modalBtn}>
                <button type="button" className={styles.closeBtn} onClick={onClose}>
                  Close
                </button>
  
                <div className={styles.webLinks}>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
                    <p>Github Repository</p>
                    <AiFillGithub />
                  </a>
  
                  <a href="https://example.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
                    <p>Live Link</p>
                    <GoLinkExternal />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  };

export default Modal;
