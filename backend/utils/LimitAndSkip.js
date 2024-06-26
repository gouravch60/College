
exports.limitAndSkip=(query,limit,skip=0)=>{
    let gallery = query.limit(limit);
    return {gallery}
}