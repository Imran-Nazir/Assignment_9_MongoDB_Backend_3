exports.create = async (req, res)=>{
    res.status(200).json({status:"success", data:"From postController > create"});
}
exports.read = async (req, res)=>{
    res.status(200).json({status:"success", data:"From postController > read"});
}
exports.delete = async (req, res)=>{
    res.status(200).json({status:"success", data:"From postController > delete"});
}
exports.update = async (req, res)=>{
    res.status(200).json({status:"success", data:"From postController > update"});
}