'use strict';

module.exports = function(commodity) {
    commodity.remoteMethod(
        'getNameBarang',
        {
            description: 'get name like',
            accepts: [
                { arg: 'namabarang', type: 'string'}
            ],
            returns:{
                arg: 'res', type:'object', root: true
            },
            http: { path: '/getNameBarang', verb: 'get' }
        }
    );

    commodity.getNameBarang = function(namabarang, callback){
        new Promise(function(resolve, reject){
            var filter = {
                where: {
                    namabarang : {
                        like : namabarang
                    }
                }
            }
            commodity.find(filter, function(err, result){
                if(err) reject (err)
                if(result === null){
                    err = new Error ("Nama Tidak Dapat Ditemukan")
                    err.statusCode = 404
                    reject (err)
                }
                resolve(result)
            })
        }).then(function(res){
            if (!res) callback (err)
            return callback (null, res)
        }).catch(function(err){
            callback(err);
        });
    }

    commodity.remoteMethod(
        'getCategory',
        {
            description: 'get category',
            accepts: [
                { arg: 'category', type: 'string'}
            ],
            returns:{
                arg: 'res', type:'object', root: true
            },
            http: { path: '/getCategory', verb: 'get' }
        }
    );

    commodity.getCategory = function(category, callback){
        new Promise(function(resolve, reject){
            var filter = {
                where: {
                    category : {
                        like : category
                    }
                }
            }
            commodity.find(filter, function(err, result){
                if(err) reject (err)
                if(result === null){
                    err = new Error ("Category Tidak Dapat Ditemukan")
                    err.statusCode = 404
                    reject (err)
                }
                resolve(result)
            })
        }).then(function(res){
            if (!res) callback (err)
            return callback (null, res)
        }).catch(function(err){
            callback(err);
        });
    }

    commodity.remoteMethod(
        'getId',
        {
            description: 'get id',
            accepts: [
                { arg: 'id', type: 'string'}
            ],
            returns:{
                arg: 'res', type:'object', root: true
            },
            http: { path: '/getId', verb: 'get' }
        }
    );

    commodity.getId = function(id, callback){
        new Promise(function(resolve, reject){
            
            commodity.findById(id, function(err, result){
                if(err) reject (err)
                if(result === null){
                    err = new Error ( "Id Tidak Dapat Ditemukan")
                    err.statusCode = 404
                    reject (err)
                }
                resolve(result)
            })
        }).then(function(res){
            if (!res) callback (err)
            return callback (null, res)
        }).catch(function(err){
            callback(err);
        });
    }

};

