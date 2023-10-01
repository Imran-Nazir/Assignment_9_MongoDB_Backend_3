exports.create = async (req, res)=>{
    res.status(200).json({status:"success", data:"From subAdminController > create"});
}
exports.read = async (req, res)=>{
    res.status(200).json({status:"success", data:"From subAdminController > read"});
}
exports.delete = async (req, res)=>{
    res.status(200).json({status:"success", data:"From subAdminController > delete"});
}
exports.update = async (req, res)=>{
    res.status(200).json({status:"success", data:"From subAdminController > update"});
}