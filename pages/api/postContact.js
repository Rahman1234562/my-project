export default function (req, res) {
    if(req.method === "POST"){
        res.status(200).json("yes this is the post req")
    }
}