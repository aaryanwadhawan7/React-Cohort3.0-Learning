const style = {
    backgroundColor : "#1f1f1f",
    color : "white",
    width : 600,
    height : 260,
    borderRadius : 10,
    "margin-left" : 0,
    "margin-right" : "auto",
    boxShadow : "2px 2px px #1f1f1f"
}

// children => given a prop as argument to Card Component
export function Card ({children}) {
    return (
        <div style={style}>
        {children}
        </div>
    )
}