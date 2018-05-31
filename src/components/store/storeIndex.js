import React from 'react';

import '../../assets/css/store/store.css'

export default class StoreIndex extends React.Component {
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
