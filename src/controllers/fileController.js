
// {"name":"download.png","type":"image/png","size":825384}

const fileAnalyse = (req,res) => {
    if(req.files)
    {
        let response = {
            name: req.files.upfile.name,
            type: req.files.upfile.mimetype,
            size: req.files.upfile.size
        }
        return res.json(response);
    }
    else
    {
        return res.send('Please Provide proper File');
    }
    // console.log(req.files);
};

module.exports = {
    fileAnalyse   
};
