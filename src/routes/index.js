import express from "express"
import markers from "./markersRoutes.js"

const routes = (app) => {
    app.route('/').get((req, res ) => {
        res.status(200).send({message: "markers api :)"})
    })

    app.use(
        express.json(),
        markers,
    )
}

export default routes


