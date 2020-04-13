import * as axios from "axios";

//создаем инстанс класса, чтобы мы моогли подключать к разным апи и настроить испоользование этих апи
const instance = axios.create({
    withCredentials:true,
    baseURL: "https://social-network.samuraijs.com/api/1.0",
    headers: {
        "API-KEY": "9c158c0d-00d9-49b9-86ad-74cfbae13a5e"
    }
});

export const userAPI = {
    onPageChange(pageNumber,pageSize) {
        return instance.get(`/users?page=${pageNumber}&count=${pageSize}`)
            .then(response => response.data)
    },

    getUsers(currentPage,pageSize) {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    followUser(userId){
        return instance.post(`/follow/${userId}`).then(response => response.data)
    },

    unfollowUser(userId){
        return instance.delete(`/follow/${userId}`).then(response => response.data)
    },

    goToProfileFromId(userId){
        console.warn('Old methosd. Use profileAPI Object');
        return profileAPI.goToProfileFromId(userId);
    }
};

export const authAPI = {
    me(){
        return instance.get('/auth/me').then(response => response.data)
    },
    login(email,password,rememberMe = false,captcha){
        return instance.post('/auth/login', {email,password,rememberMe,captcha}).then(response => response.data)
    },
    logout(){
        return instance.delete('/auth/login').then(response => response.data)
    }
};

export const securityAPI = {
    getCaptchaURL(){
        return instance.get(`/security/get-captcha-url`).then(response => response.data)
    }
}

export const profileAPI = {
    goToProfileFromId(userId){
        return instance.get(`/profile/${userId}`).then(response => response.data)
    },
    getStatus(userId){
        return instance.get(`/profile/status/${userId}`).then(response => response.data)
    },
    setNewStatus(status){
        return instance.put(`/profile/status`, {status:status}).then(response => response.data)
    },
    savePhoto(photoFile){
        const formData = new FormData();
        formData.append("image", photoFile)
        return instance.put(`/profile/photo`, formData, {
            headers: {'Content-Type': 'multipart/form-data'}
        }).then(response=> response.data)
    },
    saveProfile(infoProfile){
        return instance.put('/profile', infoProfile).then(response => response.data)
    }
};
