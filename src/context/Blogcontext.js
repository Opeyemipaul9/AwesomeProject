 import createDataContext from "./createDataContext";

    
const blogReducer =(state, action)=>{
    // Define the reducer
    switch (action.type){
        case 'delete_blogpost':
            return state.filter((blogpost)=>blogpost.id !== action.payload);

        case 'add_blogpost':
            return [...state,
                 {title: action.payload.title, 
                 id: Math.floor(Math.random()* 100),
                 content: action.payload.content
                }
            ];
        default:
            return state;   
    }
};

const addBlogPost =(dispatch)=>{
    return (title, content) => {
        dispatch({type:'add_blogpost', payload:{title, content}}) 
    }
}

const deleteBlogPost =(dispatch)=>{
    return (id)=>{
        dispatch({type:'delete_blogpost', payload:id})
    }
}



export const { Context , Provider } = createDataContext(blogReducer ,
    { addBlogPost, deleteBlogPost },

    []
) ; 