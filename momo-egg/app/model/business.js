'use strict'

const pagination = require('sequelize-cursor-pagination')

module.exports = app => {
    const { INTEGER, STRING, DATE } = app.Sequelize

    const Business = app.model.define('business', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        name: { type: STRING },
        address: { type: STRING },
        phone: { type: STRING },
        website: { type: STRING },
        created_at: { type: DATE },
        updated_at: { type: DATE }
    }) 


    Business.prototype.toJSON = function () {
        const values = Object.assign({}, this.get())
        values.id = app.hashids.encode(values.id)
        return values
    }

    withPagination({ methodName: 'paginate', primaryKeyField: 'id' })(Business)
    
    return Business

}