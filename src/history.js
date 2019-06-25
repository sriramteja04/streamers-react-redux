/* 
Warning: Please use `require("history").createBrowserHistory` 
instead of `require("history/createBrowserHistory")`. 
Support for the latter will be removed in the next major release.

To fix, our history.js file should instead look like this:

import { createBrowserHistory } from 'history'; 
export default createBrowserHistory();
Thanks to Torleif B. for finding this bug and providing the fix!
*/

import { createBrowserHistory } from 'history';
export default createBrowserHistory();
