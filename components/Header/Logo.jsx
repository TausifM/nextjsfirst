import Link from 'next/link';

const Logo = () => {
    return (
        <Link href="/" className="d-flex">
            <div className="logo-container ms-2">
                <div className="heart"></div>
            </div>
            <svg
                className="text"
                width="5cm"
                height="1.2cm"
                viewBox="140 60 120 120"
            >
                <text
                    fill="none"
                    stroke="#fff"
                    transform="translate(3 102)"
                    strokeWidth="3"
                    fontSize="50"
                    fontWeight="800"
                    letterSpacing="0.1em"
                    className="is-active"
                >
                    <tspan>LOVE LACE</tspan>
                    <tspan x="0" y="50" className="is-active">
                        INNOVATIONS
                    </tspan>
                </text>
            </svg>
        </Link>
    )
}

export default Logo