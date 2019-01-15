import React from 'react';
import PropTypes from 'prop-types';
import './Portfolio.css';
import { v4 } from 'uuid';

const Portfolio = ({href="", subTitle="subTitle", portfolioList=[], t=str=>str}) => {
	return (
		<div className="portfolioPage" id={href}>
			<h1 className="portfolioTitle">
				{t(subTitle)}
			</h1>
			<div className="portfolioContainer">
				{portfolioList.map(
					item => {
						let key = v4()
						return (
								<PortfolioItem {...{...item, key, t}}/>
							)

					}
				)}
			</div>
		</div>
	)
}
Portfolio.propTypes = {
	href: PropTypes.string,
	subTitle: PropTypes.string,
	portfolioList: PropTypes.array,
	t: PropTypes.func,
}

const PortfolioItem = ({classNamePI="", alt="", stackTehn=[], t=str=>str}) => {
	return (
		<figure className="portfolioItemContainer">
			<div className={"portfolioItemImage " + classNamePI}>
			</div>
			<figcaption className="portfolioItemFigcaption">
				<h3 className="portfolioFigcaptionTitle">
					{t(alt)}
				</h3>
				<p	className="portfolioItemStackTehn">
					{ (stackTehn.length === 0) ?
						"" :
						stackTehn.reduce((sum, current, i, arr) =>
							sum += (" / " + current)
						)
					}
				</p>
			</figcaption>
		</figure>
	)
}
PortfolioItem.propTypes = {
	classNamePI: PropTypes.string,
	alt: PropTypes.string,
	stackTehn: PropTypes.array,
	t: PropTypes.func,
}

export default Portfolio