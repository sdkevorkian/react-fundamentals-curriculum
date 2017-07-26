function getDate(dt){
    var d = new Date(dt*1000);
    return d.toDateString();
}

module.exports = {
    getDate: getDate
};
