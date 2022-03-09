import React from 'react';
import styles from './App.module.scss';
import {Gallery} from "./components/Gallery";

function App() {
  return (
    <div className={styles.App}>
        <h1 className={styles.heading}>
            Unsplash Wallpaper Downloader
        </h1>
        <Gallery />
    </div>
  );
}

export default App;
