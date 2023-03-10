import { Sequelize } from "sequelize";

const DB_NAME = process.env.DB_NAME || "warungonline"
const DB_HOST = process.env.DB_HOST || "localhost"
const DB_PORT = process.env.DB_PORT || 3000
const DB_PASSWORD = process.env.DB_PASSWORD || ""
const DB_USER = process.env.DB_USER || "root"

const db = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST
    dialect: "mysql"
})

db.authenticate()
    .then(() => {
        console.log("koneksi database success")
    })
    .catch(() => {
        console.log("koneksi databases gagal")
    })

export default db

