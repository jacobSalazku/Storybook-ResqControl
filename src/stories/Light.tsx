type Props = {
    variant?: 'Green' | 'Yellow' | 'Red'
}

const Button = ({ variant = 'Green' }: Props) => {
    return (
        <div
            style={{
                padding: 20,
                background: variant,
                borderRadius: '50%',
                width: 20,
                height: 20,
            }}
        ></div>
    )
}

export default Button
