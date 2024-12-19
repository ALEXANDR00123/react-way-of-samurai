import {renderEntireTree} from '../rerender'


let state = {

    profilePage: {
        postsData: [
            {id: 1, message: 'First comment motherfuckers', likeCount: 12},
            {id: 2, message: 'Suck my dick first of all', likeCount: 123},
            {id: 3, message: 'Yeah its really works', likeCount: 1234},
        ]
    },

    messagesPage: {
        dialogsData: [
            {id: 1, name: 'Dima'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Victor'},
            {id: 6, name: 'Valera'},
        ],
        messagesData: [
            {id: 1, message: 'Yo catobro'},
            {id: 2, message: 'Yo fishkiller! Hows it going'},
            {id: 3, message: 'Bro i realy doesnt want talk about it'},
            {id: 4, message: 'Why mouse menace'},
            {id: 5, message: 'mine gave birth to 7 kittens yesterday'},
        ],
    }
}
export default state

export let addPost = (postMessage) => {
    let newPost = {id: 4, message: postMessage, likeCount: 0,}
    state.profilePage.postsData.push(newPost);
    renderEntireTree(state);
}

export let sendMessage = (dialogMessage) => {
    let newMessage = {id: 6, message: dialogMessage}
    state.messagesPage.messagesData.push(newMessage)
    renderEntireTree(state)
}

