const fs = require('fs');

export const MONGO_OPTIONS = {
    useNewUrlParser: true,
    replSet: {
        sslCA: fs.readFileSync(
        '/usr/local/share/ca-certificates/Yandex/YandexInternalRootCA.crt')
    }
}