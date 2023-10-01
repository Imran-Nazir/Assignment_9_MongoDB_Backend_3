exports.create = async (req, res)=>{
    res.status(200).json({status:"success", data:"From adminController > create"});
}
exports.read = async (req, res)=>{
    res.status(200).json({status:"success", data:"From adminController > read"});
}
exports.delete = async (req, res)=>{
    res.status(200).json({status:"success", data:"From adminController > delete"});
}
exports.update = async (req, res)=>{
    res.status(200).json({status:"success", data:"From adminController > update"});
}