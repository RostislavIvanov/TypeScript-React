import React, {FC} from 'react'


export enum CardVariant {
    outlined = 'outlined',
    primary = 'primary'
}

interface CardProps {
    height?: string;
    width?: string;
    children: React.ReactNode;
    variant: CardVariant;
    onClick: () => void;
}

const Card: FC<CardProps> =
    ({
         height,
         width,
         children,
         variant,
         onClick
     }) => {
        return (
            <div>
                <div style={{
                    border: variant === CardVariant.outlined ? '1px solid grey' : 'none',
                    height: height,
                    width: width,
                    background: variant === CardVariant.primary ? 'yellow' : ''
                }}
                onClick={onClick}>
                    {children}
                </div>
            </div>
        )
    }

export default Card