import React from 'react';
import { connect } from 'react-redux'
import { addWord, fetchArticle } from '../../actions/index'

let Articlelist = ({ dispatch }) => {
    let input;

    return(
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                if(!input.value.trim()) {
                    return
                }
                else {
                    console.log("tpe");
                    console.log(input.value);
                    dispatch(addWord(input.value))
                    dispatch(fetchArticle('articlelist')).then(() => {
                        console.log("fetch 完 Article囉")
                    })
                }
                input.value = ''
            }}
            >
            <h1> test </h1>
            <input ref={node => {
                input = node
            }}
            />
            <button type="submit">
                Add word
            </button>
            </form>
        </div>
    );    



}
Articlelist = connect()(Articlelist)



export default Articlelist;