'use strict';

module.exports = function(Admin) {

    Admin.remoteMethod(
        'getNameRulrul',
        {
            description: 'get name like -> Rulrul',
            accepts: [
                { arg: 'username', type: 'string'}
            ],
            returns:{
                arg: 'res', type:'object', root: true
            },
            http: { path: '/getNameRulrul', verb: 'get' }
        }
    );

    Admin.getNameRulrul = function(username, callback){
        new Promise(function(resolve, reject){
            var filter = {
                where: {
                    username : {
                        like : username
                    }
                }
            }
            Admin.find(filter, function(err, result){
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

    Admin.remoteMethod(
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

    Admin.getId = function(id, callback){
        new Promise(function(resolve, reject){
            
            Admin.findById(id, function(err, result){
                if(err) reject (err)
                if(result === null){
                    err = new Error ("Id Tidak Dapat Ditemukan")
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
