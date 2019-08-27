'use strict';


    module.exports = function(Custumer) {
        Custumer.remoteMethod(
            'getNameRulrul',
            {
                description: 'get name like -> Rulrul',
                accepts: [
                    { arg: 'firstname', type: 'string'}
                ],
                returns:{
                    arg: 'res', type:'object', root: true
                },
                http: { path: '/getNameRulrul', verb: 'get' }
            }
        );
    
        Custumer.getNameRulrul = function(firstname, callback){
            new Promise(function(resolve, reject){
                var filter = {
                    where: {
                        firstname : {
                            like : firstname
                        }
                    }
                }
                Custumer.find(filter, function(err, result){
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
    
        Custumer.remoteMethod(
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
    
        Custumer.getId = function(id, callback){
            new Promise(function(resolve, reject){
                
                Custumer.findById(id, function(err, result){
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
