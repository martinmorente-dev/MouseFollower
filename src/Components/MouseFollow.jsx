export const MouseFollow = ({x,y}) => {

    return (
        <main>
            <div style={{
            position: 'absolute',
            backgroundColor: '#09f',
            borderRadius: '50%',
            opacity: '0.8',
            pointerEvents: 'none',
            left: -20,
            top: -20,
            width: 40,
            height: 40,
            transform: `translate(${x}px,${y}px)`
            }} />
        </main>
    )
}