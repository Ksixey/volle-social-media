import React, {useState, useEffect} from "react";
import classes from './ProfileInfo.module.css'

export const ProfileStatusWithHooks = ({ status, uploadNewStatus, userId}) => {

            let [editMode, setEditMode] = useState(false);
            let [statusHook, setStatus] = useState(status);

            useEffect(() => {
                setStatus(status)
            },[status])

            const activateMode = () => {
                setEditMode(true)
            }

            const diactivateMode = () => {
                setEditMode(false);
                uploadNewStatus(statusHook)
            }

            const onStatusChange = (e) => {
                setStatus(e.target.value)
            }

            return <div className={classes.statusContainer}>
                {!editMode &&
                    <span className={classes.spanStatus} onDoubleClick= {!userId && activateMode} >
                    {status || 'У вас нет статуса'}
                    </span> }
                {editMode &&
                        <span>
                    <input className={classes.inputStatus}
                        onChange={onStatusChange}
                        value={statusHook}
                        onBlur={diactivateMode}
                        autoFocus={true}
                        type="text"/>
                    </span>
                }

            </div>
    };

