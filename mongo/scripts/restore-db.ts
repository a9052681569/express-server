import { exec } from 'child_process';
import { TESTDB_URL } from '../config/url';
import { BACKUP_OPTIONS } from '../config/options';

const cmd = `mongorestore --uri="${TESTDB_URL}" --dir="${BACKUP_OPTIONS.backupPath}"`

exec(cmd, (err, stdout, stderr) => {
	console.log(err, stdout, stderr);
})