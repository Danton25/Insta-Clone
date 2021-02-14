if(process.env.NODE_ENV === 'production'){
    modeule.export = require('./prod')
}
else{
    modeule.export = require('./dev')
}