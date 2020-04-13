import React, {useState} from "react";
import classes from './ProfileInfo.module.css'
import {Preloader} from "../../Common/Preloader/Preloader";
import UserPhoto from '../../../etc/img/user.png';
import {ProfileStatusWithHooks} from './ProfileStatusWithHooks'
import ProfileDataForm from '../../Dialogs/Forms/ProfileDataForm/ProfileDataForm'
import {InputUpload} from './InputUpload/InputUpload'

const Contact = ({contactTitle, contactValue}) => {
return <a className={classes.linkContact} href={contactValue}>{contactTitle}</a> 
}

export const ProfileInfo = ({profile, saveProfile,  ...props}) => {    
    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return  <Preloader/>
    }

const changeProfile= (data) => {
            saveProfile(data).then(() => {setEditMode(false) })
    }

    return <div className={classes.profileInfoContainer}>
        <img className={classes.photoContainer} src={profile.photos.large || UserPhoto } alt=""/>
        { props.isOwner && <InputUpload savePhoto={props.savePhoto} /> }
        {editMode  ? <ProfileDataForm contacts={profile.contacts} initialValues={profile} onSubmit={changeProfile}/> : <ProfileData profile={profile} goToEditMode={()=>setEditMode(true)} isOwner= {props.isOwner}/>}
        <div >
            <ProfileStatusWithHooks status={props.status} uploadNewStatus={props.uploadNewStatus} userId={props.userId} />
        </div>
    </div>
    
} ;

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return  <div className={classes.allInfoContainer}>
        {isOwner && <button onClick={goToEditMode} className={classes.buttonEdit}>Edit profile</button> }
        <p className={classes.fullName}>{profile.fullName}</p>
        <div  className={classes.containerInforms}><span className={classes.spanInfoSections} >Info about: </span><span>{profile.aboutMe}</span></div>
        <div className={classes.containerContact}>
            {Object.keys(profile.contacts).map(key=> {
                if(!profile.contacts[key]){
                    return
                }
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                
            })}
        </div>
        <div className={classes.containerInforms}>
            <span className={classes.spanInfoSections} >Job status:</span> {profile.lookingForAJob
            ? <span>Looking for job</span>
            : <span>Work in the company</span>}
        </div>
        <div  className={classes.containerInforms}>
            <span className={classes.spanInfoSections}>Work skills:</span> <span>{profile.lookingForAJobDescription}</span>
        </div>
    </div>

}

