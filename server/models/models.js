const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Parts = sequelize.define('parts', {
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    partNum: {type: DataTypes.STRING},
    partName: {type: DataTypes.STRING},
    qty: {type: DataTypes.INTEGER},
    price: {type: DataTypes.INTEGER}
})

const Users = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type:DataTypes.STRING},
    userName: {type:DataTypes.STRING},
    phone: {type:DataTypes.STRING},
    address: {type:DataTypes.STRING},
    role: {type:DataTypes.STRING, defaultValue: "USER"},

})

module.exports = {
    Parts,
    Users
}