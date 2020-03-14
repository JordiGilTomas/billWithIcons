import url from 'url';
import path from 'path';

const dirname = path.resolve(path.dirname(url.fileURLToPath(import.meta.url)));

export default dirname;