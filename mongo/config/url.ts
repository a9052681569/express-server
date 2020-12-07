const util = require('util');

export const MONGO_URL = util.format(
    'mongodb://%s:%s@%s/?replicaSet=%s&authSource=%s&ssl=true',
    'aasereb6',
    'Bioware9',
    [
        'rc1a-hfmuhy6m3vm4g3ve.mdb.yandexcloud.net:27018'
    ].join(','),
    'rs01',
    'ntv-db'
)