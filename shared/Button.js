import classNames from "classnames";
import PropTypes from "prop-types";
import { forwardRef } from "react";

const Button = forwardRef((props, ref) => {
    const {
        className,
        children,
        text,
        as: Component,
        ...rest
    } = props

    const classes = classNames (
        {[className]: className}
    )

    return (
        <Component ref={ref} {...rest} className={classes}>
            <>
            {text || children}
            </>
        </Component>
    )
})

Button.defaultProps = {
    text: '',
    as: 'button'
}

Button.propTypes = {
    text: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.number
    ]),
    className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
    ]),
    children: PropTypes.node,
    onClick: PropTypes.func
}

export default Button