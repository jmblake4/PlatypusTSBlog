import {async, register} from 'platypus';
import BaseService from '../base/base.svc';
import BlogPostsRepository from '../../repositories/blogposts/blogposts.repo';

export default class BlogService extends BaseService {

    constructor(private blogPostsRepository: BlogPostsRepository) {
        super();
    }

    getPosts(): async.IThenable<Array<models.IPost>> {
        return this.http.json<models.IResponse>({
            method: 'GET',
            url: this.host,
			headers: this.headers
        }).then((success) => {
			var res: any = success;
            return <Array<models.IPost>>res.response.results;
        });
    }
	
	newPost(blogPost: any): any {
        return this.http.json<models.IResponse>({
            method: 'POST',
            url: this.host,
			headers: this.headers,
			data: blogPost
		});
        // }).then((success) => {
		// 	var res: any = success;
        //     return res.response.objectId;
        // });
    }

    // placeOrder(order: models.IOrder): async.IThenable<boolean> {
    //     order.userid = this.userRepository.userid;
    //     return this.http.json<models.IResponse>({
    //         method: 'POST',
    //         url: this.host + '/orders/create',
    //         data: order,
	// 		headers: this.headers
    //     }).then(
    //         (success) => {
    //             return true;
    //         },
    //         (error: async.AjaxError): any => {
    //             throw error.response.message;
    //         }
    //     );
    // }
}

register.injectable('blog-svc', BlogService);
