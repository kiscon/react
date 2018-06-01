import React from 'react';
import fetch from '../../server/fetch'

import '../../assets/css/store/store.css'

export default class StoreIndex extends React.Component {
    //初始化
    constructor() {
        super();
        this.state = {
            data:{}
        }
    }

    //第一次渲染结束
    componentDidMount() {
        console.log(123);
        // this.getData('/api/productSve/getProducts')
        fetch.getFetch('/api/productSve/getProducts')
            .then(data => {
                console.log(data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    getData(url) {
        this.getFetch(url)
			.then(data => {
				console.log(data)
			})
			.catch(err => {
				console.log(err)
			})
	}

    getFetch(url) {
        return fetch(url).then(res => {
            if (res.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' + res.status)
                return
            }
            console.log(res)
            return res.json()
        })
    }

	render() {
		return (
			<div className="shop">
				<div className="shop-info">
					<ul>
						<li>
							<div>我的店铺</div>
							<i className="iconfont icon-arrow-right"></i>
						</li>
						<li>
							<div>店铺详情</div>
							<i className="iconfont icon-arrow-right"></i>
						</li>
						<li>
							<div>店铺商品</div>
							<i className="iconfont icon-arrow-right"></i>
						</li>
					</ul>
				</div>
			</div>
		);
	};
}
