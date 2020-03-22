const pool = require('./');

let accountdb = {};

accountdb.all = (uid) => {
    return pool
        .query("CALL sp_getAccounts (?)", [uid])
        .then(rows => {
            return rows[0];
        })
        .catch(err => {
            return { db_error: err };
        });
};

// let ids = [uid, id];
accountdb.one = (ids) => {
    return pool
        .query("CALL sp_getAccount (?, ?)", ids)
        .then(row => {
            return row[0];
        })
        .catch(err => {
            return { db_error: err };
        });
};

// let attr = [uid, name, balance, note];
accountdb.add = (attr) => {
    return pool
        .query("CALL sp_addaccount (?, ?, ?, ?)", attr)
        .then(res => {
            return res;
        })
        .catch(err => {
            return { db_error: err }
        })
}

// let attr = [id, uid, name, note];
accountdb.edit = (attr) => {
    return pool
        .query("CALL sp_editaccount (?, ?, ?, ?)", attr)
        .then(res => {
            return res;
        })
        .catch(err => {
            return { db_error: err };
        });
}

// let attr = [id, uid, sum];
accountdb.debit = (attr) => {
    result = pool
        .query()
        .then()
        .catch(err => {
            return { db_error: err };
        });
}

// let attr = [id, uid, sum];
accountdb.credit = (attr) => {
    result = pool
        .query()
        .then()
        .catch(err => {
            return { db_error: err };
        });
}

module.exports = accountdb;