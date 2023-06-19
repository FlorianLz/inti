'use client';

export const Back = () => {
    const handleClick = () => {
        window.history.back();
    }

    return (
        <button onClick={handleClick}>Retour</button>
    )
}