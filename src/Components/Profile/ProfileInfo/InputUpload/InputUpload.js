import React from "react";
import classes from './InputUpload.module.css'

export const InputUpload = ({savePhoto}) => {
    const onMainPhotoSelected = (e) => {
        if(e.target.files.length){
            savePhoto(e.target.files[0])
        };
    }

    return <div className={classes.fileUpload}>
        <input type={"file"} className={classes.hide} id="upload" onChange={onMainPhotoSelected}/>
        <label htmlFor="upload">Upload new photo</label>
    </div>
}