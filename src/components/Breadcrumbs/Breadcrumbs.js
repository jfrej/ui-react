import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import StyleObjectPropType from '../../prop-types/style';
import { proxyDataProps } from '../../utils/data-props';
import './Breadcrumbs.scss';

const SvgArrowRight = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 16" style={{ width: '8px', height: '8px' }}>
        <path d="M0 0l8 8-8 8z" />
    </svg>
);

const propTypes = {
    ariaLabel: PropTypes.string,
    className: PropTypes.string,
    separator: PropTypes.element,
    showOnlyCrumbs: PropTypes.bool,
    style: StyleObjectPropType,
    trail: PropTypes.arrayOf(PropTypes.element).isRequired,
};

const defaultProps = {
    ariaLabel: 'Breadcrumb',
    className: null,
    separator: <SvgArrowRight />,
    showOnlyCrumbs: false,
    style: null,
};

class Breadcrumbs extends Component {
    insertSeparator = (trail, separator) => {
        if (Array.isArray(trail) === false) {
            return trail;
        }
        let keyIndex = 0;
        const crumbs = trail
            .map((crumb) => {
                keyIndex += 1;
                return (<span key={keyIndex} className="uir-breadcrumbs-part">{crumb}</span>);
            })
            .reduce((newTrail, crumb) => {
                keyIndex += 1;
                newTrail.push(crumb);
                newTrail.push(<span key={keyIndex} className="uir-breadcrumbs-separator">{separator}</span>);
                return newTrail;
            }, []);
        crumbs.pop();
        return crumbs;
    }

    render = () => {
        const breadcrumbTrail = this.insertSeparator(
            this.props.trail,
            this.props.separator,
        );
        return (
            <div
                className={cx(
                    'uir-breadcrumbs',
                    {
                        'uir-breadcrumbs--large-title': this.props.showOnlyCrumbs === false,
                    },
                    this.props.className,
                )}
                aria-label={this.props.ariaLabel}
                style={this.props.style}
                {...proxyDataProps(this.props)}
            >
                {breadcrumbTrail}
            </div>
        );
    }
}

Breadcrumbs.propTypes = propTypes;
Breadcrumbs.defaultProps = defaultProps;

export default Breadcrumbs;
