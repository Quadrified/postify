/** --------------------------
    API call configurations
 --------------------------**/
import { create } from 'apisauce';

const rootpath = 'https://jsonplaceholder.typicode.com/';

export const api = create({
  baseURL: rootpath,
  headers: { Accept: 'application/json' },
  timeout: 15000,
});
