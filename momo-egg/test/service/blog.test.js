'use strict';


const mm = require('egg-mock');
const { app, mock, assert } = require('egg-mock/bootstrap');
const { generateArticleAll } = require('../../util/mock');

describe('test/service/blog.test.js', () => {

    describe('article()', () => {
        let ctx;

        beforeEach(() => {
            ctx = app.mockContext()
        })

        it('should get article', async () => {
            assert(generateArticleAll().length == 1)
            assert( typeof(generateArticleAll()) === "object", 'articlelist is an object')
            console.log("ctx");
            console.log(ctx.model.Business);
        })

        

    }) 
    
})