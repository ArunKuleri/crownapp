import { strictEqual } from "assert"

const INITIAL_STATE={
    sections: [{
        title:'HATS',
        imageUrl:'https://i.ibb.co/cvpntL1/hats.png',
        id:1,
        linkUrl:'shop/hats'
                },
                {
                    title:'JACKETS',
        imageUrl:'https://i.ibb.co/px2tCc3/jackets.png',
        id:2,
        linkUrl:'shop/jackets'
                },
                {
                    title:'sneakers',
        imageUrl:'https://i.ibb.co/0jqHpnp/sneakers.png',
        id:3,
        linkUrl:'shop/sneakers'
                },
                {
            title:'womens',
            imageUrl:'https://i.ibb.co/GCCdy8t/womens.png',
            id:4,
            linkUrl:'shop/womens'
                },
                {
                    title:'mens',
                    imageUrl:'https://i.ibb.co/R70vBrQ/mens.png',
                    id:5,
                    linkUrl:'shop/mens'    
                }
            ]
}

const directoryReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type)
    {
        default:
            return state;
    }
}


export default directoryReducer;