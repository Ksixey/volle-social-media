import {ProfileReducer , deletePost} from './ProfileReducer'

    const state = {
    post : [{id:1,message:'How are you?'},
    {id:2,message:'How are you?'},
    {id:3,message:'How are you?'}]
    };

    it('after deleting lenght of meess should be decremented ', ()=> {
        //1.test data
        let action = deletePost(1);
        
            //2. action
        let newState = ProfileReducer(state, action)
        //3. expectation
        expect(newState.post.length).toBe(2);
    })

    it('after deleting all is be ok ', ()=> {
        //1.test data
        let action = deletePost(10);
        
            //2. action
        let newState = ProfileReducer(state, action)
        //3. expectation
        expect(newState.post.length).toBe(3);
    })
