import {async, Utils} from 'platypus';

export default class BaseService {
	protected static _inject: any = {
        http: async.Http,
        Promise: async.IPromise,
        utils: Utils
    };

	protected http: async.Http;
	protected Promise: async.IPromise;
	protected utils: Utils;

    host: string = 'https://api.parse.com/1/classes/blogPost/'
	headers: any = {
		"X-Parse-Application-Id": "l0snkcZ4pCRrEoTyJ3ip8VN3cO190TW08a78Vpxq",
		"X-Parse-REST-API-Key": "gWWPdxPQm3OfSdwm1ZHLbVtNIv2BWWQXUztGkw5H",
		"Content-Type": "application/json"
	};

}
