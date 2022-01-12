import React from "react";

interface Props {
    gender: string;
    className?: string;
}

const Gender = ({ className, gender }: Props) => (
    <p className={className}>{gender}</p>
)

export default Gender;