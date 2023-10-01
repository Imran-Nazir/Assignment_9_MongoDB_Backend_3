exports.create = async (req, res)=>{
    res.status(200).json({status:"success", data:"From userController > create"});
}
exports.read = async (req, res)=>{
    res.status(200).json({status:"success", data:"From userController > read"});
}
exports.delete = async (req, res)=>{
    res.status(200).json({status:"success", data:"From userController > delete"});
}
exports.update = async (req, res)=>{
    res.status(200).json({status:"success", data:"From userController > update"});
}